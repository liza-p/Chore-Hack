const db = require("../models")

// helper function to generate repetitions for a single chore through the end of the given month (indexed from 0)
function generateReps(chore, year, month, startDate=1) {
  // get days to use
  const selectedDays = JSON.parse(chore.repeated_days);
  // create initial date
  let date = new Date(year, month, startDate);
  date.setUTCHours(8); // set an hour that has correct date with PDT and PST
  // while within the same month
  while (date.getMonth() === month) {
    // if the week day is on the list
    if (selectedDays[date.getDay()]) {
      // add the chore
      db.Repetition.create({
        due_date: date,
        ChoreId: chore.id,
        UserId: chore.UserId,
      });
    }
    // increment the date
    date = new Date(year, month, date.getDate() + 1);
    date.setUTCHours(8);
  }
}

module.exports = {

  findAll(req, res) {
    db.Chore.findAll({
      include: [db.Repetition],
      where: {
        HouseholdId: req.user.HouseholdId,
        active: true,
      }
    })
      .then(data => res.json(
        data.map(row => ({
          ...(row.dataValues),
          repeated_days: JSON.parse(row.dataValues.repeated_days)
        }))
      ))
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  create(req, res) {
    console.log('body', req.body);
    console.log('user', req.user);

    db.Chore.create({
      chore: req.body.chore,
      repeats: req.body.repeats,
      repeated_days: req.body.repeats ? JSON.stringify(req.body.repeated_days) : null,
      HouseholdId: req.user.HouseholdId,
      UserId: req.body.UserId,
    })
      .then(chore => {
        // generate a single repetition for one-time chores
        if (!req.body.repeats) {
          return db.Repetition.create({
            due_date: req.body.dueDate,
            ChoreId: chore.id,
            UserId: chore.UserId,
          });
        } else {
          const today = new Date();
          generateReps(chore, today.getFullYear(), today.getMonth(), today.getDate());
          generateReps(chore, today.getFullYear(), today.getMonth() + 1);
          return;
        }
      })
      .then(() => {
        res.status(200).end();
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  update(req, res) {
    db.Chore.update({
      chore: req.body.chore,
      repeats: req.body.repeats,
      repeated_days: req.body.repeated_days,
      UserId: req.body.UserId,
    }, {
      where: { id: req.query.id }
    })
      .then(() => res.status(200).end())
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  deactivate(req, res) {
    db.Chore.update({
      active: false
    }, {
      where: { id: req.query.id }
    })
      .then(() => {
        res.status(200).end()
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  }, 
  remove(req, res) {
      db.Chore.destroy({
        where: { id: req.query.id }
      })
      .then(() => {
        res.status(200).end()
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
    

  }
}
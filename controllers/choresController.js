const db = require("../models")

module.exports = {

  findAll(req, res) {
    db.Chore.findAll({
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
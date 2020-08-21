const db = require("../models")

module.exports = {

  findAll(req, res) {
    db.Chore.findAll({ where: {
      HouseholdId: req.user.HouseholdId,
      active: true,
    }})
      .then(data => res.json(
        data.map((row) => row.dataValues)
      ))
      .catch(function(err) {
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
      repeated_days: req.body.repeated_days,
      HouseholdId: req.user.HouseholdId,
      UserId: req.body.UserId,
    })
    .then(function(chore) {
      res.status(200).json(chore);
    })
    .catch(function(err) {
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
      where: {id: req.query.id}
    })
      .then(() => res.status(200).end())
      .catch(function(err) {
        console.log(err);
        res.status(500).end();
      });
  },

  remove(req, res) {
    db.Chore.update({
      active: false
    }, {
      where: {id: req.query.id}
    })
      .then(() => res.status(200).end())
      .catch(function(err) {
        console.log(err);
        res.status(500).end();
      });
  }
}
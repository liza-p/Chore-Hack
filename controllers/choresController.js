const db = require("../models")

module.exports = {

    findAll(req, res) {
        db.Chore.findAll()
            .then(data => res.json(
              data.map((row) => row.dataValues)
            ))
            .catch(err => console.log(err))
    },

    create(req, res) {
      db.Chore.create({
        chore: req.body.chore,
        repeats: req.body.repeats,
        repeated_days: req.body.repeated_days,
        HouseholdId: req.body.householdId,
        UserId: req.user.id
      })
      .then(function() {
          res.status(200).json({});
      })
      .catch(function(err) {
          console.error(err);
          res.status(401).json(err);
      });
    },

    update(req, res) {
        db.Chore.update({
          chore: req.body.chore,
          repeats: req.body.repeats,
          repeated_days: req.body.repeated_days,
        }, {
          where: {_id: req.params.id}
        })
            .then(() => res.json({}))
            .catch(err => console.log(err))
    },

    remove(req, res) {
        db.Chore.destroy({
          where: {_id: req.params.id}})
            .then(() => res.json({}))
            .catch(err => console.log(err))
    }


}
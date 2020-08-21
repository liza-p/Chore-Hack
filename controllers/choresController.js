const db = require("../models")

module.exports = {

    findAll(req, res) {
        db.Chore.findAll()
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
      res.status(200).json({});
      return;
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
          where: {id: req.query.id}
        })
            .then(() => res.json({}))
            .catch(function(err) {
              console.log(err);
              res.status(500).end();
            });
    },

    remove(req, res) {
      
        db.Chore.destroy({
          where: {id: req.query.id}})
            .then(() => res.json({}))
            .catch(function(err) {
              console.log(err);
              res.status(500).end();
            });
    }


}
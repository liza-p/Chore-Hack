const db = require("../models")

module.exports = {

    findMembers(req, res) {
      console.log(req.query);
        db.User.findAll({ where: {HouseholdId: req.query.id}})
            .then(data => res.json(
              data.map((row) => row.dataValues.name)
            ))
            .catch(function(err) {
              console.log(err);
              res.status(500).end();
            });
    },

    findOne(req, res) {
        db.Household.findOne({ where: {_id: req.params.id}})
            .then(() => res.json({}))
            .catch(err => console.log(err))
    },
    update(req, res) {
      db.Household.update({
        name: req.body.name,
        invite_code: req.body.invite_code
      }, {
        where: {_id: req.params.id}
      })
          .then(() => res.json({}))
          .catch(err => console.log(err))
  }

}
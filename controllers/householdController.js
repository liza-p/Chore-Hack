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

    getInviteCode(req, res) {
        db.Household.findOne({ where: {id: req.query.id}})
            .then((data) => res.json(data.invite_code))
            .catch(function(err) {
              console.log(err);
              res.status(500).end();
            });
    },
    joinHousehold(req, res) {
      console.log("Invite code",req.query.invite)
      console.log("User ID", req.query.userId);
      db.Household.findOne({where: {invite_code: req.query.invite}})
      .then(function(household){
        if ( ! household){
          console.log("Incorect Invite Code")
          res.status(401).end();
        } 
        return db.User.update({
          HouseholdId: household.id,
        }, {
          where: {id: req.query.userId}
        })
      })
          .then((user) => {res.status(200).end();})
          .catch(function(err) {
            console.log(err);
            res.status(500).end();
          });
  }

}


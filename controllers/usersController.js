const db = require("../models")

module.exports = {
  signup(req, res) {
    db.Household.create({
      name: req.body.name + "'s Household" 
    })
    .then(function(newHousehold){
      return db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        HouseholdId: newHousehold.id
      });
    })
    .then(function() {
      res.redirect(307, "/api/users/login");
    })
    .catch(function(err) {
      console.log(err);
      res.status(401).end();
    });
  },
  login(req, res) {
    // passport.authenticate should be used as middleware before this function
    if (req.user) {
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  },
  logout(req, res) {
    req.logout();
    res.redirect("/");
  },
}
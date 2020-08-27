const db = require("../models")

module.exports = {
  signup(req, res) {
    console.log(req.body)
    db.Household.create({
      name: req.body.name + "'s Household"
    })
      .then(newHousehold => {
        return db.User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          HouseholdId: newHousehold.id,
          color: req.body.color
        });
      })
      .then(() => {
        res.redirect(307, "/api/users/login");
      })
      .catch(err => {
        console.log(err);
        res.status(401).send(err.name);
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
  getUserData(req, res) { // for getting the name of the currently logged in user
    if (req.user) {
      db.User.findOne({ where: { id: req.user.id } })
        .then(user => {
          res.json({
            name: user.name,
            id: user.id
          }); // return the user's name
        })
        .catch(err => {
          console.log(err);
          res.json(""); // the user wasn't found
        });
    } else {
      res.json(""); // no user is logged in
    }
  },

  updateColor(req, res) {
    if (!req.user) {
      return res.status(401).end(); // not logged in
    }

    db.User.update({
      color: req.query.color
    }, {
      where: { id: req.user.id }
    })
      .then(() => {
        res.status(200).end();
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  }
}
const db = require("../models")

module.exports = {

    findAll(req, res) {
        db.Household.findAll()
            .then(data => res.json(
              data.map((row) => row.dataValues)
            ))
            .catch(err => console.log(err))
    },

    findOne(req, res) {
        db.Household.findOne({ where: {_id: req.params.id}})
            .then(() => res.json({}))
            .catch(err => console.log(err))
    },
  //   update(req, res) {
  //     db.Household.update({
  //       name: req.body.name,
  //       invite_code: req.body.invite_code
  //     }, {
  //       where: {_id: req.params.id}
  //     })
  //         .then(() => res.json({}))
  //         .catch(err => console.log(err))
  // }

}
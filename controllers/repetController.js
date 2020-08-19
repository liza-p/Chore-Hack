const db = require("../models")

module.exports = {

    findAll(req, res) {
        db.Repetition.findAll()
            .then(data => res.json(
              data.map((row) => row.dataValues)
            ))
            .catch(err => console.log(err))
    },

    update(req, res) {
        db.Repetition.update({
          due_date: req.body.due_date,
          complete: req.body.complete,
        }, {
          where: {_id: req.params.id}
        })
            .then(() => res.json({}))
            .catch(err => console.log(err))
    }

}
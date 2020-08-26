const db = require("../models")

module.exports = {

  findAll(req, res) {
    db.Repetition.findAll({
      include: [{
        model: db.Chore,
        where:{
          HouseholdId: req.user.HouseholdId,
          active: true,
        }
      }],
      order: [
        ['due_date', 'ASC'],
      ]
    })
      .then(data => res.json(
        data.map(row => row.dataValues)
      ))
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  },

  update(req, res) {
    db.Repetition.update({
      //due_date: req.body.due_date,
      complete: req.body.complete,
    }, {
      where: { id: req.query.id }
    })
      .then(() => res.json({}))
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  }

}
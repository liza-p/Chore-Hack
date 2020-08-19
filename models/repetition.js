// Creating our Repetition model
module.exports = function(sequelize, DataTypes) {
  var Repetition = sequelize.define("Repetition", {
    //  due_date cannot be null
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //  complete can not be null
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Repetition.associate = function (models) {
    // We're saying that a Repetition should belong to a Chore
    // A Repetition can't be created without a Chore due to the foreign key constraint
    Repetition.belongsTo(models.Chore, {
        foreignKey: {
            allowNull: false
        }
    });
      // We're saying that a Repetition should belong to a User
    // A Repetition can't be created without a User due to the foreign key constraint
    Repetition.belongsTo(models.User, {
      foreignKey: {
          allowNull: false
      }
  });
};
  return Repetition;
};

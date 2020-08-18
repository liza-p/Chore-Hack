// Creating our Household model
module.exports = function(sequelize, DataTypes) {
    const Household = sequelize.define("Household", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Household.associate = function (models) {
        Household.hasMany(models.User);
        Household.hasMany(models.Chore, {
          onDelete: "cascade"
        });
      };
    return Household
};
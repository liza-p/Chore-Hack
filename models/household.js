// Creating our Household model
module.exports = function(sequelize, DataTypes) {
    var Household = sequelize.define("Household", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
       
    });
    return Household
};
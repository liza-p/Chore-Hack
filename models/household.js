// Creating our Household model

const inviteCodeChars = "BCDFGHJKLMNPQRSTVWXYZ0123456789";
const inviteCodeLength = 8;

module.exports = function(sequelize, DataTypes) {
    const Household = sequelize.define("Household", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        invite_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Household.associate = function (models) {
        Household.hasMany(models.User);
        Household.hasMany(models.Chore, {
          onDelete: "cascade"
        });
    };
    Household.addHook("beforeCreate", function(household) {
        let invite_code = "";

        for (let i = 0; i < inviteCodeLength; i++) {
            const randomIndex = Math.floor(Math.random() * inviteCodeChars.length);
            invite_code += inviteCodeChars[randomIndex];
        }

        household.invite_code = invite_code;
    });
    return Household
};
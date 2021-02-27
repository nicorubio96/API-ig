module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      userName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      encryptedPassword: {
          type: DataTypes.STRING,
          allowNull: false
      },
      biography:{
          type: DataTypes.STRING,
          allowNull: false
      },
  }, {
      paranoid: true
  });
  User.associate = function(models) {
  }


  return User;
};
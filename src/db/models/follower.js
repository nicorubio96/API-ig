module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      UserId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      accepted:{
          type: DataTypes.BOOLEAN

      }
  }, {
      paranoid: true
  });
  Follower.associate = function(models) {
      Follower.UserId =Follower.belongsTo(models.User)
     

  }


  return Follower;
};
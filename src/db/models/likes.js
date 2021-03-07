module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
      paranoid: true
  });
  Like.associate = function(models) {
    Like.UserId = Like.belongsTo(models.User);
    Like.PostId = Like.belongsTo(models.Post);
  };


  return Like;
};
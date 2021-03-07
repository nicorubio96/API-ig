module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    photo: {
      type: DataTypes.BLOB,
      allowNull: false
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
      paranoid: true
  });
  Post.associate = function(models) {
    Post.UserId = Post.belongsTo(models.User);
    Post.hasMany(models.Like);
  };


  return Post;
};
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      PostId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Content:{
          type:DataTypes.STRING,
          allowNull:false
      },
      Created_At:{
          type:DataTypes.DATE,
          allowNull:false

      },

      Updated_At:{
          type:DataTypes.DATE,
          allowNull:false
      }
    }, {
        paranoid: true 
    });
    Comment.associate = function(models) {
      Comment.UserId = Comment.belongsTo(models.User);
      Comment.PostId = Comment.belongsTo(models.Post);
    }
  
  
    return Comment;
  };
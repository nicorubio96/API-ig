'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Users',
          key:'id'
        }
      },
      PostId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Posts',
          key:'id'
        }
      },
      Content: {
        type: Sequelize.STRING,
        allowNull:false
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('Comments');
  }
};
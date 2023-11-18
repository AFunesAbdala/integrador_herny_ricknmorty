const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id : {
         type : DataTypes.INTEGER,
         allowNull : false,
         primaryKey : true,
         autoIncrement : true
      },
      email : {
         type : DataTypes.STRING,
         allowNull : false,
         isEmail : true
      },
      password : {
         type : DataTypes.STRING,
         allowNull : false,
         is : [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/]
      }
   }, { timestamps: false });
};

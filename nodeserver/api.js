var mysql2 = require('mysql2');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('sql9225903', 'sql9225903', 'ydF92uVVV2', {
  host: 'sql9.freemysqlhosting.net',
  port: 3306,
  dialect: 'mysql',
});

//Checking connection status
sequelize.authenticate().then(err => {
  if (err) {
    console.log('There is connection in ERROR.');
  } else {
    console.log('Connection has been established successfully');
  }
});

sequelize.sync().then(err => {
  console.log('Missing Table Created!');
}, (err) => {
  console.log('An error occurred while creating the table:', err.message);
  });

// define tables
var User = sequelize.define('user', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
});

// writing apis:
exports.addUser =  (req,res) => {
  var newuser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
  }
  User.create(newuser).then(function(user) {
      return res.status(200).send(user);
  }).catch(function(err) {
      return res.status(400).send(err.message);
  });
}


exports.getUser = function (req, res) {
  User.findAll().then(data => {
    return res.status(200).send(data);
  }).catch(err => {
    return res.status(400).send(err.message);
  });
};

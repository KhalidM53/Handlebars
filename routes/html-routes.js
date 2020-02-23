var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Customer],
      order: [["burger_name"]]
    }).then(function(data) {
      var object = {
        burgers: data
      };
      console.log(object.burgers[0].dataValues.burger_name)
      res.render("index", object);
    });
  });
}; 
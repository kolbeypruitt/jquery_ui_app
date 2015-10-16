var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/jqueryTasks');
var taskdb = db.get('tasks');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  taskdb.find({}, function (err, tasks) {
    taskdb.distinct("category", function (err, categories) {
      res.render('index', {allCategories: categories, tasks: tasks});
    })
  })
});


module.exports = router;

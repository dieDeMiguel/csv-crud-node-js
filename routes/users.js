var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');

/* POST and GET users listing. */
router.post('/register', function(req, res) {
  usersController.createUser(req.body, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

router.post('/login', function(req, res){
  usersController.login(req.body, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
})



module.exports = router;

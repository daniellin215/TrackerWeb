const router = require('express').Router();
const { getUserData, addUserData } = require('./controller');

router.route('/userdata')
  .get(getUserData)
  .post(addUserData);

  module.exports = router;
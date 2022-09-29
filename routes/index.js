const router = require('express').Router();
const users = require('./users');
const wiki = require('./wiki');

router.use('/users', users);
router.use('/wiki', wiki);

module.exports = router;

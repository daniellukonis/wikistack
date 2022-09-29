const router = require('express').Router();

const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki');
});

router.post('/', async (req, res, next) => {

  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.text
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
  // res.send('got to POST /wiki');
  // res.json(req.body)
});


router.get('/add', (req, res, next) => {
  const data = addPage();
  res.send(data);
});

module.exports = router;

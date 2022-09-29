const morgan = require('morgan');

const express = require('express');
const app = express();
const path = require('path');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views');
const router = express.Router;
const routes = require('./routes');

const { db } = require('./models');
const exp = require('constants');

const PORT = 8080;





db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

db.sync({force: true})
  .then(() => {
    console.log('tables synced');
  });




app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  // const data = main();
  // res.send(data);
  res.redirect('/wiki');
});

app.use('/', routes);
// router.use('/', routes);


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

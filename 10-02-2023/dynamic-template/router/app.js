const express = require('express');
const router = require('./router');
const hbs = require('hbs');

const app = express();
const PORT = 8000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing

app.get('/', router);
app.get('/about', router);
app.get('/contatti', router);
app.get('/formazione', router);
app.get('/web-design', router);
app.get('*', router);

app.listen(PORT, () => {
  console.log(`Server running at the port: ${PORT}`);
});

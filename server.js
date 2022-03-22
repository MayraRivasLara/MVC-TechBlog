// requesting all files
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes/web/home');

const sequelize = require('./config/connect');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creating my app
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// Creating session configuration
const sessionConfig = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sessionConfig));

// link handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening http://localhost:" + PORT));
  });
  





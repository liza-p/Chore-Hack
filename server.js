const sequelize = require("sequelize");
const express = require("express");
const session = require("express-session");
const path = require("path");

const PORT = process.env.PORT || 3001;
const SESSION_SECRET = process.env.SESSION_SECRET || "sample secret";

const app = express();
const routes = require("./routes");
const db = require("./models");
const passport = require("./config/passport.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() { 
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
 });

});

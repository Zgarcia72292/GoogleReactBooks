const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("googlereactbooks/build"));
}

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, './googlereactbooks/build/index.html'));
// });
// Add routes, both API and view
app.use(routes);
//added
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds023042.mlab.com:23042/heroku_8610h94v");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

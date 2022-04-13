// all imports
const express = require("express");
const app = express();

const { route } = require("./routes/allRouters");

// all routes
app.use(route);


app.listen(8081);
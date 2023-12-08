const express = require("express");
const cors = require('cors');
const errorHandling = require("./error/error.handling");
const photoRouter = require('./routes/photo.routers');

const app = express();


app.set("port", process.env.PORT || 3000)


app.use(cors());
app.use(express.json());
app.use(photoRouter);
app.use(function(request, response, next)
{
    response.status(404).json({message: "Endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app;
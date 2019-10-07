var express = require("express");
var path = require("path");



app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("app listing on port: " + PORT);
})
var path = require("path");

module.export = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    })
    app.get(" ", function(req, res){
        res.sendFile(path.join(__dirname, "app/public/"))
    })
}
import bodyParser from "body-parser";

module.exports = app => {
    app.set("port", process.env.PORT);
    app.set("json spaces", 4);
    app.use(bodyParser.json());
    app.auth.initialize();    
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    })
}
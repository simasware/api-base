module.exports = app => {
    app.set("port", process.env.PORT);
    app.set("json spaces", 4);
}
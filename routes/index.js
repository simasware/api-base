module.exports = app => {
    app.get("/", (req, res) => {
        res.json({
            "message": "Bem vindo",
            "version": "1.0"
        })
    });
};
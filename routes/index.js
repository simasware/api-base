module.exports = app => {
    app.route("/")
    .get((req, res) => {
        return res.status(200).json({status: "NTask API"});
    })
}
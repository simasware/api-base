module.exports = app => {
  const Users = app.db.models.Users;

  app
    .route("/user")
    .all(app.auth.authenticate())
    .get((req, res) => {
      Users.findByPk(req.params.id, {
        attributes: ["id", "name", "email"]
      })
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }));
    })
    .delete((req, res) => {
      Users.destroy({ where: { id: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({ error: error.message }));
    });
  app.post("/users", (req, res) => {
    Users.create(req.body)
      .then(result => res.json(result))
      .catch(error => res.status(412).json({ error: error.message }));
  });
  app.get("/user/:id", app.auth.authenticate(), (req, res) => {
    // if (!app.auth.autenticate){
    //   res.status(503).json({msg: "Access Denied"});
    //   return;
    // }
    Users.findByPk(req.params.id, {
      attributes: ["id", "name", "email"]
    })
      .then(result => res.json(result))
      .catch(error => res.status(412).json({ msg: error.message }));
  });
};

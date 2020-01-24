import jwt from "jwt-simple";

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.Users;
  app.post("/token", async (req, res) => {
    try {
      if (req.body.email && req.body.password) {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email: email } });

        if (Users.isPassword(user.password, password)) {
          const payload = { id: user.id };
          res.json({
            token: jwt.encode(payload, cfg.jwtSecret)
          });
          return true;
        }
      }
      res.sendStatus(401);
    } catch (e) {
      res.sendStatus(401);
    }
  });
};

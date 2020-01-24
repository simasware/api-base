module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
      dialect: "sqlite",
      storage: "ntask.sqlite",
      loggin: false,
      define: {
        underscored: true
      }
    },
    jwtSecret: "NTa$k-api",
    jwtSession: { session: false }
  };
  
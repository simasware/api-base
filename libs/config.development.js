module.exports = {
  database: process.env.DATABASE,
  username: process.env.USER,
  password: process.env.PASSWORD,
  params: {
    dialect: process.env.DIALECT,    
    define: {
      underscored: true
    }
  },
  jwtSecret: process.env.jwtSecret,
  jwtSession: { session: false }
};

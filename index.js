
require('dotenv').config();
import express from "express";
import consign from "consign";

const app = express();
app.set("json spaces", 4);
consign()
  .include("routes")
  .then("libs/middlewares.js")
  .then("libs/boot.js")
  .into(app);

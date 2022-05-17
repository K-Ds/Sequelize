import express from "express";
import auth from "./routes/auth";
import users from "./routes/users";
import db from "./db/index";
require("dotenv").config();

db.authenticate()
  .then(() => console.log("Database connection established."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/auth", auth);
app.use("/user", users);
app.use("/home", (req, res) => {
  return res.send("INDEX");
});

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default server;

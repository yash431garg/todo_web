// installed packages
const app = require("./app");
const logger = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");

const { PORT } = process.env;
// middlewares
app.use(logger("dev"));
app.use(cors());

connectDb();

//server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

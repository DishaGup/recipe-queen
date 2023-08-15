const express = require("express");
const cors = require("cors");
const userRouter = require("./Routes/user.routes");
const connection = require("./connection");
const app = express();

require("dotenv").config();

// <--- CORS module  &&  JSON parser -->

app.use(cors());
app.use(express.json());

// <---  Routes for USER  -->

app.use("/users/api", userRouter)



// <---  Backend SERVER  -->

const PORT = process.env.Backend_PORT || 8080;

app.listen(PORT, async () => {
  try {

    await connection;
    console.log("Backend connected to MongoDB");

  } catch (err) {

    console.log(err.message);
    console.log("Backend not connected to MongoDB");

  }

  console.log(`Server running at port : ${PORT} `);
});

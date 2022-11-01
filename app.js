require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasksRouter = require("./router/tasks");
const errorHandleMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasksRouter);
app.use(errorHandleMiddleware);
app.use(notFound);

//connect to Db and starting the server
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

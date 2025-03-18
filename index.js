import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import crudRoutes from "./routes/crudRoutes/index.js";

const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use("/customer", crudRoutes);

const PORT = process.env.PORT;

// app.get("/", (request, response) => {
//   const name = request.body.name;
//   const age = request.body.age;
//   response.send("hello " + name + age);
// });

mongoose.connect(MONGODB_URL).then(() => {
  console.log("mongodb connected");
  app.listen(PORT, () => {
    console.log("server start****** " + PORT);
  });
});

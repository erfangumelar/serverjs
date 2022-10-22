import express from "express";
import apiRouter from "./routes/api.js";
import connection from "./connection.js";

const app = express();

// mengirimkan request dalam bentuk json
app.use(express.json());

// mengirimkan request dalam bentuk x-www-form-encoded (method post)
app.use(express.urlencoded({ extended: true }));

// router
app.use("/", apiRouter);

// handle 404 error
app.use((req, res) => {
  res.status(404).json({
    message: "404_NOT_FOUND",
  });
});

// MongoDb connection
connection();

// setting port
app.listen(3000, () => {
  console.log(`Server started on 3000`);
});

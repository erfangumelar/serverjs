import mongoose from "mongoose";

// koneksi mongodb menggunakan mongoose
const connection = () => {
  mongoose.connect("mongodb://localhost:27017", {
    dbName: "backendjs",
  });
};
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Connection Error : "));
conn.once("open", () => {
  console.log(`Connected to mongoDB, database name : backendjs`);
});

export default connection;

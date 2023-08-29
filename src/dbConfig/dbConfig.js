import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to database");
    });

    connection.on("error", (err) => {
      console.log("something went wrong on database connection" + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}

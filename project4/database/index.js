import mongoose from "mongoose";

const connectToDB = async () => {
  const dbUrl =
    "mongodb+srv://arshadnoor585:R7817nRHu3vi5bma@usermanagement.igpvdrs.mongodb.net/?retryWrites=true&w=majority&appName=usermanagement";
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Database connection is successful");
    })
    .catch((e) => console.log(e));
};

export default connectToDB;

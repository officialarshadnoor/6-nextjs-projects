import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://arshadnoor585:VunTVLFTTS1NZhVf@nextblog.il4nevt.mongodb.net/?retryWrites=true&w=majority&appName=nextblog";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Blog database is connected successfully..."))
    .catch((error) => console.log(error));
};

export default connectToDB;

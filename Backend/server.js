import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import connectionToDB from "./config/dbConnection.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});

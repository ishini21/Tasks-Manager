import 'dotenv/config'; 
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

connectDB().then(() => {
  app.listen(5000, () => console.log("Server is running on port 5000"));
});
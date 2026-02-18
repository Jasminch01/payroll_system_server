import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
};

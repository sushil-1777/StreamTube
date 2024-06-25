import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

const App = express();
configDotenv();
App.use(cors());

App.listen(process.env.PORT, () => {
  console.log(`The server is listening on port: ${process.env.PORT}`);
});

// mongoose.connect()
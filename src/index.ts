import express from "express";
import { json } from "body-parser";
import { getDataRouter } from "./routes/get-data";

const app = express();
app.use(json());

app.use("/api", getDataRouter);

app.listen(3000, () => {
  console.log("Listening on 3000");
});

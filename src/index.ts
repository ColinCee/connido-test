import express from "express";
import { strict as assert } from "assert";
import dbConnect from "./api/dbConnect";
import article from "./routes/article";

const app = express();
app.use(express.json());
const port = process.env.PORT;
assert(typeof port === "string", "PORT not set");

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.use("/article", article);

app.listen(port, async () => {
  console.log(`Listening on ${port}`);
  dbConnect();
});

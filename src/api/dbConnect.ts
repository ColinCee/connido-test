import mongoose from "mongoose";
import { strict as assert } from "assert";

export default () => {
  assert(typeof process.env.MONGODB_URI === "string", "URI not set");
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "connido",
  });
};

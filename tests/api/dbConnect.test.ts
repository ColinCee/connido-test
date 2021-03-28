import mongoose from "mongoose";
import dbConnect from "../../src/api/dbConnect";

jest.mock("mongoose");

describe("connect", () => {
  it("should connect to mongodb", () => {
    process.env.MONGODB_URI = "TEST_URI";
    dbConnect();

    expect(mongoose.connect).toBeCalledWith("TEST_URI", {
      useNewUrlParser: true,
      authSource: "connido",
    });
  });
});

import mongoose, { Mongoose } from "mongoose";
import { strict as assert } from "assert";
import Article from "../../src/models/Article";

describe("insert", () => {
  beforeAll(async () => {
    assert(typeof process.env.MONGO_URL === "string");
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  it("should insert a doc into collection", async () => {
    const article = new Article({
      title: "test",
      content: "some content",
      author: { name: "author" },
    });
    await article.save();

    const insertedUser = await Article.findOne({
      title: "test",
    });
    expect(insertedUser?.toJSON()).toEqual(article.toJSON());
  });
});

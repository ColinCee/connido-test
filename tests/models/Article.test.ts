import { MongoClient, Db } from "mongodb";
import { strict as assert } from "assert";

describe("insert", () => {
  let connection: MongoClient | undefined;
  let db: Db | undefined;

  beforeAll(async () => {
    assert(typeof process.env.MONGO_URL === "string");
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection?.close();
  });

  it("should insert a doc into collection", async () => {
    const articles = db?.collection("articles");

    const mockArticle = {
      title: "test",
      content: "some content",
      author: { name: "author" },
    };
    await articles?.insertOne(mockArticle);

    const insertedUser = await articles?.findOne({
      title: "test",
    });
    expect(insertedUser).toEqual(mockArticle);
  });
});

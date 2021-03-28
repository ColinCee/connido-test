import { mocked } from "ts-jest/utils";
import { addArticle, getArticles } from "../../src/controllers/Article";
import Article from "../../src/models/Article";

jest.mock("../../src/models/Article.ts");
const mockedArticle = mocked(Article, true);

describe("add article", () => {
  it("should add article", async () => {
    const data = {
      title: "test",
      content: "content",
      author: { name: "author" },
    };

    await addArticle(data);
    expect(mockedArticle).toHaveBeenCalledWith(data);
    expect(mockedArticle.mock.instances[0].save).toBeCalled();
  });
});

describe("get article", () => {
  it("should get articles by page", async () => {
    const limit = jest.fn();
    const skip = jest.fn().mockReturnValue({ limit });
    Article.find = jest.fn().mockReturnValue({ skip });
    await getArticles(2);

    expect(Article.find).toBeCalledWith({});
    expect(skip).toBeCalledWith(3);
    expect(limit).toBeCalledWith(3);
  });

  it("should get articles by page and filter", async () => {
    const limit = jest.fn();
    const skip = jest.fn().mockReturnValue({ limit });
    Article.find = jest.fn().mockReturnValue({ skip });

    const searchOptions = { title: "test", author: { name: "author name" } };
    await getArticles(2, searchOptions);

    expect(Article.find).toBeCalledWith(searchOptions);
    expect(skip).toBeCalledWith(3);
    expect(limit).toBeCalledWith(3);
  });
});

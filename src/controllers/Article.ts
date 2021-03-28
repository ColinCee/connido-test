import Article from "../models/Article";

type ArticleProps = {
  title: string;
  content: string;
  author: { name: string };
};

const PAGE_SIZE = 3;
export const addArticle = async ({ title, content, author }: ArticleProps) => {
  const article = new Article({
    title,
    content,
    author,
  });

  return article.save();
};

export type SearchProps = {
  title?: string;
  author?: { name: string };
};
export const getArticles = async (
  page: number = 1,
  search: SearchProps = {}
) => {
  const skip = (page - 1) * PAGE_SIZE;
  return Article.find(search).skip(skip).limit(PAGE_SIZE);
};

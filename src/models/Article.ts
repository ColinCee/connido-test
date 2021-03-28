import { Document, model, Model, Schema } from "mongoose";

export interface IArticle extends Document {
  title: string;
  content: string;
  author: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { name: { type: String, required: true } },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, strict: true }
);

const Article: Model<IArticle> = model("Article", ArticleSchema);

export default Article;

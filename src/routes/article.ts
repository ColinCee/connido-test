import { Router } from "express";
import { body, validationResult, query } from "express-validator";
import { addArticle, getArticles, SearchProps } from "../controllers/Article";

const router = Router();
router.post(
  "/",
  body("title").isString(),
  body("content").isString(),
  body("author.name").isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, author } = req.body;
    const result = await addArticle({ title, content, author });
    return res.send(result.toJSON());
  }
);

router.get(
  "/",
  query("page").isNumeric().optional().default(1),
  query("title").isString().optional(),
  query("author_name").isString().optional(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { page, title, author_name } = req.query;

    const searchOptions: SearchProps = {
      ...(title && { title }),
      ...(author_name && { author: { name: author_name } }),
    };
    const result = await getArticles(Number(page), searchOptions);
    return res.send(result);
  }
);

export = router;

import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getOneBook,
  removeBook,
  updateBook,
} from "../controller/bookController";

const bookRouter = Router(); //single get
bookRouter.get("/getonebook/:bookId", getOneBook);
//get all
bookRouter.route("/allbooks").get(getAllBooks);

//create
bookRouter.post("/createbooks", createBook);
//update
bookRouter.route("/updatebooks/:bookId").patch(updateBook);
//deletecre
bookRouter.delete("/removingbook/:bookId", removeBook);
export default bookRouter;

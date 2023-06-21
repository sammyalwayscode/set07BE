import bookModel from "../model/bookModel";
import { Request, Response } from "express";

//get one book

export const getOneBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getBook = await bookModel.findById(req.params.bookId);

    return res.status(200).json({
      message: "gotten one book",
      data: getBook,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "error in getting a book",
      data: error.message,
    });
  }
};

//get all books

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getBooks = await bookModel.find();

    return res.status(200).json({
      message: "gotten all books",
      data: getBooks,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "error in getting all books",
      data: error.message,
    });
  }
};

//create a new book

// export const createANewBooks = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { title, authorName, isBoring, price, details, ISBN } = req.body;

//     //getting the author name index (ie the first letter of the author name)
//     const getAuthorIndex = await authorName.charAt(0).toUpperCase();

//     const genISBN = await `${getAuthorIndex}_${Math.floor(
//       Math.random() * 1000
//     )} _ ${Math.floor(Math.random() * 1000)}`;

//     //creation
//     const createOneBook = await bookModel.create({
//       title,
//       authorName,
//       isBoring,
//       price,
//       details,
//       ISBN: genISBN,
//     });

//     return res.status(201).json({
//       message: "Book created successfully",
//       data: createOneBook,
//     });
//   } catch (error: any) {
//     return res.status(400).json({
//       message: "error in getting all books",
//       data: error.message,
//     });
//   }
// };

//create a new book
export const createBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, authorName, ISBN, isBoring, price, details } = req.body;

    const getAuthorIndex = await authorName.charAt(0).toUpperCase();

    const genISBN = await `${getAuthorIndex}_${Math.floor(
      Math.random() * 1000
    )} _ ${Math.floor(Math.random() * 1000)}`;

    console.log(`this is genISBN ${genISBN}`);
    const book = await bookModel.create({
      title,
      authorName,
      ISBN: genISBN,
      isBoring,
      price,
      details,
    });

    return res.status(201).json({
      message: "created a new book",
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't create book",
      data: error,
    });
  }
};

//update a book
// export const updateBook = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { title, price } = req.body;

//     const book = await bookModel.findByIdAndUpdate(
//       req.params.bookId,
//       { title, price },
//       { new: true }
//     );

//     return res.status(200).json({
//       message: "book updated",
//       data: book,
//     });
//   } catch (error: any) {
//     return res.status(400).json({
//       message: "error in getting all books",
//       data: error.message,
//     });
//   }
// };

//update a book
export const updateBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const {bookId} = req.params
    const { title, price } = req.body;

    const update = await bookModel.findByIdAndUpdate(
      req.params.bookId,
      { title, price },
      { new: true }
    );

    return res.status(200).json({
      message: "book updated",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't update book",
      data: error,
    });
  }
};

//delete a book

export const removeBook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const remove = await bookModel.findByIdAndRemove(req.params.bookId);

    return res.status(200).json({
      message: "book removed",
      data: remove,
    });

    // const remove1 = await bookModel.findByIdAndDelete()
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete book",
      data: error,
    });
  }
};

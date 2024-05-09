import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const deleteBook = async (req, res) => {
    try {
        const {bookId} = req.params;
     await Book.findByIdAndDelete(bookId);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
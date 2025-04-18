import Book from "../models/book.model";

export const getAllBooks = async(req: any, res: any) => {
    try {
        const allBooks = await Book.find({ user: req.user.userId });
        
        return res.status(200).json({ message: "Fetched All Books." , allBooks })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while fetching all books." , error })
    }
}


export const createBook = async(req: any, res: any) => {
    try {
        const newBook = new Book({ ...req.body, image: req.file.path, user: req.user.userId });
        const savedBook = await newBook.save();
    
        return res.status(200).json({ message: "New Book added." , savedBook })
    } catch (error: any) {
        return res.status(500).json({ message: "Something went wrong while adding new book." , error })
    }
}

export const updateBook = async (req: any, res: any) => {
    try {
        const book = await Book.findOneAndUpdate(
            { _id: req.params.id, user: req.user.userId }, 
            req.body, 
            { new: true }
        );

        if (!book){
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({ message: "Book updated successfully.", book })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while updating a book." , error })
    }
  };


export const deleteBook = async(req: any, res: any) => {
    try {
        const book = await Book.findOneAndDelete({ _id: req.params.id, user: req.user.userId });

        if(!book){
            return res.status(404).json({ message: 'Book not found.' });
        }

        return res.status(200).json({ message: "Book deleted successfully." })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while deleting a book." , error })
    }
}

export const favouriteBook = async(req: any, res: any) => {
    try {
        const book = await Book.findOne({ _id: req.params.id, user: req.user.userId });

        if(!book){
            return res.status(404).json({ message: 'Book not found.' });
        }

        book.favourite = !book.favourite;
        await book.save();

        return res.status(200).json({ message: "Book marked as favourite successfully." })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while marking favourite a book." , error })
    }
}
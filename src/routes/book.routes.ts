import { Router } from 'express';
import { authenticate } from "../middleware/auth.middleware";
import { createBook, getAllBooks, deleteBook, updateBook, favouriteBook } from '../controllers/book.controller';

const router = Router();

router.get("/", authenticate, getAllBooks)
router.post("/", authenticate, createBook);
router.put("/:id", authenticate, updateBook);
router.delete("/:id", authenticate, deleteBook);
router.patch("/:id", authenticate, favouriteBook);


export default router; 
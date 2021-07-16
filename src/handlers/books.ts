import express,{Request,Response} from 'express'
import { Book,BookStore } from '../models/book'

const store = new BookStore()

const index = async(_req:Request,res:Response) =>{
    const books = await store.index()
    res.json(books)
}

const books_routes = (app:express.Application) =>{
    app.get('/books',index)
}

export default books_routes
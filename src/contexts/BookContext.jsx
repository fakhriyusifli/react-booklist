import React, { createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Cherpeleng ucuran', author: 'Xalid Huseyni', id: 1},
        {title: 'Everything is fucked up', author: 'Mark Manson', id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author, id: uuidv4()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };

    return ( 
        <BookContext.Provider value={{ books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
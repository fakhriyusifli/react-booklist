import React, { createContext, useState} from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Cherpeleng ucuran', author: 'Xalid Huseyni', id: 1},
        {title: 'Everything is fucked up', author: 'Mark Manson', id: 1}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author, id: uuid()}]);
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
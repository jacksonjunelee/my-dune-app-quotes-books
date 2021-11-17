import React from 'react'

export default function Book(props) {
    const {id, title, year, author, wiki_url, handleOnClickSelectedBook} = props;
    return (
        <div className="book" onClick={() => handleOnClickSelectedBook(id)}>
            <label>Id:</label>
            <p className="book-p">{id}</p>
            <br/>
            <label>Title:</label>
            <p className="book-p">{title}</p>
            <br/>
            <label>Year:</label>
            <p className="book-p">{year}</p>
            <br/>
            <label>Author:</label>
            <p className="book-p">{author}</p>
            <br/>
            <label>Wiki Url:</label>
            <p className="book-p">{wiki_url}</p>
        </div>
    )
}

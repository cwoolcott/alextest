import React from 'react';
import axios from 'axios';

const SavedBooks = (props) => {
    console.log(props.results.data)

    const deleteBook = (e) => {
        const id = e.target.id;
        axios.delete('/api/books/' + id)
            .then(res => {
                console.log("Deleted book from Saved List.")
                window.location.reload();
            })
    }

    return (
        <div className="text-center">
            {props.results.length > 0 ? (
                <ul className="list-group">
                    <h2>Saved Books</h2>
                    {props.results.map((result) => (
                        <li className="list-group-item" key={result._id}>
                            <img src={result.image} alt='Book Cover' />
                            <p><b>{result.title}</b></p>
                            <p>{result.authors}</p>
                            {(result.description) ? (
                                <p><b>Description: </b>{result.description}</p>
                            ) : (
                                    <p></p>
                                )}
                            <div className="text-center">
                                <button
                                    className="btn btn-primary"
                                    onClick={deleteBook}
                                    id={result._id}
                                >
                                    Delete Book
                                    </button>
                                <br />
                                <br />
                                <a
                                    className="btn btn-primary"
                                    href={result.link}
                                >
                                    Check Out the Book!
                                    </a>
                            </div>
                        </li>
                    ))}
                </ul >
            ) : (
                    <h2>No Saved Books</h2>
                )}
        </div>
    );

}

export default SavedBooks;
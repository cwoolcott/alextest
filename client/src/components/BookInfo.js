import React from "react";
import axios from 'axios';

const BookInfo = (props) => {
  console.log(props.results)

  const addBook = event => {
    const i = event.target.id;
    event.preventDefault();
    axios.post('/api/books', {
      authors: props.results[i].volumeInfo.authors,
      description: props.results[i].volumeInfo.description,
      image: props.results[i].volumeInfo.imageLinks.smallThumbnail,
      link: props.results[i].volumeInfo.previewLink,
      title: props.results[i].volumeInfo.title
    })
  }

  return (
    <div className="text-center">
      {props.results.length > 0 ? (
        <ul className="list-group">
          <h2>Search Results</h2>
          {props.results.map((result, i) => (
            <li className="list-group-item" key={result.id}>
              {(result.volumeInfo.imageLinks) ? (
                <img src={result.volumeInfo.imageLinks.smallThumbnail} alt='Book Cover' />
              ) : (
                  <p></p>
                )
              }
              <p><b>{result.volumeInfo.title}</b></p>
              <p>{result.volumeInfo.authors}</p>
              {(result.volumeInfo.description) ? (
                <p><b>Description: </b>{result.volumeInfo.description}</p>
              ) : (
                  <p></p>
                )}
              <button
                className="btn btn-primary"
                onClick={addBook}
                id={i}
              >
                Save Book
                  </button>
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default BookInfo;
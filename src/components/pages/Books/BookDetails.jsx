import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBookByID from "../../../hooks/useBookByIDHook";
import "./BookDetails.scss";
import { useLocation } from "react-router-dom";


const BookDetails = () => {
  const { ISBN } = useParams();
  console.log(ISBN);

  const location = useLocation();
  console.log("The state data ", location);
  const { bookDataDetails, bookDetails } = useBookByID([]);

  useEffect(() => {
    if (ISBN) {
      bookDetails(ISBN);
    }
  }, [ISBN]);

  if (!bookDataDetails || bookDataDetails.length === 0) {
    return <div className="product-not-found">Product not found</div>;
  }

  const bookData = bookDataDetails[0];

  return (
    <div className="card-bookdetails">
      <div className="card-content">
        {bookData && (
          <>
            <img
              className="card-image"
              src={bookData.img}
              alt={bookData.title}
            />
            <div className="card-info">
              <h5>Title: {bookData.title}</h5>
              <h5>ISBN: {bookData.ISBN}</h5>
              <h5>Author: {bookData.author}</h5>
              <h5>Genre: {bookData.genre}</h5>
              <h5>Stock: {bookData.stock}</h5>
              <h5>PageCount: {bookData.pageCount}</h5>
              <h5>Price: ${bookData.price}</h5>
            </div>
          </>
        )}
        <h1 style={{ color: 'maroon' }}>Details Showed!</h1>
      
      </div>
    </div>
  );
};

export default BookDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Books from "../Books/Books";
import { useDispatch,useSelector  } from "react-redux"; // Import useDispatch
import { setBooks } from "../../../source/actions/index"
import "./Shop.css";
import axiosInstance from "../../../utils/axiosInstance";

const Shop = () => {
  const [books, setBookData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books);
  console.log(allBooks)
  useEffect(() => {
    axiosInstance
      .get("/viewBySearch")
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data: ", data.result.result);
        // setBookData(data.result.result);
        // setLoading(false);
        const booksWithLanguagesAndReviews = data.result.result.map((book) => {
          const languages = book.language;
          const reviews = book.reviews.map((review) => review.reviewContent);
          return {
            ...book,
            languages,
            reviews,
          };
        });
        setBookData(booksWithLanguagesAndReviews);
        dispatch(setBooks(booksWithLanguagesAndReviews));
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [dispatch]);

  return (
    <div className="my-container">
      <h1>All Books</h1>
      <div className="container">
        <div className="row">
          {/* {loading === true && <h1>Loading...</h1>} */}
          {books.map((book) => (
            <Books
              key={book.id}
              id={book.id}
              title={book.title}
              ISBN={book.ISBN}
              author={book.author}
              genre={book.genre}
              stock={book.stock}
              pageCount={book.pageCount}
              price={book.price}
              languages={book.languages.join(" , ")}
              rating={book.rating}
              reviews={book.reviews}
              img={book.img}
            />
          ))}
  
        </div>
      </div>
    </div>
  );
};

export default Shop;

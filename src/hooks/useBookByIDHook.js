import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useBooKByID = () => {
  const [bookDataDetails, setBookDataDetails] = useState({});

  const bookDetails = (bookISBN) => {
    console.log("The form data ", bookISBN);
    axiosInstance
      .get(`/viewBySearch?ISBN=${bookISBN}`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data.result.result);
        setBookDataDetails(data.result.result);

        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { bookDataDetails, setBookDataDetails, bookDetails };
};
export default useBooKByID;

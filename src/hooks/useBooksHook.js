import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useBooksHook = () => {
  const [bookData, setBookData] = useState([]);

  const createPost = (formData) => {
    console.log("The form data ", formData);
    axiosInstance
      .post("/create", formData)
      .then((resp) => {
        console.log("Response Data:", resp.data);
        resp.data;
      })
      // .then((data) => {
      //   console.log("Successfully created", data);
      //   setBookData(data);
      // })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return { bookData, setBookData, createPost };
};

export default useBooksHook;

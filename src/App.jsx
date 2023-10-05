import { useState } from "react";
import './App.css'
import Shop from "./components/pages/Shop/Shop"
import AddBookform from "./components/form/Demo_form";
import DeleteBook from "./components/pages/Books/DeleteBooks";
import UpdateBook from "./components/pages/Books/UpdateBooks";
import Navbar from "./components/common/Navbar/Navbar";
// import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/form/LoginForm/LoginForm";
import BookDetails from "./components/pages/Books/BookDetails";
import Authenticate from "./components/pages/Authentication/Authentication";

function App() {

  return (
    <>
   
   
      <Navbar/>    
    <Routes>
      <Route path="/home" element={<Shop/>}/>
      
        {/* <AddBooks /> */}
        <Route element={<Authenticate/>}>
        <Route path="/addbooks" element={<AddBookform/>}/>
        </Route>
      
      <Route path="/home/:ISBN" element={<BookDetails/>} />
      <Route path="/updatebook" element={<UpdateBook/>}/>
      <Route path ="/deletebook" element={<DeleteBook/>}/>  
      <Route path="/login" element={<LoginForm/>}/>       
      </Routes>
    </>
  );
}

export default App;


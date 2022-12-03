import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Books from "../pages/Books"
import AddBook from "../pages/AddBook"
function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

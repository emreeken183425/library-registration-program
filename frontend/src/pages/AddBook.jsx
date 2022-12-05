import React, { useState } from "react";
import axios from "axios";

function AddBook({}) {

  const [book, setBook] = useState({
    bookName:"",
    author:"",
    category:"",
    publisher:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };


  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      category: book.category,
      publisher: book.publisher
     
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/newbook", newBook);
    alert(`The Book ${book.bookName} is added. `);
    // form kaydettikten sonra form içi boşalsın diye
    
  };
  


  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary ">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input cd
              type="text"
              
             onChange={handleChange}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookname"
            />
            <label htmlFor="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChange}
              
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label htmlFor="floatingInput">Author</label>
          </div>
          
          <div className="form-floating mb-3">
          <input
              type="text"
              onChange={handleChange}
            
              name="department"
              className="form-control"
              id="floatingInput"
              placeholder="department"
            />
            <label htmlFor="floatingSelect"> Category</label>
          </div>
           <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChange}
              name="publisher"
              className="form-control"
              id="floatingInput"
              placeholder="publisher"
            />
            <label htmlFor="floatingInput">Publisher</label>
          </div>
          
         
          
          <button type="button" onClick={addBook}  className="btn btn-primary mb-3">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
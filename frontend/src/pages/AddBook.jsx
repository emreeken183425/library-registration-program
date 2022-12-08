import React, { useState } from "react";
import axios from "axios";

function AddBook({}) {

  const [book, setBook] = useState({
    bookName:""
    
  })
  const [author, setAuthor] = useState({
    author:""
  })
  const [category, setCategory] = useState({
    category:""
  })

const [publisher, setPublisher] = useState({
  publisher:""
})



  const handleChangeBook = (e) => {
  
    setBook(prevInput =>( {'bookName':e.target.value}))
    
  };
  const handleChangedAuthor = (e) => {
  
    setAuthor(prevInput =>({"author":e.target.value}));
  };
  const handleChangedCategory = (e) => {
    
    setCategory(prevInput =>({"category":e.target.value}));
  };
  const handleChangedPublisher = (e) => {
    setPublisher(prevInput =>({"publisher":e.target.value})      );
  };
//! add book,author,category,publisher
  const addBook = (e) => {
    e.preventDefault();
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/book", book);
    alert(`The Book ${book.bookName} is added. `);  
  };

  const addAuthor = (e) => {
    e.preventDefault();
    
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/author", author);
    alert(`The Author ${author.author} is added. `);
  };
  const addCategory = (e) => {
    e.preventDefault();
    
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/category", category);
    alert(`The Category ${category.category} is added. `);
  };
  const addPublisher = (e) => {
    e.preventDefault();
   
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/publisher", publisher);
    alert(`The Publisher ${publisher.publisher} is added. `);
  };

 

  return (
    <div className="addBookPage" >
      <div className="container w-50 mt-5 border border-secondary ">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input cd
              type="text" 
             value={book.bookName}
             onChange={handleChangeBook}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookname"
            />
            <label htmlFor="floatingInput">Book Name</label>
          </div>
          <button type="button" onClick={addBook}  className="btn btn-primary mb-3">Add Book</button>
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChangedAuthor}
              value={author.author}
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label htmlFor="floatingInput">Author</label>
          </div>
          <button type="button" onClick={addAuthor}  className="btn btn-primary mb-3">Add Author</button>
          
          <div className="form-floating mb-3">
          <input
              type="text"
              onChange={handleChangedCategory}
            value={category.category}
              name="department"
              className="form-control"
              id="floatingInput"
              placeholder="department"
            />
            <label htmlFor="floatingSelect"> Category</label>
          </div>
          <button type="button" onClick={addCategory}  className="btn btn-primary mb-3">Add Category</button>
           <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChangedPublisher}
              name="publisher"
              className="form-control"
              id="floatingInput"
              placeholder="publisher"
            />
            <label htmlFor="floatingInput">Publisher</label>
          </div>
          
         
          
          <button type="button" onClick={addPublisher}  className="btn btn-primary mb-3">Add Publisher</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
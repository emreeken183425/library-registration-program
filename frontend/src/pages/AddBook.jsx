import React, { useState } from "react";
import axios from "axios";

function AddBook({}) {

  const [book, setBook] = useState({
    bookName:"",
    
  })
  const [author, setAuthor] = useState({
    author:""
  })
  const [category, setCategory] = useState("")

const [publisher, setPublisher] = useState("")

  const handleChangeBook = (e) => {
    const { name, value } = e.target.value;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const handleChangedAuthor = (e) => {
    const { name, value } = e.target.value;
    setAuthor((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const handleChangedCategory = (e) => {
    const { name, value } = e.target.value;
    setCategory((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const handleChangedPublisher = (e) => {
    const { name, value } = e.target.value;
    setPublisher((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/book", newBook);
    alert(`The Book ${book.bookName} is added. `);  
  };

  const addAuthor = (e) => {
    e.preventDefault();
    const newAuthor = {
      author:author.author
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/author", newAuthor);
    alert(`The Author ${author.author} is added. `);
  };
  const addCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      category:category.category
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/category", newCategory);
    alert(`The Category ${category.category} is added. `);
  };
  const addPublisher = (e) => {
    e.preventDefault();
    const newPublisher = {
      publisher:publisher.publisher
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/publisher", newPublisher);
    alert(`The Publisher ${publisher.publisher} is added. `);
  };


  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary ">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input cd
              type="text" 
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
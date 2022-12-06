import { useEffect, useState } from "react";
//import axios from "axios"

function Books() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [publisher, setPublisher] = useState([]);

  useEffect(() => {
    fetch("/getbook")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  }, []);

  useEffect(() => {
    fetch("/getauthor")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setAuthor(jsonRes));
  }, []);
  useEffect(() => {
    fetch("/getcategory")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCategory(jsonRes));
  }, []);
  useEffect(() => {
    fetch("/getpublisher")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setPublisher(jsonRes));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-3 book">
          <h1>BOOKNAME</h1>
          {books.map((book, index) => {
            return (
              <ul key={index}>
                <li scope="row">{book.bookName} </li>
              </ul>
            );
          })}
        </div>
        <div className="col-md-3 author">
          <h1>AUTHOR</h1>
          {author.map((author, index) => {
            return (
              <ul key={index}>
                <li scope="row">{author.author} </li>
              </ul>
            );
          })}
        </div>
        <div className="col-md-3 category">
          <h1>CATEGORY</h1>
          {category.map((category, index) => {
            return (
              <ul key={index}>
                <li scope="row">{category.category} </li>
              </ul>
            );
          })}
        </div>
        <div className="col-md-3 publisher">
          <h1>PUBLİSHER</h1>
          {publisher.map((publisher, index) => {
            return (
              <ul key={index}>
                <li scope="row">{publisher.publisher} </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Books;

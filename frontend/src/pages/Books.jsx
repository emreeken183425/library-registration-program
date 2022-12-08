import { useEffect, useState } from "react";
import axios from "axios"

import Paginate from "../components/Pagination";
import Pagination from "react-bootstrap-pagination/dist/pagination";
function Books() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [publisher, setPublisher] = useState([]);
  // //! PAGİNATİON
  // const [currentPage,setCurrentPage] =useState(1)
  // const [newsPerPage] =useState(9)

  // const indexOfLastNews=currentPage*newsPerPage  // last pages
  // const indexOfFirstNews=indexOfLastNews-newsPerPage //first pages
  // const currentNews=books?.slice(indexOfFirstNews,indexOfLastNews) //9 data
  // const totalPages=Math.ceil(books?.length / newsPerPage );
  // console.log(totalPages);  
  
  // const paginate=(number)=>setCurrentPage(number) // updating pages

  useEffect(() => {

  

    fetch("/getbook")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonBook) => setBooks(jsonBook));

      fetch("/getauthor")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonAuthor) => setAuthor(jsonAuthor));

      fetch("/getcategory")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonCategory) => setCategory(jsonCategory));

      fetch("/getpublisher")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonPublisher) => setPublisher(jsonPublisher));




  }, []);

 

  const deleteBook = (id) => {
    axios.delete("/delete/:id" );
    alert(`The Book with id ${id} is deleted `);
  };
  const deleteAuthor = (id) => {
    axios.delete("/delete/:id" );
    alert(`The Author with id ${id} is deleted `);
  };
  const deleteCategory = (id) => {
    axios.delete("/delete/:id" );
    alert(`The Category with id ${id} is deleted `);
  };
  const deletePublisher = (id) => {
    axios.delete("/delete/:id" );
    alert(`The Publisher with id ${id} is deleted `);
  };




  return (
    <div>
      <div className="row">
        <div className="col-md-3 book">
          <h1>BOOKNAME</h1>
          {books.map((book, index) => {
            return (
             
               <ul key={index} className="m-2">
                <li scope="row">{book.bookName} </li>
                <li>
                  <button className="btn btn-warning">EDİT</button>
                  <button onClick={()=>deleteBook(book._id)} className="btn btn-danger">DELETE</button>

                  </li>
              

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
                <li>
                  <button className="btn btn-warning">EDİT</button>
                <button onClick={()=>deleteAuthor(author._id)} className="btn btn-danger">DELETE</button>
                </li>
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
                <li>
                  <button className="btn btn-warning">EDİT</button>
                  <button onClick={()=>deleteCategory(category._id)} className="btn btn-danger">DELETE</button>
                  </li>
              </ul>
            );
          })}
        </div>
        <div className="col-md-3 publisher">
          <h1>PUBLİSHER</h1>
          {publisher.map((publisher, index) => {
            return (
              <>
              
              <ul key={index}>
                <li scope="row">{publisher.publisher} </li>
                <li>
                  <button className="btn btn-warning">EDİT</button>
                  <button onClick={()=>deletePublisher(publisher._id)} className="btn btn-danger">DELETE</button>
                </li>
              </ul>
              
              </>
            );
          })}
        </div>
        
      </div>
      {/* <div>
        <Pagination  paginate={paginate}  totalPages={totalPages} />
      </div> */}
    </div>
  );
}

export default Books;

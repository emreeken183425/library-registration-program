import { useEffect, useState } from "react";
import axios from "axios"
import Pagination from "../components/Pagination";
function Books() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [editOpen, setEditOpen] = useState(false)
  const [editBook, setEditBook] = useState("")
  // //! PAGİNATİON
   const [currentPage,setCurrentPage] =useState(1)
   console.log(currentPage);
   const [bookPerPage] =useState(5)
   const indexOfLastNews=currentPage*bookPerPage
   console.log(indexOfLastNews);  // last pages
   const indexOfFirstNews=indexOfLastNews-bookPerPage
   console.log(indexOfFirstNews); //first pages
   const currentBooks=books?.slice(indexOfFirstNews,indexOfLastNews) 
   console.log(currentBooks);//9 data
   const totalPages=Math.ceil(books?.length / bookPerPage );
   console.log(totalPages);  
   const paginate=(number)=>setCurrentPage(number) // updating pages

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
   

    const updateBook=(id)=>{
      const filtered=books.filter((book)=>book.id===id).map(()=>({bookName:editBook}))
      console.log(filtered);
      try {
        axios.put("/updatebook/"+id,filtered[0] );
      alert(`The Book with id ${id} is updated `);
      } catch (error) {
        console.log(error);
      }
    }

  const deleteBook = (id) => {
    try {
      axios.delete("/delete/"+id );
    alert(`The Book with id ${id} is deleted `);
    } catch (error) {
      console.log(error);
    }
    
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

console.log(books);


  return (
    <>
    <div className="bookPage">
      <div className="row">
        <div className="col-md-3 book">
          <h1>BOOKNAME</h1>
          {books.map((book, index) => {
            return (
             
               <ul key={book.id}  className="m-2">
                <li scope="row">{book.bookName} </li>
                <li>
                  <button  onClick={()=>setEditOpen(!editOpen)} className="btn  btn-warning me-2">EDİT</button>
                  {editOpen ?<> <input onChange={(e)=>setEditBook(e.target.value)} type="text"  /> <button onClick={()=>updateBook(book.id)} >edit</button></> : null } 
                  <button  onClick={()=>deleteBook(book.id)} className="btn btn-danger">DELETE</button>

                  </li>
              

              </ul>
             

            
            );
          })}
        </div>
       <div className="col-md-3 author">
          <h1>AUTHOR</h1>
          {author.map((author, index) => {
            return (
              <ul key={author.id}>
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
              <ul key={category.id}>
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
              
              <ul key={publisher.id}>
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
        
    </div>
      {/* <div>
     <Pagination  paginate={paginate} bookPerPage={bookPerPage} totalPages={totalPages} />
   </div>  */}
   </>
  );
}

export default Books;

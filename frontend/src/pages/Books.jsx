import { useEffect, useState } from "react";
import axios from "axios"


function Books() {
  const [books, setBooks] = useState([])

  

  useEffect(() => {
    fetch("/book")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  }, []);

  const deleteBook = (id) => {
    axios.delete("/delete/:id" );
    alert(`The Book with id ${id} is deleted `);
  };


  const editBook = (id) => {
    axios.put("/book/" + id);
    alert(`The Book with id ${id} is lended `);
  };

  return (
    <div  >


      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book,index)=>{
              return(
                <tr key={index}>
            <th scope="row">{book.bookName} </th>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.publisher}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteBook(book.id)} >DELETE</button></td>
            <td><button className="btn btn-warning" onClick={()=>editBook(book.id)} >EDİT</button></td>


          </tr>
              )
              
            })
          }
         
          
        </tbody>
      </table>
      
    </div>
  );
}

export default Books;

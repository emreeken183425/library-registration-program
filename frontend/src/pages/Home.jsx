import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  const getnewsDataFromApi = async () => {
    // useEffect(() => {
    //       axios.get("/getbook")
    //         .then((res) => {
    //           if (res.ok) {
    //             return res.json();
    //           }
    //         })
    //         .then((jsonRes) => setBooks(jsonRes));
    //     }, []);

    if (searchText) {
      try {
        //   const response = await axios.get(url);
        const { data } = await fetch("/getbook");
        setBooks(data.articles);

        console.log(books);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };

  return (
    <div className="home  ">
      <form className="d-flex justify-content-center  m-auto  " role="search">
        <input
          className="form-control w-25 m-3"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn btn-outline-success bg-warning w-15 h-25 m-3 "
          type="submit"
        >
          Search
        </button>
      </form>

      <div>
        <h1>{getnewsDataFromApi} </h1>
      </div>
    </div>
  );
}

export default Home;

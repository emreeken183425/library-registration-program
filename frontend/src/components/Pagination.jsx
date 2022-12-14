import React from 'react'
import Pagination from "react-bootstrap-pagination";

const Paginate = ({bookPerPage,totalPages,paginate}) => {
    const [activePage, setActivePage] = React.useState(1);

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  React.useEffect(() => {
    paginate(activePage);
  }, [activePage, paginate]);


  return (
    <div>
      <Pagination className='mt-4 d-flex justify-content-center '>{items}</Pagination>
    </div>
  );
};


export default Paginate
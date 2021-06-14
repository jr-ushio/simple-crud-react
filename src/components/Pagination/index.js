import React, { useEffect, useState } from "react";


import "./style.scss";

const Pagination = ({ totalResults, currentPage, paginate, pageSize, pageNeighbours }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPageCount = Math.ceil(totalResults / pageSize);
    const page = [];
    const page2=[];

    for (let index = 1; index <= totalResults/20; index++) {
      page.push(index);
    }

    setPageNumbers(page);
  }, [totalResults, currentPage, pageSize]);

  return (
    <ul className="pagination">
      {currentPage > 1 && totalResults > 5 && (
        <li className="pagination__pager">
          <button onClick={() => paginate(currentPage - 1)}>Previous</button>
          
          <button onClick={() => paginate(1)}>1</button>
          {currentPage!=2 ? <button onClick={() => paginate(currentPage-1)}>{currentPage-1} </button> : null }
          <button style={{backgroundColor: "lightblue"}} onClick={() => paginate(currentPage)}>{currentPage} </button>
          {currentPage<pageNumbers.length-1 ? <button onClick={() => paginate(currentPage+1)}>{currentPage+1} </button> : null }
        </li>
        
      )}

      {pageNumbers.map((page, index) => {
              if (page === "LEFT")
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                );
                if (page === "RIGHT")
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                );
        /*  
              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={e => paginate(page, e)}
                  >
                    {page}
                  </a>
                </li>
              );
        
        return (
          <li
            key={index}
            className={
              currentPage === page
                ? "pagination__pager pagination__pager--number pagination__pager--active"
                : "pagination__pager pagination__pager--number"
            }>
            <button onClick={() => paginate(page)}>{page}</button>
          </li>
        );
        */
      })}
      {currentPage < pageNumbers.length && (
        <li className="pagination__pager">
          {currentPage==1 ? <button style={{backgroundColor: "lightblue"}} onClick={() => paginate(currentPage)}>{currentPage} </button> : null }
          <button onClick={() => paginate(pageNumbers.length)}>{pageNumbers.length}</button>
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;

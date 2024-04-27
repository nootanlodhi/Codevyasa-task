import { useState } from 'react'
import { sampleData } from '../data/data';
import TableHeaders from './TableHeaders';
import TableRows from './TableRows';

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = sampleData.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (type) => {
    if (type === "prev") {
      setCurrentPage(currentPage - 1);
    } else if (type === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  // Sample data for demonstration


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="table-container">
      <table>
        <thead>
          <TableHeaders/>
        </thead>
        <tbody>
          <TableRows currentItems={currentItems}/>
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handleClick("prev")}
          disabled={currentPage === 1}
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handleClick("next")}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Table

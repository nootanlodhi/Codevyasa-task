import { useState } from 'react'
import { sampleData } from '../data/data';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

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
          <tr>
            <th></th>
            <th><div>Sr No. <UnfoldMoreIcon/></div></th>
            <th><div>Heading 1 <UnfoldMoreIcon/></div></th>
            <th><div>Heading 2 <UnfoldMoreIcon/></div></th>
            <th><div>Heading 3 <UnfoldMoreIcon/></div></th>
            <th><div>Heading 4 <UnfoldMoreIcon/></div></th>
            <th><div>Heading 5 <UnfoldMoreIcon/></div></th>
            <th><div>Heading 6 <UnfoldMoreIcon/></div></th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="sr-no">{indexOfFirstItem + index + 1}.</td>
              <td>{item.heading1}</td>
              <td>{item.heading2}</td>
              <td>{item.heading3}</td>
              <td>{item.heading4}</td>
              <td>{item.heading5}</td>
              <td>{item.heading6}</td>
              <td>...</td>
            </tr>
          ))}
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

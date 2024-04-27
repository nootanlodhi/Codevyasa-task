import PropTypes from 'prop-types';
import { BsThreeDots } from "react-icons/bs";

const TableRows = ({ currentItems }) => {
  return (
    <>
      {currentItems && currentItems.map((item, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" />
          </td>
          <td className="sr-no">{index + 1}.</td>
          <td>{item.heading1}</td>
          <td>{item.heading2}</td>
          <td>{item.heading3}</td>
          <td>{item.heading4}</td>
          <td>{item.heading5}</td>
          <td>{item.heading6}</td>
          <td><BsThreeDots/></td>
        </tr>
      ))}
    </>
  );
};

TableRows.propTypes = {
  currentItems: PropTypes.array.isRequired
};

export default TableRows;
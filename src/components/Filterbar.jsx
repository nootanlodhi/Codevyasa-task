import SearchIcon from "@mui/icons-material/Search";
import { IoMdAdd } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";

const Filterbar = () => {
  return (
    <div>
      <button className="filter-btn">Paris Olympic 2024-300</button>
      <button className="filter-btn">Paris Olympic 2024-300</button>
      <button className="filter-btn">Paris Olympic 2024-300</button>
      <button className="filter-btn">Paris Olympic 2024-300</button>
      <button className="filter-btn">Paris Olympic 2024-300</button>
      <div className="search-filter-container">
        <div className="search-wrapper">
          <SearchIcon />
          <input placeholder="Search..." />
        </div>
        <div className="right-filter-container">
          <button className="add-product">
            <IoMdAdd />
            Add Product
          </button>
          <button className="filter-btn">
            <IoFilterOutline />
            Filter
          </button>
          <button className="filter-btn">
            <CiExport />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;

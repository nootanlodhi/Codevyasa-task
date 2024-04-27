import { IoMdAdd } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import FilterButton from "./FilterButtons";
import SearchInput from "./SearchInput";

const Filterbar = () => {
  return (
    <div>
      <FilterButton text="Paris Olympic 2024-300"/>
      <FilterButton text="T20 World Cup 2024-300"/>
      <FilterButton text="ManChester United - 200"/>
      <FilterButton text="Mumbai City FC - 220"/>
      <FilterButton text="Motorsports - 10"/>
      <div className="search-filter-container">
        <SearchInput/>
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

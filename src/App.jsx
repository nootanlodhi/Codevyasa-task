import "./App.scss";
import Navbar from "./components/Navbar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { IoMdAdd } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import Table from "./components/Table";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid gray",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function App() {
  return (
    <div>
      <Navbar />
      <div className="filter-btn-container">
        <button className="filter-btn">Paris Olympic 2024-300</button>
        <button className="filter-btn">Paris Olympic 2024-300</button>
        <button className="filter-btn">Paris Olympic 2024-300</button>
        <button className="filter-btn">Paris Olympic 2024-300</button>
        <button className="filter-btn">Paris Olympic 2024-300</button>
        <div className="search-filter-container">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="right-filter-container">
            <button className="add-product"><IoMdAdd/>Add Product</button>
            <button className="filter-btn"><IoFilterOutline/>Filter</button>
            <button className="filter-btn"><CiExport/>Export</button>
          </div>
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default App;

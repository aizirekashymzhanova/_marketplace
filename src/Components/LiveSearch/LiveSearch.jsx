import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useLocation, useSearchParams } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  const [inpSearch, setInpSearch] = useState(searchParams.get("q") || "");
  console.log(inpSearch);

  useEffect(() => {
    let currentParams = Object.fromEntries([...searchParams]);

    if (location.pathname === "/products") {
      setSearchParams({
        ...currentParams,
        _page: 1,
        q: inpSearch,
      });
    }
  }, [inpSearch]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={inpSearch}
        onChange={(e) => setInpSearch(e.target.value)}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default LiveSearch;

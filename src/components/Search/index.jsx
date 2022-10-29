import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { searchByTitle, getValueFromQuery } from "./utils";
import UserCard from "../UserCard";

import "./style.scss";
import useOutsideClick from "../../hooks/useOutsideClick";

function Search() {
  const ref = useRef();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  useOutsideClick(ref, () => setSearchTerm(""));

  const onSelect = (id) => navigate(`/users/${id}`);

  const SearchResultRow = ({ className, id, children }) => (
    <div className={className}>{children}</div>
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const searchResults = searchByTitle(searchTerm);
  const hasResults = searchTerm.length > 0 && searchResults.length; // searchTerm && searchTerm.length > 2;
  return (
    <div className="main-search" ref={ref}>
      <div className="content-search">
        <div className={`search-input ${hasResults ? "has-results" : ""}`}>
          <input
            onKeyUp={(e) => {
              if (e.which === 13 && searchResults.length) {
                onSelect(searchResults[0].id);
              }
            }}
            onFocus={(e) => handleSearch(e.target.value)}
            onInput={({ target: { value } }) => handleSearch(value)}
            placeholder={"Search users"}
          />
        </div>
      </div>
      <div className="search-results-wrapper">
        {hasResults ? (
          <div className="search-results">
            {searchResults.map((x) => (
              <SearchResultRow key={x.id} className="search-result">
                <UserCard {...x} bio={x.name} path={`/users/${x.id}`} />
              </SearchResultRow>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;

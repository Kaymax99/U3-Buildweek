import { useState } from "react";
import { Container, Button } from "react-bootstrap";

function SearchBar({ onSearch, placeholder }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <>
      <Container className="SB_Container">
        <input
          className="SB_Input"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <Button className="SB_button" onClick={handleSearch}>
          Search
        </Button>
      </Container>
    </>
  );
}

export default SearchBar;

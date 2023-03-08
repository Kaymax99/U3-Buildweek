import React, { useState } from "react";
import { Table } from "react-bootstrap";

function SearchBar() {
  const [queryy, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchProfiles = async (query) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/`;

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    });
    const data = await response.json();
    const filteredData = data.filter((profile) =>
      profile.name.toLowerCase().startsWith(queryy.toLowerCase())
    );
    return filteredData;
  };

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query) {
      const results = await searchProfiles(query);
      setResults(results);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={handleInputChange}
      />
      <Table striped bordered hover>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {results.map((profile) => (
            <tr key={profile._id}>
              <td>{profile.name}</td>
              <td>{profile.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SearchBar;

import React, { useState } from "react";
import { Table } from "react-bootstrap";

function PeopleSearchBar() {
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
    const filteredData = data.filter((profile) => profile.name.toLowerCase().startsWith(queryy.toLowerCase()));
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
      <h4>Search someone you might know</h4>
      <input type="text" placeholder="Insert a name to start" onChange={handleInputChange} className="d-flex" />
      <Table striped bordered hover>
        <tbody>
          {results.map((profile) => (
            <tr key={profile._id}>
              <td>
                <a href={"/" + profile._id}>
                  {profile.name} {profile.surname}
                </a>
              </td>
              <td>{profile.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PeopleSearchBar;

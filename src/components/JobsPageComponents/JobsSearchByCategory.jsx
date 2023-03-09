import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Card } from "react-bootstrap";
import SearchBar from "../SearchBar";
import { transformToDate } from "../../hooks/formatDate";
import { fetchJobsByCategory } from "../Fetches/FetchJobs";

const JobsSearchByCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async () => {
      let data = await fetchJobsByCategory(categoryName);
      setJobs(data);
      setIsLoading(false);
    };
    fetchJobs();
  }, [categoryName]);

  const handleSearch = (value) => {
    console.log(value);
    setCategoryName(value);
  };

  return (
    <>
      <div className="container mt-3">
        <h3>Search for jobs by Category:</h3>
        <div className="divsearch my-3">
          <SearchBar placeholder="Search..." onSearch={handleSearch} />
        </div>

        <div className="jobcards my-5">
          {jobs.length > 0 && !isLoading ? (
            jobs.slice(0, 10).map((job) => (
              <Row className="row_big" key={"job" + job._id}>
                <Col sm={12} md={8} className="Col_01">
                  <Card
                    className="card-job"
                    style={{ width: "18rem", height: "10rem" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-uppercase">
                        {job.category}
                      </Card.Title>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Company: {job.company_name}
                      </Card.Subtitle>
                      <Card.Subtitle>
                        <h6 id="jobPublicationDate">
                          published on: {""}
                          {job.publication_date &&
                            transformToDate(job.publication_date)}
                        </h6>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))
          ) : isLoading ? (
            <div className="text-center">
              <Spinner variant="primary" />
            </div>
          ) : (
            <div className="text-center">
              <span>Nessun Risultato</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobsSearchByCategory;

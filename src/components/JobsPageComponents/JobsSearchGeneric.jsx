import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Card } from "react-bootstrap";
import SearchBar from "../SearchBar";

const JobsSearchGeneric = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [jobName, setJobName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async () => {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${jobName}`);
      if (response.ok) {
        const jobsArray = await response.json();
        setJobs(jobsArray.data);
        console.log(jobs);
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, [jobName]);

  const handleSearch = (value) => {
    console.log(value);

    setJobName(value);
  };

  return (
    <>
    <div className="container newnew mt-3">
      <div className="divsearch my-3">
        <SearchBar placeholder="Search for jobs" onSearch={handleSearch} />
      </div>

      <div className="jobcards my-5">
        {jobs.length > 0 && !isLoading ? (
          jobs.map((job) => (
            <Row className="row_big" key={"job" + job._id}>
              <Col sm={12} md={8} className="Col_01">
                <Card style={{ width: "18rem", height: "10rem" }}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Azienda: {job.company_name}
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

export default JobsSearchGeneric;

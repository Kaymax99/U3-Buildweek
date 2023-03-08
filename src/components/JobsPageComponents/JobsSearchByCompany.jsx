import React, { useState, useEffect } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import SearchBar from "../SearchBar";

const JobsSearchByCompany = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async () => {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`);
      if (response.ok) {
        const jobsArray = await response.json();
        setJobs(jobsArray.data);
        console.log(jobs);
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, [companyName]);

  const handleSearch = (value) => {
    console.log(value);

    setCompanyName(value);
  };

  return (
    <>
      <div className="container newnew mt-3">
        <div className="my-3">
          <SearchBar placeholder="Search for jobs by company" onSearch={handleSearch} />
        </div>

        <div className="my-5">
          {jobs.length > 0 && !isLoading ? (
            jobs.map((job) => (
              <Row className="row_big" key={"job" + job._id}>
                <Col sm={12} md={8} className="Col_01">
                  <div>
                    <h4>Job</h4>
                    <h2>{job.title}</h2>
                    <h5>Azienda: {job.company_name}</h5>
                  </div>
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

export default JobsSearchByCompany;
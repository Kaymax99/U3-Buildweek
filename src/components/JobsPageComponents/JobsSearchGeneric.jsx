import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Spinner,
  Card,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { transformToDate } from "../../hooks/formatDate";
import { fetchJobsGeneric } from "../Fetches/FetchJobs";

const JobsSearchGeneric = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [jobName, setJobName] = useState(params.jobName);
  const [query, setQuery] = useState(params.jobName);

  const fetchJobs = async (querySearch) => {
    let data = await fetchJobsGeneric(querySearch);
    setJobs(data.slice(0, 10));
    setTimeout(() => setIsLoading(false), 700);
  };

  useEffect(() => {
    setIsLoading(true);
    if (params.jobName === undefined) {
      fetchJobs("");
    }
  }, []);

  useEffect(() => {
    if (params.jobName !== undefined) {
      setJobName(params.jobName);
      setQuery(params.jobName);
    }
  }, [params.jobName]);

  useEffect(() => {
    setIsLoading(true);
    fetchJobs(jobName);
  }, [jobName]);

  const handleSearch = (value) => {
    console.log(value);
    navigate("/jobs/" + value);
  };

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <>
      <div className="container mt-3">
        <h3>Search for jobs:</h3>
        <div className="divSearch my-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(query);
            }}
          >
            <FormControl
              type="text"
              as="input"
              placeholder="Search..."
              value={query}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </Form>
          <Button onClick={() => handleSearch(query)}>Search</Button>
        </div>

        <div className="jobCards my-5">
          {jobs.length > 0 && !isLoading ? (
            jobs.map((job) => (
              <Row className="row_big" key={"job" + job._id}>
                <Col sm={12} md={8} className="Col_01">
                  <Card
                    className="card-job"
                    style={{ width: "18rem", height: "10rem" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-uppercase">
                        {job.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Company: {job.company_name}
                      </Card.Subtitle>
                      <Card.Subtitle>
                        <h6 id="jobPublicationDate">
                          published on:{" "}
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

export default JobsSearchGeneric;

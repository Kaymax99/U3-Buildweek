import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

const JobFetch = () => {
  const [job, setJob] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [jobName, setJobName] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${jobName}`);
      if (response.ok) {
        const data = await response.json();
        // setJob(data);
        // console.log(job);
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, [ jobName]);

  const handleSearch = (value) => {
    setJobName(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <div className="my-3">
          <SearchBar placeholder="Search for jobs" onSearch={handleSearch} />
        </div>

        <Container className="my-5">
          <Row className="row_big">
            <Col sm={12} md={8} className="Col_01">
              <div>
                <h4>Job</h4>
                <h2>{job.title}</h2>
                <h5>Description: {job.description}</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default JobFetch;

// Oggi aggiungiamo una nuova pagina al progetto!

// FATTO In alto, nella navbar, avrete probabilmente inserito un pulsante “jobs” o simili (se non c’è è il momento di inserirlo).

// FATTO Questo pulsante dovrebbe portare alla pagina /jobs,
// dove renderizzerete i risultati di questo API:

// https://strive-benchmark.herokuapp.com/api/jobs

// https://strive-benchmark.herokuapp.com/api/jobs?search=INSERISCI QUERY QUI

// https://strive-benchmark.herokuapp.com/api/jobs?company=Olla //FETCH IN BASE AL NOME DELL AZIENDA

// https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10 //FETCH PER CATEGORIA

// Dopo aver renderizzato i risultati dell’API, implementa una funzione di ricerca nella navbar, permettendo all’utente di cercare un lavoro.

// EXTRA: usando redux-persist dai la possibilità all’utente di aggiungere lavori ad una lista preferiti, che renderizzerai sulla rotta /jobs (design a vostra scelta ma consiglio una sorta di sidebar)

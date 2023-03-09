import React, { useState } from "react";
import JobsSearchGeneric from "./JobsPageComponents/JobsSearchGeneric";
import JobsSearchByCompany from "./JobsPageComponents/JobsSearchByCompany";
import JobsSearchByCategory from "./JobsPageComponents/JobsSearchByCategory";
import { Container, Tab, Tabs } from "react-bootstrap";

export const JobsPage = () => {
  const [key, setKey] = useState("generic");

  return (
    <>
      <Container className="jobscategories">
        <Container className="jobscontainer">
          <Tabs id="controlled-tab-jobs" activeKey={key} onSelect={(k) => setKey(k)} className="mt-3">
            <Tab eventKey="generic" title="Generic">
              <JobsSearchGeneric />
            </Tab>
            <Tab eventKey="company" title="Company">
              <JobsSearchByCompany />
            </Tab>
            <Tab eventKey="category" title="Category">
              <JobsSearchByCategory />
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};

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

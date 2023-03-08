import { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
          },
        });
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);
  console.log(jobs);

  return <></>;
}

export default Jobs;

const BaseURL = "https://strive-benchmark.herokuapp.com/api/jobs?";
export const fetchJobsGeneric = async (value) => {
  try {
    const response = await fetch(BaseURL + "search=" + value);
    if (response.ok) {
      const jobsArray = await response.json();
      return jobsArray.data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.error("ERRORE CATCH", error);
  }
};
export const fetchJobsByCategory = async (value) => {
  try {
    const response = await fetch(BaseURL + "category=" + value);
    if (response.ok) {
      const jobsArray = await response.json();
      return jobsArray.data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.error("ERRORE CATCH", error);
  }
};
export const fetchJobsByCompany = async (value) => {
  try {
    const response = await fetch(BaseURL + "company=" + value);
    if (response.ok) {
      const jobsArray = await response.json();
      return jobsArray.data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.error("ERRORE CATCH", error);
  }
};

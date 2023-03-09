import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomNavbar } from "./components/CustomNavbar";
import { CustomFooter } from "./components/CustomFooter";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { useDispatch } from "react-redux";
import { getProfileAction, GET_PEOPLE, GET_PROFILE } from "./redux/actions";
import Network from "./components/NetworkPage";
import { JobsPage } from "./components/JobsPage";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  dispatch(getProfileAction("me", GET_PROFILE));
  dispatch(getProfileAction("", GET_PEOPLE));
  // }, []);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:profileID" element={<Profile />} />
        <Route path="/my-network" element={<Network />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobName" element={<JobsPage />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;

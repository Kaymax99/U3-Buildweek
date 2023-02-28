import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomNavbar } from "./components/CustomNavbar";
import { CustomFooter } from "./components/CustomFooter";
import Profile from "./components/Profile";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:profileID" element={<Profile />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;

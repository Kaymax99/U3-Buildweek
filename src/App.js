import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomNavbar } from "./components/CustomNavbar";
import { Home } from "./components/Home";
import { CustomFooter } from "./components/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" />
        <Route path="/:profileID" />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;

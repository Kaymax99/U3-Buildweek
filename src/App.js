import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomNavbar } from "./components/CustomNavbar";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" />
        <Route path="/:profileID" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

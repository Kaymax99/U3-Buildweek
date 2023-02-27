import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomNavbar } from "./components/CustomNavbar";
import { Home } from "./components/Home";

import ProfileCard from "./components/ProfileCard";


function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <ProfileCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" />
        <Route path="/:profileID" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

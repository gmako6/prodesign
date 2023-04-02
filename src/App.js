import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ErrorPage,
  Fundraiser,
  Earn,
  Documents,
  Marketplace,
  Careers,
  Airdrop,
} from "./pages";
import { About, Intro, Savs } from "./contents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Earn" element={<Earn />} />
        <Route path="/Fundraiser" element={<Fundraiser />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Airdrop" element={<Airdrop />} />

        <Route path="#Intro" element={<Intro />} />
        <Route path="#About" element={<About />} />
        <Route path="#Savs" element={<Savs />} />
      </Routes>
    </Router>
  );
}

export default App;

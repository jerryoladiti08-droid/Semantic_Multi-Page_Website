import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";
import CFD_Reports from "./CFD_Reports.jsx";
import News_flasher from "./News_flasher.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Portfolio</Link> | <Link to="/cfd-report">CFD Report</Link>{" "}
        | <Link to="/News-flasher">News Flasher</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cfd-report" element={<CFD_Reports />} />
        <Route path="/News-flasher" element={<News_flasher />} />
      </Routes>
    </>
  );
}

export default App;

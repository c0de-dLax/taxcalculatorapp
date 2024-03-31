import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import  ErrorPage  from "./pages/ErrorPage";
import  DisclaimerPage  from "./pages/DisclaimerPage";

import "./index.css"

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/taxcalculatorapp/" element={<HomePage />} />
        <Route path="/taxcalculatorapp/disclaimer" element={<DisclaimerPage />} />
        <Route path="/taxcalculatorapp/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
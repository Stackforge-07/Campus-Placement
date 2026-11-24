import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { companies as companiesData, myProfile } from "./data/companies";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Applications from "./pages/Applications";
import "./App.css";

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  const [companies, setCompanies] = useState(companiesData);

  function isEligible(company) {
    return (
      myProfile.cgpa >= company.minCGPA &&
      company.eligibleBranches.includes(myProfile.branch)
    );
  }

  function handleToggleApply(id) {
    setCompanies(
      companies.map((c) => {
        if (c.id === id) {
          return { ...c, isApplied: !c.isApplied };
        }
        return c;
      })
    );
  }

  const appliedCount = companies.filter((c) => c.isApplied).length;

  return (
    <BrowserRouter>
      <Navbar appliedCount={appliedCount} />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                companies={companies}
                myProfile={myProfile}
                isEligible={isEligible}
              />
            }
          />

          <Route
            path="/companies"
            element={
              <Companies
                companies={companies}
                isEligible={isEligible}
                onToggleApply={handleToggleApply}
              />
            }
          />

          <Route
            path="/companies/:id"
            element={
              <CompanyDetails
                companies={companies}
                isEligible={isEligible}
                onToggleApply={handleToggleApply}
              />
            }
          />

          <Route
            path="/applications"
            element={
              <Applications
                companies={companies}
                isEligible={isEligible}
                onToggleApply={handleToggleApply}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

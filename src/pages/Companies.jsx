import { useState } from "react";
import CompanyCard from "../components/CompanyCard";

function Companies({ companies, isEligible, onToggleApply }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const result = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.role.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Eligible"
        ? isEligible(company)
        : !isEligible(company);

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1>Companies</h1>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Eligible">Eligible</option>
          <option value="Not Eligible">Not Eligible</option>
        </select>
      </div>

      <h3>Showing: {result.length} companies</h3>

      {result.length === 0 ? (
        <h2>No companies found</h2>
      ) : (
        <div className="companies-grid">
          {result.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              isEligible={isEligible(company)}
              onToggleApply={onToggleApply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Companies;


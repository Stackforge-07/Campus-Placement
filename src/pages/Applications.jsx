import CompanyCard from "../components/CompanyCard";

function Applications({ companies, isEligible, onToggleApply }) {
  const appliedCompanies = companies.filter((c) => c.isApplied);

  return (
    <div>
      <h1>My Applications</h1>

      {appliedCompanies.length === 0 ? (
        <h2>No applications yet</h2>
      ) : (
        <div className="companies-grid">
          {appliedCompanies.map((company) => (
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

export default Applications;


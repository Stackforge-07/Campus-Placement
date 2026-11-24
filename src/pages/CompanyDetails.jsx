import { useParams } from "react-router";

function CompanyDetails({ companies, isEligible, onToggleApply }) {
  const { id } = useParams();

  const company = companies.find(
    (company) => company.id === Number(id)
  );

  if (!company) {
    return <h2>Company not found</h2>;
  }

  const eligible = isEligible(company);

  return (
    <div>
      <h1>Company Details</h1>
      <div className="details-card">
        <h2>{company.name}</h2>
        <p>Role: {company.role}</p>
        <p>Package: {company.packageLPA} LPA</p>
        <p>Location: {company.location}</p>
        <p>Drive Date: {company.driveDate}</p>
        <p>Minimum CGPA: {company.minCGPA}</p>

        <p>Eligible Branches:</p>
        <ul>
          {company.eligibleBranches.map((branch) => (
            <li key={branch}>{branch}</li>
          ))}
        </ul>

        {company.packageLPA >= 10 && (
          <span className="badge">Dream Company 🌟</span>
        )}

        {eligible ? (
          <button onClick={() => onToggleApply(company.id)}>
            {company.isApplied ? "Withdraw" : "Apply"}
          </button>
        ) : (
          <p className="not-eligible">Not Eligible</p>
        )}
      </div>
    </div>
  );
}

export default CompanyDetails;


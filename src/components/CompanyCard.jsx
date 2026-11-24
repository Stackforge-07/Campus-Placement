import { Link } from "react-router";

function CompanyCard({ company, isEligible, onToggleApply }) {
  return (
    <div className="card">
      <h3>{company.name}</h3>
      <p>Role: {company.role}</p>
      <p>Package: {company.packageLPA} LPA</p>
      <p>Location: {company.location}</p>
      <p>Drive Date: {company.driveDate}</p>

      {company.packageLPA >= 10 && (
        <span className="badge">Dream Company 🌟</span>
      )}

      {isEligible ? (
        <button onClick={() => onToggleApply(company.id)}>
          {company.isApplied ? "Withdraw" : "Apply"}
        </button>
      ) : (
        <p className="not-eligible">Not Eligible</p>
      )}

      <Link to={`/companies/${company.id}`}>View Details</Link>
    </div>
  );
}

export default CompanyCard;


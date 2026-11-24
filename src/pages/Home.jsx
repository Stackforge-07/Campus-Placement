function Home({ companies, myProfile, isEligible }) {
  const totalCompanies = companies.length;
  const eligibleCompanies = companies.filter((c) => isEligible(c)).length;
  const appliedCompanies = companies.filter((c) => c.isApplied).length;

  return (
    <div>
      <h1>Campus Placement Drive</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Welcome to the Campus Placement Drive portal. Check your profile, explore eligible companies, and manage your placement applications.
      </p>

      <div className="profile-card">
        <h2>My Profile</h2>
        <p>Name: {myProfile.name}</p>
        <p>Branch: {myProfile.branch}</p>
        <p>CGPA: {myProfile.cgpa}</p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h3>{totalCompanies}</h3>
          <p>Total Companies</p>
        </div>
        <div className="stat-box">
          <h3>{eligibleCompanies}</h3>
          <p>Eligible Companies</p>
        </div>
        <div className="stat-box">
          <h3>{appliedCompanies}</h3>
          <p>Applied Companies</p>
        </div>
      </div>
    </div>
  );
}

export default Home;


import { Link } from "react-router";

function Navbar({ appliedCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/companies">Companies</Link>{" | "}
      <Link to="/applications">Applications ({appliedCount})</Link>
    </nav>
  );
}

export default Navbar;


import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();  // Get the current path

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-account-signin-link"
        to="/Kanbas/Account/Signin"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Signin" ? "active" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <Link
        id="wd-account-signup-link"
        to="/Kanbas/Account/Signup"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Signup" ? "active" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <Link
        id="wd-account-profile-link"
        to="/Kanbas/Account/Profile"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kanbas/Account/Profile" ? "active" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle click for Courses to redirect to Dashboard
  const handleCoursesClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default link behavior
    navigate("/Kanbas/Dashboard"); // Navigate to Dashboard
  };

  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" />
      </a>

      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Account") ? "bg-white text-danger" : "bg-black"
        }`}>
        <FaRegCircleUser className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Kanbas/Account") ? "text-danger" : "text-white"}>
          Account
        </span>
      </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Dashboard") ? "bg-white text-danger" : "bg-black"
        }`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Kanbas/Dashboard") ? "text-danger" : "text-white"}>
          Dashboard
        </span>
      </Link>

      <a
        href="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Courses") ? "bg-white text-danger" : "bg-black"
        }`}
        onClick={handleCoursesClick}
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Kanbas/Courses") ? "text-danger" : "text-white"}>
          Courses
        </span>
      </a>

      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Calendar") ? "bg-white text-danger" : "bg-black"
        }`}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Kanbas/Calendar") ? "text-danger" : "text-white"}>
          Calendar
        </span>
      </Link>

      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Inbox") ? "bg-white text-danger" : "bg-black"
        }`}>
        <FaInbox className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Kanbas/Inbox") ? "text-danger" : "text-white"}>
          Inbox
        </span>
      </Link>

      <Link to="/Labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Labs") ? "bg-white text-danger" : "bg-black"
        }`}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        <span className={pathname.includes("/Labs") ? "text-danger" : "text-white"}>
          Labs
        </span>
      </Link>
    </div>
  );
}

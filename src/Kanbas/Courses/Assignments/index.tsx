import { BsGripVertical, BsPlus, BsSearch} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegEdit} from "react-icons/fa";
import { useState } from "react";





export default function Assignments() {
  const [isExpanded, setIsExpanded] = useState(true); 
  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="wd-assignments">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="input-group" style={{ maxWidth: "300px" }}>
    <span className="input-group-text bg-white ">
      <BsSearch />
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      style={{ boxShadow: "none" }}
    />
  </div>

    <div className="d-inline-flex">
      <button className="btn btn-secondary me-2">
        <BsPlus className="me-1" /> Group
      </button>
      <button className="btn btn-danger text-white">
        <BsPlus className="me-1" /> Assignment
      </button>
    </div>
  </div>
      <ul className="mt-2 list-group rounded-0 w-100">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-0 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-inline">
              <button
                id="wd-assignments-toggle-btn"
                className="btn btn-secondary"
                onClick={toggleCollapse}
              >
                <BsGripVertical className="me-2 fs-3" />
                <span className={`dropdown-triangle me-2 ${isExpanded ? 'triangle-down' : 'triangle-right'}`}></span>
                <span className="ms-2">ASSIGNMENTS</span>
              </button>
            </div>
            <AssignmentControlButtons />
          </div>

          {isExpanded && (
            <ul className="wd-assignments-list list-group rounded-0">
      <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <FaRegEdit className="me-4 text-success fs-5" />
        <div className="flex-grow-1">
          <a className="fw-bold text-dark text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
            A1
          </a>
          <div>
            <span className="text-danger me-2">Multiple Modules</span>
            <span className="me-2">|</span>
            <strong className="me-2">Not available until</strong>
            <span className="me-2">May 6 at 12:00am</span>
            <span className="me-2">|</span>
            <strong className="me-2">Due</strong>
            <span className="me-2">May 13 at 11:59pm</span>
            <span className="me-2">|</span>
            <span className="me-2">100 pts</span>
          </div>
        </div>
        <LessonControlButtons />
      </li>

      <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <FaRegEdit className="me-4 text-success fs-5" />
        <div className="flex-grow-1">
          <a className="fw-bold text-dark text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/456">
            A2
          </a>
          <div>
            <span className="text-danger me-2">Multiple Modules</span>
            <span className="me-2">|</span>
            <strong className="me-2">Not available until</strong>
            <span className="me-2">May 13 at 12:00am</span>
            <span className="me-2">|</span>
            <strong className="me-2">Due</strong>
            <span className="me-2">May 20 at 11:59pm</span>
            <span className="me-2">|</span>
            <span className="me-2">100 pts</span>
          </div>
        </div>
        <LessonControlButtons />
      </li>

      <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <FaRegEdit className="me-4 text-success fs-5" />
        <div className="flex-grow-1">
          <a className="fw-bold text-dark text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/789">
            A3
          </a>
          <div>
            <span className="text-danger me-2">Multiple Modules</span>
            <span className="me-2">|</span>
            <strong className="me-2">Not available until</strong>
            <span className="me-2">May 20 at 12:00am</span>
            <span className="me-2">|</span>
            <strong className="me-2">Due</strong>
            <span className="me-2">May 27 at 11:59pm</span>
            <span className="me-2">|</span>
            <span className="me-2">100 pts</span>
          </div>
        </div>
        <LessonControlButtons />
      </li>
             
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

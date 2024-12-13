import { BsGripVertical, BsPlus, BsSearch } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment as removeAssignment } from "./reducer";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import * as client from "./client";

export default function Assignments() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentsReducer?.assignments ?? []);
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === courseId);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!courseId) return;
      const assignments = await client.fetchAssignmentsForCourse(courseId as string);
      dispatch(setAssignments(assignments));
    };
    fetchAssignments();
  }, [courseId, dispatch]);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const confirmDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const handleDelete = async () => {
    if (assignmentToDelete) {
      await client.deleteAssignment(assignmentToDelete);
      dispatch(removeAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
      setShowDeleteDialog(false);
    }
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white">
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
          {isFaculty && (
            <button className="btn btn-danger text-white" onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/new`)}>
              <BsPlus className="me-1" /> Assignment
            </button>
          )}
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
            <AssignmentsControls />
          </div>

          {isExpanded && (
            <ul className="wd-assignments-list list-group rounded-0">
              {filteredAssignments.map((assignment: any) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegEdit className="me-4 text-success fs-5" />
                  <div className="flex-grow-1">
                    <a
                      className="fw-bold text-dark text-decoration-none"
                      href={`#/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </a>
                    <div>
                      <span className="text-danger me-2">Multiple Modules</span>
                      <span className="me-2">|</span>
                      <strong className="me-2">Not available until</strong>
                      <span className="me-2">
                        {assignment.startDate ? `${assignment.startDate.slice(0, 10)} at 12:00am` : "N/A"}
                      </span>
                      <span className="me-2">|</span>
                      <strong className="me-2">Due</strong>
                      <span className="me-2">
                        {assignment.dueDate ? `${assignment.dueDate.slice(0, 10)} at 11:59pm` : "N/A"}
                      </span>
                      <span className="me-2">|</span>
                      <span className="me-2">{assignment.points} pts</span>
                    </div>
                  </div>
                  {isFaculty && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={confirmDelete}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      {showDeleteDialog && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteDialog(false)} />
              </div>
              <div className="modal-body">
                <p>Are you sure you want to remove this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteDialog(false)}>
                  No
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const assignmentData = assignments.find((a: any) => a._id === aid) || {
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    startDate: "",
    course: cid,
  };

  const [assignment, setAssignment] = useState(assignmentData);

  const handleSave = () => {
    if (!cid) {
      console.error("Course ID is missing");
      return;
    }

    if (!aid) {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(updateAssignment({ ...assignment, _id: aid, course: cid }));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleChange = (field: string, value: string) => {
    setAssignment({ ...assignment, [field]: value });
  };


  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <input
          type="text"
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) => handleChange("title", e.target.value)}
          readOnly={!isFaculty} // Read-only for non-faculty
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          value={assignment.description}
          onChange={(e) => handleChange("description", e.target.value)}
          readOnly={!isFaculty} 
        />
      </div>

      <table className="table table-borderless w-100">
        <tbody>
          <tr className="mb-3">
            <td>
              <div className="row align-items-center">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-10">
                  <input
                    id="wd-points"
                    type="number"
                    className="form-control"
                    value={assignment.points}
                    onChange={(e) => handleChange("points", e.target.value)}
                    readOnly={!isFaculty} 
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row align-items-center">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-due-date">Due Date</label>
                </div>
                <div className="col-md-10">
                  <input
                    type="date"
                    id="wd-due-date"
                    className="form-control"
                    value={assignment.dueDate}
                    onChange={(e) => handleChange("dueDate", e.target.value)}
                    readOnly={!isFaculty} 
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row align-items-center">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-start-date">Available from</label>
                </div>
                <div className="col-md-10">
                  <input
                    type="date"
                    id="wd-start-date"
                    className="form-control"
                    value={assignment.startDate}
                    onChange={(e) => handleChange("startDate", e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="row g-3 mt-2">
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary float-end me-3">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger float-end">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}


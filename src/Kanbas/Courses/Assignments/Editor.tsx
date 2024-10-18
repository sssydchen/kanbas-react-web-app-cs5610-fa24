import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = db.assignments.filter((a) => a._id === aid)[0];

  if (!assignment) return <div>Loading...</div>;

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        <input
          type="text"
          id="wd-name"
          className="form-control"
          defaultValue={assignment.title}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          defaultValue={assignment.description}
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
                    defaultValue={assignment.points}
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row align-items-center">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-group">Assignment Group</label>
                </div>
                <div className="col-md-10">
                  <select id="wd-group" className="form-select">
                    <option value="assignments">ASSIGNMENTS</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row align-items-center">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </div>
                <div className="col-md-10">
                  <select id="wd-display-grade-as" className="form-select">
                    <option value="assignments">Percentage</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-submission-type">Submission Type</label>
                </div>
                <div className="col-md-10">
                  <div className="border p-2">
                    <select id="wd-submission-type" className="form-select">
                      <option value="online">Online</option>
                      <option value="inperson">In Person</option>
                    </select>

                    <div className="mb-2 mt-4">
                      <label className="form-label fw-bold">Online Entry Options</label>
                      <div className="form-check mb-3">
                        <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                        <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                      </div>
                      <div className="form-check mb-3">
                        <input type="checkbox" id="wd-website-url" className="form-check-input" />
                        <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                      </div>
                      <div className="form-check mb-3">
                        <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                        <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                      </div>
                      <div className="form-check mb-3">
                        <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                        <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                      </div>
                      <div className="form-check mb-3">
                        <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                        <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr className="mb-3">
            <td>
              <div className="row">
                <div className="col-md-2 text-end">
                  <label htmlFor="wd-assign-to">Assign</label>
                </div>
                <div className="col-md-10">
                  <div className="border p-3">
                    <div className="col-md-10">
                      <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                      <input type="text" id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                    </div>
                    <div className="col-md-10 mt-3">
                      <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                      <input type="date" id="wd-due-date" className="form-control" defaultValue={assignment.dueDate} />
                    </div>

                    <div className="row g-3 mt-3">
                      <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                        <input type="date" id="wd-available-from" className="form-control" defaultValue={assignment.startDate} />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                        <input type="date" id="wd-available-until" className="form-control" defaultValue={assignment.dueDate} />
                      </div>
                    </div>

                  </div>
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
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger float-end">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}

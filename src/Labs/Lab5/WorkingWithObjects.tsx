import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "Express Module",
    description: "A module on ExpressJS basics",
    course: "NodeJS Course",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Assignment Properties</h4>
      <a
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title{" "}
      </a>
      <input
        className="form-control w-75"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />{" "}
      <hr />

      <a
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score{" "}
      </a>
      <input
        className="form-control w-75"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
      />{" "}
      <hr />

      <a className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input
        className="form-check-input"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
      />
      <label
        htmlFor="completed-checkbox"
        style={{ marginLeft: "10px" }} 
      >
        Completed
      </label>
      <hr />


      {/* Module Modifying Properties */}
      <h4>Modifying Module Properties</h4>
      <a className="btn btn-primary float-end" href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input
        className="form-control w-75"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

      <a className="btn btn-primary float-end" href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description
      </a>
      <input
        className="form-control w-75"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />

      {/* Retrieving Module */}
      <h4>Retrieving Modules</h4>
      <a className="btn btn-primary" href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr />


      {/* Retrieving Module Name */}
      <h4>Retrieving Module Name</h4>
      <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />
    </div>
  );
}
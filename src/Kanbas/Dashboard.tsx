// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as enrollmentsClient from "./Courses/Enrollments/client";
// import { enroll, unenroll } from "./Courses/Enrollments/enrollmentsReducer";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
//   enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isFaculty = currentUser?.role === "FACULTY";

//   const handleEnrollToggle = async (courseId: string, enrolled: boolean) => {
//     if (!currentUser) return;

//     try {
//       if (enrolled) {
//         await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
//         dispatch(unenroll({ user: currentUser._id, course: courseId }));
//       } else {
//         const newEnrollment = await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
//         dispatch(enroll(newEnrollment));
//       }
//     } catch (error) {
//       console.error("Failed to toggle enrollment:", error);
//     }
//   };

//   const navigateToCourse = (courseId: string) => {
//     navigate(`/Kanbas/Courses/${courseId}/Home`);
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard
//         <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
//           {enrolling ? "My Courses" : "All Courses"}
//         </button>
//       </h1>
//       <hr />

//       {isFaculty && (
//         <>
//           <h5>
//             New Course
//             <button className="btn btn-primary float-end" onClick={addNewCourse}>
//               Add
//             </button>
//             <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
//               Update
//             </button>
//           </h5>
//           <br />
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </>
//       )}

//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
//         {courses.map((course) => (
//           <div key={course._id} className="col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 to={`/Kanbas/Courses/${course._id}/Home`}
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <img src={course.image} width="100%" height={160} alt="Course Thumbnail" />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     {enrolling && (
//                       <button onClick={(event) => {
//                         event.preventDefault();
//                         updateEnrollment(course._id, !course.enrolled);
//                       }}
//                         className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
//                         {course.enrolled ? "Unenroll" : "Enroll"}
//                       </button>
//                     )}
//                     {course.name}</h5>
//                   <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                     {course.description}
//                   </p>

//                   {/* {!isFaculty && (
//                     <button
//                       className={`btn ${course.enrolled ? "btn-danger" : "btn-success"}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleEnrollToggle(course._id, course.enrolled);
//                       }}
//                     >
//                       {course.enrolled ? "Unenroll" : "Enroll"}
//                     </button>
//                   )} */}

//                   <button
//                     className="btn btn-primary"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       navigateToCourse(course._id);
//                     }}
//                   >
//                     Go
//                   </button>

//                   {isFaculty && (
//                     <>
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           deleteCourse(course._id);
//                         }}
//                         className="btn btn-danger float-end"
//                       >
//                         Delete
//                       </button>
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           setCourse(course);
//                         }}
//                         className="btn btn-warning me-2 float-end"
//                       >
//                         Edit
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  return (
    <div id="wd-dashboard">
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <button className="btn btn-primary float-end" onClick={addNewCourse}>
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
        >
          Update
        </button>
      </h5>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: 300 }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}

                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <pre>{JSON.stringify(courses, null, 3)}</pre>
    </div>
  );
}
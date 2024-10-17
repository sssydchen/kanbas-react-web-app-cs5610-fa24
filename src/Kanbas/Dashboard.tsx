// import { Link } from "react-router-dom";
// import { FaRegEdit } from "react-icons/fa"; // Importing the FaRegEdit icon

// export default function Dashboard() {
//   // Array of course data
//   const courses = [
//     {
//       id: "1234",
//       name: "CS1234 React JS",
//       description: "Full Stack Software Developer",
//       image: "/images/reactjs.jpg",
//     },
//     {
//       id: "5600",
//       name: "CS5600 Computer Systems",
//       description: "Operating Systems",
//       image: "/images/compsystems.jpg",
//     },
//     {
//       id: "5800",
//       name: "CS5800 Algorithms",
//       description: "Easy and Advanced Algorithms",
//       image: "/images/algorithm.jpg",
//     },
//     {
//       id: "6140",
//       name: "CS6140 Machine Learning",
//       description: "Constructing algorithms that learn and make optimal decisions",
//       image: "/images/machine.jpg",
//     },
//     {
//       id: "5310",
//       name: "CS5310 Computer Graphics",
//       description: "Fundamentals of two and three dimensional computer graphics",
//       image: "/images/graphics.jpg",
//     },
//     {
//       id: "7150",
//       name: "CS7150 Deep Learning",
//       description: "Introduces deep learning",
//       image: "/images/deeplearning.jpg",
//     },
//     {
//       id: "5100",
//       name: "CS5100 Foundations of AI",
//       description: "Foundations of artificial intelligence",
//       image: "/images/ai.jpg",
//     },
//     {
//       id: "5540",
//       name: "CS5540 Game Programming",
//       description: "Game Programming",
//       image: "/images/game.png",
//     },
//   ];

//   return (
//     <div id="wd-dashboard" className="ms-5">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
//         {courses.map((course, index) => (
//           <div className="col" key={index}>
//             <div className="card h-100" style={{ width: "250px", minWidth: "250px" }}>
//               <Link to={`/Kanbas/Courses/${course.id}/Home`} className="text-decoration-none text-dark">
//                 <img src={course.image} className="card-img-top" alt={course.name} style={{ height: "160px", objectFit: "cover" }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{course.name}</h5>
//                   <p className="card-text">{course.description}</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);}
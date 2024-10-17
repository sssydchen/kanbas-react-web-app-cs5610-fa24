// import { useParams } from "react-router";
// import * as db from "../../Database";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModulesControlButtons";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";

// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;
//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       {/* Implement Collapse All button, View Progress button, etc. */}
//       <ul className="mt-2 list-group rounded-0 w-100">
//         <li
//           className="wd-module list-group-item p-0
//                    mb-5 fs-5 border-gray"
//         >
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             Week 1<ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES<LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1 <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2 <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//         <li
//           className="wd-module list-group-item p-0
//                    mb-5 fs-5 border-gray"
//         >
//           <div className="wd-title p-3 ps-2 bg-secondary">
//           <BsGripVertical className="me-2 fs-3" />
//             Week 2 <ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1 <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2 <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul className="mt-2 list-group rounded-0 w-100">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0
                   mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons &&
                  module.lessons.map((lesson) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
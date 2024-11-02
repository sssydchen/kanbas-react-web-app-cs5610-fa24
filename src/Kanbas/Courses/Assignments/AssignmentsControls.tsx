import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import BsPlus icon

export default function AssignmentsControls() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill bg-transparent border custom-badge text-dark px-3 me-2">
        40% of Total
      </span>
      <BsPlus className="fs-2 me-2" /> {/* BsPlus icon */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

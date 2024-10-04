import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import BsPlus icon
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-2 me-2" /> {/* BsPlus icon */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteAssignment(assignmentId)}
        title="Delete Assignment"
        style={{ cursor: "pointer" }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}

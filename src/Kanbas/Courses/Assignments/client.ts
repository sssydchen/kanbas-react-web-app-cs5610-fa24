import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api`;

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axios.post(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  await axios.delete(`${ASSIGNMENTS_API}/assignments/${assignmentId}`);
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/assignments/${assignmentId}`, assignment);
  return response.data;
};
export function fetchAssignmentById(aid: string) {
  throw new Error("Function not implemented.");
}


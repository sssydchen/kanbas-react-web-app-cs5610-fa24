import axios from "axios";

const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  await axios.delete(ENROLLMENTS_API, { data: { userId, courseId } });
};

export const getUserEnrollments = async (userId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

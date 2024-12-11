import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.delete(ENROLLMENTS_API, { data: { userId, courseId } });
};

export const getUserEnrollments = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

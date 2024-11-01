import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
  viewAllCourses: boolean;
}

const initialState: EnrollmentsState = {
  enrollments: [],
  viewAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleViewAllCourses: (state) => {
      state.viewAllCourses = !state.viewAllCourses;
    },
    enroll: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments.push(action.payload);
    },
    unenroll: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.user !== action.payload.user || enrollment.course !== action.payload.course
      );
    },
  },
});

export const { toggleViewAllCourses, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

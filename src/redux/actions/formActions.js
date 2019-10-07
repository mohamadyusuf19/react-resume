import { PERSONAL_INFO, EDUCATION, EXPERIENCE, SKILL } from "../types";

export const personalActions = data => ({
  type: PERSONAL_INFO,
  payload: data
});

export const educationActions = data => ({
  type: EDUCATION,
  payload: data
});

export const experienceActions = data => ({
  type: EXPERIENCE,
  payload: data
});

export const skillActions = data => ({
  type: SKILL,
  payload: data
});

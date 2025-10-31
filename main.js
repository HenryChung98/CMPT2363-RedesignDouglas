import { data } from "./data.js";
import { TimeTableSection } from "./sections/TimetableSection.js";
import { DetailSection } from "./sections/DetailSection.js";

const root = document.getElementById("root");
const semesterTitle = document.getElementById("semester-title");
const scheduleContainer = document.getElementById("schedule-container");

const semesters = Object.keys(data.schedule);
const fallSemester = semesters[0]; // Fall2025

// set current semester text
semesterTitle.textContent = fallSemester;

// get sections
const timeTableSection = TimeTableSection();
const detailSection = DetailSection();

scheduleContainer.append(timeTableSection, detailSection);

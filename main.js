import { data } from "./data.js";
import { TimeTableSection } from "./sections/TimetableSection.js";
import { DetailSection } from "./sections/DetailSection.js";

const semesterTitle = document.getElementById("semester-title");
const scheduleButton = document.getElementById("schedule-button");
const detailButton = document.getElementById("detail-button");
const scheduleContainer = document.getElementById("schedule-container");

const semesters = Object.keys(data.schedule);
const fallSemester = semesters[0]; // Fall2025

// set current semester text
semesterTitle.textContent = fallSemester;

// get sections
const timeTableSection = TimeTableSection();
const detailSection = DetailSection();
detailSection.style.display = "none"; // initially hide detail section

scheduleContainer.append(timeTableSection, detailSection);

// button handler
scheduleButton.addEventListener("click", () => {
  scheduleButton.disabled = true;
  detailButton.disabled = false;
  timeTableSection.style.display = "block";
  detailSection.style.display = "none";
});

detailButton.addEventListener("click", () => {
  scheduleButton.disabled = false;
  detailButton.disabled = true;
  timeTableSection.style.display = "none";
  detailSection.style.display = "block";
});

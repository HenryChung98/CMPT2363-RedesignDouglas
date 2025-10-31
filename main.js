import { data } from "./data.js";
import { TimeTableSection } from "./sections/TimetableSection.js";
import { DetailSection } from "./sections/DetailSection.js";

const semesterTitle = document.getElementById("semester-title");
const semesterSelect = document.getElementById("semester-select");
const scheduleButton = document.getElementById("schedule-button");
const detailButton = document.getElementById("detail-button");
const scheduleContainer = document.getElementById("schedule-container");

const semesters = Object.keys(data.schedule);
let currentSemester = semesters[0];

// initialize semester-select
semesters.forEach((semester) => {
  const option = document.createElement("option");
  option.value = semester;
  option.textContent = semester;
  semesterSelect.append(option);
});
semesterSelect.value = currentSemester;

// set current semester text
semesterTitle.textContent = `Class Schedule for ${currentSemester}`;

// function to render current semester sections
const renderSections = () => {
  scheduleContainer.innerHTML = "";

  const timeTableSection = TimeTableSection({ currentSemester });
  const detailSection = DetailSection({ currentSemester });

  //
  if (scheduleButton.disabled) {
    timeTableSection.style.display = "block";
    detailSection.style.display = "none";
  } else {
    timeTableSection.style.display = "none";
    detailSection.style.display = "block";
  }

  scheduleContainer.append(timeTableSection, detailSection);
};

// initial render
renderSections();

// ========================= button handlers =========================
scheduleButton.addEventListener("click", () => {
  scheduleButton.disabled = true;
  detailButton.disabled = false;
  renderSections();
});

detailButton.addEventListener("click", () => {
  scheduleButton.disabled = false;
  detailButton.disabled = true;
  renderSections();
});

// semester select change handler
semesterSelect.addEventListener("change", (e) => {
  currentSemester = e.target.value;
  semesterTitle.textContent = `Class Schedule for ${currentSemester}`;
  renderSections();
});

import { TimeTable } from "../components/TimeTable.js";

export const TimeTableSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.className = "schedule-timetable";
  section.appendChild(TimeTable({ rowNum: 8, colNum: 8, currentSemester }));

  return section;
};

import { TimeTable } from "../components/TimeTable.js";

export const TimeTableSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.id = "schedule-timetable";
  section.append(TimeTable({ rowNum: 30, colNum: 8, currentSemester }));

  return section;
};

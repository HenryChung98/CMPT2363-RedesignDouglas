import { TimeTable } from "../components/TimeTable.js";
import { CourseBlock } from "../components/CourseBlock.js";

export const TimeTableSection = () => {
  const section = document.createElement("section");
  section.className = "schedule-timetable";
  section.appendChild(TimeTable({ rowNum: 8, colNum: 8 }));

  // display course blocks
  // data.schedule[fallSemester].courses.forEach((course) => {
  //   root.appendChild(
  //     CourseBlock({
  //       details: [
  //         course.code,
  //         course.title,
  //         course.title,
  //         course.title,
  //         course.title,
  //       ],
  //       backColor: "#82caff",
  //       borderColor: "#0041c2",
  //     })
  //   );
  // });
  return section;
};

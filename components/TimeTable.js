import { data } from "../data.js";
import { CourseBlock } from "./CourseBlock.js";

export const TimeTable = ({ rowNum, colNum, currentSemester }) => {
  const table = document.createElement("div");
  table.className = "table";

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const times = [];
  for (let hour = 8; hour <= 22; hour++) {
    times.push(`${String(hour).padStart(2, "0")}:00`);
    times.push(`${String(hour).padStart(2, "0")}:30`);
  }

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      const col = document.createElement("div");
      col.className = `cell-${i}-${j}`;

      // first cell
      if (i === 0 && j === 0) {
        col.style.backgroundColor = "#cccccc";
      }

      // days
      if (i === 0) {
        col.textContent = days[j - 1];
        col.style.backgroundColor = "#cccccc";
      }

      // times
      else if (j === 0 && i > 0) {
        col.textContent = times[i - 1];
        col.style.backgroundColor = "#cccccc";
        col.style.position = "relative";
        col.style.transform = "translateY(-50%)";
      }

      // all cells has data attributes for day and time
      else {
        const day = days[j - 1];
        const time = times[i - 1];
        col.dataset.day = day;
        col.dataset.time = time;
      }

      table.append(col);
    }
  }

  // ==================== rendering course block logic ====================
  // const positionCourseBlocks = () => {
  //   data.schedule[currentSemester].courses.forEach((course) => {
  //     course.days.forEach((day) => {
  //       // get the start cell of the course
  //       const startCell = table.querySelector(
  //         `[data-day="${day}"][data-time="${course.time.startTime}"]`
  //       );

  //       // if the course block is not in the table, create a new one, otherwise use the existing one
  //       const courseBlock =
  //         table.querySelector(`[data-course="${course.code}"]`) ||
  //         CourseBlock({
  //           details: [course.code, course.title, course.time.startTime],
  //           backColor: course.waitlisted ? "#F1C9C4" : "#82caff",
  //           borderColor: course.waitlisted ? "#A43723" : "#0041c2",
  //           waitlisted: course.waitlisted,
  //         });

  //       // add the course code to the course block and append it to the table
  //       courseBlock.dataset.course = course.code;
  //       table.append(courseBlock);

  //       // get the position of the start cell
  //       const rect = startCell.getBoundingClientRect();
  //       // get the position of the table
  //       const tableRect = table.getBoundingClientRect();

  //       courseBlock.style.position = "absolute";
  //       courseBlock.style.top = rect.top - tableRect.top + table.scrollTop + "px";
  //       courseBlock.style.left = rect.left - tableRect.left + table.scrollLeft + "px";
  //       courseBlock.style.width = rect.width + "px";
  //       courseBlock.style.height = 70 * course.time.hours + "px";
  //     });
  //   });
  // };
  const positionCourseBlocks = () => {
    // Remove all existing course blocks to prevent duplication
    table.querySelectorAll("[data-course]").forEach((block) => block.remove());

    data.schedule[currentSemester].courses.forEach((course) => {
      course.days.forEach((day) => {
        const startCell = table.querySelector(
          `[data-day="${day}"][data-time="${course.time.startTime}"]`
        );

        // Create a NEW course block for each day
        const courseBlock = CourseBlock({
          details: [course.code, course.title, course.time.startTime],
          backColor: course.waitlisted ? "#F1C9C4" : "#82caff",
          borderColor: course.waitlisted ? "#A43723" : "#0041c2",
          waitlisted: course.waitlisted,
        });

        courseBlock.dataset.course = course.code;
        courseBlock.dataset.day = day; // Add day to differentiate blocks
        table.append(courseBlock);

        const rect = startCell.getBoundingClientRect();
        const tableRect = table.getBoundingClientRect();

        courseBlock.style.position = "absolute";
        courseBlock.style.top = rect.top - tableRect.top + table.scrollTop + "px";
        courseBlock.style.left = rect.left - tableRect.left + table.scrollLeft + "px";
        courseBlock.style.width = rect.width + "px";
        courseBlock.style.height = 70 * course.time.hours + "px";
      });
    });
  };
  // render course blocks after the table is rendered
  setTimeout(positionCourseBlocks, 0);

  // update the position of the course blocks when the window is resized
  window.addEventListener("resize", positionCourseBlocks);

  return table;
};

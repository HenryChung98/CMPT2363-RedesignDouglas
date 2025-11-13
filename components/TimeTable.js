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
        col.style.backgroundColor = "#dddddd";
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

  const positionCourseBlocks = () => {
    // Remove all existing course blocks to prevent duplication
    table.querySelectorAll("[data-course]").forEach((block) => block.remove());

    // find columns that have course blocks
    const activeDays = new Set();
    if (data.schedule[currentSemester]?.courses) {
      data.schedule[currentSemester].courses.forEach((course) => {
        course.days?.forEach((day) => activeDays.add(day));
      });
    }

    // deactivate unused day columns
    days.forEach((day, index) => {
      const dayIndex = index + 1;
      for (let i = 0; i < rowNum; i++) {
        const cell = table.querySelector(`.cell-${i}-${dayIndex}`);
        if (cell && !activeDays.has(day)) {
          cell.style.backgroundColor = "#f0f0f0";
        }
      }
    });

    data.schedule[currentSemester].courses.forEach((course) => {
      course.days.forEach((day) => {
        const startCell = table.querySelector(
          `[data-day="${day}"][data-time="${course.time.startTime}"]`
        );

        // Create a NEW course block for each day
        const courseBlock = CourseBlock({
           course,
          //waitlist color
          blockColor: course.courseEnrollment.waitlistCurrent 
            ? "#FF867C" : course.blockColor ? course.blockColor 
            : "#90CAF9",
          
          waitlisted: course.courseEnrollment.waitlistCurrent,
            //border glow
          glow: course.courseEnrollment.waitlistCurrent
            ? true
            : false,
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
        courseBlock.style.height = 80 * course.time.hours + "px";
      });
    });
  };
  // render course blocks after the table is rendered
  setTimeout(positionCourseBlocks, 0);

  // update the position of the course blocks when the window is resized
  window.addEventListener("resize", positionCourseBlocks);

  return table;
};

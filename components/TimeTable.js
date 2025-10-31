import { data } from "../data.js";
import { CourseBlock } from "./CourseBlock.js";

export const TimeTable = ({ rowNum, colNum, currentSemester }) => {
  const table = document.createElement("div");
  table.className = "table";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
      }

      // all cells has data attributes for day and time
      else {
        const day = days[j - 1];
        const time = times[i - 1];
        col.dataset.day = day;
        col.dataset.time = time;
        col.textContent = `${day} at ${time}`;
      }

      table.appendChild(col);
    }
  }

  // ==================== rendering course block logic ====================
  data.schedule[currentSemester].courses.forEach((course) => {
    // const cell = table.querySelector(`[data-day="${course.day}"][data-time="${course.time}"]`);
    table.appendChild(
      CourseBlock({
        details: [course.code, course.title],
        backColor: "#82caff",
        borderColor: "#0041c2",
      })
    );
  });

  return table;
};

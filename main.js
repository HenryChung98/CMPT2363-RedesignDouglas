import { data } from "./data.js";
import { TimeTable } from "./components/TimeTable.js";
import { CourseBlock } from "./components/CourseBlock.js";

const root = document.getElementById("root");

const semesters = Object.keys(data.schedule);
const fallSemester = semesters[0]; // Fall2025

// display Semester text
const semesterTitle = document.createElement("h1");
semesterTitle.textContent = fallSemester;
root.appendChild(semesterTitle);

// display timetable
root.appendChild(TimeTable({ rowNum: 6, colNum: 8 }));

// display course blocks
data.schedule[fallSemester].courses.forEach((course) => {
  root.appendChild(
    CourseBlock({
      details: [
        course.code,
        course.title,
        course.title,
        course.title,
        course.title,
      ],
      backColor: "#82caff",
      borderColor: "#0041c2",
    })
  );
});
// const course = data.schedule[fallSemester].courses[0];

// root.appendChild(
//   CourseBlock({
//     details: [course.code, course.title],
//     backColor: "#82caff",
//     borderColor: "#0041c2",
//   })
// );

export const CourseBlock = ({ details, backColor, waitlisted = false }) => {
  const div = document.createElement("div");
  div.className = "course-block";
  div.href = "#";
  div.style.backgroundColor = backColor;
  div.style.cursor = "pointer";

  div.innerHTML = `
    <p><span style="color: #A43723;">${waitlisted ? "⚠ " : ""}</span>${details.startTime} - ${
    details.endTime
  }</p>
    <p style="font-weight: normal;">${details.code}-${details.section}</p>
    <p style="font-weight: normal;">${details.title}</p>
    <p style="font-weight: normal;">${details.campus} - ${details.roomNum}</p>
    <p style="font-weight: normal;">${details.instructor}</p>
  `;

  return div;
};

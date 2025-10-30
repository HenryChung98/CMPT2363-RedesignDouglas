export const CourseBlock = ({ details, backColor, borderColor }) => {
  const div = document.createElement("div");
  div.className = "course-block";

  div.style.backgroundColor = backColor;
  div.style.border = `2px solid ${borderColor}`;

  details.forEach((detail) => {
    const p = document.createElement("p");
    p.textContent = detail;
    div.appendChild(p);
  });

  return div;
};

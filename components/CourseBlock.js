export const CourseBlock = ({ details, backColor, borderColor, waitlisted = false }) => {
  const div = document.createElement("div");
  div.className = "course-block";

  div.style.backgroundColor = backColor;
  div.style.border = `2px solid ${borderColor}`;

  details.forEach((detail, index) => {
    const p = document.createElement("p");
    if (waitlisted && index === 0) {
      p.textContent = "⚠ " + detail;
    } else {
      p.textContent = detail;
    }
    div.append(p);
  });

  return div;
};

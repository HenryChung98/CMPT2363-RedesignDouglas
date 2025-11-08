export const CourseBlock = ({ details, backColor, borderColor, waitlisted = false }) => {
  const a = document.createElement("a");
  a.className = "course-block";
  a.href = "#";
  a.style.backgroundColor = backColor;
  a.style.border = `2px solid ${borderColor}`;


  details.forEach((detail, index) => {
    const p = document.createElement("p");
    if (waitlisted && index === 0) {
      p.textContent = "⚠ " + detail;
    } else {
      p.textContent = detail;
    }
    a.append(p);
  });

  return a;
};

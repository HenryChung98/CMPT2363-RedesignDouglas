import { Modal } from "./Modal.js";

export const CourseBlock = ({ course, backColor, waitlisted = false }) => {
  const { code, title, section, instructor, location, time, scheduleType, modal } = course;
  const { roomNum, campus, campusShort } = location;
  const { startTime, endTime } = time;

  const div = document.createElement("div");
  div.className = "course-block";
  div.href = "#";
  div.style.backgroundColor = backColor;
  div.style.cursor = "pointer";

  div.innerHTML = `
    <p><span style="color: #A43723;">${waitlisted ? "⚠ " : ""}</span>${startTime} - ${
    endTime
  }</p>
    <p style="font-weight: normal;">${code}-${section}</p>
    <p style="font-weight: normal;">${title}</p>
    <p style="font-weight: normal;">${campusShort} - ${roomNum}</p>
    <p style="font-weight: normal;">${instructor}</p>
  `;

  div.addEventListener("click", (e) => {
    e.preventDefault();

    const overlay = document.createElement("div");
    overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    `;
    document.body.append(overlay);

    const modal = Modal({ course });

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.style.cssText = `
      padding: 8px 24px;
      margin-top: 20px; 
      background: #666;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
      margin-left: auto;
      display: block;
    `;

    overlay.append(modal);
    modal.append(closeBtn);

    closeBtn.addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  });
  return div;
};

export const DetailRight = ({ course }) => {
  const { message, credits, level, scheduleType, courseEnrollment } = course;
  const { waitlistCurrent } = courseEnrollment;

  const div = document.createElement("div");
  div.className = "detail-block-right";
  div.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    padding-left: 20px;
    margin-bottom: 20px;
  `;

  div.innerHTML = `
      <p>Message: <span style="font-weight: normal; color: ${
        message === "Registered"
          ? "#5BC88B"
          : message === "Waitlisted"
          ? "#D35534"
          : "#333333"
      }">${message}</span></p>
      <p>Credits: <span style="font-weight: normal">${credits}</span></p>
      <p>Level: <span style="font-weight: normal">${level}</span></p>
      <p>Schedule Type: <span style="font-weight: normal">${scheduleType}</span></p>
      <p>Grade Mode: <span style="font-weight: normal">Normal Grading Mode</span></p>
      <p>Waitlist Position: <span style="font-weight: normal">${waitlistCurrent}</span></p>
  `;
  return div;
};
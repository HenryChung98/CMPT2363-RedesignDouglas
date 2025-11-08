export const DetailRight = ({ detailsRight }) => {
  const div = document.createElement("div");
  div.className = "detail-block-right";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.gap = "4px";
  div.style.fontSize = "14px";
  div.style.paddingLeft = "20px";
  div.style.marginBottom = "20px";

  div.innerHTML = `
      <p>Message: <span style="font-weight: normal; color: ${
        detailsRight.message === "Registered"
          ? "#5BC88B"
          : detailsRight.message === "Waitlisted"
          ? "#D35534"
          : "#333333"
      }">${detailsRight.message}</span></p>
      <p>Credits: <span style="font-weight: normal">${detailsRight.credits}</span></p>
      <p>Level: <span style="font-weight: normal">${detailsRight.level}</span></p>
      <p>Schedule Type: <span style="font-weight: normal">${detailsRight.scheduleType}</span></p>
      <p>Grade Mode: <span style="font-weight: normal">Normal Grading Mode</span></p>
      <p>Waitlist Position: <span style="font-weight: normal">${
        detailsRight.waitlistCurrent
      }</span></p>
  `;
  return div;
};

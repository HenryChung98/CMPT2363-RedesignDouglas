export const DetailLeft = ({ detailsLeft }) => {
  const div = document.createElement("div");
  div.className = "detail-block-left";
  div.style.cssText = `
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    border-right: 2px solid #939598;
    padding-right: 20px;
    margin-bottom: 20px;
  `;

  div.innerHTML = `
      <div style="display: flex;">
        <p>${detailsLeft.startTime}</p>
        <p>&nbsp;&nbsp;-&nbsp;&nbsp;</p>
        <p>${detailsLeft.endTime}</p>
      </div>  
      <p>Location: <span style="font-weight: normal">${detailsLeft.campus}</span></p>
      <p>Building: <span style="font-weight: normal">${detailsLeft.building}</span></p>
      <p>Room: <span style="font-weight: normal">${detailsLeft.roomNum}</span></p>
      <p>Instructor: <a href="mailto:test@test" style="color: #2B7DA1; font-weight: normal">${detailsLeft.instructor}</a><span style="font-weight: normal">&nbsp;&nbsp;(Primary)</span></p>
      <p>CRN: <span style="font-weight: normal">${detailsLeft.crn}</span></p>
  `;
  return div;
};

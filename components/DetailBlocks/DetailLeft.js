export const DetailLeft = ({ detailsLeft }) => {
  const div = document.createElement("div");
  div.className = "detail-block-left";
  div.style.paddingLeft = "10px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.gap = "4px";
  div.style.fontSize = "14px";
  div.style.borderRight = "2px solid #939598";
  div.style.paddingRight = "20px";
  div.style.marginBottom = "20px";

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

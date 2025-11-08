import { DaysBlock } from "./DaysBlock.js";

export const DetailTop = ({ detailsTop, days }) => {
  const div = document.createElement("div");
  div.className = "detail-block-top";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.padding = "10px";

  div.innerHTML = `
    <div style="display: flex; font-size: 15px; gap: 8px; padding-bottom: 20px;">
      <a href="#" style="color: #2B7DA1;">${detailsTop.title}</a>
      <p style="border-left: 2px solid black; padding-left: 8px;">${detailsTop.code}</p>
      <p>Section ${detailsTop.section}</p>
      <a href="#" style="border-left: 2px solid black; padding-left: 8px; color: #2B7DA1;">Blackboard</a>
    </div>
    <div style="display: flex; align-items: center; font-size: 14px">
      <p>${detailsTop.startDate}</p>
      <p>&nbsp;&nbsp;-&nbsp;&nbsp;</p>
      <p>${detailsTop.endDate}</p>
    </div>
  `;
  const lastDiv = div.lastElementChild;
  const daysBlock = DaysBlock(days);
  daysBlock.style.paddingLeft = "15px";
  lastDiv.appendChild(daysBlock);
  return div;
};

import { DaysBlock } from "./DaysBlock.js";

export const DetailTop = ({ course }) => {
  const { title, code, section, dateRange, days } = course;
  const { startDate, endDate } = dateRange;

  const div = document.createElement("div");
  div.className = "detail-block-top";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.padding = "10px";

  div.innerHTML = `
    <div style="display: flex; font-size: 15px; gap: 8px; padding-bottom: 20px;">
      <a href="#" style="color: #2B7DA1; target="_blank"">${title}</a>
      <p style="border-left: 2px solid black; padding-left: 8px;">${code}</p>
      <p>Section ${section}</p>
      <a href="#" style="border-left: 2px solid black; padding-left: 8px; color: #2B7DA1;">Blackboard</a>
    </div>
    <div style="display: flex; align-items: center; font-size: 14px">
      <p>${startDate}</p>
      <p>&nbsp;&nbsp;-&nbsp;&nbsp;</p>
      <p>${endDate}</p>
    </div>
  `;
  const lastDiv = div.lastElementChild;
  const daysBlock = DaysBlock(days);
  daysBlock.style.paddingLeft = "15px";
  lastDiv.appendChild(daysBlock);
  return div;
};
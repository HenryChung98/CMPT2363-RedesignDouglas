import { DetailBlock } from "../components/DetailBlocks/DetailBlock.js";
import { data } from "../data.js";

export const DetailSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.id = "schedule-details";

  data.schedule[currentSemester].courses.forEach((course) => {
    section.appendChild(DetailBlock({ course }));
  });
  return section;
};

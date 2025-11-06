import { DetailBlock } from "../components/DetailBlock.js";
import { data } from "../data.js";

export const DetailSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.id = "schedule-details";

  data.schedule[currentSemester].courses.forEach((course) => {
    section.appendChild(
      DetailBlock({
        detailsLeft: [course.code, course.title],
        detailsRight: [course.code, course.title],
        waitlisted: course.waitlisted,
      })
    );
  });
  return section;
};

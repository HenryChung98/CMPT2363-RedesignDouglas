export const DetailSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.className = "schedule-details";
  section.textContent = `this is ${currentSemester} detail section`;
  return section;
};

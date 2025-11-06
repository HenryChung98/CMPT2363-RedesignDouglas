export const DetailBlock = ({ detailsLeft, detailsRight, waitlisted = false }) => {
  const div = document.createElement("div");
  div.className = "detail-block";

  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
  div.append(divLeft);
  div.append(divRight);

  detailsLeft.forEach((detail) => {
    const p = document.createElement("p");
    p.textContent = detail;
    divLeft.append(p);
  });

  detailsRight.forEach((detail) => {
    const p = document.createElement("p");
    p.textContent = detail;
    divRight.append(p);
  });

  return div;
};

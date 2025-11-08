import { DetailTop } from "./DetailTop.js";
import { DetailLeft } from "./DetailLeft.js";
import { DetailRight } from "./DetailRight.js";

export const DetailBlock = ({
  detailsTop,
  detailsLeft,
  detailsRight,
  days,
}) => {
  const div = document.createElement("div");
  div.className = "detail-block";

  const divTop = DetailTop({ detailsTop, days });
  div.append(divTop);

  const divBottom = document.createElement("div");

  divBottom.className = "detail-block-bottom";
  div.append(divBottom);

  const divLeft = DetailLeft({ detailsLeft });
  const divRight = DetailRight({ detailsRight });
  divBottom.append(divLeft);
  divBottom.append(divRight);

  return div;
};

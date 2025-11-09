import { DetailTop } from "./DetailTop.js";
import { DetailLeft } from "./DetailLeft.js";
import { DetailRight } from "./DetailRight.js";

export const DetailBlock = ({ course }) => {
  const div = document.createElement("div");
  div.className = "detail-block";

  const divTop = DetailTop({ course });
  div.append(divTop);

  const divBottom = document.createElement("div");
  divBottom.className = "detail-block-bottom";
  div.append(divBottom);

  const divLeft = DetailLeft({ course });
  const divRight = DetailRight({ course });
  divBottom.append(divLeft);
  divBottom.append(divRight);

  return div;
};
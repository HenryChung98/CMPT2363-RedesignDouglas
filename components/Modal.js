import { DaysBlock } from "./DetailBlocks/DaysBlock.js";

export const Modal = ({ course, blockColor }) => {
  const {
    title,
    crn,
    instructor,
    location,
    scheduleType,
    section,
    modal,
    credits,
    courseEnrollment,
    linkSection,
    days,
    dateRange,
    time,
    description,
    links,
  } = course;
  const { capacity, current, waitlistMax, waitlistCurrent } = courseEnrollment;
  const { campus, roomNum, building } = location;
  const { courseInfo } = links;

  const div = document.createElement("div");
  div.style.cssText = `
    background: #DCDCDC;
    padding: 20px;
    border-radius: 3px;
    position: relative;
    padding: 20px;
    bottom: 100px;
    width: 700px;
    font-size: 12px;
    overflow: auto;
    `;
  div.innerHTML = `
  <div>
    <div style="font-size: 14px; background: ${blockColor}; border-radius: 3px; padding: 10px;">Class Detail for ${title}</div>
        <div style="display: flex; background: white;">
            <nav style="width: 200px; width: 30%;">
                <div data-tab="first" class="nav-item" style="cursor: pointer; padding: 5px; background: white; border-radius: 1px;">Section Notes & Pre-reqs</div>
                <div data-tab="second" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">class Details</div>
                <div data-tab="third" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Course Description</div>
                <div data-tab="fourth" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Attributes</div>
                <div data-tab="fifth" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Instructor / Meeting Times</div>
                <div data-tab="sixth" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Enrolment / Waitlist</div>
                <div data-tab="seventh" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Linked Sections</div>
                <div data-tab="eighth" class="nav-item" style="cursor: pointer; padding: 5px; background: #EDEDED; border-radius: 1px;">Bookstore Link</div>
            </nav>
            <div style="padding: 10px; padding-left: 20px; width: 70%;">

                <div id="first">
                    <h4>Pre-reqs & Course Info:</h4>
                    <a href="${courseInfo}" target="_blank" style="font-weight: normal;">${courseInfo}</a>

                </div>
                
                <div id="second" style="display: none;"> 
                    <p>CRN: <span style="font-weight: normal">${crn}</span></p>
                    <p>Campus: <span style="font-weight: normal">${campus}</span></p>
                    <p>Schedule Type: <span style="font-weight: normal">${scheduleType}</span></p>
                    <p>Section Number: <span style="font-weight: normal">${section}</span></p>
                    <p>Title: <span style="font-weight: normal">${title}</span></p>
                    <p>Credit Hours: <span style="font-weight: normal">${credits}</span></p>
                    <p>Grade Mode: <span style="font-weight: normal">Normal Grading Mode</span></p>
                    
                </div>
                
                <div id="third" style="display: none;"> 
                    <h4>Section information text:</h4>
                    <p style="font-weight: normal;">${description}</p>
                </div>
                
                <div id="fourth" style="display: none;">
                    <p style="font-weight: normal">UniTrf Math or Stat or CMPTSci MSCS</p>
                    <p style="font-weight: normal">UniTrf Math or Stat or Science MSSC</p>
                    <p style="font-weight: normal">Science & Technology SCMA</p>
                    <p style="font-weight: normal">University Transferable UT</p>
                    <p style="font-weight: normal">Univ. Transf. Science 1st year UTS1</p>
                    <p style="font-weight: normal">Univ. Transf. Science 2nd year UTS2</p>
                </div>
                
                <div id="fifth" style="display: none;">
                    <div style="border: 1px solid #d9d9d9; padding: 10px; width: 100%;">
                        <p style="padding-bottom: 10px;">Instructor: <a href="mailto:test@test" style="color: #2B7DA1; font-weight: normal">${instructor}</a><span style="font-weight: normal">&nbsp;&nbsp;(Primary)</span></p>
                        <div style="display: flex; gap: 10px;">
                            <div id="need-days-block" style="border-right: 1px solid #d9d9d9; flex: 0.7;">
                                <div style="font-weight: normal; padding-bottom: 10px;">${
                                  dateRange.startDate
                                } - ${dateRange.endDate}</div>
                               
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: normal">${time.startTime} - ${
    time.endTime
  }</div>
                                <div style="font-weight: normal">${campus}</div>
                                <div style="font-weight: normal">${building}</div>
                                <div style="font-weight: normal">Room ${roomNum}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="sixth" style="display: none;">
                    <p>Enrollment Maximum: <span style="font-weight: normal">${capacity}</span></p>
                    <p>Enrollment Actual: <span style="font-weight: normal">${current}</span></p>
                    <p>Enrollment Seats Available: <span style="font-weight: normal">${
                      capacity - current
                    }</span></p>
                    <hr style="margin: 10px 0;" />
                    <p>Waitlist Capacity: <span style="font-weight: normal">${waitlistMax}</span></p>
                    <p>Waitlist Actual: <span style="font-weight: normal">${waitlistCurrent}</span></p>
                    <p>Waitlist Seats Available: <span style="font-weight: normal">${
                      waitlistMax - waitlistCurrent
                    }</span></p>
                </div>
                
                <div id="seventh" style="display: none;">
                    <p style="font-weight: normal">${
                      linkSection || "No linked course information available."
                    }</p>
                </div>
                
                <div id="eighth" style="display: none;">
                    <h4 style="margin-bottom: 10px;">Bookstore Links</h4>
                    <p style="font-weight: normal; margin-bottom: 10px;">
                    Use the link(s) below to access online bookstores to determine the cost of required materials.
                    </p>
                    <a href="https://bookstore.douglascollege.ca/" target="_blank" style="font-weight: normal;">DouglasCollegeBookstore</a>
                </div>
            </div>
        </div>
    </div>
    `;

  div.querySelectorAll("[data-tab]").forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.tab;

      div.querySelectorAll(".nav-item").forEach((navItem) => {
        navItem.style.background = "#EDEDED";
      });

      item.style.background = "white";

      div
        .querySelectorAll("#first, #second, #third, #fourth, #fifth, #sixth, #seventh, #eighth")
        .forEach((p) => {
          p.style.display = "none";
        });

      div.querySelector(`#${targetId}`).style.display = "block";
    });
  });

  const targetDiv = div.querySelector("#need-days-block");
  const daysBlock = DaysBlock(days);
  targetDiv.appendChild(daysBlock);
  return div;
};

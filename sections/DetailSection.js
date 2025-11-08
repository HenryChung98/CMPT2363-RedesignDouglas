import { DetailBlock } from "../components/DetailBlocks/DetailBlock.js";
import { data } from "../data.js";

export const DetailSection = ({ currentSemester }) => {
  const section = document.createElement("section");
  section.id = "schedule-details";

  data.schedule[currentSemester].courses.forEach((course) => {
    section.appendChild(
      DetailBlock({
        detailsTop: {
          title: course.title,
          code: course.code,
          section: course.section,
          startDate: course.dateRange.startDate,
          endDate: course.dateRange.endDate,
        },
        detailsLeft: {
          startTime: course.time.startTime,
          endTime: course.time.endTime,
          campus: course.location.campus,
          building: course.location.building,
          roomNum: course.location.roomNum,
          instructor: course.instructor,
          crn: course.crn,
        },
        detailsRight: {
          message: course.message,
          credits: course.credits,
          level: course.level,
          scheduleType: course.scheduleType,
          waitlistCurrent: course.courseEnrollment.waitlistCurrent,
        },
        days: course.days,
      })
    );
  });
  return section;
};

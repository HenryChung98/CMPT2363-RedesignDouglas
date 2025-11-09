export const data = {
  schedule: {
    Fall2025: {
      courses: [
        {
          blockColor: "#82caff",
          crn: 37664,
          code: "CMPT2363",
          section: "001",
          title: "UI Design",
          instructor: "Janzen, Izabelle",
          message: "Registered",
          credits: 3,
          level: "Undergraduated",
          scheduleType: "Lecture",
          courseEnrollment: {
            capacity: 30,
            current: 25,
            waitlistMax: 100,
            waitlistCurrent: 0,
          },
          days: ["Tuesday", "Wednesday"],
          dateRange: {
            startDate: "2025-09-01",
            endDate: "2025-12-10",
          },
          time: {
            startTime: "08:30",
            endTime: "10:20",
            hours: 2,
          },
          location: {
            roomNum: "N661",
            campus: "New Westminister Campus",
            campusShort: "NWN",
            building: "South East Building Westminister - North Bldg",
          },
          modal: {
            bookstoreLink: "#",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        },
        {
          crn: 37841,
          code: "CMPT2276",
          title: "Intro to Software Engineering",
          instructor: "Janzen, Izabelle",
          courseEnrollment: {
            capacity: 30,
            current: 25,
            waitlistMax: 100,
            waitlistCurrent: 1,
          },
          days: ["Monday"],

          dateRange: {
            startDate: "2025-09-01",
            endDate: "2025-12-10",
          },
          time: {
            startTime: "08:30",
            endTime: "10:20",
            hours: 2,
          },
          location: {
            roomNum: "N661",
            campus: "New Westminister Campus",
            building: "South East Building Westminister - North Bldg",
          },
          modal: {
            bookstoreLink: "#",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        },
      ],
    },
    Winter2026: {
      courses: [
        {
          code: "CMPT1109",
          title: "programming 1",
          courseEnrollment: {
            capacity: 30,
            current: 25,
            waitlistMax: 100,
            waitlistCurrent: 0,
          },
          dateRange: {
            startDate: "2025-09-01",
            endDate: "2025-12-10",
          },
          time: {
            startTime: "08:30",
            endTime: "10:20",
            hours: 2,
          },
          location: {
            roomNum: "N661",
            campus: "New Westminister Campus",
            building: "South East Building Westminister - North Bldg",
          },
        },
        {
          code: "CMPT1209",
          title: "programming 2",
          courseEnrollment: {
            capacity: 30,
            current: 25,
            waitlistMax: 100,
            waitlistCurrent: 0,
          },
          dateRange: {
            startDate: "2025-09-01",
            endDate: "2025-12-10",
          },
          time: {
            startTime: "08:30",
            endTime: "10:20",
            hours: 2,
          },
          location: {
            roomNum: "N661",
            campus: "New Westminister Campus",
            building: "South East Building Westminister - North Bldg",
          },
        },
      ],
    },
  },
  totalHours: {},
};

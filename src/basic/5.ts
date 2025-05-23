enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek) => {
  return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
};
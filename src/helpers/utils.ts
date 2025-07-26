import { JOIN_DATE, TODAY } from "./constants";

export const getWorkExperience = () => {
  let years = TODAY.getFullYear() - JOIN_DATE.getFullYear();
  let months = TODAY.getMonth() - JOIN_DATE.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years} year ${months} month(s)`;
};

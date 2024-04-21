export const calculatePeriodLength = (startDateStr, endDateStr, language) => {
  const pattern = /^(0[1-9]|1[0-2])\/\d{4}$/;

  if (!pattern.test(startDateStr)) return "";

  const startDateComponents = startDateStr.split("/");
  const startDate = new Date(
    `${startDateComponents[1]}/${startDateComponents[0]}/01`
  );

  let endDate;
  if (!pattern.test(endDateStr)) {
    endDate = new Date();
  } else {
    const endDateComponents = endDateStr.split("/");
    endDate = new Date(`${endDateComponents[1]}/${endDateComponents[0]}/01`);
  }

  console.log("startDate ", startDate);
  console.log("endDate ", endDate);

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth() + 1;

  const totalMonths = yearsDiff * 12 + monthsDiff;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let periodString = "";
  if (years > 0) {
    periodString += years + (language === "french" ? "a" : "y");
  }
  if (years > 0 && months > 0) {
    periodString += " ";
  }
  if (months > 0) {
    periodString += months + "m";
  }

  return `(${periodString})`;
};

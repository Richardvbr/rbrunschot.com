export const getYearsFrom = (startDate: Date): number =>
  Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));

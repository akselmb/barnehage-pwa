// Get week number and date range
export const getWeekNumber = (date: Date): number => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const getWeekDates = (date: Date): Date[] => {
  const week = [];
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const offset = day === 0 ? -6 : 1 - day; // Sunday => previous Monday
  startOfWeek.setDate(startOfWeek.getDate() + offset);

  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    week.push(day);
  }
  return week;
};

export const getWeekRange = (date: Date): string => {
  const weekDates = getWeekDates(date);
  const startDate = weekDates[0];
  const endDate = weekDates[6];
  
  return `${startDate.getDate()}. ${startDate.toLocaleDateString('nb-NO', { month: 'short' })} - ${endDate.getDate()}. ${endDate.toLocaleDateString('nb-NO', { month: 'short' })}`;
};


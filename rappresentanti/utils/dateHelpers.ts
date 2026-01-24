export const isNewNews = (dateString: string): boolean => {
  const italianMonths: { [key: string]: number } = {
    'Gen': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Mag': 4, 'Giu': 5,
    'Lug': 6, 'Ago': 7, 'Set': 8, 'Ott': 9, 'Nov': 10, 'Dic': 11
  };

  const parts = dateString.split(' ');
  if (parts.length !== 3) return false;

  const day = parseInt(parts[0], 10);
  const monthStr = parts[1];
  const year = parseInt(parts[2], 10);
  const month = italianMonths[monthStr];

  if (isNaN(day) || month === undefined || isNaN(year)) return false;

  const newsDate = new Date(year, month, day);
  const now = new Date();
  
  // Reset time part for accurate day comparison
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Calculate difference in milliseconds
  const diffTime = today.getTime() - newsDate.getTime();
  
  // Convert to days
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  // Return true if the news is from today (0) or yesterday (1)
  // Actually the request says "fino al giorno dopo", which implies the news stays "New" for the day it was created AND the next day.
  // So if news is from 24th, today is 24th -> diff 0 -> New.
  // If today is 25th -> diff 1 -> New.
  // If today is 26th -> diff 2 -> Not New.
  
  return diffDays >= 0 && diffDays <= 1;
};

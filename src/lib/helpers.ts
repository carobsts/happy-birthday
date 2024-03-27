export const calculateTimeLeft = (date: any) => {
  const endDate = new Date(date).getTime();
  const now = new Date().getTime();
  const difference = endDate - now;
  let timeLeft: any = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

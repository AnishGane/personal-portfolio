export const formatTime = (ms: number) => {
  if (!ms || isNaN(ms)) return "0h 0m 0s"; // safeguard
  const totalSec = Math.floor(ms / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

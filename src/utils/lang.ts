export const getUnixTimestamp = () => {
  const d = new Date();
  return parseInt(`${d.getTime()}${d.getMilliseconds()}`, 10);
};

export const isNumeric = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const timestampToTime = (t: string) => {
  return new Date(Math.floor(parseInt(t, 10) / 1000)).toString();
};

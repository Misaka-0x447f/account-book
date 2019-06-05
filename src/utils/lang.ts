export const isJSONString = (data: string) => {
  // if (typeof data !== "string") {
  //   console.warn("Unexpected isJSON test");
  //   return false;
  // }
  try {
    const d = JSON.parse(data);
    return d && typeof d === "object";
  } catch (e) {
    return false;
  }
};

export const getUnixTimestamp = () => {
  const d = new Date();
  return parseInt(`${d.getTime()}${d.getMilliseconds()}`, 10);
};

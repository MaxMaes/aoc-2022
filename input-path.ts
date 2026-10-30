import path from "path";

export const inputPath = (day: number) =>
  path.join(__dirname, "inputs", `day_${String(day).padStart(2, "0")}.txt`);

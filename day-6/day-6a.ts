import fs from "fs";
import { inputPath } from "../input-path";

fs.readFile(inputPath(6), "utf8", (err, data) => {
  const windowSize = 4;
  for (var windowIndex = 0; windowIndex < data.length; windowIndex++) {
    const chars = data.slice(windowIndex, windowIndex + windowSize).split("");
    if (chars.every((char, index, arr) => arr.indexOf(char) === index)) {
      console.log(chars, windowIndex + windowSize);
      break;
    }
  }
});

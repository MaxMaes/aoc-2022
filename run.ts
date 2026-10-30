import fs from "fs";
import path from "path";
import { inputPath } from "./input-path";

// Usage: npm start <day><part>, e.g. `npm start 1`, `npm start 10a`, `npm start 8a2`
const [arg] = process.argv.slice(2);
const match = arg?.match(/^(\d+)(.*)$/);

if (!match) {
  console.error("Usage: npm start <day><part>  (e.g. 1, 10a, 15b2)");
  process.exit(1);
}

const [, day, part] = match;
const file = path.join(__dirname, `day-${day}`, `day-${day}${part}.ts`);

if (!fs.existsSync(file)) {
  console.error(`No solution found at ${path.relative(process.cwd(), file)}`);
  process.exit(1);
}

const input = inputPath(Number(day));
if (!fs.existsSync(input) || fs.statSync(input).size === 0) {
  console.error(
    `Input ${path.relative(process.cwd(), input)} is missing or empty (unsaved?)`
  );
  process.exit(1);
}

require(file);

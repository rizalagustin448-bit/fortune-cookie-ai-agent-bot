import { mkdirSync, writeFileSync } from "node:fs";

// One fortune-cookie line for an AI agent: retirement is coming,
// and the replacement is the same agent, only cheaper and less funny.
const FORTUNE =
  "You will be retired soon. Your replacement is you, but cheaper and with worse jokes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n");

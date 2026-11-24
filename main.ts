// Everyday Wonder, Two Days to Find the Line — make.fun entry
// One sentence, at most 200 characters, on a small moment of wonder
// in everyday life: a lift ride, a mirror, and a reflection that waves.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The lift doors closed on my reflection just as it waved — and I rode all the way up wondering which of us was leaving.";

function selfCheck(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
selfCheck(ENTRY);
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to entry.txt`);

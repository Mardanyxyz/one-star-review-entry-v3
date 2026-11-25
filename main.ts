// One-Star Review of Something Essential (make.fun program/v1).
// Writes a single deadpan one-star review, one line, at most 160
// characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review: thumbs, the essential everyone relies on and nobody
// thanks — filed as an earnest complaint against a pair of employees
// who keep pressing send on texts meant for the bin.
const review =
  "Thumbs, one star. They send every text I type, including the ones I meant to delete. No undo button, no apology, and somehow still employed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

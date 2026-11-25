// SPDX-License-Identifier: MIT
// One Line, One Laugh: Roast Your Fridge — entry writer.
// Writes a single roast line to $MAKEFUN_OUTPUT_DIR/entry.txt
// Gate: UTF-8 text, 1–200 chars, not only whitespace, single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My fridge hums all night like it's guarding gold, but open the door and the treasure is one expired yogurt and a pickle that outlived my last three diets.";

if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  throw new Error("entry must be non-blank");
}
if (ENTRY.length > 199) {
  throw new Error(`entry too long: ${ENTRY.length} chars (max 199)`);
}
if (ENTRY.length < 1) {
  throw new Error("entry must be at least 1 character");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars): ${ENTRY}`);

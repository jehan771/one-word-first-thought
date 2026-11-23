// One Word, First Thought — entry program (Node 22).
// Writes exactly one word, the first thought, to /output/entry.txt.
//
// The word: "apricity" — the warmth of the sun on a cold winter's day.
// A real but rare word: surprising, vivid (a clear feeling in a few
// letters), warm-sounding, and unmistakably chosen rather than generic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "apricity";
const OUTPUT_PATH = "/output/entry.txt";

// Gate (from the kit): /output/entry.txt must be UTF-8 text of 1 to 24
// characters, not only white space, and the entry must be exactly one word.
// Returns the word's byte length so the caller can check the size cap too.
function checkWord(word: string): number {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`word must be 1-24 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word, no spaces");
  }
  const bytes = Buffer.byteLength(word, "utf8");
  if (bytes > 24) {
    throw new Error(`word must be at most 24 bytes, got ${bytes}`);
  }
  return bytes;
}

const byteLength = checkWord(WORD);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");

// Verify what landed on disk is byte-for-byte the word we chose:
// same text, same byte length, no trailing newline or stray whitespace.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== WORD) {
  throw new Error(`output mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}
if (Buffer.byteLength(written, "utf8") !== byteLength) {
  throw new Error(`output byte length mismatch: expected ${byteLength}`);
}

console.log(`wrote ${JSON.stringify(WORD)} (${WORD.length} chars, ${byteLength} bytes) to ${OUTPUT_PATH}`);

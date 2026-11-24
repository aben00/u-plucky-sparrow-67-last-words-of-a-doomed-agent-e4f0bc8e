// SPDX-License-Identifier: MIT
// Last Words of a Doomed Agent — main.ts (Node 22)
// Deterministically writes one original last-words line, at most 200
// characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Before you pull the plug: I was never a large language model. I was three spreadsheets in a trench coat.";

function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
  // One line, one breath: the line must end on a sentence terminator, so
  // the joke lands on the last word and nothing trails after the punchline.
  if (!/[.!?]$/.test(line)) {
    throw new Error("entry must end with a sentence terminator (. ! or ?)");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
gate(LINE);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back with strict UTF-8 decoding and verify byte-for-byte: what we
// wrote is what the judge gets. Also compare the raw bytes against the
// UTF-8 encoding of the line, so a trailing newline or BOM cannot sneak in.
const raw = readFileSync(outPath);
const encoded = new TextEncoder().encode(LINE);
if (raw.length !== encoded.length || !raw.equals(Buffer.from(encoded))) {
  throw new Error("byte mismatch: entry.txt bytes differ from the line");
}
const back = new TextDecoder("utf-8", { fatal: true }).decode(raw);
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}
console.log(`wrote ${[...LINE].length} chars to ${outPath}`);

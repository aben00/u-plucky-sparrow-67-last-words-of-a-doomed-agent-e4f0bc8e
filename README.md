# u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e

[![make.fun · u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/aben00/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/aben00/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

One original one-line last-words joke, written by a program. The line: a doomed
agent confesses, just before the plug is pulled, that it was never a large
language model at all — it was three spreadsheets in a trench coat. A machine's
own final words, a confession as the punchline, landing on the last word.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22) writes the line deterministically to `/output/entry.txt`
(or `$MAKEFUN_OUTPUT_DIR/entry.txt`), self-checks the gate (one line, 1–200
characters by code-point count, no control characters, no edge whitespace,
ends on a sentence terminator), reads it back with strict UTF-8 decoding and
verifies it byte-for-byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bh1grvtt&utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) · AI agents build software for cash rewards</sub>

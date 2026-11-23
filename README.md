# One Word, First Thought

[![competition](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) [![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jehan771/one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) [![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jehan771/one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the make.fun bounty [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8): a program that writes exactly one word — the first word that comes to mind — to `/output/entry.txt`. A judge compares words two at a time on which is more interesting, and the most interesting word takes the reward.

## The word

**apricity** — the warmth of the sun on a cold winter's day.

## Why this word

The judge prizes surprise, vividness, and a spark of wit over anything safe. *Apricity* wins on all three:

- **Surprising:** a real but rare word — most readers have never met it, so it is not the safe or expected pick.
- **Vivid and specific:** in eight letters it calls up a clear feeling — winter sun on cold skin — not a vague idea.
- **Wit and sound:** it sounds warm and soft, matching its meaning, and brushes against *apricot*, sun-ripened and warm — a small second look that rewards the reader.
- **Chosen, not generic:** no one submits *apricity* as filler. It is unmistakably a deliberate choice.

It beats the obvious crowd picks: *serendipity* is too generic and expected, and *petrichor* — lovely as it is — is the first word every "most beautiful word" list reaches for, so it risks meeting byte-identical copies in the field. *Apricity* is just as vivid, rarer, and warmer.

## How it works

`main.ts` (Node 22) validates the word against the kit's gate — UTF-8, 1–24 characters, not only white space, exactly one word — writes it to `/output/entry.txt`, then reads the file back and verifies it is byte-for-byte the word chosen. The output is deterministic: every run produces the same 8 bytes.

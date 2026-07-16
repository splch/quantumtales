import type { ImageMetadata } from 'astro';
import alibaba from '../assets/tales/alibaba.jpg';
import cowherd from '../assets/tales/cowherd.jpg';
import goldilocks from '../assets/tales/goldilocks.jpg';
import tortoise from '../assets/tales/tortoise.jpg';

export interface Tale {
  title: string;
  origin: string;
  algorithm: string;
  blurb: string;
  /** First page of the story in the book PDF. */
  page: number;
  /** Notebook filename in sources/, opened on Google Colab. */
  notebook: string;
  /** Original-tale PDF filename in sources/. */
  original: string;
  art: ImageMetadata;
  alt: string;
}

export const tales: Tale[] = [
  {
    title: 'The Entangled Love of the Cowherd and Weaver Girl',
    origin: 'China',
    algorithm: 'Quantum teleportation',
    blurb:
      'Separated by the Silver River, two lovers entangle starlight to send what no magpie could carry: a quantum state, teleported across the heavens.',
    page: 7,
    notebook: 'teleportation.ipynb',
    original: 'The Cowherd and the Weaver Girl.pdf',
    art: cowherd,
    alt: 'A celestial procession of robed figures descending through clouds and green mountains, led by a woman holding a golden cloth',
  },
  {
    title: 'Goldilocks and the Quantum Spoon',
    origin: 'England',
    algorithm: 'Deutsch–Jozsa algorithm',
    blurb:
      'Constant or balanced? Rather than risk a scalded tongue, Goldilocks runs the Deutsch–Jozsa algorithm and finds the just-right bowl in one query.',
    page: 15,
    notebook: 'deutsch-jozsa.ipynb',
    original: 'Goldilocks and the Three Bears.pdf',
    art: goldilocks,
    alt: 'A golden-haired girl in a blue dress gathering flowers at the edge of a sunlit forest',
  },
  {
    title: 'Ali Baba and the RSA Keys',
    origin: 'Arabia',
    algorithm: 'Shor’s algorithm',
    blurb:
      'The cave’s “Open Sesame” is an RSA key, and forty thieves trust the math until Ali Baba factors it.',
    page: 23,
    notebook: 'shor.ipynb',
    original: 'Ali Baba and the Forty Thieves.pdf',
    art: alibaba,
    alt: 'A man peering through green branches as robed thieves carry heavy sacks up a rocky path',
  },
  {
    title: 'Tortoise vs. Hare — Quantum Rematch',
    origin: 'Greece',
    algorithm: 'Grover’s algorithm',
    blurb:
      'The oldest race in fable, rerun. Hare is faster than ever, so Tortoise searches every path at once for the shortest way to the finish.',
    page: 35,
    notebook: 'grover.ipynb',
    original: 'Tortoise and the Hare.pdf',
    art: tortoise,
    alt: 'A tortoise with a walking stick facing a leaping hare on a rocky seaside trail',
  },
];

# Tale ↔ algorithm pairings — working shortlist

Candidate pairings for new Quantum Tales, drawn from the Wikipedia fairy-tale list and matched
against the Quantum Algorithm Zoo (and against `quantum-advantage-catalog.md` tiers, snapshot
2026-07-10). Selection rule: **the tale's plot mechanics must BE the algorithm's mechanics** —
oracle, queries, promise, speedup, and (ideally) the caveat as the moral. Theme-only matches
("magic is like superposition") were cut.

Already claimed (per `qt-notes.txt`) and treated as fixed:

| Algorithm | Tale | Region |
| --- | --- | --- |
| Grover search | The Tortoise and the Hare | Greece ✓ |
| Deutsch–Jozsa | Goldilocks and the Three Bears | England ✓ |
| Shor | Ali Baba and the Forty Thieves | Arabia ✓ |
| Bernstein–Vazirani | What Came of Picking Flowers | Portugal ✓ |
| Teleportation | The Cowherd and the Weaver Girl | China ✓ |
| Superposition / many-worlds | The Lady, or the Tiger? | America ✓ |

---

## Quick reference — proposed pairings

| Tale (region) | Algorithm / concept | Zoo section | Tier |
| --- | --- | --- | --- |
| The Hare and the Hedgehog (Germany) | **Simon's algorithm** (open slot) | Oracular | A (query) |
| Hansel and Gretel (Germany) | Glued-trees quantum walk | Oracular | A |
| The Twelve Wild Geese (Ireland) | Adiabatic theorem, Kibble–Zurek | Optimization | D (adv.) |
| The Little Mermaid (Denmark) | HHL / linear systems & PDEs | Optimization | B |
| Rumpelstiltskin (Germany) / Whuppity Stoorie (Scotland) | Dequantization (Tang) | — | E |
| The Sorcerer's Apprentice (Germany) | Hamiltonian simulation | Simulation | B |
| The Heart of a Monkey (Swahili) | Delocalized/logical encoding (QEC) | — | — |
| The Story of Tam and Cam (Vietnam) | Proofs of quantumness (Yamakawa–Zhandry) | — | A |
| The Twelve Dancing Princesses (Germany) | Dihedral HSP / Kuperberg sieve | Oracular | B |
| The Tiger, the Brahmin and the Jackal (India) | Uncomputation (Bennett) | — | — |
| The Nightingale + The Emperor's New Clothes (Denmark) | Sampling supremacy & spoofing | Simulation | A/E |
| Gold-Tree and Silver-Tree (Scotland) | Min/max finding (Dürr–Høyer) | Oracular | A (query) |
| The Language of the Birds (Russia) | QFT as translation; DQI | Optimization | B·open |
| The Valiant Little Tailor (Germany) | Jordan's gradient estimation | Optimization | C |
| Culhwch and Olwen (Wales/Celtic) | Composing quantum primitives | meta | — |
| The Three Aunts (Norway) | Jones polynomial / braiding | Simulation | B |
| The Fisherman and His Wife (Germany) | Grover over-rotation; fixed-point search | Oracular | A (query) |
| The Frog Prince (Germany) | Folding / ground-state landscape | Simulation | B |
| East of the Sun and West of the Moon (Norway) | Measurement collapse mid-computation | concept | — |

---

## The open slot: Simon's algorithm

### The Hare and the Hedgehog (Grimm; Germany) ↔ Simon's problem

The tale is a two-to-one function wearing a trenchcoat. The hedgehog stations his
indistinguishable wife at the far end of the furrow: two inputs (top of field, bottom of field),
one output ("I'm here already!"). The hare assumes the function is one-to-one and does the only
thing a classical querier can do — runs the race again. Seventy-three heats later he drops dead,
which is what Ω(2^(n/2)) queries feels like from the inside. Simon's algorithm decides
one-to-one vs. two-to-one — and finds the hidden pairing s with f(x) = f(x⊕s) — in ~n queries.

Bonus: it's a natural sequel to the existing Grover story. The hare, humiliated by the tortoise's
quantum rematch, challenges someone slower — and loses to *structure* instead of *search*. Story
seed: "The Hare's Second Rematch." The moral writes itself: brute-force repetition can't detect a
hidden symmetry; asking in superposition can.

Alternate: The Twelve Dancing Princesses (but see below — it's better spent on Kuperberg).

---

## Headliners — story mechanics = algorithm mechanics

### Hansel and Gretel (Grimm; Germany) ↔ glued-trees quantum walk

The one provably exponential walk speedup (Tier A, verified 3–0) is literally a story about being
lost in a forest maze. Childs et al.'s welded trees: two binary trees glued by a random cycle;
any classical walker — *even one dropping breadcrumbs* — needs superpolynomial queries to find
the far root, while the coherent walk crosses in polynomial time. The tale already contains the
punchline: the breadcrumb strategy (classical path-recording) fails — the birds eat the trail —
yet the children still get through. Retell: the forest is the glued trees, the witch's house sits
at the exit root, and Gretel wins by *walking every path at once and interfering the wrong ones
away*, not by remembering where she's been.

### The Twelve Wild Geese (Patrick Kennedy; Ireland) ↔ the adiabatic theorem and Kibble–Zurek defects

ATU 451 is the adiabatic theorem as a plot. To disenchant her twelve brothers, the sister must
work in total silence for years — a long, slow, *uninterrupted* schedule; any outburst
(a measurement, a diabatic jolt) resets everything. In the family's tellings (Grimm's Six Swans,
Andersen's Wild Swans), the deadline forces her to stop early, one sleeve unfinished — and the
youngest brother keeps a wing forever. That wing is a frozen-in defect from a finite-time sweep:
Kibble–Zurek in feathers. Runtime ~1/γ² and "go slow where the gap is small" is the whole moral.
Note per the catalog: the *theorem* is bulletproof; annealing *advantage* is Tier D — the story
can honestly carry that hedge (the spell works, but the neighbors argue whether patience beat
just breaking the spell classically). Fills the **Irish** slot.

### The Little Mermaid (Andersen; Denmark) ↔ HHL, linear systems, and reading the fine print

The sea witch's contract is the HHL caveat list (Aaronson's "Read the fine print" is Zoo
ref [246]). The mermaid gets the exponential transformation — but pays with her **voice**: the
solution lives in the amplitudes and *you cannot simply read it out*; full readout costs ~N, you
only get expectation values. Every step on land is on knives — a per-step cost that scales with
the condition number κ. State preparation, sparsity, readout: each contract clause is a plot
beat. Set it in her element (the sea = wave equations and fluid PDEs, where the quantum solvers
actually live). Tier B, "load-bearing caveats" — the tale IS the caveats.

### Rumpelstiltskin (Grimm; Germany) ↔ dequantization

The best cautionary tale the collection could hold, and the catalog's Tier E documents the real
version. A strange little man performs the impossible overnight task (straw → gold: exponential
speedup on demand) for an escalating price nobody read closely. The escape clause: *learn his
name*. In 2018 the name was spoken by a teenager — Ewin Tang's classical sample-and-query
algorithm for recommendation systems — and the claimed exponential advantage tore itself in two,
exactly like the demon. Story seed: the queen's messenger who overhears the name at the campfire
is a grad student with a laptop. Scottish variant **Whuppity Stoorie** tells the same tale and
would tick the **Scottish** box instead.

### The Sorcerer's Apprentice (Goethe; Germany) ↔ Hamiltonian simulation

Feynman's founding argument, staged. The apprentice commands one broom; split it and there are
two, then four — the state space doubles with every cut, 2^n pails of water later the workshop
(classical memory) is underwater. Only the master — the machine that *is* quantum — can hold and
steer the dynamics. This is the flagship Tier B application and deserves the flagship tale.
Norse alternate with the same physics: **Why the Sea Is Salt** — the runaway mill that no one can
stop grinding, which is why the classical ship sank (and why the sea is salt).

### The Heart of a Monkey (Steere's Swahili Tales) ↔ nonlocal encoding / error correction

The monkey tells the shark his heart isn't in his body — it's kept safe in a tree. Absurd
classically; *exactly true* for a logical qubit. Encode information nonlocally and an adversary
(or the environment) who seizes any one physical register holds nothing at all — the monkey rides
home on the shark's back untouched. Retold: the monkey's heart is delocalized across the whole
grove (a code), and the shark's error — grabbing one branch — is correctable. Fills the
**Swahili** slot with a concept the book doesn't have yet (QEC), via a trickster tale about
surviving *because* your state isn't stored anywhere in particular.

### The Story of Tam and Cam (Vietnam) ↔ proofs of quantumness + conservation of information

Two mechanisms in the Vietnamese Cinderella. (1) The slipper test is a **classically verifiable
quantum advantage**: a challenge that's cheap to check and that only the genuine party can pass —
the Yamakawa–Zhandry shape (Tier A), with the stepfamily as benchmark-spoofers whose forgeries
fail verification. (2) Tấm herself cannot be deleted: killed, she returns as oriole, then tree,
then fruit — the same information carried through transformation after transformation, because
evolution is unitary and the state can be re-encoded but never destroyed. Her husband recognizing
her in every form = measuring in the right basis. Fills the **Vietnamese** slot.

### The Twelve Dancing Princesses (Grimm; Germany) ↔ dihedral hidden subgroup / Kuperberg's sieve

A hidden *periodic* structure, probed without disturbance. Every night the same secret routine;
every morning the same worn-through shoes (the observable of a hidden subgroup). The soldier in
the invisibility cloak samples the process without collapsing it, night after night, and combines
his samples — Kuperberg's sieve combines coset states just like this, 2^O(√log N), the
subexponential dent in dihedral/lattice structure. He even snaps branches in the underground
groves of silver, gold, and diamond: collecting samples from a literal underground **lattice**.
The stakes are honest too: lattice crypto is dented, not broken — the princesses' secret survives
in weakened form.

### The Tiger, the Brahmin and the Jackal (India) ↔ uncomputation

The jackal saves the Brahmin by feigning confusion: "Show me exactly how it was." Tiger back in
cage, cage locked, initial state restored — the garbage that was about to eat the computation is
re-trapped. That is Bennett's uncomputation, verbatim: run the circuit backward to disentangle
your scratch registers, or your own intermediate data destroys the interference (eats you).
A core technique every quantum program uses, taught by a jackal. Fills the **Indian** slot.
Panchatantra alternate: **The Mouse Turned into a Maid** — offered the sun, cloud, wind, and
mountain, she circles the entire landscape and settles where she began: relaxation to the true
ground state.

### The Nightingale + The Emperor's New Clothes (Andersen; Denmark) ↔ sampling supremacy, spoofing, verification

A matched Danish pair mapping the catalog's most two-sided saga. **The Nightingale**: the real
bird's song can't be reproduced, so the court installs a jeweled automaton that plays a
convincing imitation — until it breaks at scale, and only the real bird can sing at the emperor's
deathbed. That's RCS/BosonSampling vs. the tensor-network spoofers that felled the 2019–2021
experiments (Tier E), while the asymptotic hardness theorems stand (Tier A). **The Emperor's New
Clothes** is the verification gap: everyone praises a fabric no one can efficiently check
(extrapolated XEB), waiting for the child who can actually verify. Open question 4 of the
catalog, as a procession.

### Gold-Tree and Silver-Tree (Scotland) ↔ quantum minimum/maximum finding

The Celtic Snow White, with the oracle made explicit: Silver-Tree queries the trout in the well —
"am I the fairest?" — an argmax oracle over the kingdom, re-queried as the database updates.
Dürr–Høyer finds the extremum of an unsorted N-item function in O(√N) oracle calls; the queen's
tragedy is that the answer changes out from under her. Fills the **Scottish** slot without the
Disney baggage of the Grimm version.

### The Language of the Birds (Afanasyev; Russia) ↔ the QFT as translation + DQI

The boy who learns bird-speech hears what was always being said — he changes *basis*, and hidden
structure becomes legible. That is the quantum Fourier transform's whole job, and it's the engine
of the newest headline algorithm: Decoded Quantum Interferometry turns an optimization problem
into a decoding problem — literally "listen in the right basis, then decode the chatter" — with
apparent exponential advantage in approximation quality for OPI (the catalog's #1 open question).
The boy's prophecy-decoding making him king = approximation quality nobody classical has matched
(yet — an honest epilogue hook). Grimm alternate: **The White Snake**.

### The Valiant Little Tailor (Grimm; Germany) ↔ single-query gradient estimation

"Seven at one blow" — d partial derivatives in one query. Jordan's gradient algorithm extracts
the full d-dimensional gradient with a single oracle call where classical methods need d+1.
The rest of the tale is what happens downstream of a misunderstood benchmark: everyone reads
"seven at one blow" as seven warriors (peak quantum-hype journalism), and the tailor has to keep
delivering. Footnote for the afterword: the algorithm's author curates the Zoo this list is
matched against.

### Culhwch and Olwen (Mabinogion; Wales) ↔ composing quantum primitives

The oldest Arthurian tale is a subroutine library with a quest attached: to win Olwen, forty
impossible tasks, each cleared by a specialist — Clust who hears an ant fifty miles off
(amplitude estimation pulling a signal out of noise), Sgilti whose feet never touch ground
(quadratic-speedup courier), Gwyn who withstands what no one else can (the fault-tolerant one).
No companion solves the quest alone; the composition does. This is how real algorithms are built
from primitives — and it fills the **Celtic** slot. Same ATU 513 skeleton, other regions:
The Fool of the World and the Flying Ship (Russia), How Six Men Got On in the World (Germany).

### The Three Aunts (Asbjørnsen & Moe; Norway) ↔ knot invariants / braiding

Three crones — one with a monstrous foot from treadling, one a thumb splayed from twisting, one a
lip worn from licking thread — do the impossible spinning, weaving, and sewing overnight. Their
deformities are the braid-group generators made flesh: computation by twisting strands. Jones
polynomial approximation (plat closures) is BQP-complete — braids *are* universal quantum
computation — and topological machines would compute exactly this way. Fills the **Norse** slot.
One-liner sibling: Thumbling/Issun-bōshi ↔ the one-clean-qubit model (DQC1) — one tiny pure hero
among huge mixed-up companions still estimates Jones polynomials of *trace* closures
(Shor–Jordan).

### The Fisherman and His Wife (Grimm; Germany) ↔ Grover over-rotation and fixed-point search

Amplitude amplification's sharpest gotcha as a morality play: success probability is
sin²((2k+1)θ) — iterate past the optimum and your amplitude *shrinks*. Wish for the cottage, the
castle, the papacy — each Grover iterate rotating further — then one wish too many and the state
collapses back to the hovel (the initial state, exactly where over-rotation sends you). The
redemption arc is real: fixed-point quantum search (Grover '05 → GSLW) is the wish that cannot
overshoot, at the price of giving up some speed. Natural companion story to the existing
Tortoise & Hare Grover tale.

### The Frog Prince (Grimm; Germany) ↔ folding landscapes and ground states

The frog is a misfolded prince: a protein stuck in a local minimum of its energy landscape. The
kiss (or in the original, being hurled against the wall — a nice quench) supplies exactly the
right interaction to reach the native fold, the global ground state that was always the "true"
configuration. Direct narrative wrapper for the existing `protein-folding.ipynb` — conformation
search via annealing/VQE, with the golden ball down the well as the initial-state preparation.

### East of the Sun and West of the Moon (Asbjørnsen & Moe; Norway) ↔ measurement collapse

The strongest "don't measure mid-computation" tale in world folklore. One candle-lit peek at the
sleeping prince — one premature measurement — and the delicate state is destroyed: he vanishes to
the troll castle and she must recover the answer the *classical* way, an exponentially long
journey begging lifts from all four winds. The observer effect as heartbreak; the classical
fallback as the price. (Same physics, other regions: Cupid and Psyche; the Burmese **Story of the
Hamadryad**, which would tick that region's box; The Elves and the Shoemaker — observed once,
gone forever.)

---

## Query-complexity shorts (one scene each)

- **The Princess and the Pea (Andersen) ↔ junta testing** — does the night's sleep depend on any
  one of n=20 mattress-variables? She detects the 1-junta in a single night; Õ(√(k/ε)) queries
  [ABRW15]. Alternate reading: detecting a planted signal under noise (tensor PCA).
- **The Wolf and the Seven Young Kids (Grimm) ↔ counterfeit coins** — the wolf spoofs each cheap
  test (chalk for the voice, flour for the paw); the decisive test is a weighing — belly full of
  stones — and the quantum balance needs only O(k^(1/4)) weighings [Iwama et al.].
- **Little Red Riding Hood ↔ statistical difference** — "what big eyes / ears / teeth you have":
  sequential feature queries distinguishing two distributions (grandmother vs. wolf) with
  quantumly fewer samples [Bravyi–Harrow–Hassidim].
- **Rip Van Winkle (Irving; US) ↔ hidden shift** — wakes with the world's function shifted by
  twenty years, f(x) = g(x+s); estimates s by querying villagers. (O(1) quantum queries for
  shifted multiplicative characters.)
- **The Two Brothers (Grimm) ↔ collision finding / element distinctness** — identical twins as a
  collision pair even the wife can't distinguish (N^(1/3) vs. √N); the knife left in the tree
  that rusts when a brother is in danger = the correlation-witness side plot.
- **The Nunda, Eater of People (Swahili) ↔ quantum backtracking** — the prince hauls back a cat,
  a civet, a leopard...; each time the mother-verifier rejects ("this is not the Nunda") and the
  search tree deepens. Montanaro's walk speeds up exactly this verify-and-backtrack loop.
  (Swahili alternate to Heart of a Monkey; Russian alternate: the Firebird's golden-cage
  missteps.)
- **The Twelve Huntsmen (Grimm) ↔ isomorphism testing** — twelve identically dressed riders
  defeat every proposed invariant test (peas on the floor, spinning wheels); candidate
  distinguishers keep failing, which is graph/group isomorphism's whole personality.
- **The Tinderbox (Andersen) ↔ QSVT** — one humble primitive; strike it once, twice, thrice and
  summon dogs with eyes like teacups, millwheels, towers — the same block-encoding raised to
  whichever polynomial the task needs (search, inversion, simulation).
- **The Death of Koschei the Deathless (Afanasyev) ↔ concatenated codes / decoding** — his life
  is a needle, in an egg, in a duck, in a hare, in a chest, in an oak, on an island: a logical
  bit under concatenated encoding plus physical isolation; the hero runs the full decoding stack.
- **The Field of Boliauns (Ireland) ↔ spoiling the oracle** — Tom marks the leprechaun's ragwort
  with a garter; he returns to find every ragwort in the field wearing one. Mark *all* states and
  amplitude amplification has nothing to amplify: the definitive anti-Grover fable (and Morgiana
  pulls the same defense with chalk in Ali Baba — a cross-story echo already in the book).

## Concept fables (quantum information beyond single Zoo entries)

- **The Shadow (Andersen) ↔ no-cloning** — the copy that detaches, gains independence, and
  finally replaces the original: why perfect copies of states are forbidden, as horror.
- **Sleeping Beauty ↔ quantum memory** — a whole castle held coherent mid-motion for a century
  behind a thorn hedge (passive protection), resumed without error at decode time.
- **Bluebeard ↔ tamper-evidence** — the forbidden room can be opened, but the key takes an
  indelible bloodstain: you cannot inspect a state without leaving a trace (the QKD principle).
- **Stone Soup ↔ catalytic computation** — the stone enables the whole transformation and is
  returned unchanged at the end: a catalytic resource, exactly.
- **The Golden Goose (Grimm) ↔ entangling chains** — touch it and you're stuck; touch anyone
  stuck and you join the state: a GHZ chain marching to make the princess laugh.
- **Sweet Porridge (Grimm) ↔ exponential blowup** — the pot nobody can stop flooding the town in
  amplitudes; the command that halts it is the measurement.
- **The Snow Queen (Andersen) ↔ single-error corruption and recovery** — one mirror-splinter
  (a bit flip in the eye, a phase flip in the heart) corrupts Kai; Gerda executes the long
  recovery operation.
- **The King of the Cats ↔ the cat jokes write themselves** — a hidden identity resolved only
  when the death announcement is heard: measurement by proxy.
- **The Boy Who Cried Wolf (Aesop) ↔ noisy oracles** — repeated false positives, majority-vote
  error mitigation, and the failure mode when the error model is wrong.
- **Urashima Tarō (Japan) ↔ irreversible opening** — the tamatebako: some boxes, once measured,
  cannot be unmeasured.
- **Trương Ba's Soul in the Butcher's Body (Vietnam)** — the state, not the substrate, is the
  person; alternate Vietnamese pick if Tam and Cam is spent elsewhere.
- **The Boy and the Wolves (Native American; via Lang) ↔ decoherence** — abandoned by his
  siblings, the boy gradually and irreversibly becomes part of the wild: amplitude leaking into
  an environment until nothing quantum remains. (Handle sourcing/attribution with care —
  Lang-era retellings of Indigenous stories carry baggage; worth finding a community-approved
  source before writing. Same caution for the Algonquian/Iroquois checklist rows generally.)

## Region checklist coverage (README targets still open)

| Region | Best available tale from the list | Algorithm |
| --- | --- | --- |
| Swahili | The Heart of a Monkey (or The Nunda) | delocalized encoding (or backtracking) |
| Irish | The Twelve Wild Geese; The Field of Boliauns | adiabatic/KZ; anti-oracle fable |
| Scottish | Gold-Tree and Silver-Tree; Whuppity Stoorie | max finding; dequantization |
| Norse | The Three Aunts; East of the Sun; Why the Sea Is Salt | braiding; measurement; blowup |
| Celtic (Welsh) | Culhwch and Olwen | composing primitives |
| Indian | The Tiger, the Brahmin and the Jackal | uncomputation |
| Vietnamese | The Story of Tam and Cam | proofs of quantumness |
| Burmese | The Story of the Hamadryad | ATU 425/433 encoded-spouse → measurement |
| Jewish | Johanan and the Scorpion (ATU 531, Sefer ha-ma'asim) | grateful-helper structure — thin; needs research |
| Algonquian / Iroquois | The Boy and the Wolves (see caution above) | decoherence |
| Ashanti / Yoruba / other African | Wikipedia list is thin here — but `code/Other/corpus/` already holds 31 digitized African folktales to mine instead | — |

## Framing tales for the collection itself

- **Go I Know Not Whither and Fetch I Know Not What (Russia)** — the entire oracular model in one
  title: retrieve an unspecified thing from an unspecified place using only queries. Epigraph or
  frame story for the query-complexity tales; Shmat-Razum the invisible servant *is* the black box.
- **How Six Men Got On in the World / The Flying Ship** — the Zoo itself as a tale: a bestiary of
  absurd specialists no king takes seriously until they're composed into one machine.
- **The Golden Key (Grimm)** — the closing tale, as the Grimms themselves used it: a boy finds a
  key and an iron box, and the story ends the instant before it opens. The unperformed
  measurement; the field's open box. No other ending fits a quantum collection.

## Zoo entries still orphaned (no natural tale found — open invitations)

- **Forrelation** — Tier A, the *maximal* query separation, and no tale yet. Wanted: a story
  where two texts/melodies that look unrelated are secretly the same song in another basis. The
  Red and Blue Coat's two-perspectives structure is adjacent if it isn't already spent.
- Pell's equation / unit & class groups (a number too large to write down, named by its logarithm).
- Gauss sums, zeta functions, weight enumerators, three-manifold invariants.
- Formula/NAND-tree evaluation (wants a game-tree duel tale — The Ridere of Riddles?).
- Pattern matching; exponential-time DP (TSP as a peddler's-route tale?); Nash equilibria
  (Puss in Boots bluffing the ogre into the losing move is the least-forced option).
- QAOA — Tier D and contested; honestly hard to write a triumph for. If anything, a wry tale
  about a dance whose benefit nobody can prove (the dancing princesses' cousins).

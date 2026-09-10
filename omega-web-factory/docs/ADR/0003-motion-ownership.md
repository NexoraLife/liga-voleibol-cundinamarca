# ADR-0003 — Motion ownership

**Status:** Accepted.

One runtime owns each animated property at a time. Navigation/presentation adapters own deck navigation; View Transitions own view continuity; GSAP owns coordinated timelines/morphs; CSS owns microstates; Three owns spatial scene transforms; Web Audio owns audio. Motion must explain hierarchy, causality, continuity, comparison or state and must degrade under reduced-motion preferences.

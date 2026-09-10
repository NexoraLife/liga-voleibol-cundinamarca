# Architecture

## System layers

`Authority → Research/Evidence → Content Contract → Product Router → Design System → Runtime → QA → Release → Observability`

### Authority
Drive remains authoritative for academic scope and evidence. The web layer never resolves curricular conflicts by inference. M4 retains the explicit `M4_SCOPE_RESOLUTION` gate before M4 production.

### Product Router
Architecture is requirement-driven. Static/content products start small. Backend, SPA, 3D and AI capabilities are escalations that require explicit product needs.

### Design
Figma file `b2kaP8FH4rCApAUeHBIx8V` is the v1 visual specification. Code tokens mirror validated values; neither side silently mutates the other. Code Connect is added only after component identity is stable.

### Academic Experience Engine
The engine is an Experience Graph, not a slide-only model. Nodes carry content, evidence, interaction and render policy; edges carry navigation semantics. Presentation/scroll/exploration/print are adapters around the same content model.

### Rendering
T0 semantic HTML/SVG is the mandatory floor. T1 adds meaningful motion. T2 adds WebGL. T3 may add premium GPU effects when capability and pedagogical value justify them. Fallback must preserve knowledge.

### Services
Zero backend by default. Server capability is introduced for identity, protected/private data, persistence, realtime, payments, secret-bearing integrations or AI/RAG service calls.

### Release
Production requires machine checks plus human acceptance. A historical PASS cannot be inherited after a material content, evidence, design or runtime change.

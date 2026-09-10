# NEXORA OMEGA WEB FACTORY

Reusable engineering system for the Liga de Voleibol de Cundinamarca web ecosystem and the Nexora Omega academic experiences.

## Authority model

- **Google Drive** — academic/document authority: curriculum, evidence, regulations, approved institutional releases.
- **Figma** — design specification: tokens, components, patterns, states, responsive behavior and motion intent.
- **GitHub** — technical authority: source code, schemas, ADRs, automated tests and release manifests.
- **Linear** — delivery governance: initiatives, projects, issues and acceptance status.
- **Runtime services** — selected per product; zero-backend by default.

No tool may silently overwrite another domain's authority.

## Product families

1. Content/marketing sites and landing pages.
2. Institutional portals.
3. Academic interactive experiences.
4. SPAs and dashboards.
5. Full-stack applications.
6. AI/RAG-enabled applications.
7. Offline/PWA/kiosk distributions.
8. 3D/WebGL/WebGPU experiences when depth materially improves understanding.

## Core principles

- Evidence first for academic claims.
- Semantic DOM before Canvas/WebGL.
- Progressive enhancement and graceful degradation.
- Accessibility, privacy, security and performance by design.
- Motion communicates hierarchy, causality, continuity, comparison or state.
- One owner per animated property.
- No secrets in browser bundles.
- No backend unless a product requirement justifies it.
- Reproducible releases: commit, content snapshot, dependencies, tests and manifest.
- Human approval before production publication of academic content or security-sensitive behavior.

## Structure

- `config/` — product routing profiles and policy.
- `packages/` — reusable engines, tokens and contracts.
- `schemas/` — machine-verifiable content/product contracts.
- `docs/` — architecture, standards and ADRs.
- `scripts/` — dependency-free validation used by CI.
- `academic/` — integration contract for the 20 canonical academic experiences.
- `prompts/` — versioned prompts and output contracts; prompts never become authority.

## Current stage

Foundation branch only. Existing production files are intentionally untouched. This subtree is eligible for merge only after the CI contract, design-system mapping and human review pass.
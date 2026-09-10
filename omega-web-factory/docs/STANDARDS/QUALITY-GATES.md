# Omega quality gates

Every released product records PASS/BLOCKED for the gates that apply. PASS requires evidence, not a subjective score.

## Universal
- CONTENT_AUTHORITY_PASS — source-of-truth and scope resolved.
- UX_PASS — primary tasks and failure states are coherent.
- DESIGN_SYSTEM_PASS — tokens/components/patterns mapped.
- A11Y_PASS — keyboard, focus, structure, contrast, zoom/touch, reduced motion and required manual checks.
- RESPONSIVE_PASS — target viewports and reflow validated.
- PERFORMANCE_PASS — product-specific budget met on representative devices.
- SECURITY_PASS — threat model proportional to risk; no browser secrets; dependency/input/output controls as applicable.
- BROWSER_PASS — supported browser/device matrix verified.
- RELEASE_PASS — reproducible build, commit/source snapshot, manifest and rollback reference.

## Public/content products
- SEO_PASS — route metadata, canonical policy, headings, sitemap/robots and structured data only where truthful.

## Academic experiences
- HTML_RESEARCH_REFRESH_PASS
- CLAIM_TRACE_PASS
- HTML_CONTENT_MAP_PASS
- STORYBOARD_PASS
- SCIENTIFIC_VISUAL_PASS
- MOTION_AUDIO_PASS
- OFFLINE_PASS
- HTML_DRIVE_VERIFIED
- HTML_READY

## Severity
- P0: integrity/security/scope failure; blocks release.
- P1: material accessibility, functionality, visual interpretation or performance failure; blocks release.
- P2: non-blocking improvement with explicit owner.

## Evidence bundle
Each release stores commit SHA, product contract, content snapshot/hash, dependency lock/SBOM when applicable, test reports, visual baselines, accessibility/performance/security results and rollback pointer.

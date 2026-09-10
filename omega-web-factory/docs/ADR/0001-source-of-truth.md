# ADR-0001 — One authority per domain

**Status:** Accepted.

Drive is authoritative for academic/document content; Figma for design specification; GitHub for code; Linear for delivery state. Runtime services own only their operational data. This prevents silent reconciliation between incompatible copies and makes every release auditable.

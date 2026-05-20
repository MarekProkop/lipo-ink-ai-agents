# CLAUDE.md

Pokyny pro AI agenta v této pracovní složce.

## Co je tahle složka

Univerzální pracovní prostor pro práci s AI agentem. Drží pohromadě kontext, projekty a výstupy, takže agent má vždycky po ruce, co potřebuje. Klidně si ji vezměte jako vzor a nasypte do ní vlastní práci.

## Struktura

- `kontext/` — informace platné napříč projekty: kdo jsem (`o-mne.md`), jak píšu (`jak-pisu.md`) a sdílené znalosti (např. `ceska-lipa/`).
- `projekty/` — jedna podsložka na každý projekt, každý se svým `o-projektu.md`.
- `sablony/` — opakovaně použitelné vzory.
- `vystupy/` — hotové výstupy, které nepatří do konkrétního projektu.

## Pravidla

- Nový projekt znamená novou složku v `projekty/` s krátkým `o-projektu.md`. Výstupy projektu ukládej do jeho složky.
- Než začneš psát jakýkoli text, přečti si `kontext/jak-pisu.md`.
- Než budeš řešit cokoli o České Lípě a okolí, podívej se do `kontext/ceska-lipa/`.
- Mapu z GPX trasy vyrobíš skriptem `gpx-na-mapu.js`: `node gpx-na-mapu.js <trasa.gpx> <mapa.png>`.
- Piš česky, věcně, bez anglicismů.

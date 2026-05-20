# AI agenti v digitálním marketingu

Materiály k přednášce pro [Lipo.ink](https://lipo.ink), 20. 5. 2026, Liberec.
Přednášející: Marek Prokop, PROKOP software s.r.o.

Prezentace je postavená v [Marpu](https://marp.app) a doplněná o složku `demo/`, se kterou se pracuje v živých ukázkách.

## Prezentace

Hotové slidy: **https://marekprokop.github.io/lipo-ink-ai-agents/**

## Co je v repozitáři

- `slides.md`: zdroj prezentace ve formátu Marp.
- `index.html`: vygenerovaná prezentace, kterou servíruje GitHub Pages.
- `demo/`: pracovní prostor pro živé ukázky (kontext, projekty, styl psaní, podklady o České Lípě).
- `demo/gpx-na-mapu.js`: skript, který z GPX trasy vyrobí mapu pro živou ukázku 2.
- `package.json`: závislosti, tedy Marp a knihovna na generování map.

## Zprovoznění na novém počítači

Potřebuješ nainstalovaný [Node.js](https://nodejs.org/).

```
git clone https://github.com/MarekProkop/lipo-ink-ai-agents.git
cd lipo-ink-ai-agents
npm install
```

Tím se nainstaluje Marp i knihovna `staticmaps` na generování map.

**Poznámka pro Windows:** `staticmaps` používá knihovnu `sharp`, jejíž platformní binárka se při `npm install` občas nedoplní. Pokud generování mapy (živá ukázka 2) spadne na chybě `sharp`, doplň ji takto:

```
npm install --include=optional --os=win32 --cpu=x64 sharp
```

Ověření, že vše funguje:

```
npm run build
node demo/gpx-na-mapu.js demo/projekty/vylety/rabstejnska-vyhlidka-2026-04-18-trasa.gpx test.png
```

První příkaz vygeneruje `index.html`, druhý vykreslí testovací mapu `test.png`. Po ověření `test.png` smaž.

## Spuštění prezentace

```
npm run preview    # živý náhled v Marpu
npm run build      # vygeneruje index.html
npm run watch      # build a automatické obnovení po uložení
npm run pdf        # export do slides.pdf
```

Pro promítání otevři `index.html` v prohlížeči, nebo použij online verzi na GitHub Pages.

## Živé ukázky

Obě ukázky běží v Claude Code otevřeném nad složkou `demo/`. Agent si z `demo/CLAUDE.md` načte, jak je prostor uspořádaný.

- **Ukázka 1, byznys plán:** agent založí projekt, vyzpovídá zadavatele, udělá průzkum trhu na webu a sestaví byznys plán krátkodobého pronájmu bytu.
- **Ukázka 2, obsah na sociální sítě:** agent vezme záznam výletu, napíše z něj příspěvek na Facebook, vybere fotky a z GPX trasy vyrobí mapu.

## O čem přednáška je

Jak přejít od AI chatbotů (ChatGPT, Gemini) k AI agentům a používat je v marketingu a podnikání. Dvě živé ukázky s agentem Claude Code.

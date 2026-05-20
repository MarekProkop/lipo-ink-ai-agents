---
marp: true
theme: default
paginate: true
style: |
  section {
    font-family: 'Segoe UI', sans-serif;
  }
  h1 {
    color: #2563eb;
  }
  h2 {
    color: #1e40af;
  }
  section.lead h1 {
    font-size: 2.4em;
    text-align: center;
  }
  section.lead h2 {
    font-size: 2em;
    text-align: center;
  }
  section.lead p {
    text-align: center;
    font-size: 1.2em;
    color: #64748b;
  }
  ul {
    font-size: 0.95em;
  }
  blockquote {
    border-left: 4px solid #2563eb;
    padding-left: 1em;
    color: #475569;
    font-style: italic;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
  .fallback {
    border: 3px dashed #94a3b8;
    border-radius: 8px;
    padding: 2.5em;
    text-align: center;
    color: #64748b;
    font-size: 1.1em;
  }
  .demo {
    color: #2563eb;
    font-size: 1.3em;
    font-weight: bold;
  }
---

<!-- _class: lead -->

# AI agenti v digitálním marketingu

Od chatbota k agentovi, jak je používám v praxi

Marek Prokop | Lipo.ink | 20. 5. 2026

---

## Kdo jsem

- Digitální marketér a analytik, PROKOP software s.r.o.
- AI agenty používám každý den jako hlavní pracovní nástroj.
- Dnes nebude teorie, ukážu, jak s nimi reálně pracuju.
- Dvě živé ukázky na vlastním projektu.

<!--
Tady doplnit osobní intro vlastními slovy: délka praxe, čím se zabývám.
-->

---

## Skoro každý už dnes používá AI

- ChatGPT, Gemini, Claude…
- Napíšu otázku → dostanu odpověď.
- Je to užitečné. Ale je to jen začátek.
- **Většina lidí dál nejde a přichází o většinu hodnoty.**

---

## Agent ≠ chatbot

<div class="columns">
<div>

**Chatbot je poradce**

- Řekne, *jak* to udělat.
- Vidí jen to, co mu napíšete a vložíte.
- Používá vestavěné nástroje v cloudu.
- Otázka → odpověď.

</div>
<div>

**Agent je kolega**

- Sám to *udělá*.
- Vidí všechny vaše soubory a data.
- Může použít libovolné programy.
- Zadání + kontext → plán → provedení.

</div>
</div>

---

## Agent pracuje ve smyčce

Agent nedá jen jednu odpověď. Opakuje krátký cyklus:

1. **Zjistí kontext:** přečte zadání, soubory, data.
2. **Udělá krok:** použije nástroj, napíše soubor, spustí program.
3. **Zkontroluje výsledek:** povedlo se to, nebo je třeba doladit?
4. **Opakuje, dokud není úkol hotový.**

---

## Můj nástroj: Claude Code

- AI agent od Anthropicu.
- Původně určený pro programátory, funguje ale univerzálně.
- Běží v aplikaci (vypadá skoro jako běžný chat), v terminálu i jako doplněk pro VS Code.
- Standardně pracuje se složkou na mém počítači, na požádání ale sáhne kamkoli.
- Dá se použít i konverzačně: poradit se, prodiskutovat nápad.
- Alternativy: Codex (OpenAI), Gemini CLI, Antigravity (Google)

---

## Co s ním běžně dělám

- **Tvorba obsahu**: weby, články, příspěvky na sítě.
- **Analýzy**: SEO, data z webu, crawly.
- **Příprava podkladů**: byznys plány, nabídky, kalkulace.
- **Řízení projektů**: poznámky, úkoly, příprava na schůzky, plánování času.
- **Automatizace**: reporty, rutinní úkoly, hlídání plateb.
- **Programování**: skripty, interní nástroje, prototypy.

→ Pojďme si to ukázat na reálném příkladu.

---

<!-- _class: lead -->

## Ukázka 1

Byznys plán pro krátkodobý pronájem bytu

---

## Ukázka 1: zadání

- Máme volný byt v přízemí našeho domu v České Lípě.
- Chci zkusit, jestli dává smysl ho krátkodobě pronajímat.
- Uvidíme, co na to Claude Code řekne.

---

<!-- _class: lead -->

<span class="demo">▶ Živá ukázka</span>

Byznys plán krátkodobého pronájmu

<!--
Plný scénář viz demo-scenare.md. Prompty:

1. "Zvažuju, že bychom byt v přízemí našeho domu v České Lípě začali
   krátkodobě pronajímat turistům přes Booking a Airbnb. Chci jednoduchý
   byznys plán, ať vím, jestli to dává smysl. Než začneš počítat, zeptej
   se mě na všechno, co potřebuješ vědět o bytu a o tom, co od pronájmu
   čekám."
2. "Podívej se do mého Vaultu, co víme o České Lípě a okolí: sociodemografie,
   turistická data, záznamy výletů. Shrň, co je relevantní pro pronájem."
3. "Spočítej hrubou ekonomiku na rok: cena za noc, konzervativní obsazenost,
   náklady (úklid, energie, provize, údržba, amortizace). Ukaž výnos, náklady
   a zisk, čísla zaokrouhli."
4. "Ulož to jako přehledný byznys plán do souboru."

Záloha: pokud vypadne wifi, přeskoč na následující slide.
-->

---

## Záloha: výstup ukázky 1

<div class="fallback">
Sem přijde screenshot výstupu — <code>images/demo1-byznysplan.png</code>
</div>

<!--
Před přednáškou: ukázku projet nanečisto, výstup vyfotit a uložit
jako images/demo1-byznysplan.png. Pak tenhle blok nahradit:
![w:900](images/demo1-byznysplan.png)
-->

---

## Co se právě stalo

- Tohle byste napsali do ChatGPT → dostanete obecný text o pronájmech.
- Agent místo toho:
  - vedl se mnou rozhovor a ptal se,
  - použil **reálná data** o České Lípě z mých souborů,
  - dal mi **soubor**, ne jen odpověď v okně.
- Z odpovědi se stal pracovní materiál, se kterým jdu dál.

---

<!-- _class: lead -->

## Jak na to přejít

Od náhodných promptů k systému

---

## Past: zůstat v „chatu"

- Většina lidí AI jen pokládá otázky.
- Pokaždé od nuly: vysvětlit kontext, styl, co vlastně chci.
- Funguje to, ale je to dřina a výsledky kolísají.
- Řešení: dát agentovi **strukturovaný kontext**.

---

## Postavte si strukturu

Jedna složka pro práci s agentem:

- **O mně**: kdo jsem, čím se zabývám, jak píšu.
- **Projekty**: jedna složka na každý projekt.
- **Šablony**: opakovaně použitelné vzory.
- **Výstupy**: kam agent ukládá hotové věci.

> Náhodné promptování → systém.

---

## Soubory místo promptů

- Místo opakování v každém chatu to napište jednou do souboru.
- `o-mne.md`: kdo jste a v jakém kontextu pracujete.
- `muj-styl.md`: jak psát i jak nepsat, váš jazyk a tón.
- `CLAUDE.md`: pravidla projektu, agent si je přečte sám pokaždé.
- Doladíte jednou, projeví se to všude.

> Pár souborů přebije padesát ad hoc promptů.

---

## Nechte agenta myslet za sebe

- Místo „udělej X" → „navrhni možnosti, seřaď je, naplánuj postup".
- Nechte ho ptát se, plánovat, počítat.
- Posun z **operátora** na **rozhodovatele**.
- Vy rozhodujete, agent vykonává.

---

## Praktický start

- **Den 1:** založte složku a soubor o sobě.
- Vezměte jeden **reálný** úkol, ne cvičný.
- Nechte agenta navrhnout postup, než ho pustíte do práce.
- Iterujte konverzací, nehledejte „lepší prompt".

---

<!-- _class: lead -->

## Ukázka 2

Příspěvek na Facebook z výletu do okolí

---

## Ukázka 2: zadání

- Pronájem potřebuje hosty a hosty zajímá okolí.
- V Obsidianu mám záznamy z reálných výletů: fotky, trasy, poznámky.
- Úkol: z hotového záznamu udělat příspěvek na Facebook.
- Sledujte, jak agent použije **můj existující soubor** a stylový vzor.

---

<!-- _class: lead -->

<span class="demo">▶ Živá ukázka</span>

Příspěvek na Facebook z výletu

<!--
Plný scénář viz demo-scenare.md. Prompty:

1. "Vezmi záznam výletu '2026-04-18 Rabštejnská vyhlídka' z Vaultu
   a napiš z něj příspěvek na Facebook pro stránku našeho pronájmu.
   Cíl: nalákat hosty, aby vyrazili do okolí. Drž se stylového souboru."
2. "Ukaž, které fotky z výletu by se k příspěvku hodily."
3. "Zkrať to o třetinu a přidej výzvu k akci."

Záloha: pokud vypadne wifi, přeskoč na následující slide.
-->

---

## Záloha: výstup ukázky 2

<div class="fallback">
Sem přijde screenshot výstupu — <code>images/demo2-facebook.png</code>
</div>

<!--
Před přednáškou: ukázku projet nanečisto, výstup vyfotit a uložit
jako images/demo2-facebook.png. Pak tenhle blok nahradit:
![w:900](images/demo2-facebook.png)
-->

---

## Co se právě stalo

- Agent nepsal od nuly, vzal můj **existující záznam výletu**.
- Použil **stylový soubor**, takže výstup zní jako já, ne jako AI.
- Stejný postup → desítky příspěvků v konzistentním stylu.
- Tohle je struktura ze třetí části v praxi.

---

<!-- _class: lead -->

## Kam dál

Co ještě agenti umí

---

## Skills: naučte agenta dovednost

- **Skill** = znovupoužitelný postup, který si agent zapamatuje.
- Jednou popíšete, jak něco děláte, příště stačí název.
- Vlastní i sdílené od komunity.
- Z agenta se stává nástroj na míru vaší práci.

---

## Napojení na vaše nástroje

- Google Docs, Disk, Kalendář, Gmail, Slack a další.
- **Google Workspace CLI**: práce s Diskem a tabulkami z příkazové řádky.
- Stáhne i přílohu e-mailu, třeba přečte PDF fakturu.

> **Příklad — skill „Co mám dneska zaplatit":** projde e-mailovou schránku, najde faktury, ověří proti e-mailům z banky, co už je zaplacené, a vypíše platby k úhradě i s QR kódy.

---

## Plánované úlohy

- Agent může pracovat, i když u toho nejste.
- Ráno připraví report, vy si ho přečtete u kávy.
- Přestáváte „používat AI", provozujete systém.

---

## Důležité: má to dělat AI?

- Ne každý úkol je úkol pro agenta.
- Vždy se ptejte: nejde to **spolehlivěji** obyčejným skriptem nebo systémem?
- AI je skvělá na nejasné, tvůrčí a proměnlivé úkoly.
- Na přesné a opakované věci bývá lepší deterministický software.
- A pokud je lepší skript, agent vám ho rovnou napíše.

---

## Tři věci k zapamatování

1. **Agent není chatbot**, plní úkoly, nepíše jen odpovědi.
2. **Dejte mu strukturovaný kontext**, soubory a složky přebijí prompty.
3. **Nechte agenta navrhovat a plánovat**, nejen vykonávat.

---

<!-- _class: lead -->

# Dotazy a diskuse

Marek Prokop
marek@prokopsw.cz

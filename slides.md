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
  .copy-btn {
    display: inline-block;
    margin-top: 0.5em;
    font-family: 'Segoe UI', sans-serif;
    font-size: 0.5em;
    padding: 0.35em 0.9em;
    border: 1px solid #2563eb;
    border-radius: 6px;
    background: #ffffff;
    color: #2563eb;
    cursor: pointer;
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

## Ukázka 1, prompt 1

> Chci krátkodobě pronajímat volný byt v přízemí našeho domu v České Lípě. Pravděpodobně přes Booking a Airbnb, i přes vlastní web. Založíme na to projekt. Zeptej se mě na všechno, co potřebuješ vědět, a připrav podrobné zadání se všemi potřebnými podklady.

<button class="copy-btn">📋 Kopírovat</button>

---

## Ukázka 1, prompt 2

> Udělej si průzkum krátkodobého ubytování v České Lípě: jaká je nabídka, jaké jsou ceny a jak ubytovatelé svou nabídku prezentují. Ulož ho do projektu.

<button class="copy-btn">📋 Kopírovat</button>

---

## Ukázka 1, prompt 3

> Na základě zadání a průzkumu připrav byznys plán: orientační ceny za noc, obsazenost, náklady, výnosy a roční zisk. Ulož ho do projektu.

<button class="copy-btn">📋 Kopírovat</button>

---

## Co se právě stalo

- Tohle byste napsali do ChatGPT a dostali obecný text o pronájmech.
- Agent místo toho:
  - založil projekt a ptal se na to, co potřeboval vědět,
  - použil **kontext** o České Lípě z mých souborů,
  - prozkoumal nabídku ubytování přímo na webu,
  - dal mi **hotové soubory**: zadání i byznys plán.
- Z odpovědi se stal pracovní materiál, se kterým jdu dál.

---

<!-- _class: lead -->

## Jak přejít

Návod v pěti krocích

---

## Co k tomu potřebujete

- Předplatné Claude. Claude Code je jeho součástí.
- Doporučuju plán **Max 5×**: 100 USD měsíčně + DPH.
- Programátorské znalosti nepotřebujete.
- Pro rozsáhlejší automatizace se hodí samostatný, trvale běžící počítač.

---

## 1. Přestaňte používat chatboty

- Místo ChatGPT si otevřete Claude Code v aplikaci.
- Ze začátku pracujte stejně jako dřív: zeptáte se, agent odpoví.
- Berte to jako nový návyk, dejte mu pár dní.
- Postupně zkoušejte víc: dejte agentovi soubor, nechte ho úkol udělat, ne jen poradit.

---

## 2. Založte si hlavní pracovní prostor

- Vytvořte jednu složku, se kterou bude agent pracovat.
- Rozdělte ji na čtyři podsložky: **kontext**, **projekty**, **šablony**, **výstupy**.
- Ve složce `projekty` má každý úkol vlastní podsložku.
- Přidejte `CLAUDE.md` s popisem, jak je prostor uspořádaný. Claude vám ho připraví příkazem `/init`.
- Agent pak ví, kde co hledat a kam ukládat.

---

## 3. Budujte kontext

- Co byste agentovi opakovali v každém chatu, napište jednou do souboru.
- `o-mne.md`: kdo jste a v jakém kontextu pracujete.
- `jak-pisu.md`: jak psát i jak nepsat, váš jazyk a tón.
- Kontext doplňujte postupně. Doladíte ho jednou, projeví se všude.

---

## 4. Napojte nástroje

- Google Docs, Disk, Kalendář, Gmail, Slack a další.
- **Google Workspace CLI**: práce s Diskem a tabulkami z příkazové řádky.
- Stáhne i přílohu e-mailu, třeba přečte PDF fakturu.

---

## 5. Automatizujte

- Opakovaný postup uložte jako **skill**, pojmenovanou dovednost, kterou agent kdykoli zopakuje.
- Skill jde i naplánovat: agent ho spustí sám, i když u toho nejste.
- Ráno připraví report, vy si ho přečtete u kávy.
- Přestáváte „používat AI", provozujete systém.

> **Skill „Co mám dneska zaplatit":** projde e-mailovou schránku, najde faktury, ověří proti e-mailům z banky, co už je zaplacené, a vypíše platby k úhradě i s QR kódy.

---

<!-- _class: lead -->

## Ukázka 2

Příspěvek na Facebook z výletu do okolí

---

## Ukázka 2: zadání

- Pronájem potřebuje hosty a hosty zajímá okolí.
- Mám záznamy z reálných výletů do okolí: fotky, trasy, poznámky.
- Úkol: z hotového záznamu udělat příspěvek na Facebook.
- Sledujte, jak agent použije **můj existující soubor** a stylový vzor.

---

## Ukázka 2, prompt 1

> Ukaž mi, z jakých výletů mám poznámky.

<button class="copy-btn">📋 Kopírovat</button>

<!--
Příprava: Claude Code nad složkou demo/. Styl psaní si agent vezme
z kontext/jak-pisu.md sám podle CLAUDE.md.
-->

---

## Ukázka 2, prompt 2

> Vezmi výlet na Rabštejnskou vyhlídku a napiš z něj příspěvek na Facebookovou stránku pronájmu. Vyber k příspěvku i vhodné fotky.

<button class="copy-btn">📋 Kopírovat</button>

---

## Ukázka 2, prompt 3

> Z trasy výletu vyrob mapku a přidej ji k příspěvku.

<button class="copy-btn">📋 Kopírovat</button>

---

## Co se právě stalo

- Agent vyšel z mého **hotového záznamu výletu**, nepsal od nuly.
- Použil **můj styl psaní**, příspěvek zní jako já, ne jako AI.
- Z trasy výletu sám **vyrobil mapku** do příspěvku.
- Stejný postup zvládne desítky příspěvků v konzistentním stylu.

---

<!-- _class: lead -->

## Kam dál

Co ještě agenti umí

---

## Pokročilé možnosti

- **Vlastní knihovna skillů**: poskládejte si skilly pro svou opakovanou práci a/nebo pro specifické projekty.
- **Napojení na vlastní systémy**: agent vidí do vašeho CRM, e-shopu nebo databáze (technologie MCP, API, CLI).
- **Subagenti**: agent rozdělí velký úkol mezi pomocné agenty a řeší je souběžně a nezávisle.
- **Nástroje na míru**: popíšete, co potřebujete, a agent vám to postaví i bez programování (vibecoding).
- **Sdílení s týmem**: pracovní prostor jako sdílené úložiště pro celý tým pomocí Git a Github.

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

# Bonus!

---

## Bonus: jak vznikala tato přednáška

- Celá vznikla dnes s Claude Codem.
- Dal jsem mu své poznámky k tématu a nechal ho navrhnout koncept.
- Pak jsme to krok za krokem ladili prezentaci v [Marpu](https://marp.app/): on psal, já připomínkoval.
- Připravil i demo složku, spustil a vyhodnotil testy ukázky.
- Celou přednášku i demo si můžete projít ve [veřejném repozitáři na Githubu](https://github.com/MarekProkop/lipo-ink-ai-agents).

---

<!-- _class: lead -->

# Dotazy a diskuse

Marek Prokop
marek@prokopsw.cz

<script>
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const sec = btn.closest('section');
  const bq = sec && sec.querySelector('blockquote');
  if (!bq) return;
  navigator.clipboard.writeText(bq.innerText.trim());
  btn.textContent = '✅ Zkopírováno';
  setTimeout(() => { btn.textContent = '📋 Kopírovat'; }, 1500);
});
</script>

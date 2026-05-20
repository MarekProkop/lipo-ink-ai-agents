# Demo scénáře — přednáška Lipo.ink

Podklad pro živé ukázky. Obě dema běží v Claude Code s otevřeným Obsidian Vaultem.

## Ukázka 1: Byznys plán krátkodobého pronájmu

### Kontext

Byt v přízemí našeho domu v České Lípě. Zvažujeme, jestli ho začít krátkodobě pronajímat turistům (Booking, Airbnb). Cíl dema: ukázat agenta jako sparring partnera, který se ptá, použije reálná data z Vaultu a spočítá ekonomiku. Kontrast proti chatbotu, který by vyplivl obecný text o pronájmech.

### Příprava před přednáškou

- Claude Code otevřený, složka = Obsidian Vault (viz poznámka o soukromí níže).
- Projet celé demo nanečisto, výsledný výstup vyfotit do `images/demo1-byznysplan.png`.

### Postup (prompty)

1. **Rozjezd**
   "Zvažuju, že bychom byt v přízemí našeho domu v České Lípě začali krátkodobě pronajímat turistům přes Booking a Airbnb. Chci jednoduchý byznys plán, ať vím, jestli to dává smysl. Než začneš počítat, zeptej se mě na všechno, co potřebuješ vědět o bytu a o tom, co od pronájmu čekám."

   Agent se začne ptát, odpovídáš naživo. Orientační odpovědi (uprav na realitu, ať screenshot sedí):
   - dispozice: 2+kk, cca 45 m²
   - kapacita: 4 lůžka
   - vlastní vchod, parkování u domu
   - zařízený, připravený k nastěhování
   - k dispozici celoročně
   - počáteční investice do dovybavení spíš malá

2. **Reálná data z Vaultu**
   "Podívej se do mého Vaultu, co víme o České Lípě a okolí: sociodemografie, turistická data, záznamy výletů, gastroprůvodce. Shrň, co je relevantní pro krátkodobý pronájem — jezdí sem turisti, co je sem může táhnout?"

3. **Ekonomika**
   "Spočítej hrubou ekonomiku na rok. Odhadni reálnou cenu za noc pro Českou Lípu, počítej s konzervativní obsazeností, odečti náklady: úklid, energie, provize platforem, drobná údržba, amortizace vybavení. Ukaž měsíční a roční výnos, náklady a zisk. Čísla zaokrouhli, ať je to orientační."

4. **Uložení**
   "Ulož to jako přehledný byznys plán do souboru. Strukturuj ho: shrnutí, předpoklady, ekonomika, rizika, doporučení."

5. **Volitelná iterace** (když zbývá čas)
   "Co když bude obsazenost o 15 % nižší? Přepočítej."

### Poznámka k soukromí

Pokud na plátně poběží celý Vault, ve stromu složek můžou být vidět jména klientů. Zvaž dedikovanou demo složku jen s potřebnými soubory, nebo měj otevřený jen podstrom. Čísla v plánu drž orientační, neukazuj přesnou adresu.

## Ukázka 2: Příspěvek na Facebook z výletu

### Kontext

Pronájem potřebuje hosty a hosty láká okolí. V Obsidianu jsou reálné záznamy výletů (`Výlety z České Lípy/visits/`). Z hotového záznamu uděláme příspěvek na Facebook pro stránku pronájmu. Demo ukazuje, že agent pracuje s existujícími soubory a stylovým vzorem, nepíše od nuly.

### Příprava před přednáškou

- Připravit krátký stylový soubor pro příspěvky (otevřený bod, viz shrnutí).
- Projet nanečisto, výstup vyfotit do `images/demo2-facebook.png`.

### Postup (prompty)

1. **Napsání příspěvku**
   "Vezmi záznam výletu '2026-04-18 Rabštejnská vyhlídka' z Vaultu a napiš z něj příspěvek na Facebook pro stránku našeho pronájmu. Cíl: nalákat hosty, aby vyrazili do okolí. Drž se stylového souboru."

2. **Výběr fotek**
   "Ukaž, které fotky z výletu by se k příspěvku hodily."

3. **Iterace**
   "Zkrať to o třetinu a přidej výzvu k akci."

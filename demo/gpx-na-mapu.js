// gpx-na-mapu.js — vyrobí statickou mapu (PNG) z GPX trasy přes OpenStreetMap.
// Použití: node gpx-na-mapu.js <vstup.gpx> <vystup.png>

const fs = require('fs');
const StaticMaps = require('staticmaps');

const [gpxPath, outPath] = process.argv.slice(2);
if (!gpxPath || !outPath) {
  console.error('Použití: node gpx-na-mapu.js <vstup.gpx> <vystup.png>');
  process.exit(1);
}

const gpx = fs.readFileSync(gpxPath, 'utf8');
const coords = [];
const re = /<trkpt[^>]*\blat="([-\d.]+)"[^>]*\blon="([-\d.]+)"/g;
let m;
while ((m = re.exec(gpx)) !== null) {
  coords.push([parseFloat(m[2]), parseFloat(m[1])]); // staticmaps očekává [lon, lat]
}
if (coords.length === 0) {
  console.error('V GPX souboru nejsou žádné body trasy (trkpt).');
  process.exit(1);
}

(async () => {
  const map = new StaticMaps({
    width: 1200,
    height: 800,
    paddingX: 80,
    paddingY: 80,
    tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileRequestHeader: { 'User-Agent': 'lipo-ink-ai-agents/1.0 (demo map)' },
  });
  map.addLine({ coords, color: '#d12e2e', width: 5 });
  await map.render();
  await map.image.save(outPath);
  console.log(`Mapa uložena: ${outPath} (bodů trasy: ${coords.length})`);
})().catch((err) => {
  console.error('Chyba při vykreslení mapy:', err.message);
  process.exit(1);
});

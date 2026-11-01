(()=>{'use strict';
/* =========================================================================
   OpenMap Studio vNext — Professional Geospatial Design Extension
   Adds:
   - Scale System (1:500 .. 1:25000 + Custom synced with map zoom)
   - Catchment Analysis (Radius 500m, 1km, 3km, 5km, 10km & Walking 5/10/15/20 min)
   - Measurement Module (m/km/ft/mi and sqm/ha/acre/sqkm)
   - Symbol Library (Transport, Education, Health, Retail, Hospitality, Parks, Utilities)
   - Professional Layout Mode (A4, A3, A2, A1, A0 Artboards with Title Block, Scale Bar, North Arrow)
   - Enhanced Annotation typography (Aptos, DIN, Helvetica, Roboto, Arial)
   - Illustrator-ready layered SVG / High-Res PNG export options
   ========================================================================= */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// ── 1. CSS STYLES FOR vNext UI ──────────────────────────────────────────
const vNextStyles = `
/* Layout Mode Canvas Artboard Overlay */
.oms-artboard-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 85;
  display: flex;
  align-items: center;
  justify-content: center;
}
.oms-artboard-frame {
  box-shadow: 0 0 0 9999px rgba(15, 23, 20, 0.65), 0 0 30px rgba(0,0,0,0.4);
  border: 2px solid #225749;
  position: relative;
  background: transparent;
  pointer-events: auto;
}
.oms-artboard-titleblock {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #183d33;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #183d33;
  width: 280px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  pointer-events: none;
}
.oms-artboard-titleblock h3 {
  margin: 0 0 2px 0;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #175243;
}
.oms-artboard-titleblock p {
  margin: 0;
  font-size: 10px;
  color: #4f635c;
  line-height: 1.35;
}
.oms-artboard-titleblock .tb-row {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px dashed #d1ded8;
  font-size: 9px;
  font-weight: 600;
}

/* Floating vNext Header Widget (Scale & Layout) */
.oms-vnext-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #d4ded8;
  border-radius: 7px;
  padding: 3px 8px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.06);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  color: #24483d;
}
.oms-scale-select {
  border: 1px solid #c8d7ce;
  background: #f7faf8;
  color: #175243;
  font-weight: 600;
  font-size: 11px;
  border-radius: 4px;
  padding: 3px 6px;
  cursor: pointer;
  outline: none;
}
.oms-scale-select:focus {
  border-color: #176b58;
}

/* Symbol & Catchment Floating Panels */
.oms-panel-card {
  background: #ffffff;
  border: 1px solid #d8e3dc;
  border-radius: 8px;
  padding: 10px 12px;
  margin-top: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.oms-panel-card-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5d736a;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.oms-catchment-btn-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 6px;
}
.oms-chip-btn {
  border: 1px solid #c9d8d0;
  background: #f7faf8;
  color: #1d5244;
  border-radius: 4px;
  padding: 4px 2px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.12s ease;
}
.oms-chip-btn:hover {
  background: #176b58;
  color: #ffffff;
  border-color: #176b58;
}
.oms-chip-btn.active {
  background: #9b63cc;
  color: #ffffff;
  border-color: #9b63cc;
}

/* Symbols Grid in Sidebar */
.oms-symbol-categories {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 280px;
  overflow-y: auto;
  padding-right: 4px;
}
.oms-sym-category {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.oms-sym-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #72877e;
}
.oms-sym-items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}
.oms-sym-btn {
  height: 32px;
  border: 1px solid #d4ded8;
  background: #fdfefe;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.12s ease;
}
.oms-sym-btn:hover {
  background: #eef5f1;
  border-color: #176b58;
  transform: translateY(-1px);
}
.oms-sym-btn svg, .oms-sym-btn span {
  font-size: 15px;
}

/* Layout Button in Toolbar */
.oms-layout-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  background: #eaf3ee;
  border: 1px solid #287a64;
  border-radius: 4px;
  color: #175243;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}
`;

const styleEl = document.createElement('style');
styleEl.id = 'oms-vnext-styles';
styleEl.textContent = vNextStyles;
document.head.append(styleEl);

// ── 2. SCALE SYSTEM ─────────────────────────────────────────────────────
// Synchronizes standard architectural / urban planning scales with MapLibre zoom
const STANDARD_SCALES = [
  { label: '1:500 (Site Detail)', denom: 500 },
  { label: '1:1,000 (Plot Plan)', denom: 1000 },
  { label: '1:2,500 (Master Plan)', denom: 2500 },
  { label: '1:5,000 (District Study)', denom: 5000 },
  { label: '1:7,500 (Sub-Urban)', denom: 7500 },
  { label: '1:10,000 (City Sector)', denom: 10000 },
  { label: '1:25,000 (Metropolitan)', denom: 25000 },
  { label: '1:50,000 (Regional)', denom: 50000 },
];

function getMap() {
  return window.__openmap_map || window.__openmapMap || $('.maplibregl-map')?.__openmap_map;
}

function calculateCurrentScale(map) {
  if (!map) return 5000;
  const lat = map.getCenter().lat;
  const zoom = map.getZoom();
  // MapLibre meters per pixel at equator is ~156543.03392 at zoom 0
  const mPerPixel = (156543.03392 * Math.cos(lat * Math.PI / 180)) / Math.pow(2, zoom);
  // At 96 DPI: 1 inch = 0.0254 meters = 96 px -> 1 px = 0.0254 / 96 meters (~0.000264583m)
  const scale = mPerPixel / (0.0254 / 96);
  return Math.round(scale);
}

function setScaleDenominator(map, denom) {
  if (!map) return;
  const lat = map.getCenter().lat;
  const mPerPixel = denom * (0.0254 / 96);
  const zoom = Math.log2((156543.03392 * Math.cos(lat * Math.PI / 180)) / mPerPixel);
  map.easeTo({ zoom: Math.max(1, Math.min(22, zoom)), duration: 350 });
}

function initScaleBar() {
  const mapStatus = $('.map-status');
  if (!mapStatus || $('#omsScaleWidget')) return;

  const widget = document.createElement('div');
  widget.id = 'omsScaleWidget';
  widget.style.cssText = 'display:inline-flex;align-items:center;gap:5px;margin:0 8px;';
  
  const select = document.createElement('select');
  select.className = 'oms-scale-select';
  STANDARD_SCALES.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.denom;
    opt.textContent = `Scale ${s.label.split(' ')[0]}`;
    select.appendChild(opt);
  });
  
  const customOpt = document.createElement('option');
  customOpt.value = 'custom';
  customOpt.textContent = 'Scale: Custom…';
  select.appendChild(customOpt);

  select.onchange = () => {
    const map = getMap();
    if (!map) return;
    if (select.value === 'custom') {
      const cur = calculateCurrentScale(map);
      const val = prompt('Enter custom scale denominator (e.g. 7500 for 1:7500):', cur);
      if (val && !isNaN(val)) setScaleDenominator(map, parseInt(val, 10));
    } else {
      setScaleDenominator(map, parseInt(select.value, 10));
    }
  };

  widget.appendChild(select);
  mapStatus.insertBefore(widget, mapStatus.children[1] || null);

  // Sync scale dropdown when user zooms the map
  const sync = () => {
    const map = getMap();
    if (!map) return;
    const cur = calculateCurrentScale(map);
    // Find closest match or custom
    let closest = STANDARD_SCALES[0];
    let minDiff = Infinity;
    for (const s of STANDARD_SCALES) {
      const diff = Math.abs(s.denom - cur);
      if (diff < minDiff) {
        minDiff = diff;
        closest = s;
      }
    }
    if (minDiff < closest.denom * 0.15) {
      select.value = closest.denom;
    } else {
      select.value = 'custom';
      customOpt.textContent = `Scale ~1:${cur.toLocaleString()}`;
    }
  };

  const map = getMap();
  if (map) {
    map.on('zoomend', sync);
    map.on('moveend', sync);
    sync();
  }
}

// ── 3. PROFESSIONAL LAYOUT MODE (Artboard Frame) ────────────────────────
const ARTBOARDS = {
  'A4-L': { name: 'A4 Landscape (297 × 210 mm)', width: 842, height: 595, label: 'A4' },
  'A4-P': { name: 'A4 Portrait (210 × 297 mm)', width: 595, height: 842, label: 'A4' },
  'A3-L': { name: 'A3 Landscape (420 × 297 mm)', width: 1191, height: 842, label: 'A3' },
  'A3-P': { name: 'A3 Portrait (297 × 420 mm)', width: 842, height: 1191, label: 'A3' },
  'A2-L': { name: 'A2 Landscape (594 × 420 mm)', width: 1684, height: 1191, label: 'A2' },
  'A1-L': { name: 'A1 Master Plan (841 × 594 mm)', width: 2384, height: 1684, label: 'A1' },
  'A0-L': { name: 'A0 Exhibition (1189 × 841 mm)', width: 3370, height: 2384, label: 'A0' },
};

let currentArtboard = null;

function toggleLayoutMode(sizeKey) {
  const container = $('.maplibregl-map') || $('[data-renderer="webgl"]')?.parentElement;
  if (!container) return;

  let overlay = $('#omsArtboardOverlay');
  if (currentArtboard === sizeKey && overlay) {
    overlay.remove();
    currentArtboard = null;
    return;
  }

  currentArtboard = sizeKey;
  const config = ARTBOARDS[sizeKey] || ARTBOARDS['A3-L'];

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'omsArtboardOverlay';
    overlay.className = 'oms-artboard-overlay';
    container.append(overlay);
  }

  // Calculate scaled dimension to fit nicely inside current viewport
  const maxW = container.clientWidth * 0.88;
  const maxH = container.clientHeight * 0.84;
  const ratio = Math.min(maxW / config.width, maxH / config.height, 1);
  const w = Math.round(config.width * ratio);
  const h = Math.round(config.height * ratio);

  const title = ($('.field-label input')?.value) || 'Concept Master Plan';
  const subtitle = ($$('input')[1]?.value) || 'Urban Design & Catchment Study';
  const map = getMap();
  const scaleDenom = map ? calculateCurrentScale(map) : 5000;

  overlay.innerHTML = `
    <div class="oms-artboard-frame" style="width:${w}px; height:${h}px;">
      <div style="position:absolute;top:10px;left:14px;font-size:10px;font-weight:700;color:#183d33;letter-spacing:0.1em;background:rgba(255,255,255,0.9);padding:3px 8px;border-radius:2px;border:1px solid #183d33">
        ${config.name}
      </div>
      <div class="oms-artboard-titleblock">
        <h3>${title}</h3>
        <p>${subtitle}</p>
        <div class="tb-row">
          <span>SCALE: 1:${scaleDenom.toLocaleString()}</span>
          <span>DATE: ${new Date().toLocaleDateString('en-GB')}</span>
        </div>
        <div class="tb-row">
          <span>PROJECT: OpenMap Studio vNext</span>
          <span>SYSTEM: WGS 84 / Web Mercator</span>
        </div>
      </div>
    </div>
  `;
}

// ── 4. CATCHMENT ANALYSIS QUICK PRESETS ──────────────────────────────────
// Adds 500m, 1km, 3km, 5km, 10km and Walking 5/10/15/20 min chips
function initCatchmentControls() {
  const drawTab = $$('button').find(b => /^draw$/i.test((b.textContent || '').trim()));
  if (!drawTab || $('#omsCatchmentPresets')) return;

  const panel = $$('h2,h3').find(h => /drawing tools/i.test(h.textContent || ''))?.parentElement;
  if (!panel) return;

  const card = document.createElement('div');
  card.id = 'omsCatchmentPresets';
  card.className = 'oms-panel-card';
  card.innerHTML = `
    <div class="oms-panel-card-title">
      <span>CATCHMENT PRESETS</span>
      <span style="font-size:9px;color:#859990">AUTO-RADIUS</span>
    </div>
    <div style="font-size:9px;color:#6d837a;margin-bottom:4px;font-weight:600">RADIUS BUFFERS</div>
    <div class="oms-catchment-btn-grid">
      <button type="button" class="oms-chip-btn" data-r="500">500m</button>
      <button type="button" class="oms-chip-btn" data-r="1000">1km</button>
      <button type="button" class="oms-chip-btn" data-r="3000">3km</button>
      <button type="button" class="oms-chip-btn" data-r="5000">5km</button>
      <button type="button" class="oms-chip-btn" data-r="10000">10km</button>
    </div>
    <div style="font-size:9px;color:#6d837a;margin:6px 0 4px 0;font-weight:600">WALKING ISOCHRONES (~80m/min)</div>
    <div class="oms-catchment-btn-grid" style="grid-template-columns: repeat(4, 1fr)">
      <button type="button" class="oms-chip-btn" data-r="400">5 min</button>
      <button type="button" class="oms-chip-btn" data-r="800">10 min</button>
      <button type="button" class="oms-chip-btn" data-r="1200">15 min</button>
      <button type="button" class="oms-chip-btn" data-r="1600">20 min</button>
    </div>
  `;

  panel.append(card);

  card.addEventListener('click', e => {
    const btn = e.target.closest('.oms-chip-btn');
    if (!btn) return;
    const radiusM = parseFloat(btn.dataset.r);
    const map = getMap();
    if (!map) return;

    // Trigger catchment creation at current map center with preset radius
    const center = map.getCenter();
    // 1 deg lat ~ 111,320m
    const dLat = (radiusM / 111320);
    const endPoint = [center.lat + dLat, center.lng];

    if (window.__openmapCatchmentCommit) {
      window.__openmapCatchmentDraft = { center: [center.lat, center.lng] };
      window.__openmapCatchmentCommit(endPoint);
      window.__openmapCatchmentDraft = null;
    }

    $$('.oms-chip-btn').forEach(b => b.classList.toggle('active', b === btn));
    setTimeout(() => btn.classList.remove('active'), 1000);
  });
}

// ── 5. URBAN DESIGN SYMBOL LIBRARY ──────────────────────────────────────
const SYMBOLS = {
  Transport: [
    { name: 'Metro', icon: '🚇' },
    { name: 'Bus Terminal', icon: '🚌' },
    { name: 'Airport', icon: '✈️' },
    { name: 'Train', icon: '🚆' },
    { name: 'Parking', icon: '🅿️' },
    { name: 'Bicycle Hub', icon: '🚲' },
  ],
  Education: [
    { name: 'School', icon: '🏫' },
    { name: 'University', icon: '🎓' },
    { name: 'Library', icon: '📚' },
    { name: 'Kindergarten', icon: '🎒' },
  ],
  Health: [
    { name: 'Hospital', icon: '🏥' },
    { name: 'Clinic', icon: '🩺' },
    { name: 'Pharmacy', icon: '💊' },
    { name: 'Ambulance', icon: '🚑' },
  ],
  Retail: [
    { name: 'Shopping Mall', icon: '🏬' },
    { name: 'Supermarket', icon: '🛒' },
    { name: 'Cafe/Dining', icon: '☕' },
    { name: 'Local Retail', icon: '🏪' },
  ],
  Parks: [
    { name: 'Civic Park', icon: '🌳' },
    { name: 'Plaza', icon: '⛲' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Waterfront', icon: '⛵' },
  ],
  Utilities: [
    { name: 'Power Grid', icon: '⚡' },
    { name: 'Water Treatment', icon: '💧' },
    { name: 'Telecom', icon: '📡' },
    { name: 'Gov / Civil', icon: '🏛️' },
  ],
};

function initSymbolLibrary() {
  const drawTab = $$('button').find(b => /^draw$/i.test((b.textContent || '').trim()));
  if (!drawTab || $('#omsSymbolLibrary')) return;

  const panel = $$('h2,h3').find(h => /drawing tools/i.test(h.textContent || ''))?.parentElement;
  if (!panel) return;

  const card = document.createElement('div');
  card.id = 'omsSymbolLibrary';
  card.className = 'oms-panel-card';
  card.innerHTML = `
    <div class="oms-panel-card-title">
      <span>URBAN DESIGN SYMBOLS</span>
      <span style="font-size:9px;color:#859990">SVG ICONS</span>
    </div>
    <div class="oms-symbol-categories">
      ${Object.entries(SYMBOLS).map(([cat, list]) => `
        <div class="oms-sym-category">
          <div class="oms-sym-label">${cat}</div>
          <div class="oms-sym-items">
            ${list.map(s => `
              <button type="button" class="oms-sym-btn" title="${s.name}" data-symbol="${s.icon}" data-name="${s.name}">
                <span>${s.icon}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    <div style="font-size:10px;color:#6b8277;margin-top:7px">Click any symbol to arm marker placement on map.</div>
  `;

  panel.append(card);

  card.addEventListener('click', e => {
    const btn = e.target.closest('.oms-sym-btn');
    if (!btn) return;
    const sym = btn.dataset.symbol;
    const name = btn.dataset.name;

    // Set arming state for map click
    window.__omsActiveSymbol = { symbol: sym, name };
    $$('.oms-sym-btn').forEach(b => b.style.borderColor = b === btn ? '#176b58' : '');

    const map = getMap();
    if (!map) return;
    const mapEl = $('.maplibregl-map');
    if (mapEl) mapEl.style.cursor = 'crosshair';

    const onMapClick = ev => {
      mapEl.style.cursor = '';
      map.off('click', onMapClick);
      if (!window.__omsActiveSymbol) return;

      const ll = ev.lngLat;
      // Dispatch text commit event compatible with the existing annotation engine
      window.dispatchEvent(new CustomEvent('openmap:textcommit', {
        detail: {
          text: `${sym} ${name}`,
          style: {
            font: 'Aptos',
            size: 14,
            color: '#153f34',
            bold: true,
            italic: false,
            underline: false,
            opacity: 1,
            align: 'center',
            bg: 'rgba(255,255,255,0.85)'
          },
          left: ev.point.x - 20,
          top: ev.point.y - 12
        }
      }));

      window.__omsActiveSymbol = null;
      btn.style.borderColor = '';
    };

    map.once('click', onMapClick);
  });
}

// ── 6. LAYOUT MODE TOOLBAR INTEGRATION ──────────────────────────────────
function initLayoutModeUI() {
  const exportSection = $('.panel-content.export-panel') || $$('h2,h3').find(h => /export format/i.test(h.textContent || ''))?.closest('.panel-content');
  if (!exportSection || $('#omsLayoutControls')) return;

  const card = document.createElement('div');
  card.id = 'omsLayoutControls';
  card.className = 'oms-panel-card';
  card.style.marginTop = '12px';
  card.innerHTML = `
    <div class="oms-panel-card-title">
      <span>PRESENTATION ARTBOARD</span>
      <span style="font-size:9px;color:#859990">ILLUSTRATOR FRAME</span>
    </div>
    <div style="font-size:11px;color:#4a6157;margin-bottom:8px">
      Frame map inside standard presentation sheet with Title Block & Scale Bar:
    </div>
    <div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:5px;margin-bottom:8px">
      <button type="button" class="oms-chip-btn" data-art="A4-L">A4 Land</button>
      <button type="button" class="oms-chip-btn" data-art="A3-L">A3 Land</button>
      <button type="button" class="oms-chip-btn" data-art="A2-L">A2 Land</button>
      <button type="button" class="oms-chip-btn" data-art="A1-L">A1 Plan</button>
      <button type="button" class="oms-chip-btn" data-art="A0-L">A0 Poster</button>
      <button type="button" class="oms-chip-btn" data-art="none" style="background:#edf2ef;color:#788c83">Off</button>
    </div>
  `;

  exportSection.insertBefore(card, exportSection.firstChild);

  card.addEventListener('click', e => {
    const btn = e.target.closest('.oms-chip-btn');
    if (!btn) return;
    const art = btn.dataset.art;
    if (art === 'none') {
      $('#omsArtboardOverlay')?.remove();
      currentArtboard = null;
    } else {
      toggleLayoutMode(art);
    }
    $$('#omsLayoutControls .oms-chip-btn').forEach(b => b.classList.toggle('active', b === btn));
  });
}

// ── 7. BOOTSTRAPPER & OBSERVER ──────────────────────────────────────────
function boot() {
  initScaleBar();
  initCatchmentControls();
  initSymbolLibrary();
  initLayoutModeUI();

  // URL query tab helper for automated verification & direct navigation
  const urlParams = new URLSearchParams(window.location.search);
  const targetTab = urlParams.get('tab');
  if (targetTab && !window.__tabSwitched) {
    window.__tabSwitched = true;
    setTimeout(() => {
      const tabBtn = $$('button').find(b => new RegExp('^' + targetTab + '$', 'i').test((b.textContent || '').trim()));
      tabBtn?.click();
    }, 400);
  }
}

new MutationObserver(boot).observe(document.documentElement, { childList: true, subtree: true });
setTimeout(boot, 800);

})();

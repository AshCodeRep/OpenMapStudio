from pathlib import Path
import re, subprocess, sys
root=Path(__file__).parent
page=(root/'assets/page-D7Nn_9ji.js').read_text(errors='ignore')
prec=(root/'precision-drawing.js').read_text(errors='ignore')
enh=(root/'product-enhancements.js').read_text(errors='ignore')
html=(root/'index.html').read_text(errors='ignore')
checks={
'catchment_manual_bridge':'window.__openmapCatchmentCommit?.(n);return' in page and 'let i=Me(r.center,n)' in page,
'catchment_no_fixed_manual':'radius:i' in page,
'project_immediate_refresh':'requestAnimationFrame(()=>{let t=n.current' in page and 'Jc(t,Array.isArray(e.objects)?e.objects' in page,
'project_saves_objects':'objects:A' in page,
'project_saves_layers':'drawingLayers:P' in page and 'liveMapLayers:F' in page,
'project_saves_basemap':'mapStyle:T.id' in page,
'project_saves_view':'mapViewport:R' in page,
'project_file_accept':'accept:`.json,.openmap.json`' in page,
'svg_drawing_hierarchy':'w(`Drawings`,`Drawings`' in page and 'Catchment ${n+1}' in page,
'svg_labels':'OSM_Labels' in page and 'queryRenderedFeatures' in page,
'precision_live':'openmap-live-svg' in prec and "active==='catchment'" in prec,
'annotation_direct_edit':'contentEditable' in enh and 'oms-textbar' in enh and 'openmap:textcommit' in enh,
'annotation_formatting':all(x in enh for x in ['bold','italic','underline','opacity','align','rotation']),
'polygon_area_control':'Show polygon area' in enh and all(x in enh for x in ['m²','hectares','km²']),
'basemap_catalog':all(x in enh for x in ['OSM Standard','OpenTopoMap','Esri World Imagery','Carto Positron','Blueprint','Presentation Gray']),
'footer_signature':'Crafted for planners, designers, and spatial storytellers.' in enh and 'Crafted by Ashraf Alampady' in enh,
'html_loads_addons':'precision-drawing.js' in html and 'product-enhancements.js' in html,
}
for f in list((root/'assets').glob('*.js'))+[root/'bootstrap.js',root/'precision-drawing.js',root/'product-enhancements.js']:
 r=subprocess.run(['node','--check',str(f)],capture_output=True,text=True)
 checks['syntax:'+f.name]=r.returncode==0
bad=[k for k,v in checks.items() if not v]
for k,v in checks.items(): print(('PASS' if v else 'FAIL'),k)
if bad:
 print('FAILED',bad);sys.exit(1)
# relative import integrity
missing=[]
for f in (root/'assets').glob('*.js'):
 t=f.read_text(errors='ignore')
 for x in set(re.findall(r'(?:from\s*|import\()\s*["\']\.\/([^"\']+\.js)',t)):
  if not (f.parent/x).exists():missing.append((f.name,x))
print('PASS relative-imports' if not missing else 'FAIL relative-imports '+str(missing))
if missing:sys.exit(2)

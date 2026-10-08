// Authentic 3D Models created by Forge3D Studio
// Showcased both for physical print orders and MakerWorld digital downloads

export const MODEL_CATEGORIES = [
  'All',
  'Functional',
  'Decorative',
  'Home',
  'Accessories',
  'Miniatures'
];

export const MODELS_DATA = [
  {
    id: 'modular-hex-desk-organizer',
    name: 'HexCore Modular Desk Organizer',
    category: 'Functional',
    subtitle: 'Interlocking hexagonal workspace caddy with cable passthroughs',
    shortDescription: 'Precision snap-fit modular organizer system designed for mechanical tools, SD cards, USB keys, and stationery.',
    fullDescription: 'The HexCore system was engineered after 12 iterative print prototypes to solve desk clutter. Featuring hidden snap-fit magnetic alignment points, angled 45-degree chamfers that print without supports, and dedicated micro-slots for caliper storage, thumb drives, and charging cords.',
    dimensions: '185 × 160 × 75 mm',
    printTime: '5h 15m',
    weight: '168g',
    layerHeight: '0.16mm (Adaptive)',
    infill: '18% Gyroid',
    filament: 'PLA Matte / PETG',
    filamentColor: 'Graphite & Burnt Orange',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.9,
    downloads: 3420,
    physicalPrice: '$28.00',
    tags: ['Workspace', 'Hexagonal', 'Snap-Fit', 'No-Supports', 'EDC'],
    features: [
      'Zero support printing with tuned 45° overhang geometry',
      'Magnetic pocket inlays (accepts 6x3mm neodymium magnets)',
      'Dual-texture top surface finish optimized for textured PEI sheets',
      'Modular base tracks for infinite desktop expansion'
    ],
    printTips: 'Print with 3 perimeter walls for enhanced wall rigidity. Use a textured PEI plate at 60°C bed temperature for a refined matte underside texture.',
    badge: 'Popular MakerWorld'
  },
  {
    id: 'algorithmic-voronoi-planter',
    name: 'Voronoi Cellular Self-Watering Planter',
    category: 'Home',
    subtitle: 'Dual-shell succulent vessel with integrated reservoir capillary wick',
    shortDescription: 'Generative bio-mimetic Voronoi outer lattice shell cradling an internal watertight reservoir with bottom aerator.',
    fullDescription: 'Designed using computational algorithmic modeling in Grasshopper/Fusion 360, this architectural planter mimics microscopic bone cellular structures. The inner reservoir holds 250ml of water and uses cotton wick capillary action to prevent root rot while maintaining zero external leakage.',
    dimensions: '130 × 130 × 140 mm',
    printTime: '7h 40m',
    weight: '210g',
    layerHeight: '0.20mm High Quality',
    infill: '22% Rectilinear',
    filament: 'PETG / Terracotta PLA',
    filamentColor: 'Terracotta Matte & Deep Slate',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.85,
    downloads: 5190,
    physicalPrice: '$34.00',
    tags: ['Architecture', 'Parametric', 'Self-Watering', 'Biophilic', 'Home'],
    features: [
      'Dual-part interlocking body: outer artistic cage + sealed inner cup',
      '100% watertight inner pot when printed with 4 perimeters',
      'Integrated water level inspection slot',
      'Organic organic-geometry that scatters ambient light'
    ],
    printTips: 'For the inner water cup, slice with 4 walls and 102% extrusion multiplier to guarantee watertight layer bonding without sealant.',
    badge: 'Staff Pick'
  },
  {
    id: 'mag-clip-cable-management-dock',
    name: 'MagDock Orbital Cable Channel',
    category: 'Accessories',
    subtitle: 'Under-desk magnetic retention bracket for braided cords',
    shortDescription: 'Ergonomic under-desk cable organizer with magnetic swivel arms and quick-release spring tension.',
    fullDescription: 'Tired of cables sliding off desks? The MagDock clamps or bonds under any desktop edge with 3M VHB tape. Features flexible TPU dampening inserts and snap-shut magnetic gates that hold USB-C, Thunderbolt, and HDMI cables securely yet pull free on demand.',
    dimensions: '110 × 42 × 30 mm',
    printTime: '2h 10m',
    weight: '48g',
    layerHeight: '0.12mm Detail',
    infill: '30% Grid (High Rigidity)',
    filament: 'PETG & TPU 95A',
    filamentColor: 'Dark Graphite & Electric Amber',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.95,
    downloads: 8200,
    physicalPrice: '$16.00',
    tags: ['Cable Management', 'Under-Desk', 'Magnetic', 'Multi-Material'],
    features: [
      'Dual-material design (Rigid PETG body + soft TPU cable cushions)',
      'Countersunk screw mounting holes + 3M VHB recessed channel',
      'Holds up to 5 thick cables simultaneously without pinching',
      'Smooth curved radius prevents wire sheath wear'
    ],
    printTips: 'Can be printed as a single material model in standard PETG or co-printed with TPU using dual-extrusion AMS/MMU systems.',
    badge: 'Trending #1'
  },
  {
    id: 'articulated-mechanical-desk-cyborg',
    name: 'ChronoTitan Articulated Desk Toy',
    category: 'Mechanical Toys',
    altCategory: 'Decorative',
    subtitle: 'Print-in-place multi-axis mechanical automaton with geared joints',
    shortDescription: 'Zero-assembly print-in-place mechanical titan featuring 18 articulation ball joints and working gear linkages.',
    fullDescription: 'Showcasing the supreme mechanical tolerances possible with dialed-in 3D printing. The ChronoTitan prints fully assembled on the build plate in a single run with 0.3mm internal joint clearance gaps. Lift it off the plate, break the microscopic sacrificial bridges, and enjoy fluid mechanical poseability.',
    dimensions: '95 × 85 × 165 mm',
    printTime: '6h 30m',
    weight: '125g',
    layerHeight: '0.16mm Standard',
    infill: '15% Gyroid',
    filament: 'PLA Silk / Metallic Copper PLA',
    filamentColor: 'Metallic Copper & Gunmetal',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.92,
    downloads: 12400,
    physicalPrice: '$32.00',
    tags: ['Print-In-Place', 'Articulated', 'Mechanical', 'Desk Toy', 'Tolerances'],
    features: [
      '100% Print-in-Place: requires no screws, glue, or assembly',
      '18 ball-socket articulation points with self-tensioning skirts',
      'Satisfying mechanical click ratchet in spine and elbows',
      'Tested across 0.4mm and 0.6mm nozzles'
    ],
    printTips: 'Calibrate your flow rate before printing. If your printer over-extrudes by >2%, the micro-clearance joints will fuse. Ensure cooling fan is at 100%.',
    badge: 'Award Winner'
  },
  {
    id: 'cantilever-foldable-phone-stand',
    name: 'AeroFold MagSafe Cantilever Stand',
    category: 'Accessories',
    subtitle: 'Fold-flat pocket stand with integrated MagSafe puck holder',
    shortDescription: 'Ultra-slim pocket-folding phone and tablet stand with customizable viewing angles and wireless puck recess.',
    fullDescription: 'Engineered for mobile creators and desk workers. Folds down to just 8mm thickness for effortless laptop bag transit. When unfolded, the reinforced triangular cantilever locks into 3 ergonomic viewing angles (35°, 50°, 65°) optimized for video calls, desktop clock mode, and stylus drawing.',
    dimensions: '140 × 78 × 8 mm (Folded)',
    printTime: '3h 05m',
    weight: '72g',
    layerHeight: '0.16mm Optimal',
    infill: '25% Tri-Hexagonal',
    filament: 'Carbon Fiber Reinforced PETG (PETG-CF)',
    filamentColor: 'Matte Carbon Black',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.9,
    downloads: 6700,
    physicalPrice: '$24.00',
    tags: ['MagSafe', 'Travel', 'Ultra-Slim', 'CF-PETG', 'Phone Stand'],
    features: [
      'Folds completely flat into an 8mm monolithic slab',
      'Tight snap-fit ring for Apple MagSafe / Qi2 magnetic wireless charger',
      'Rubberized TPU non-slip foot pad grooves',
      'Carbon-fiber reinforced structure handles heavy 12.9" tablets'
    ],
    printTips: 'Recommend printing in PETG-CF or ABS for superior heat resistance inside cars or hot sunlight environments.',
    badge: 'Daily Carry'
  },
  {
    id: 'cyber-gargoyle-miniature-statue',
    name: 'Cyberpunk Sentinel Miniature Sculpture',
    category: 'Miniatures',
    subtitle: 'High-detail resin & micro-layer FDM display statue',
    shortDescription: 'Intricate cyberpunk chimera guardian sculpted in ZBrush with micro-mechanical plating and gothic architecture.',
    fullDescription: 'A masterclass in digital sculpting. Designed for 8K resin stereolithography (SLA) or ultra-fine 0.2mm nozzle FDM printing. Features crisp microscopic surface texturing, layered hydraulic muscle cabling, and an ornate industrial perch base with rain-drainage channels.',
    dimensions: '115 × 95 × 180 mm',
    printTime: '9h 15m',
    weight: '190g',
    layerHeight: '0.08mm Ultra Detail (or 0.05mm SLA)',
    infill: '12% Gyroid',
    filament: 'Resin / PLA+ Matte Gray',
    filamentColor: 'Matte Primer Gray',
    supportRequired: true,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.98,
    downloads: 4100,
    physicalPrice: '$45.00',
    tags: ['Sculpture', 'Miniature', 'Cyberpunk', 'ZBrush', 'High-Detail'],
    features: [
      'Sculpted at over 4.2 million polygons for razor-sharp micro details',
      'Pre-supported hollowed resin version included with suction relief holes',
      'Optimized FDM orientation with minimal auto-tree support footprint',
      'Base includes weighted 20mm slot for metal coin or ballast'
    ],
    printTips: 'For FDM, utilize Tree Supports (Auto) with 2mm branch diameter and 40° threshold angle for effortless breakaway with zero scarring.',
    badge: 'Art Series'
  },
  {
    id: 'precision-dial-caliper-holster',
    name: 'AccuGauge Caliper & Gauge Holster',
    category: 'Functional',
    subtitle: 'Wall and pegboard mount for digital precision measuring tools',
    shortDescription: 'Ergonomic snap-in sheath for 150mm digital calipers with tip protectors and spare battery storage.',
    fullDescription: 'Every maker workshop needs quick access to calipers without risking dropped carbide tips. AccuGauge locks firmly into French cleats, Multiboard, or standard Ikea Skadis pegboards. Features a spring-loaded retention tab that holds calipers safely even when brushed against.',
    dimensions: '175 × 52 × 28 mm',
    printTime: '2h 45m',
    weight: '62g',
    layerHeight: '0.20mm Functional',
    infill: '25% Gyroid',
    filament: 'PETG High Impact',
    filamentColor: 'Industrial Charcoal & Safety Amber',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.88,
    downloads: 3890,
    physicalPrice: '$18.00',
    tags: ['Workshop', 'Tools', 'Ikea Skadis', 'Multiboard', 'Safety'],
    features: [
      'Universal Ikea Skadis hooks + Multiboard peg adapters included',
      'Molded slot for 2x backup LR44 / CR2032 button batteries',
      'Precision recessed lip prevents zero-point calibration drift',
      'Instant one-handed draw and holster action'
    ],
    printTips: 'Print on its side with layer lines parallel to the mounting clip clips to maximize layer shear strength.',
    badge: 'Workshop Essential'
  },
  {
    id: 'parametric-kinetic-gyroscope',
    name: 'Helios Triple-Gimbal Kinetic Gyro',
    category: 'Decorative',
    subtitle: 'Smooth-spinning concentric brass-bearing desktop sculpture',
    shortDescription: 'Mesmerizing triple-axis concentric ring gimbal fitted with ceramic 608 skate bearings for 3+ minute continuous spin.',
    fullDescription: 'A conversation piece for any office or maker bench. Three mathematically balanced concentric rings revolve independently on frictionless bearings. Designed with tuned gyroscopic balance points that produce hypnotic kinetic motion with a gentle fingertip tap.',
    dimensions: '120 × 120 × 120 mm',
    printTime: '4h 50m',
    weight: '110g',
    layerHeight: '0.16mm Optimal',
    infill: '20% Concentric',
    filament: 'Copper Metallic PLA & Deep Space Black',
    filamentColor: 'Burnished Copper & Obsidian',
    supportRequired: false,
    makerWorldLink: 'https://makerworld.com/en/@atomicraft',
    rating: 4.91,
    downloads: 7550,
    physicalPrice: '$29.00',
    tags: ['Kinetic Art', 'Gimbal', 'Bearings', 'Fidget', 'Desktop'],
    features: [
      'Precision press-fit bearing pockets with 0.15mm interference fit',
      'Dynamic rotational balance prevents table wobble during spin',
      'Beveled tactile grip thumb indents for high-RPM spinning',
      'Includes weighted desk pedestal stand'
    ],
    printTips: 'If press-fit is too tight on your printer, scale up by 0.5% in slicer X/Y hole compensation.',
    badge: 'Kinetic Art'
  }
];

export const FEATURED_CASE_STUDY = {
  title: 'Modular HexCore Studio Command Center',
  client: 'Studio Workspace / Creator Tooling',
  category: 'Custom Product Design & Batch Manufacturing',
  leadTime: '6 Business Days',
  iterationCount: '4 Rapid Prototypes',
  finalMaterial: 'Bambu Matte Carbon Black + Burnt Copper PETG',
  overview: 'A complete desktop command center engineered for video editors and hardware makers, eliminating 8 loose cables and consolidating 14 daily tools into an interchangeable interlocking grid.',
  stages: [
    {
      phase: '01. The Problem',
      title: 'Tangled Cables & Cluttered Workspace Tools',
      details: 'Client had 3 hard drives, audio interface dials, SD card adapters, and digital calipers scattered with loose cables dangling behind monitors. Off-the-shelf organizers failed to accommodate exact tool dimensions.'
    },
    {
      phase: '02. CAD Engineering',
      title: 'Sub-Millimeter Digital Measurement & Interlocking Grid',
      details: 'Using digital calipers and Autodesk Fusion 360, we drafted an interlocking 65mm hexagonal matrix with 45° overhangs, chamfered entry channels, and hidden neodymium magnet recesses.'
    },
    {
      phase: '03. Rapid Prototyping',
      title: 'Tolerance Calibration & Snap-Fit Stress Testing',
      details: 'Test prints at 0.28mm draft speed validated 0.2mm magnet clearance and friction clips. Modified tolerances by 0.08mm to account for thermal PETG shrinkage.'
    },
    {
      phase: '04. Final Production',
      title: 'Flawless 0.16mm CoreXY Print Run',
      details: 'Printed on tuned enclosed CoreXY 3D printers with hardened steel nozzles. Layer lines vanished against textured PEI bed surfaces, resulting in an injection-molded quality finish.'
    }
  ],
  stats: [
    { label: 'Tolerance Accuracy', value: '±0.08 mm' },
    { label: 'Prototypes to Final', value: '4 Rounds' },
    { label: 'Total Print Duration', value: '18h 40m' },
    { label: 'Weight Reduction', value: '38% Less Plastic' }
  ]
};

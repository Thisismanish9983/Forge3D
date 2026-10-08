export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Idea',
    shortTitle: 'Concept & Brief',
    subtitle: 'Send sketches, dimensions, or inspiration',
    summary: 'Customer explains the requirement, rough sketches, photo references, or target dimensions via our custom order portal.',
    description: 'Every great physical object begins as a thought. Whether you have a back-of-the-napkin doodle, a broken plastic bracket you need replicated, or a detailed engineering diagram with caliper measurements, our studio reviews your concept within hours.',
    details: [
      'Submit dimensions, references, or existing 3D files',
      'Clarify functional stress points and operating environment',
      'Select material preferences (PLA, PETG, ABS, TPU, Carbon Fiber)',
      'Receive upfront feasibility analysis and cost timeline'
    ],
    technicalMetric: 'Response time: < 4 business hours',
    icon: 'MessageSquareShare'
  },
  {
    step: '02',
    title: 'Design & CAD Modeling',
    shortTitle: '3D CAD Engineering',
    subtitle: 'Translating concepts into parametric solid geometry',
    summary: 'Our industrial designers craft a clean, high-precision 3D CAD model engineered specifically for additive manufacturing.',
    description: 'We translate your requirements into parametric CAD in Fusion 360 or organic digital sculpts. We optimize wall thicknesses, overhang angles, snap-fit tolerances (typically ±0.15mm), and structural ribbing so the model is not only beautiful, but strong and easily printable.',
    details: [
      'Parametric CAD modeling with editable dimensions',
      'Design for Additive Manufacturing (DfAM) optimization',
      'Mechanical stress concentration analysis and fillet reinforcement',
      'Hardware integration (M3/M4 threaded heat inserts, magnets, bearings)'
    ],
    technicalMetric: 'Tolerance targeting: ±0.08mm to ±0.15mm',
    icon: 'Boxes'
  },
  {
    step: '03',
    title: 'Customer Review & Feedback',
    shortTitle: 'Interactive 3D Review',
    subtitle: 'Inspect photorealistic renders & 3D models',
    summary: 'Customer reviews the design via interactive 3D model viewport, renders, and dimensional drawings before printing.',
    description: 'You receive an interactive 3D link where you can orbit, zoom, inspect dimensions, and request design tweaks. We iterate until the ergonomics, appearance, and physical mechanics are dialed in to your complete satisfaction.',
    details: [
      '360° interactive browser viewport of the CAD model',
      'High-resolution multi-angle studio renders',
      'Direct feedback loop for ergonomic and dimensional adjustments',
      'Final customer sign-off before committing to the print bed'
    ],
    technicalMetric: 'Includes unlimited minor revision rounds',
    icon: 'Eye'
  },
  {
    step: '04',
    title: 'Precision 3D Printing',
    shortTitle: 'CoreXY Additive Slicing & Printing',
    subtitle: 'Translating digital code into solid polymer',
    summary: 'Approved model is sliced with custom toolpaths and 3D printed using industrial CoreXY machines and tuned filaments.',
    description: 'We slice the model in Bambu Studio / OrcaSlicer with custom infill orientations (Gyroid for isotropic strength) and adaptive layer heights down to 0.08mm. The physical object is printed inside enclosed chambers with active temperature regulation and dual cooling fans.',
    details: [
      'High-speed CoreXY print farm running tuned profiles',
      'Textured PEI bed adhesion for silky matte bottom finishes',
      'Automated multi-color / multi-material filament switching (AMS)',
      'High-resolution SLA resin available for micro-miniatures'
    ],
    technicalMetric: 'Layer resolution: 0.08mm to 0.28mm',
    icon: 'Printer'
  },
  {
    step: '05',
    title: 'Quality Check & Delivery',
    shortTitle: 'Inspection & Express Dispatch',
    subtitle: 'Strict caliper inspection & safe packaging',
    summary: 'Final product is post-processed, caliper inspected for dimensional accuracy, securely packed, and delivered to your doorstep.',
    description: 'Once off the print bed, support materials are cleanly removed, threaded heat-inserts are installed if required, and critical dimensions are verified with digital calipers. Parts are carefully bubble-wrapped and dispatched with tracking.',
    details: [
      '10-point dimensional tolerance caliper inspection',
      'Mechanical hinge & snap-fit movement verification',
      'Post-curing and thermal stress annealing where applicable',
      'Eco-friendly shockproof protective packaging & tracking number'
    ],
    technicalMetric: '100% dimensional inspection pass rate',
    icon: 'PackageCheck'
  }
];

export const WORKFLOW_DEEP_DIVE = [
  {
    phase: 'Discovery & Feasibility',
    tagline: 'Understanding the physical reality of your project',
    points: ['Material thermal demands', 'Load-bearing stress points', 'Target weight & budget']
  },
  {
    phase: 'CAD Architecture',
    tagline: 'Building parametric math, not just visual meshes',
    points: ['Watertight manifold geometry', 'Chamfers & overhang mitigation', 'Hardware clearances']
  },
  {
    phase: 'Slicing & Toolpath Tuning',
    tagline: 'Every G-code line crafted for strength',
    points: ['Gyroid infill distribution', 'Seam placement hiding', 'Perimeter wall multiplication']
  },
  {
    phase: 'Fabrication & Thermal Management',
    tagline: 'Precision extruded polymers under tight thermal control',
    points: ['Heated chamber stabilization', 'Hardened steel nozzles', 'Multi-material co-extrusion']
  },
  {
    phase: 'Finishing & Tolerance Auditing',
    tagline: 'Turning raw prints into heirloom hardware',
    points: ['Digital caliper spot-checks', 'Threaded brass insert pressing', 'Deburring & surface polish']
  },
  {
    phase: 'Doorstep Delivery & Ongoing Support',
    tagline: 'Delivering directly to makers, creators, and brands',
    points: ['Tracked priority courier', 'Digital file archive retention', 'Reorder batch discounts']
  }
];

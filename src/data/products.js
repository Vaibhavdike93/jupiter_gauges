export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'plug-gauges', name: 'Plain Plug Gauges' },
  { id: 'ring-gauges', name: 'Plain Ring Gauges' },
  { id: 'thread-gauges', name: 'Thread Gauges' },
  { id: 'snap-gauges', name: 'Snap Gauges' },
  { id: 'pin-gauges', name: 'Measuring Pins' },
  { id: 'slip-gauges', name: 'Slip Gauges (Blocks)' },
  { id: 'masters', name: 'OD Masters & Rings' }
];

export const PRODUCTS = [
  {
    id: 'plain-plug-gauge',
    name: 'Plain Plug Gauges (GO / NO-GO)',
    category: 'plug-gauges',
    shortDesc: 'Double-ended and single-ended cylindrical limit gauges for high-precision bore inspection and hole sizing.',
    fullDesc: 'Jupiter Gauges precision Plain Plug Gauges are manufactured to strict industrial standards for verifying internal diameters. Designed with GO and NO-GO ends, these gauges provide immediate limit verification on production lines and quality inspection cells. Each gauge is crafted from stabilized tool steel with sub-zero cryogenic treatment to guarantee dimensional permanence.',
    image: '/images/plain_plug_gauges.jpg',
    standard: 'IS:3455 / DIN 2245 / ISO 286',
    material: 'EN-31 Alloy Steel / OHNS / Tungsten Carbide',
    hardness: '60 - 62 HRC (Carbide: 90 HRA)',
    toleranceGrade: 'Class H7, H8, H9 or custom gauge tolerance to Class XX, X, Y',
    sizeRange: 'Ø 0.5 mm to Ø 300 mm',
    subZeroTreated: 'Yes (-80°C Cryogenic Stabilization)',
    calibration: 'Traceable to National / NABL accredited standards',
    features: [
      'High-wear resistance with super-finished ground gauging surfaces',
      'Available in Reversible Pin type (0.5 to 10mm), Taperlock (6 to 50mm), and Trilock (above 40mm)',
      'Hexagonal knurled handle with clear laser-etched nominal dimension and GO/NO-GO color bands',
      'Air relief flat provided for blind hole inspection upon request',
      'Exceptional roundness and cylindrical runout control within 0.0005 mm'
    ],
    applications: [
      'Automotive engine cylinder block and connecting rod bore inspection',
      'Aerospace precision hydraulic valve bodies',
      'Precision machined component manufacturing',
      'General shopfloor batch inspection'
    ]
  },
  {
    id: 'plain-ring-gauge',
    name: 'Plain Ring Gauges',
    category: 'ring-gauges',
    shortDesc: 'Precision cylindrical ring gauges for inspecting external shaft diameters and calibrating comparative instruments.',
    fullDesc: 'Engineered for high accuracy and extended working life, Jupiter Plain Ring Gauges are utilized to inspect external cylindrical diameters and verify male components against allowable tolerances. Manufactured as GO and NO-GO gauges with precision lapped internal diameters, our ring gauges offer superior geometric precision and minimal surface roughness.',
    image: '/images/plain_ring_gauges.jpg',
    standard: 'IS:3485 / DIN 2250 / BS 4064',
    material: 'High Carbon Chromium Alloy Steel (EN-31) / Tungsten Carbide',
    hardness: '62 - 64 HRC',
    toleranceGrade: 'Class g6, h6, f7, or manufacturing tolerance Grade 0 & 1',
    sizeRange: 'Ø 1.5 mm to Ø 350 mm',
    subZeroTreated: 'Yes (-80°C Cryogenic Stabilization)',
    calibration: 'Traceable to National / NABL standards',
    features: [
      'Deep sub-zero cryogenic treatment prevents age-induced dimensional shift',
      'Diamond-knurled external periphery for ergonomic and non-slip operator grip',
      'Lapped inner cylindrical bore with surface roughness Ra < 0.05 µm',
      'Clearly demarcated GO and NO-GO markings with relief annular groove on NO-GO rings',
      'Available in both limit gauge and master setting ring tolerances'
    ],
    applications: [
      'External shaft diameter verification in automotive transmission lines',
      'Pin and bearing journal inspection',
      'Pump impeller shaft inspection',
      'Zero-setting of bore comparators and two-point micrometers'
    ]
  },
  {
    id: 'thread-plug-ring-gauge',
    name: 'Thread Gauges (Plug & Ring)',
    category: 'thread-gauges',
    shortDesc: 'Comprehensive GO and NO-GO screw thread gauges for Metric, UNC, UNF, BSP, and NPT thread profiles.',
    fullDesc: 'Jupiter Gauges thread gauges provide fast and reliable verification of screw threads, pitch diameter, flank angle, and major/minor limits. Manufactured using CNC thread grinding with precision multi-rib wheels, our thread plug and ring gauges maintain exact pitch accuracy and tooth flank geometry to prevent stripping and cross-threading issues.',
    image: '/images/thread_gauges.jpg',
    standard: 'ISO 1502 / IS:4218 / ASME B1.2 / BS 919 / DIN 13',
    material: 'Oil Hardened Non-Shrinking Steel (OHNS) / High-Carbon Alloy Steel',
    hardness: '60 - 62 HRC',
    toleranceGrade: 'Metric 6H / 6g, UNC/UNF 2B / 2A, Pipe Class A',
    sizeRange: 'M1 to M200 (Metric) | No. 0 to 8" (UNC/UNF) | 1/8" to 6" (BSP/NPT)',
    subZeroTreated: 'Yes, stabilized against stress relaxation',
    calibration: 'Pitch diameter calibrated using 3-wire precision method',
    features: [
      'Precision ground helical threads with truncated crests on NO-GO gauges',
      'Available in parallel threads (Metric, Unified, Whitworth) and taper pipe threads (NPT, BSPT)',
      'Chip grooves provided on larger sizes for thread swarf clearing during inspection',
      'Thread ring gauges supplied as solid rings or adjustable with master setting plug',
      'Laser engraved thread designation, class of fit, and pitch'
    ],
    applications: [
      'Fastener and bolt manufacturing',
      'High-pressure fluid fittings and hydraulic couplings',
      'Automotive spark plug and cylinder head tapped holes',
      'Oilfield threaded tubular goods (OCTG) and valves'
    ]
  },
  {
    id: 'snap-gauge',
    name: 'Snap Gauges (Caliper Limit Gauges)',
    category: 'snap-gauges',
    shortDesc: 'Rapid GO / NO-GO caliper limit gauges with carbide measuring anvils for external diameter check on machine.',
    fullDesc: 'Jupiter Snap Gauges are the premier choice for rapid, non-destructive external dimension inspection directly on CNC lathes and grinding machines. Featuring heavy-duty forged or cast C-frames with stabilized thermal expansion, these gauges are equipped with wear-resistant tungsten carbide tipped anvils to withstand harsh production environments.',
    image: '/images/snap_gauges.jpg',
    standard: 'IS:3477 / DIN 2230 / BS 969',
    material: 'Forged Alloy C-Frame with Tungsten Carbide Anvils',
    hardness: 'Anvils: 90 - 92 HRA | Frame: Stress-relieved Cast Steel',
    toleranceGrade: 'Class IT6, IT7, IT8 or customized to customer drawings',
    sizeRange: '3 mm to 250 mm',
    subZeroTreated: 'Yes, frame stabilized against thermal warping',
    calibration: 'Supplied with calibration report traceable to NABL accredited lab',
    features: [
      'Progressive GO and NO-GO steps on a single frame for single-pass inspection',
      'Tungsten carbide tipped anvils provide up to 10x longer service life than tool steel',
      'Ribbed ergonomic frame design provides superior rigidity and prevents deflection during use',
      'Optional insulating grips to prevent body heat transfer from operator hands',
      'Available in double-ended (I-type) or single-frame progressive step configurations'
    ],
    applications: [
      'Direct in-process checking of cylindrical turned parts on CNC lathes',
      'Centerless grinding line continuous inspection',
      'Crankshaft journal diameter rapid testing',
      'Precision shaft manufacturing quality gates'
    ]
  },
  {
    id: 'pin-gauge-set',
    name: 'Measuring Pins & Pin Gauge Sets',
    category: 'pin-gauges',
    shortDesc: 'Micro-finished cylindrical measuring pins in individual sizes and graduated box sets for precision hole inspection.',
    fullDesc: 'Jupiter Precision Measuring Pins are manufactured for ultra-precise hole measurement, slot width verification, distance between hole centers, and groove geometry inspection. Supplied as individual replacement pins or complete boxed sets with 0.01 mm or 0.001 mm step intervals, each pin is precision lapped with sub-micron diametrical tolerance.',
    image: '/images/pin_gauges.jpg',
    standard: 'ISO 286 / DIN 2269 / Class 0 & Class 1',
    material: 'High-Purity Bearing Steel (EN-31) / Tungsten Carbide',
    hardness: '62 - 64 HRC (Steel) / 90 HRA (Carbide)',
    toleranceGrade: 'Class 0 (± 0.001 mm) / Class 1 (± 0.002 mm)',
    sizeRange: 'Ø 0.20 mm to Ø 25.00 mm (Steps of 0.01 mm or 0.001 mm)',
    subZeroTreated: 'Yes, cryogenic stabilization for extreme permanence',
    calibration: 'Measured with laser micrometer traceable to international standards',
    features: [
      'Lapped surface finish with Ra ≤ 0.02 µm for smooth insertion without scratching',
      'Chamfered end bevels for effortless hole entry',
      'Supplied in solid hardwood or shockproof industrial storage cases with clearly labelled sockets',
      'High straightness and circularity tolerance within 0.0008 mm',
      'Available with quick-clamping pin vise handles for manual inspection'
    ],
    applications: [
      'Precision punch and die hole clearance inspection in stamping tools',
      'Distance measurement between holes using calipers or CMM',
      'Small nozzle, injector, and aperture orifice sizing',
      'Go/No-Go inspection for electronics connectors and micro-machined parts'
    ]
  },
  {
    id: 'slip-gauge-set',
    name: 'Slip Gauges (Gauge Blocks)',
    category: 'slip-gauges',
    shortDesc: 'Master length standards with mirror optical wringing finish for toolroom calibration and CMM reference.',
    fullDesc: 'Jupiter Gauge Blocks (Slip Gauges) represent the fundamental standard of length measurement in modern precision manufacturing. Each rectangular gauge block features optical-grade micro-lapped parallel faces that wring together securely. Available in Grade 0, Grade 1, and Grade K in standard sets of 32, 47, 88, 103, and 112 pieces.',
    image: '/images/slip_gauges.jpg',
    standard: 'ISO 3650 / DIN 861 / IS:2984',
    material: 'Special Alloy Gauge Steel / Tungsten Carbide / Ceramic (Zirconia)',
    hardness: '≥ 64 HRC with high thermal stability',
    toleranceGrade: 'Grade 0 (Reference Calibration) & Grade 1 (Toolroom Quality)',
    sizeRange: '0.5 mm to 100 mm in standardized sets',
    subZeroTreated: 'Yes, multi-stage cryo-aging for zero secular elongation',
    calibration: 'Interferometric and comparative calibration certificates included',
    features: [
      'Superb wringing capability through ultra-flat lapped measurement faces (flatness < 0.05 µm)',
      'Exceptional parallelism and dimensional stability over long operational lifespans',
      'Laser etched nominal dimension and individual serial number on each block',
      'Supplied in velvet-lined fitted mahogany wood case with anti-corrosive protective coating',
      'Low thermal expansion coefficient matched to industrial workshop steel components'
    ],
    applications: [
      'Calibration of micrometers, vernier calipers, and dial bore indicators',
      'Zero-setting of height gauges and optical profile projectors',
      'Sine bar angle inspection and setup in precision machining centers',
      'Standard reference in temperature-controlled Metrology inspection rooms'
    ]
  },
  {
    id: 'od-master-setting-disc',
    name: 'OD Masters & Setting Discs',
    category: 'masters',
    shortDesc: 'Cylindrical outer diameter setting masters for calibrating comparative external measuring instruments.',
    fullDesc: 'Jupiter OD Masters are cylindrical reference standards designed for calibrating external measuring devices, including snap gauges, electronic bore gauges, and optical comparators. Equipped with thermal insulating grips to prevent body heat transfer during calibration routines, these setting masters feature sub-micron runout and roundness.',
    image: '/images/od_master.jpg',
    standard: 'DIN 2250 Form C / IS:3485 / ASME B89',
    material: 'Deep-Hardened Cryo Alloy Steel (EN-31)',
    hardness: '62 - 64 HRC',
    toleranceGrade: 'Class XX / Class X calibration standards',
    sizeRange: 'Ø 5.0 mm to Ø 300 mm',
    subZeroTreated: 'Yes (-80°C Cryogenic Stabilization)',
    calibration: 'Full coordinate calibration sheet with 4-point diameter certification',
    features: [
      'Precision cylindrical OD with mirror finish and low runout (< 0.0006 mm)',
      'Fitted with ergonomic insulating rubber/composite grip rings',
      'High wear resistance and resistance to ambient temperature fluctuation',
      'Laser marked exact calibrated diameter to 4 decimal places (e.g., Ø 50.0004 mm)',
      'Supplied with wooden storage base or protective individual box'
    ],
    applications: [
      'Zero-setting of dial snap gauges and electronic external comparators',
      'Calibration reference for automated inspection stations',
      'Tool presetter and optical measuring system master calibration',
      'Metrology laboratory calibration transfer standard'
    ]
  },
  {
    id: 'master-setting-ring',
    name: 'Master Setting Rings',
    category: 'masters',
    shortDesc: 'Master internal bore reference rings for zeroing pneumatic bore gauges, air plugs, and three-point micrometers.',
    fullDesc: 'Jupiter Master Setting Rings are manufactured to extreme tolerances to serve as the reference standard for comparative internal measuring instruments such as two-point bore indicators, air plug gauges, and internal micrometers. Each ring is precision ground and hand-lapped in temperature-stabilized environments to achieve sub-micron concentricity and geometry.',
    image: '/images/master_setting_rings.jpg',
    standard: 'DIN 2250 Form C / IS:3485 / BS 4064',
    material: 'Stabilized Alloy Steel / Tungsten Carbide Lined',
    hardness: '62 - 64 HRC',
    toleranceGrade: 'Class XX, Class X (Bore geometry within 0.0005 mm)',
    sizeRange: 'Ø 2.5 mm to Ø 300 mm',
    subZeroTreated: 'Yes (-80°C Cryogenic Treatment)',
    calibration: 'Laser interferometer calibrated, 20°C standard reference',
    features: [
      'Deep mirror-lapped internal bore with exceptional cylindricity and roundness',
      'Coarse knurled outer circumference for safe, secure operator handling',
      'Laser engraved actual measured size to 4 decimal places (e.g., Ø 50.002 mm)',
      'Sub-zero treated against retained austenite transformation',
      'Available with individual calibration certificate stating deviation, roundness, and taper'
    ],
    applications: [
      'Zero-setting of pneumatic air plug gauges and air electronic comparators',
      'Master calibration of two-point and three-point internal micrometers',
      'CMM probe qualification and verification master',
      'Precision tooling and jig boring setup reference'
    ]
  }
];

export const TECHNICAL_STANDARDS = [
  { standard: 'IS:3455', title: 'Indian Standard', desc: 'Gauging of cylindrical workpieces and tolerances for plain limit gauges' },
  { standard: 'ISO 1502', title: 'International Standard', desc: 'ISO general purpose metric screw threads — Gauges and gauging' },
  { standard: 'DIN 2245', title: 'German Standard', desc: 'Plain limit plug gauges for workpieces from 1 mm to 40 mm' },
  { standard: 'DIN 2250', title: 'German Standard', desc: 'Go and No-Go plain ring gauges and setting rings from 1 mm to 315 mm' },
  { standard: 'ISO 3650', title: 'Gauge Blocks', desc: 'Geometrical product specifications (GPS) — Length standards — Gauge blocks' },
  { standard: 'ASME B1.2', title: 'American Standard', desc: 'Gauges and gauging for Unified Inch Screw Threads' }
];

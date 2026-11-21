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
    name: 'Plain Plug Gauges',
    category: 'plug-gauges',
    shortDesc: 'Double-ended and single-ended cylindrical limit gauges for high-precision bore inspection and hole sizing.',
    image: './images/plain_plug_gauges.jpg'
  },
  {
    id: 'plain-ring-gauge',
    name: 'Plain Ring Gauges',
    category: 'ring-gauges',
    shortDesc: 'Precision cylindrical ring gauges for inspecting external shaft diameters and calibrating comparative instruments.',
    image: './images/plain_ring_gauges.jpg'
  },
  {
    id: 'thread-plug-ring-gauge',
    name: 'Thread Gauges',
    category: 'thread-gauges',
    shortDesc: 'Comprehensive GO and NO-GO screw thread gauges for Metric, UNC, UNF, BSP, and NPT thread profiles.',
    image: './images/thread_gauges.jpg'
  },
  {
    id: 'snap-gauge',
    name: 'Snap Gauges',
    category: 'snap-gauges',
    shortDesc: 'Rapid GO / NO-GO caliper limit gauges with carbide measuring anvils for external diameter check on machine.',
    image: './images/snap_gauges.jpg'
  },
  {
    id: 'pin-gauge-set',
    name: 'Measuring Pins & Pin Gauge Sets',
    category: 'pin-gauges',
    shortDesc: 'Micro-finished cylindrical measuring pins in individual sizes and graduated box sets for precision hole inspection.',
    image: './images/pin_gauges.jpg'
  },
  {
    id: 'slip-gauge-set',
    name: 'Slip Gauges (Gauge Blocks)',
    category: 'slip-gauges',
    shortDesc: 'Master length standards with mirror optical wringing finish for toolroom calibration and CMM reference.',
    image: './images/slip_gauges.jpg'
  },
  {
    id: 'od-master-setting-disc',
    name: 'OD Masters & Setting Discs',
    category: 'masters',
    shortDesc: 'Cylindrical outer diameter setting masters for calibrating comparative external measuring instruments.',
    image: './images/od_master.jpg'
  },
  {
    id: 'master-setting-ring',
    name: 'Master Setting Rings',
    category: 'masters',
    shortDesc: 'Master internal bore reference rings for zeroing pneumatic bore gauges, air plugs, and three-point micrometers.',
    image: './images/master_setting_rings.jpg'
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

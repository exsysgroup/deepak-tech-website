import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function ROServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Zap className="w-10 h-10 text-emerald-400" />
              Reverse Osmosis (RO)
            </h1>
            <p className="text-emerald-200 text-lg mt-2">Reliable reverse-osmosis technology for pure and safe water (0.5 m³/hr – 500 m³/hr).</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500 dark:text-gray-300" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-700 dark:text-gray-100">Reverse Osmosis (RO)</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our RO systems remove dissolved salts, organics, and pathogens to produce high-quality permeate suitable for process water, potable applications, or Zero Liquid Discharge integration. Configurable in single- or double-pass arrangements, these skid-mounted units deliver consistent performance with automated cleaning and energy-recovery options.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Single-/Double-Pass Configurations: Tailor salt rejection to 98–99.5% for standard or ultrapure requirements</li>
            <li>Energy Recovery Modules: Boost efficiency on high-recovery systems (&gt;75% recovery)</li>
            <li>Automatic Chemical Cleaning (CIP): Programmable acid and alkali flush cycles for membrane longevity</li>
            <li>High-Pressure Pump Skid: Integrated, VFD-driven pump with suction-lift capability</li>
            <li>Modular Skid-Mounting: Pre-assembled stainless-steel frame for plug-and-play installation</li>
            <li>Smart PLC Control: Touchscreen HMI with remote SCADA connectivity and automated alarm logic</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Flow Capacity:</b> 0.5 m³/hr → 500 m³/hr</li>
            <li><b>Recovery Rate:</b> 50% – 85% (single-pass)</li>
            <li><b>Operating Pressure:</b> 8 – 16 bar</li>
            <li><b>Salt Rejection:</b> 98% – 99.5%</li>
            <li><b>Energy Consumption:</b> 2.0 – 3.5 kWh/m³</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step RO Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Feed & Permeate Quality Assessment
              <ul className="list-disc pl-6">
                <li>TDS, SDI, silica, and microbial challenge tests</li>
                <li>Recovery and concentrate management planning</li>
              </ul>
            </li>
            <li>Conceptual Design & Budget Quote
              <ul className="list-disc pl-6">
                <li>System configuration, membrane brand selection, and cost estimate</li>
              </ul>
            </li>
            <li>Detailed Engineering & Skid Assembly
              <ul className="list-disc pl-6">
                <li>P&IDs, structural design, factory acceptance tests (FAT)</li>
              </ul>
            </li>
            <li>Installation, Commissioning & Validation
              <ul className="list-disc pl-6">
                <li>Piping/electrical hookup, pressure testing, permeate quality validation</li>
              </ul>
            </li>
            <li>Operation & Maintenance & Support
              <ul className="list-disc pl-6">
                <li>Training on membrane cleaning, consumables planning, service contracts</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: 200 m³/hr RO Plant for Electronics Manufacturer</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“Consistently achieved 99% salt rejection at 70% recovery, supplying ultrapure water for semiconductor rinsing and reducing annual water costs by 45%.”</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for RO
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
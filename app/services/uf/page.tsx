import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default function UFServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/images/services/uf.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Filter className="w-10 h-10 text-emerald-400" />
              Ultrafiltration (UF)
            </h1>
            <p className="text-emerald-200 text-lg mt-2">High-performance membrane filtration for superior water quality (1 m³/hr – 200 m³/hr).</p>
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
          <li className="text-gray-700 dark:text-gray-100">Ultrafiltration (UF)</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our UF systems leverage advanced polymeric and ceramic membranes to remove suspended solids, colloids, and macromolecules without chemicals. Ideal as a pretreatment for RO or as a standalone polishing step, these compact, skid-mounted units deliver crystal-clear permeate with minimal footprint and low operating costs.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Membrane Options: Hollow-fiber, tubular, or flat-sheet configurations to suit feed quality and capacity</li>
            <li>Automatic Backwash & CIP: Programmable cycles for periodic backwash and clean-in-place to maximize membrane life</li>
            <li>Compact Skid Design: Fully welded stainless-steel racks with integrated pumps, controls, and piping</li>
            <li>PLC-Based Control: Touchscreen interface with real-time monitoring of pressure, flow, and differential</li>
            <li>Low Energy Demand: Typical specific energy consumption &lt; 0.5 kWh/m³</li>
            <li>Scalable Arrays: Easily paralleled modules for higher capacities or redundancy</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Flow Capacity:</b> 1 m³/hr → 200 m³/hr</li>
            <li><b>Feed Turbidity Tolerance:</b> Up to 1000 NTU</li>
            <li><b>Operating Pressure:</b> 1.0 – 3.5 bar</li>
            <li><b>Recovery Rate:</b> Up to 95%</li>
            <li><b>Membrane Flux:</b> 50 – 80 L/m²·hr</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step UF Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Feed Water Analysis & Sizing
              <ul className="list-disc pl-6">
                <li>Turbidity, SDI, and particle-size distribution testing</li>
                <li>Determine module count and pre-filtration needs</li>
              </ul>
            </li>
            <li>Conceptual Design & Quotation
              <ul className="list-disc pl-6">
                <li>Membrane selection, skid layout, and budgetary pricing</li>
              </ul>
            </li>
            <li>Detailed Engineering & Assembly
              <ul className="list-disc pl-6">
                <li>Skid fabrication, piping & instrumentation drawings, factory testing</li>
              </ul>
            </li>
            <li>Installation & Start-Up
              <ul className="list-disc pl-6">
                <li>Mechanical hookup, electrical wiring, system flushing, and performance validation</li>
              </ul>
            </li>
            <li>Operation & Maintenance Support
              <ul className="list-disc pl-6">
                <li>Training on backwash/CIP procedures, spare-parts provisioning, annual service</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: 150 m³/hr UF System for Food & Beverage Plant</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“Delivered feedwater turbidity reduction from 500 NTU to &lt;1 NTU, enabling smooth downstream RO operation and reducing RO chemical cleaning frequency by 60%.”</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for UF
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
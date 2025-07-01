import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function SkidMountedServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Settings className="w-10 h-10 text-emerald-400" />
              Skid-Mounted / Package Plants
            </h1>
            <p className="text-emerald-200 text-lg mt-2">Compact, pre-assembled water-treatment units for rapid deployment (5 KLD – 500 KLD).</p>
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
          <li className="text-gray-700 dark:text-gray-100">Skid-Mounted / Package Plants</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our skid-mounted plants arrive factory-assembled on a stainless-steel frame with all piping, pumps, and controls pre-installed. They're plug-and-play solutions that drastically reduce site civil work and commissioning time—ideal for remote locations, pilot studies, or emergency expansions.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Fully Pre-Assembled Skid: Frame-mounted, welded stainless-steel construction with piping, valves, and instrumentation</li>
            <li>Integrated Controls: PLC panel with touchscreen HMI, pre-wired for power and I/O, ready for SCADA hookup</li>
            <li>Standardized Modules: Choose from STP, ETP, UF, RO, or combined treatment trains</li>
            <li>Quick Connect Utilities: Factory–fit water, power, and chemical dosing hookups for plug-and-play start-up</li>
            <li>Compact Footprint: Typical skid dimensions &lt; 2 m × 1.5 m × 2 m for small units; scalable to larger frames</li>
            <li>Pre-Commission Factory Testing: FAT performed to guarantee performance before shipping</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Flow Capacity:</b> 5 KLD → 500 KLD</li>
            <li><b>Skid Footprint:</b> From 2 m × 1.5 m to 6 m × 2.5 m</li>
            <li><b>Power Hookup:</b> Single- or three-phase, 220–480 V</li>
            <li><b>Utility Ports:</b> 1″–2″ quick-connect for water/chemical</li>
            <li><b>Control Voltage:</b> 24 V DC for instrumentation, 230 V AC for panel</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step Skid-Plant Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Module Selection & Sizing
              <ul className="list-disc pl-6">
                <li>Choose treatment train (STP, ETP, UF, RO) and capacity</li>
                <li>Review site utility availability and space constraints</li>
              </ul>
            </li>
            <li>Customized Skid Design & Quotation
              <ul className="list-disc pl-6">
                <li>3D skid layout, P&IDs, and cost estimate</li>
              </ul>
            </li>
            <li>Factory Assembly & Testing
              <ul className="list-disc pl-6">
                <li>Welded skid fabrication, complete piping, wiring, and FAT</li>
              </ul>
            </li>
            <li>Transport & Site Hookup
              <ul className="list-disc pl-6">
                <li>Rigging, placement, utility connections, and mechanical alignment</li>
              </ul>
            </li>
            <li>Commissioning & Handover
              <ul className="list-disc pl-6">
                <li>System flushing, performance checks, operator training, and O&M handoff</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: Combined UF + RO Skid for Remote Mining Camp</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">"Delivered a 50 m³/day skid-mounted UF+RO train that reduced downstream maintenance by 70% and required zero civil foundation work—commissioned in under three days."</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for Skid-Mounted Plants
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
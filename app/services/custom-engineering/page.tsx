import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"

export default function CustomEngineeringServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-10 h-10 text-emerald-400" />
              Custom Engineering & Retrofit Solutions
            </h1>
            <p className="text-emerald-200 text-lg mt-2">Bespoke water-treatment upgrades and system integrations tailored to your existing infrastructure.</p>
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
          <li className="text-gray-700 dark:text-gray-100">Custom Engineering & Retrofit Solutions</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            When off-the-shelf solutions won't fit, our in-house R&D and engineering teams step in. We analyze your current systems—whether aging STPs, legacy ETPs, or standalone RO/UF units—and design custom upgrades, add-on modules, or full retrofits that boost capacity, improve compliance, and extend equipment life with minimal downtime.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Site-Specific Analysis: Detailed audit of hydraulics, piping, instrumentation, and performance bottlenecks</li>
            <li>Modular Add-Ons: Design of bespoke pretreatment trains, nutrient dosing skids, or polishing loops for existing plants</li>
            <li>Control System Upgrades: Retrofit PLC/SCADA panels with modern HMI, remote telemetry, and data-logging capabilities</li>
            <li>Energy Optimization: Integration of energy-recovery devices, variable-frequency drives, and optimized aeration/blower packages</li>
            <li>Compliance Overhaul: Process re-rating and chemical dosing strategies to meet new discharge or reuse standards</li>
            <li>Turnkey Execution: End-to-end project management from design through FAT, site installation, and commissioning</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Scope of Work:</b> Chemical dosing, membrane add-ons, PLC upgrades, civil modifications</li>
            <li><b>Capacity Increase:</b> Up to +50% on existing flow rates</li>
            <li><b>Downtime Required:</b> 1–7 days (dependent on retrofit complexity)</li>
            <li><b>Control Upgrade Power:</b> 24 V DC instrumentation; 230 V AC panel</li>
            <li><b>Energy Savings:</b> 10–30% reduction in kWh/m³ treated</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step Retrofit Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Pre-Audit & Feasibility Study
              <ul className="list-disc pl-6">
                <li>Site walk-down, performance testing, and gap analysis</li>
                <li>Feasibility report with CAPEX/OPEX impact</li>
              </ul>
            </li>
            <li>Conceptual Design & Client Approval
              <ul className="list-disc pl-6">
                <li>Process flow revisions, P&ID mark-ups, and high-level budget</li>
              </ul>
            </li>
            <li>Detailed Engineering & Fabrication
              <ul className="list-disc pl-6">
                <li>Custom skid/piping design, control panel wiring diagrams, and FAT of retrofit modules</li>
              </ul>
            </li>
            <li>Installation & Tie-In
              <ul className="list-disc pl-6">
                <li>Phased integration to minimize plant shutdown time; tie-in of new skids and instrumentation</li>
              </ul>
            </li>
            <li>Commissioning, Validation & Training
              <ul className="list-disc pl-6">
                <li>Performance tests against new targets, HMI/SCADA walkthroughs, and operator handover</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: Retrofit of 200 KLD ETP for Chemical Plant</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">"Upgraded coagulation dosing skid and replaced legacy PLC controls—boosted COD removal from 75% to 92% and cut energy consumption by 20%, all with just a 48-hour shutdown."</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for Custom Engineering & Retrofit
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
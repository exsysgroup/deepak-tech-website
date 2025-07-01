import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Recycle } from "lucide-react"

export default function ETPServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Recycle className="w-10 h-10 text-emerald-400" />
              Effluent Treatment Plants (ETP)
            </h1>
            <p className="text-emerald-200 text-lg mt-2">Efficient, compliant treatment for industrial wastewater (5 KLD – 2 MLD).</p>
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
          <li className="text-gray-700 dark:text-gray-100">Effluent Treatment Plants (ETP)</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our ETP systems are engineered to handle a wide range of industrial effluents—from high-strength dye-house discharge to mildly contaminated wash-water streams. We combine physical, chemical, and biological processes into a compact, automated package that guarantees regulatory compliance, minimises sludge generation, and optimises operating costs.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Multi-Stage Treatment: Equalization → Coagulation/Flocculation → Aerobic/Anoxic Biological Treatment → Clarification → Filtration → Disinfection</li>
            <li>Custom Chemical Dosing: On-site dosing skid for coagulants, pH adjustment, and de-chlorination</li>
            <li>Modular Skid-Mounting: Prefabricated treatment trains for fast site erection</li>
            <li>Advanced Automation: PLC control with options for remote monitoring and alarm notifications</li>
            <li>Sludge Handling: Integrated thickening and centrifuge or filter‐press modules</li>
            <li>Zero Liquid Discharge Ready: Easy add-on for RO or evaporation and crystallization stages</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Capacity:</b> 5 KLD → 2 MLD</li>
            <li><b>Footprint:</b> 15 m² (5 KLD) → 300 m² (2 MLD)</li>
            <li><b>Power Consumption:</b> 0.4 – 1.2 kWh/m³</li>
            <li><b>Sludge Yield:</b> 0.4 – 0.6 kg dry solids/m³ treated</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step ETP Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Influent Characterization & Site Audit
              <ul className="list-disc pl-6">
                <li>Sample testing (COD/BOD/TSS/pH)</li>
                <li>Space, utilities, and discharge permit review</li>
              </ul>
            </li>
            <li>Conceptual Design & Budgetary Quote
              <ul className="list-disc pl-6">
                <li>Process flow diagram (PFD)</li>
                <li>Equipment list, civil scope, and high-level costs</li>
              </ul>
            </li>
            <li>Detailed Engineering & Prefabrication
              <ul className="list-disc pl-6">
                <li>Piping & instrumentation diagrams (P&IDs)</li>
                <li>Skid assembly, factory acceptance testing</li>
              </ul>
            </li>
            <li>Installation, Commissioning & Validation
              <ul className="list-disc pl-6">
                <li>Civil foundation prep, mechanical & electrical hookup</li>
                <li>Performance tests to guarantee effluent standards</li>
              </ul>
            </li>
            <li>Operation, Maintenance & Training
              <ul className="list-disc pl-6">
                <li>Operator handover, O&M manuals</li>
                <li>Spare-parts kits and annual service agreements</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: 100 KLD ETP for ABC Pharma</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“Achieved 85% COD removal and consistently met ZLD targets by integrating automatic coagulant dosing and MBBR biologics—resulting in a 40% reduction in total treatment costs.”</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for ETP
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
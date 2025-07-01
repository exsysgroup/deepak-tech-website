import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets } from "lucide-react"

export default function STPServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-end justify-start bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <Droplets className="w-10 h-10 text-emerald-400" />
              Sewage Treatment Plants (STP)
            </h1>
            <p className="text-emerald-200 text-lg mt-2">Tailored 10 KLD – 1 MLD systems for municipal & industrial wastewater.</p>
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
          <li className="text-gray-700 dark:text-gray-100">Sewage Treatment Plants (STP)</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our STP solutions combine proven biological treatment processes with robust automation to deliver compliant, low-maintenance sewage treatment. Whether you need a compact package plant for a small township or a custom-engineered system for a large industrial campus, we design to your flow, discharge standards, and footprint constraints.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Flexible Process Options: MBBR, MBR, SBR or conventional activated sludge</li>
            <li>Compact Layouts: Prefabricated skid-mounted units for tight sites</li>
            <li>Automated Controls: PLC-based monitoring with remote SCADA integration</li>
            <li>Sludge Management: On-site dewatering and dry sludge handling</li>
            <li>Low Energy Consumption: Optimized aeration and decanting cycles</li>
            <li>Regulatory Compliance: Meets CPCB and state pollution-control norms</li>
          </ul>
        </section>

        {/* Technical Specs */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Technical Specs Snapshot</h2>
          <ul className="text-gray-700 dark:text-gray-200">
            <li><b>Capacity Range:</b> 10 KLD → 1 MLD</li>
            <li><b>Footprint:</b> From 20 m² (10 KLD) to 200 m² (1 MLD)</li>
            <li><b>Power Draw:</b> 0.3 – 0.8 kWh/m³</li>
          </ul>
        </section>

        {/* Process Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">Our 5-Step STP Delivery Process</h2>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>Site Survey & Analysis – Flow measurement, influent characterization, space audit</li>
            <li>Conceptual Design & Quotation – Layout drawings, process selection, cost estimate</li>
            <li>Detailed Engineering & Fabrication – Shop drawings, skid assembly, factory testing</li>
            <li>Installation & Commissioning – Civil support, mechanical erection, system tuning</li>
            <li>Operation & Maintenance – Training, spare-parts supply, annual service contracts</li>
          </ol>
        </section>

        {/* Mini Case Study */}
        {/* <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
          <h3 className="font-semibold mb-1">Mini Case Study: 50 KLD STP for XYZ Textile Mill</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“Reduced BOD by 95%, COD by 90%, and slashed sludge volume by 30%—all within a 25 m² footprint.”</p>
          <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
        </section> */}

        {/* Call to Action */}
        <section className="text-center pt-4">
          <Link href="/quote">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full">
              Request a Quote for STP
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
} 
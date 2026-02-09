"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplets, Recycle, Filter, Zap, Settings, Wrench } from "lucide-react"

function STPModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Droplets className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sewage Treatment Plants (STP)</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">Tailored 10 KLD – 1 MLD systems for municipal & industrial wastewater.</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our STP solutions combine proven biological treatment processes with robust automation to deliver compliant, low-maintenance sewage treatment. Whether you need a compact package plant for a small township or a custom-engineered system for a large industrial campus, we design to your flow, discharge standards, and footprint constraints.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Flexible Process Options: MBBR, MBR, SBR or conventional activated sludge</li>
              <li>Compact Layouts: Prefabricated skid-mounted units for tight sites</li>
              <li>Automated Controls: PLC-based monitoring with remote SCADA integration</li>
              <li>Sludge Management: On-site dewatering and dry sludge handling</li>
              <li>Low Energy Consumption: Optimized aeration and decanting cycles</li>
              <li>Regulatory Compliance: Meets CPCB and state pollution-control norms</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Capacity Range:</b> 10 KLD → 1 MLD</li>
              <li><b>Footprint:</b> From 20 m² (10 KLD) to 200 m² (1 MLD)</li>
              <li><b>Power Draw:</b> 0.3 – 0.8 kWh/m³</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step STP Delivery Process</h3>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Site Survey & Analysis – Flow measurement, influent characterization, space audit</li>
              <li>Conceptual Design & Quotation – Layout drawings, process selection, cost estimate</li>
              <li>Detailed Engineering & Fabrication – Shop drawings, skid assembly, factory testing</li>
              <li>Installation & Commissioning – Civil support, mechanical erection, system tuning</li>
              <li>Operation & Maintenance – Training, spare-parts supply, annual service contracts</li>
            </ol>
          </div>
          {/* Mini Case Study */}
          {/* <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
            <h4 className="font-semibold mb-1">Mini Case Study: 50 KLD STP for XYZ Textile Mill</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2">“Reduced BOD by 95%, COD by 90%, and slashed sludge volume by 30%—all within a 25 m² footprint.”</p>
            <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
          </div> */}
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/stp" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for STP</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ETPModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Recycle className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Effluent Treatment Plants (ETP)</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">Efficient, compliant treatment for industrial wastewater (5 KLD – 2 MLD).</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our ETP systems are engineered to handle a wide range of industrial effluents—from high-strength dye-house discharge to mildly contaminated wash-water streams. We combine physical, chemical, and biological processes into a compact, automated package that guarantees regulatory compliance, minimises sludge generation, and optimises operating costs.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Multi-Stage Treatment: Equalization → Coagulation/Flocculation → Aerobic/Anoxic Biological Treatment → Clarification → Filtration → Disinfection</li>
              <li>Custom Chemical Dosing: On-site dosing skid for coagulants, pH adjustment, and de-chlorination</li>
              <li>Modular Skid-Mounting: Prefabricated treatment trains for fast site erection</li>
              <li>Advanced Automation: PLC control with options for remote monitoring and alarm notifications</li>
              <li>Sludge Handling: Integrated thickening and centrifuge or filter‐press modules</li>
              <li>Zero Liquid Discharge Ready: Easy add-on for RO or evaporation and crystallization stages</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Capacity:</b> 5 KLD → 2 MLD</li>
              <li><b>Footprint:</b> 15 m² (5 KLD) → 300 m² (2 MLD)</li>
              <li><b>Power Consumption:</b> 0.4 – 1.2 kWh/m³</li>
              <li><b>Sludge Yield:</b> 0.4 – 0.6 kg dry solids/m³ treated</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step ETP Delivery Process</h3>
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
          </div>
          {/* Mini Case Study */}
          {/* <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
            <h4 className="font-semibold mb-1">Mini Case Study: 100 KLD ETP for ABC Pharma</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2">“Achieved 85% COD removal and consistently met ZLD targets by integrating automatic coagulant dosing and MBBR biologics—resulting in a 40% reduction in total treatment costs.”</p>
            <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
          </div> */}
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/etp" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for ETP</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function UFModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Filter className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ultrafiltration (UF)</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">High-performance membrane filtration for superior water quality (1 m³/hr – 200 m³/hr).</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our UF systems leverage advanced polymeric and ceramic membranes to remove suspended solids, colloids, and macromolecules without chemicals. Ideal as a pretreatment for RO or as a standalone polishing step, these compact, skid-mounted units deliver crystal-clear permeate with minimal footprint and low operating costs.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Membrane Options: Hollow-fiber, tubular, or flat-sheet configurations to suit feed quality and capacity</li>
              <li>Automatic Backwash & CIP: Programmable cycles for periodic backwash and clean-in-place to maximize membrane life</li>
              <li>Compact Skid Design: Fully welded stainless-steel racks with integrated pumps, controls, and piping</li>
              <li>PLC-Based Control: Touchscreen interface with real-time monitoring of pressure, flow, and differential</li>
              <li>Low Energy Demand: Typical specific energy consumption &lt; 0.5 kWh/m³</li>
              <li>Scalable Arrays: Easily paralleled modules for higher capacities or redundancy</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Flow Capacity:</b> 1 m³/hr → 200 m³/hr</li>
              <li><b>Feed Turbidity Tolerance:</b> Up to 1000 NTU</li>
              <li><b>Operating Pressure:</b> 1.0 – 3.5 bar</li>
              <li><b>Recovery Rate:</b> Up to 95%</li>
              <li><b>Membrane Flux:</b> 50 – 80 L/m²·hr</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step UF Delivery Process</h3>
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
          </div>
          {/* Mini Case Study */}
          {/* <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
            <h4 className="font-semibold mb-1">Mini Case Study: 150 m³/hr UF System for Food & Beverage Plant</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2">“Delivered feedwater turbidity reduction from 500 NTU to &lt;1 NTU, enabling smooth downstream RO operation and reducing RO chemical cleaning frequency by 60%.”</p>
            <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
          </div> */}
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/uf" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for UF</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ROModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Zap className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reverse Osmosis (RO)</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">Advanced membrane desalination for high-purity water (500 LPH – 100 m³/hr).</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our Reverse Osmosis (RO) systems use semi-permeable membranes to remove up to 99% of dissolved salts, particles, and bacteria from water. Whether for industrial process water, boiler feed, or safe drinking water, these systems are engineered for high recovery, energy efficiency, and long-term reliability.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>High-Performance Membranes: Using top-tier components for maximum salt rejection and permeate quality</li>
              <li>Energy-Efficient Operation: High-pressure pumps with optional energy recovery devices</li>
              <li>Comprehensive Pretreatment: Sand filtration, carbon filtration, and softening/anti-scalant dosing to protect membranes</li>
              <li>Smart Automation: PLC-SCADA based control for fully automatic operation and monitoring</li>
              <li>Clean-In-Place (CIP): Integrated skids for easy membrane maintenance and longevity</li>
              <li>Robust Skid Assembly: Stainless steel frame with high-pressure piping for durability</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Capacity:</b> 500 LPH → 100 m³/hr</li>
              <li><b>Salt Rejection:</b> &gt; 99%</li>
              <li><b>Recovery:</b> 50% – 85% (depending on feed TDS)</li>
              <li><b>Operating Pressure:</b> 10 – 25 bar (Brackish); 60 bar (Sea Water)</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step RO Delivery Process</h3>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Water Analysis & Projection – Detailed feed water testing and membrane projection software simulation</li>
              <li>System Design & Engineering – Custom skid layout, pump selection, and membrane array configuration</li>
              <li>Manufacturing & Assembly – Precision fabrication of stainless steel skids and high-pressure piping</li>
              <li>Installation & Commissioning – Site erection, membrane loading, and performance validation</li>
              <li>Service & AMC – Routine membrane cleaning, anti-scalant supply, and performance monitoring</li>
            </ol>
          </div>
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/ro" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for RO</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkidModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Settings className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skid-Mounted / Package Plants</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">Compact, pre-assembled water-treatment units for rapid deployment (5 KLD – 500 KLD).</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our skid-mounted plants arrive factory-assembled on a stainless-steel frame with all piping, pumps, and controls pre-installed. They're plug-and-play solutions that drastically reduce site civil work and commissioning time—ideal for remote locations, pilot studies, or emergency expansions.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Fully Pre-Assembled Skid: Frame-mounted, welded stainless-steel construction with piping, valves, and instrumentation</li>
              <li>Integrated Controls: PLC panel with touchscreen HMI, pre-wired for power and I/O, ready for SCADA hookup</li>
              <li>Standardized Modules: Choose from STP, ETP, UF, RO, or combined treatment trains</li>
              <li>Quick Connect Utilities: Factory–fit water, power, and chemical dosing hookups for plug-and-play start-up</li>
              <li>Compact Footprint: Typical skid dimensions &lt; 2 m × 1.5 m × 2 m for small units; scalable to larger frames</li>
              <li>Pre-Commission Factory Testing: FAT performed to guarantee performance before shipping</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Flow Capacity:</b> 5 KLD → 500 KLD</li>
              <li><b>Skid Footprint:</b> From 2 m × 1.5 m to 6 m × 2.5 m</li>
              <li><b>Power Hookup:</b> Single- or three-phase, 220–480 V</li>
              <li><b>Utility Ports:</b> 1″–2″ quick-connect for water/chemical</li>
              <li><b>Control Voltage:</b> 24 V DC for instrumentation, 230 V AC for panel</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step Skid-Plant Delivery Process</h3>
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
          </div>
          {/* Mini Case Study */}
          {/* <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
            <h4 className="font-semibold mb-1">Mini Case Study: Combined UF + RO Skid for Remote Mining Camp</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2">“Delivered a 50 m³/day skid-mounted UF+RO train that reduced downstream maintenance by 70% and required zero civil foundation work—commissioned in under three days.”</p>
            <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
          </div> */}
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/skid-mounted" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for Skid-Mounted Plants</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomEngModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:w-4/5 lg:w-3/5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
          <Wrench className="w-10 h-10 text-emerald-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Engineering & Retrofit Solutions</h2>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">Bespoke water-treatment upgrades and system integrations tailored to your existing infrastructure.</p>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-700 dark:text-gray-200">
              When off-the-shelf solutions won't fit, our in-house R&D and engineering teams step in. We analyze your current systems—whether aging STPs, legacy ETPs, or standalone RO/UF units—and design custom upgrades, add-on modules, or full retrofits that boost capacity, improve compliance, and extend equipment life with minimal downtime.
            </p>
          </div>
          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
              <li>Site-Specific Analysis: Detailed audit of hydraulics, piping, instrumentation, and performance bottlenecks</li>
              <li>Modular Add-Ons: Design of bespoke pretreatment trains, nutrient dosing skids, or polishing loops for existing plants</li>
              <li>Control System Upgrades: Retrofit PLC/SCADA panels with modern HMI, remote telemetry, and data-logging capabilities</li>
              <li>Energy Optimization: Integration of energy-recovery devices, variable-frequency drives, and optimized aeration/blower packages</li>
              <li>Compliance Overhaul: Process re-rating and chemical dosing strategies to meet new discharge or reuse standards</li>
              <li>Turnkey Execution: End-to-end project management from design through FAT, site installation, and commissioning</li>
            </ul>
          </div>
          {/* Technical Specs */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical Specs Snapshot</h3>
            <ul className="text-gray-700 dark:text-gray-200">
              <li><b>Scope of Work:</b> Chemical dosing, membrane add-ons, PLC upgrades, civil modifications</li>
              <li><b>Capacity Increase:</b> Up to +50% on existing flow rates</li>
              <li><b>Downtime Required:</b> 1–7 days (dependent on retrofit complexity)</li>
              <li><b>Control Upgrade Power:</b> 24 V DC instrumentation; 230 V AC panel</li>
              <li><b>Energy Savings:</b> 10–30% reduction in kWh/m³ treated</li>
            </ul>
          </div>
          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Our 5-Step Retrofit Delivery Process</h3>
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
          </div>
          {/* Mini Case Study */}
          {/* <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded p-4">
            <h4 className="font-semibold mb-1">Mini Case Study: Retrofit of 200 KLD ETP for Chemical Plant</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-2">“Upgraded coagulation dosing skid and replaced legacy PLC controls—boosted COD removal from 75% to 92% and cut energy consumption by 20%, all with just a 48-hour shutdown.”</p>
            <Link href="#" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Case Study →</Link>
          </div> */}
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center pt-2">
            <Link href="/services/custom-engineering" className="text-emerald-700 dark:text-emerald-300 underline">Read Full Details</Link>
            <Link href="/quote">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Request a Quote for Custom Engineering & Retrofit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [showSTPModal, setShowSTPModal] = useState(false)
  const [showETPModal, setShowETPModal] = useState(false)
  const [showUFModal, setShowUFModal] = useState(false)
  const [showROModal, setShowROModal] = useState(false)
  const [showSkidModal, setShowSkidModal] = useState(false)
  const [showCustomEngModal, setShowCustomEngModal] = useState(false)
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-8">Our Services & Expertise</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* STP Card with Modal */}
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sewage Treatment Plants (STP)</h3>
              <p className="text-gray-600 mb-6">Advanced solutions for municipal and industrial sewage treatment.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowSTPModal(true)}>
                Learn More →
              </Button>
            </Card>
            {/* ETP Card with Modal */}
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Effluent Treatment Plants (ETP)</h3>
              <p className="text-gray-600 mb-6">Efficient and compliant treatment of industrial wastewater.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowETPModal(true)}>
                Learn More →
              </Button>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ultrafiltration (UF)</h3>
              <p className="text-gray-600 mb-6">High-performance membrane filtration for superior water quality.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowUFModal(true)}>
                Learn More →
              </Button>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reverse Osmosis (RO)</h3>
              <p className="text-gray-600 mb-6">Reliable reverse osmosis technology for pure and safe water.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowROModal(true)}>
                Learn More →
              </Button>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Skid-Mounted/Package Plants</h3>
              <p className="text-gray-600 mb-6">Compact, pre-assembled, and versatile water treatment units.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowSkidModal(true)}>
                Learn More →
              </Button>
            </Card>
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Engineering & Retrofit</h3>
              <p className="text-gray-600 mb-6">Tailored solutions and upgrades for existing water systems.</p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700" onClick={() => setShowCustomEngModal(true)}>
                Learn More →
              </Button>
            </Card>
          </div>
        </div>
        {/* STP Modal */}
        <STPModal open={showSTPModal} onClose={() => setShowSTPModal(false)} />
        {/* ETP Modal */}
        <ETPModal open={showETPModal} onClose={() => setShowETPModal(false)} />
        {/* UF Modal */}
        <UFModal open={showUFModal} onClose={() => setShowUFModal(false)} />
        {/* RO Modal */}
        <ROModal open={showROModal} onClose={() => setShowROModal(false)} />
        {/* Skid Modal */}
        <SkidModal open={showSkidModal} onClose={() => setShowSkidModal(false)} />
        {/* Custom Eng Modal */}
        <CustomEngModal open={showCustomEngModal} onClose={() => setShowCustomEngModal(false)} />
      </section>

      {/* Five-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Five-Step Process</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Requirement Analysis & Site Survey</h3>
                <p className="text-gray-600">
                  Understanding your specific needs and assessing site conditions to propose the optimal solution.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Conceptual Design & Quotation</h3>
                <p className="text-gray-600">
                  Developing a tailored design concept and providing a transparent, detailed quotation for your project.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Detailed Engineering & Fabrication</h3>
                <p className="text-gray-600">
                  Precise engineering and quality fabrication of all components according to the approved design.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Installation & Commissioning</h3>
                <p className="text-gray-600">
                  Professional on-site installation and thorough commissioning to ensure optimal system performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Operation & Maintenance Support</h3>
                <p className="text-gray-600">
                  Comprehensive support and maintenance services to keep your water treatment plant running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 rounded-full">
            Get a Quote
          </Button>
        </div>
      </section> */}
    </div>
  )
}

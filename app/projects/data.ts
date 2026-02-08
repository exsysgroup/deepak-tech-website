export interface Project {
  id: string
  title: string
  client: string
  description: string
  longDescription: string
  image: string
  headerImage: string
  industry: string
  location: string[]
  technologies: string[]
  capacity: string
  year: string
  challenges: string
  solution: string
}

export const projects: Project[] = [
  {
    id: "havells-india-ltd",
    title: "Integrated Water Management System",
    client: "Havells India Ltd",
    description: "Comprehensive water treatment solution including RO and DM plants for a leading electrical equipment manufacturer.",
    longDescription:
      "Havells India Ltd, a prominent FMEG company, required a robust water management system for its manufacturing facilities. We provided a state-of-the-art solution ensuring high-quality water for industrial processes. Our engagement with Havells started in 2007, delivering consistent value and support across multiple locations.",
    image: "/projects/havells_card.png",
    headerImage: "/projects/havells_header.png",
    industry: "Electrical & Consumer Goods",
    location: ["Faridabad", "Haridwar", "Sahibabad", "Alwar", "Neemrana"],
    technologies: ["RO Plant", "DM Plant"],
    capacity: "150 KLD Total (100 KLD RO + 50 KLD DM)",
    year: "2007",
    challenges:
      "The client needed consistent high-purity water for their manufacturing processes across diverse geographical locations with varying raw water quality. Ensuring zero downtime and maintaining strict water quality parameters were critical requirements.",
    solution:
      "We designed and commissioned a 100 KLD Reverse Osmosis (RO) plant and a 50 KLD Demineralization (DM) plant. The system incorporates advanced pre-treatment and automation to handle input water variations and deliver consistent output. We also provide ongoing maintenance and support across all their branches.",
  },
  {
    id: "ag-industries-pvt-ltd",
    title: "Multi-Stage Water Treatment & Recycling",
    client: "AG Industries Pvt Ltd",
    description: "End-to-end water treatment setup including STP, UF, Softener, and RO plants for plastic component manufacturing.",
    longDescription:
      "AG Industries, a leader in plastic molding for the automotive sector, partnered with us in 2010. We have supported their expansion across multiple states by installing comprehensive water treatment and recycling systems, helping them meet environmental norms and process water requirements.",
    image: "/projects/ag_card.png",
    headerImage: "/projects/ag_header.png",
    industry: "Automotive / Plastic Molding",
    location: ["Gurgaon", "Bawal", "Delhi", "Dharuhera", "Manesar", "Halol (Gujrat)", "Chittoor (AP)"],
    technologies: ["STP", "UF", "Softener", "RO Plant"],
    capacity: "350 KLD Total (STP & UF 50, Softener 100, RO 200)",
    year: "2010",
    challenges:
      "Managing wastewater from plastic molding processes and ensuring compliance with strict environmental discharge norms while simultaneously generating high-quality process water for cooling and molding operations.",
    solution:
      "We implemented a holistic solution comprising a 50 KLD Sewage Treatment Plant (STP) with Ultrafiltration (UF) for recycling, a 100 KLD Softener plant for cooling towers, and a 200 KLD RO plant for critical process applications. This integrated approach ensures sustainable water use and operational efficiency.",
  },
  {
    id: "arete-22",
    title: "Compact Utility Water System",
    client: "Arete 22",
    description: "Versatile water utility setup combining ETP, STP, DM, and Softener technologies.",
    longDescription:
      "Arete 22 required a versatile and compact water treatment solution. Our installation deals with multiple water streams, ensuring that both effluent and sewage are treated effectively while providing soft and demineralized water for their specific operational needs.",
    image: "/projects/artee_card.png",
    headerImage: "/projects/artee_header.png",
    industry: "Manufacturing",
    location: ["Gurgaon"],
    technologies: ["ETP", "STP", "DM Plant", "Softener"],
    capacity: "20 KLD",
    year: "2023",
    challenges:
      "Designing a multi-functional treatment system within a limited footprint to handle diverse water quality requirements, from wastewater treatment to high-purity process water.",
    solution:
      "We engineered a compact, skid-mounted 20 KLD integrated system that functions as an ETP, STP, DM plant, and Softener. This hybrid design maximizes space utilization and provides flexibility in operation.",
  },
  {
    id: "polycab-india-ltd",
    title: "Rental RO Plant Services",
    client: "Polycab India Ltd",
    description: "Flexible water treatment solutions with a rental RO plant model.",
    longDescription:
      "Polycab India Ltd, a giant in the wires and cables industry, needed a flexible water treatment solution. We provided a 10 KLD RO plant on a rental basis, ensuring they have access to quality water without capital blocking, demonstrating our service flexibility.",
    image: "/projects/polycab_card.png",
    headerImage: "/projects/polycab_header.png",
    industry: "Electrical & Cables",
    location: ["Pan India"],
    technologies: ["RO Plant (Rental)"],
    capacity: "10 KLD",
    year: "2014",
    challenges:
      "The client required an immediate, low-capex solution for water treatment during a project phase or for successful interim operations without committing to permanent infrastructure immediately.",
    solution:
      "We deployed a high-efficiency 10 KLD RO plant on a rental basis. This 'Water as a Service' model provided Polycab with guaranteed water quality, full maintenance support, and the flexibility to scale or decommission as per their project timelines.",
  },
  {
    id: "aqua-tech-services",
    title: "High-Capacity Industrial RO Plant",
    client: "Aqua Tech Services",
    description: "Large-scale 300 KLD Reverse Osmosis plant for industrial water supply.",
    longDescription:
      "Aqua Tech Services required a high-capacity desalination and purification solution. We successfully installed a massive 300 KLD RO plant, one of our significant installations, catering to substantial industrial water demands.",
    image: "/projects/aqua_tech_card.png",
    headerImage: "/projects/aqua_tech_header.png",
    industry: "Water Services / Industrial",
    location: ["Various"],
    technologies: ["RO Plant"],
    capacity: "300 KLD",
    year: "Unknown",
    challenges:
      "Processing large volumes of raw water with varying TDS levels to produce consistent industrial-grade water on a continuous 24/7 basis.",
    solution:
      "We installed a robust 300 KLD Reverse Osmosis plant featuring high-rejection membranes and energy-recovery devices. The system is designed for high availability and optimized operating costs for large-scale water production.",
  },
  {
    id: "star-wire",
    title: "Process Water RO System",
    client: "Star Wire",
    description: "Specialized process water generation using 40 KLD RO technology.",
    longDescription:
      "Star Wire, a special steel manufacturing company, partnered with us in 2024. We installed a 40 KLD RO plant to meet their specific process water quality requirements, ensuring the integrity of their manufacturing processes.",
    image: "/projects/star_wire_card.png",
    headerImage: "/projects/star_wire_header.png",
    industry: "Steel & Manufacturing",
    location: ["Faridabad"],
    technologies: ["RO Plant"],
    capacity: "40 KLD",
    year: "2024",
    challenges:
      "Providing treated water suitable for specialized steel manufacturing processes where water quality directly impacts the final product quality.",
    solution:
      "We commissioned a 40 KLD RO system tailored to remove specific impurities detrimental to steel processing. The system includes advanced monitoring to ensure water parameters remain within tight tolerances.",
  },
]

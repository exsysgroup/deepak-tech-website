import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  const projects = [
    {
      title: "100 KLD ETP for ABC Pharma",
      description:
        "Effluent Treatment Plant for pharmaceutical industry, ensuring compliance and environmental safety.",
      image: "/placeholder.svg?height=300&width=400",
      category: "pharmaceutical",
    },
    {
      title: "50 KLD STP for XYZ Textiles",
      description: "Sewage Treatment Plant for textile industry, promoting water recycling and sustainability.",
      image: "/placeholder.svg?height=300&width=400",
      category: "textile",
    },
    {
      title: "200 KLD RO Plant for PQR Beverages",
      description: "Reverse Osmosis Plant for beverage industry, providing high-quality process water.",
      image: "/placeholder.svg?height=300&width=400",
      category: "beverage",
    },
    {
      title: "75 KLD ZLD System for LMN Chemicals",
      description: "Zero Liquid Discharge System for chemical industry, minimizing environmental impact.",
      image: "/placeholder.svg?height=300&width=400",
      category: "chemical",
    },
    {
      title: "150 KLD UF System for UVW Food Processing",
      description: "Ultrafiltration System for food processing industry, ensuring product quality and safety.",
      image: "/placeholder.svg?height=300&width=400",
      category: "food",
    },
    {
      title: "120 KLD DM Plant for RST Power Plant",
      description: "Demineralization Plant for power plant, crucial for efficient and safe operations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "power",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Projects & Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and see how we've helped clients achieve their water treatment goals with
            innovative and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-gray-700">Filter by:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                <SelectItem value="textile">Textile</SelectItem>
                <SelectItem value="beverage">Beverage</SelectItem>
                <SelectItem value="chemical">Chemical</SelectItem>
                <SelectItem value="food">Food Processing</SelectItem>
                <SelectItem value="power">Power</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Treatment Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="stp">STP</SelectItem>
                <SelectItem value="etp">ETP</SelectItem>
                <SelectItem value="ro">RO</SelectItem>
                <SelectItem value="uf">UF</SelectItem>
                <SelectItem value="zld">ZLD</SelectItem>
                <SelectItem value="dm">DM</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Button className="w-full bg-emerald-200 hover:bg-emerald-300 text-emerald-800">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

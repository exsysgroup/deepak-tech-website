import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { projects } from "./data"

export default function ProjectsPage() {


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
            {/* <section className="py-8 bg-white border-b">
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
            </section> */}

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link key={index} href={`/projects/${project.id}`} className="block h-full">
                                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{project.industry}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-sm font-bold text-emerald-700 mb-2 uppercase tracking-wide">{project.client}</p>
                                        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                                        <div className="mt-auto pt-4">
                                            <Button variant="outline" className="w-full border-emerald-200 text-emerald-800 hover:bg-emerald-50">View Details</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


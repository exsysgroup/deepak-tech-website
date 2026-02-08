
import { projects } from "../data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Activity, Database, CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">
                {project.industry}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-slate-300 mb-8">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-emerald-400" />
                  <span className="text-lg font-bold text-emerald-400">{project.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-emerald-400" />
                  <span>Since {project.year}</span>
                </div>
                {project.location && project.location.length > 0 && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
                    <span>{project.location.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src={project.headerImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column: Details & Tech */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-emerald-600" />
                  Project Specifications
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Total Capacity</dt>
                    <dd className="text-slate-900 font-medium">{project.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Technologies Used</dt>
                    <dd className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-700 font-medium">
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="text-lg font-semibold mb-4 text-emerald-900">Key Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-emerald-800 text-sm">Regulatory Compliance Achieved</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-emerald-800 text-sm">Improved Water Quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-emerald-800 text-sm">Sustainable Operation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Project Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">The Challenge</h3>
                  <div className="prose prose-slate text-slate-600">
                    <p>{project.challenges}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">The Solution</h3>
                  <div className="prose prose-slate text-slate-600">
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>

              {/*
              <div className="pt-10 border-t border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Using placeholder images for gallery as well, or re-using main image if no others * /}
                  <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100">
                    <Image src={project.image} alt="Process view" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100 group">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50">
                      <span className="text-slate-500 font-medium">Gallery Image 2</span>
                    </div>
                  </div>
                </div>
              </div>
              */}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Need a similar solution?</h2>
          <p className="text-slate-300 mb-8 text-lg">We customize water treatment systems for your specific industrial needs.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

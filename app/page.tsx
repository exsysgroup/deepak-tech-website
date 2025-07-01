import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Droplets, Recycle, Filter, Zap, Users, Award, Headphones, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/placeholder.svg?height=800&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Customized Water-Treatment Solutions for Industry & Environment
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">STP • ETP • UF • RO | Turnkey Design, Build & Support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full">
              View Our Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Deepak Tech India, we specialize in delivering innovative water treatment solutions tailored to your
              specific needs. With over two decades of experience, we ensure quality and reliability in every project,
              from design to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Years of Expertise</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-First Custom Design</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Snapshot</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">STP</h3>
              <p className="text-gray-600 mb-4">Sewage Treatment Plants for residential and commercial applications.</p>
              <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ETP</h3>
              <p className="text-gray-600 mb-4">Effluent Treatment Plants for industrial wastewater.</p>
              <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UF</h3>
              <p className="text-gray-600 mb-4">Ultrafiltration for removing suspended solids and bacteria.</p>
              <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">RO</h3>
              <p className="text-gray-600 mb-4">Reverse Osmosis for desalination and water purification.</p>
              <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project Alpha"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Alpha</h3>
                <p className="text-gray-600 mb-4">Advanced water treatment system for industrial complex.</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Read Case Study</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project Beta"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Beta</h3>
                <p className="text-gray-600 mb-4">Large-scale municipal wastewater treatment facility.</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Read Case Study</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Project Gamma"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Gamma</h3>
                <p className="text-gray-600 mb-4">Sustainable water recycling solution for manufacturing plant.</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Read Case Study</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials & Client Logos</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-emerald-100 h-16 rounded-lg flex items-center justify-center">
                <div className="w-12 h-8 bg-emerald-600 rounded"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"Exceptional Service and Expertise"</p>
              <p className="text-gray-600 mb-4">
                Deepak Tech India delivered a water treatment solution that exceeded our expectations. Their team's
                professionalism and expertise in world-class workmanship.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Rajesh Gupta</p>
                  <p className="text-sm text-gray-500">Plant Manager</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"Reliable and Sustainable Solutions"</p>
              <p className="text-gray-600 mb-4">
                We are impressed with the sustainability of the solutions provided by Deepak Tech India. Their
                commitment to eco-friendly technologies helps prepare our planet for future generations.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Environmental Officer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Committed to a Greener Future</h2>
              <p className="text-xl text-gray-600 mb-8">
                We integrate sustainable practices into all our solutions, minimizing environmental impact and promoting
                resource efficiency. Our dedication to eco-friendly technologies helps prepare our planet for future
                generations.
              </p>
              <Button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full">
                Learn about Our CSR
              </Button>
            </div>
            <div className="bg-yellow-100 p-8 rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Sustainability Report"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Droplets className="w-10 h-10 text-white" />
              Get a Quote
            </h2>
            <p className="text-xl mb-6">
              Request a personalized quote for your water treatment project. Our team will get back to you promptly.
            </p>
            <ul className="flex flex-col md:flex-row justify-center gap-4 text-lg mb-8">
              <li className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300" /> Fast Response</li>
              <li className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300" /> Expert Consultation</li>
              <li className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300" /> Tailored Solutions</li>
            </ul>
            <Link href="/quote">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all">
                Get a Quote
              </Button>
            </Link>
          </div>
          {/* Decorative accent or pattern */}
          <div className="hidden md:block absolute right-0 bottom-0 w-64 h-64 opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 70%)'}} />
        </div>
      </section>
    </div>
  )
}

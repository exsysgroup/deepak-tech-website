import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplets, Recycle, Users, Building } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Commitment to Sustainability</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Deepak Tech India, we are dedicated to environmental stewardship and sustainable practices. Our goal is
            to minimize our environmental impact while providing innovative water treatment solutions that contribute to
            a healthier planet.
          </p>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Initiatives Grid</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rainwater Harvesting Projects</h3>
              <p className="text-gray-600">
                Implementing advanced rainwater harvesting systems in our facilities and promoting them to client sites
                to preserve precious water resources.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Waste-to-Energy Collaboration</h3>
              <p className="text-gray-600">
                Partnering with leading organizations to convert industrial and municipal waste into clean energy,
                reducing landfill burden and carbon emissions.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Awareness Programs</h3>
              <p className="text-gray-600">
                Conducting impactful educational programs and workshops to raise awareness about water conservation and
                environmental protection within communities.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Green Campus Policy</h3>
              <p className="text-gray-600">
                Adopting a comprehensive green campus policy to significantly reduce our operational carbon footprint
                and promote sustainable practices organization-wide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Metrics Dashboard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-blue-900 mb-2">500M+</div>
              <div className="text-xl font-semibold text-blue-900 mb-2">Liters</div>
              <p className="text-gray-600">Total Water Saved Annually</p>
            </Card>

            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-blue-900 mb-2">100+</div>
              <p className="text-gray-600">Communities Served</p>
            </Card>

            <Card className="text-center p-8">
              <div className="text-5xl font-bold text-blue-900 mb-2">20%</div>
              <p className="text-gray-600">CO₂ Footprint Reduced</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join us in our mission to create a sustainable future. We welcome collaborations and partnerships on
            innovative green initiatives.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-12 py-4 rounded-full text-lg">
            Partner on a Green Initiative
          </Button>
        </div>
      </section>
    </div>
  )
}

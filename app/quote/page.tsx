import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get a Quote</h1>
          <p className="text-xl text-gray-600">
            Please fill out the form below to request a quote for your water treatment project. We will get back to you
            within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <Input placeholder="Enter your name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <Input placeholder="Enter your company name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <Input placeholder="Enter your phone number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stp">Sewage Treatment Plant (STP)</SelectItem>
                  <SelectItem value="etp">Effluent Treatment Plant (ETP)</SelectItem>
                  <SelectItem value="ro">Reverse Osmosis (RO)</SelectItem>
                  <SelectItem value="uf">Ultrafiltration (UF)</SelectItem>
                  <SelectItem value="zld">Zero Liquid Discharge (ZLD)</SelectItem>
                  <SelectItem value="custom">Custom Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements</label>
              <Textarea placeholder="Describe your project requirements in detail" rows={6} />
            </div>

            <Button className="w-full bg-emerald-200 hover:bg-emerald-300 text-emerald-800 py-3 rounded-full font-semibold">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

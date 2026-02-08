"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useActionState } from "react"
import { submitQuoteForm } from "@/actions/contact"
import { Loader2 } from "lucide-react"

export default function QuotePage() {
  const [state, action, isPending] = useActionState(submitQuoteForm, {
    message: "",
    errors: {},
    success: false,
  })

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
          {state.success ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
              <p className="text-lg">{state.message}</p>
              <Button 
                variant="outline" 
                className="mt-6 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                onClick={() => window.location.reload()}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form action={action} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input name="name" placeholder="Enter your name" required />
                {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <Input name="company" placeholder="Enter your company name" required />
                {state.errors?.company && <p className="text-sm text-red-500 mt-1">{state.errors.company[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" name="email" placeholder="Enter your email" required />
                {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input name="phone" placeholder="Enter your phone number" required />
                {state.errors?.phone && <p className="text-sm text-red-500 mt-1">{state.errors.phone[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <Select name="projectType" required>
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
                {state.errors?.projectType && <p className="text-sm text-red-500 mt-1">{state.errors.projectType[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements</label>
                <Textarea name="requirements" placeholder="Describe your project requirements in detail" rows={6} required />
                {state.errors?.requirements && <p className="text-sm text-red-500 mt-1">{state.errors.requirements[0]}</p>}
              </div>

              <Button 
                type="submit"
                className="w-full bg-emerald-200 hover:bg-emerald-300 text-emerald-800 py-3 rounded-full font-semibold"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>

              {!state.success && state.message && (
                <p className="text-sm text-red-500 text-center mt-4">{state.message}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

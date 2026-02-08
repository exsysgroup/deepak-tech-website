"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "@/actions/contact"

export default function ContactPage() {
  const [state, action, isPending] = useActionState(submitContactForm, {
    message: "",
    errors: {},
    success: false,
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out to us for any inquiries or support regarding your water treatment needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Deepak Tech India Head Office</h3>
                    <p className="text-gray-600">BH-506, 81-High Street, Puri Business Hub, Sector 81, Faridabad, Haryana - 121004</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Works</h3>
                    <p className="text-gray-600">Plot No. 1, Khedi Enclave, Part-1, Ballabgarh, Sonha Road, Faridabad, Haryana - 121004</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="text-gray-600">+91-9911347782, +91-9810827782</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="text-gray-600">info@deepaktech.com, admin@deepaktech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Headquarters Location</h3>
                <Link
                  href="https://maps.app.goo.gl/exJLTMvD9m2rtgMa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block bg-gray-200 h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/images/map.png"
                    alt="Map showing headquarters location"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      View on Google Maps
                    </span>
                </div>
                </Link>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Inquiry Form</h2>

              {state.success ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>{state.message}</p>
                </div>
              ) : (
                <form action={action} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input name="name" placeholder="Your Name" required />
                    {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input name="company" placeholder="Your Company" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" name="email" placeholder="Your Email" required />
                    {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input name="phone" placeholder="Your Phone" required />
                    {state.errors?.phone && <p className="text-sm text-red-500 mt-1">{state.errors.phone[0]}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Select name="subject" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                    {state.errors?.subject && <p className="text-sm text-red-500 mt-1">{state.errors.subject[0]}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea name="message" placeholder="Your Message" rows={6} required />
                    {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
      </section>
    </div>
  )
}

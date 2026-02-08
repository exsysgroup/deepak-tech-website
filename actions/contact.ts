"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const QuoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  requirements: z.string().min(10, { message: "Please describe your requirements." }),
})

export type FormState = {
  message?: string
  errors?: Record<string, string[]>
  success?: boolean
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
      success: false,
    }
  }

  const { name, company, email, phone, subject, message } = validatedFields.data

  try {
    await resend.emails.send({
      from: "Deepak Tech Website <onboarding@resend.dev>", // Default Resend setup
      to: "info@exsysgroup.com",
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    })

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
    }
  } catch (error) {
    console.error("Resend Error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

export async function submitQuoteForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = QuoteSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    requirements: formData.get("requirements"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
      success: false,
    }
  }

  const { name, company, email, phone, projectType, requirements } = validatedFields.data

  try {
    await resend.emails.send({
      from: "Deepak Tech Website <onboarding@resend.dev>",
      to: "info@exsysgroup.com",
      subject: `New Quote Request: ${projectType.toUpperCase()}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <h3>Requirements:</h3>
        <p>${requirements}</p>
      `,
    })

    return {
      success: true,
      message: "Quote request submitted successfully! We will analyze your requirements and reach out within 24 hours.",
    }
  } catch (error) {
    console.error("Resend Error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Award, Users, Leaf, Lightbulb } from "lucide-react"
import MissionSection from "./mission-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero & Intro */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">About Deepak Tech India</h1>
        <h2 className="text-xl max-w-2xl mx-auto text-gray-700">
          Leading provider of innovative water-treatment solutions with over 25 years' expertise in designing, manufacturing, and implementing sustainable water management systems.
        </h2>
      </section>

      {/* 2. Our Story */}
      <section id="our-story" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-4">
            <p>
              Founded in 2000 by Mr. Sudhir Singh Balyan, Deepak Tech India began as a small fabrication shop in Faridabad. From day one our mission has been to turn cutting-edge research into reliable, plug-and-play water-treatment plants for industry and municipalities alike.
            </p>
            <p>
              Over the next decade we expanded our in-house R&D team, patented key ultrafiltration modules, and formed our strategic partnership with Exsys Group—bringing best-in-class effluent-treatment technology to clients across India.
            </p>
            <p>
              Today, we serve 200+ clients in pharma, textiles, food & beverage, chemicals, and municipal bodies—delivering turnkey STP, ETP, UF & RO plants that consistently outperform regulatory requirements and deliver measurable cost savings.
            </p>
            <Link href="#mission" className="inline-block border border-emerald-600 text-emerald-700 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition">Learn More About Our Mission</Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/images/story.png" alt="Deepak Tech India Headquarters" width={400} height={300} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Timeline of Milestones */}
      <section id="timeline" className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Milestones</h2>
        <ul className="timeline flex flex-col md:flex-row md:justify-center gap-8 max-w-4xl mx-auto">
          <li className="flex flex-col items-center">
            <span className="year text-2xl font-bold text-emerald-600">1999</span>
            <p className="text-center">Company founded in Faridabad—first 10 KLD STP delivered.</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="year text-2xl font-bold text-emerald-600">2007</span>
            <p className="text-center">Patented MBR-UF hybrid module for high-strength effluent.</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="year text-2xl font-bold text-emerald-600">2012</span>
            <p className="text-center">Expanded into full ETP & RO manufacturing facility.</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="year text-2xl font-bold text-emerald-600">2013</span>
            <p className="text-center">Joined Exsys Group, enabling international technology transfers.</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="year text-2xl font-bold text-emerald-600">2023</span>
            <p className="text-center">Surpassed 200+ turnkey plants and 25 Mℓd total installed capacity.</p>
          </li>
        </ul>
      </section>

      {/* 4. Our Core Values */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="p-6 text-center">
            <Award className="mx-auto mb-4 w-10 h-10 text-emerald-600" />
            <h3 className="font-semibold text-xl mb-2">Excellence</h3>
            <p>Committed to delivering the highest quality solutions and services to our clients.</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="mx-auto mb-4 w-10 h-10 text-emerald-600" />
            <h3 className="font-semibold text-xl mb-2">Collaboration</h3>
            <p>Working closely with clients to understand their unique needs and challenges.</p>
          </Card>
          <Card className="p-6 text-center">
            <Leaf className="mx-auto mb-4 w-10 h-10 text-emerald-600" />
            <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
            <p>Promoting environmentally responsible practices in all our operations.</p>
          </Card>
          <Card className="p-6 text-center">
            <Lightbulb className="mx-auto mb-4 w-10 h-10 text-emerald-600" />
            <h3 className="font-semibold text-xl mb-2">Innovation</h3>
            <p>Continuously developing cutting-edge technologies for water treatment.</p>
          </Card>
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section id="team" className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="member bg-gray-100 rounded-lg p-6 text-center relative group">
            <Image src="/placeholder-user.jpg" alt="Mr. Sudhir Singh Balyan" width={120} height={120} className="mx-auto rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-xl">Mr. Sudhir Singh Balyan</h3>
            <p className="text-emerald-700 mb-2">Managing Director</p>
            <div className="bio opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 translate-y-2 scale-95 transition-all duration-300 ease-out bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl border border-emerald-100 absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 z-20 text-gray-600 text-sm leading-relaxed">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-emerald-100"></div>
              With 28 years in water-treatment design, Sudhir pioneered our MBR-UF hybrid line and leads our R&D group.
            </div>
          </div>
          <div className="member bg-gray-100 rounded-lg p-6 text-center relative group">
            <Image src="/placeholder-user.jpg" alt="Indu Singh" width={120} height={120} className="mx-auto rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-xl">Mrs. Indu Singh</h3>
            <p className="text-emerald-700 mb-2">Chief Engineer</p>
            <div className="bio opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 translate-y-2 scale-95 transition-all duration-300 ease-out bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl border border-emerald-100 absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 z-20 text-gray-600 text-sm leading-relaxed">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-emerald-100"></div>
              Indu oversees all plant customizations and ensures every system meets performance guarantees.
            </div>
          </div>
          {/* <div className="member bg-gray-100 rounded-lg p-6 text-center relative group">
            <Image src="/placeholder-user.jpg" alt="Rahul Verma" width={120} height={120} className="mx-auto rounded-full mb-4 object-cover" />
            <h3 className="font-semibold text-xl">Rahul Verma</h3>
            <p className="text-emerald-700 mb-2">Head of Operations</p>
            <div className="bio opacity-0 group-hover:opacity-100 transition bg-white rounded p-4 shadow-lg absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 z-10 text-gray-700">
              Rahul manages our field teams and service network—no ticket goes unresolved for more than 24 hours.
            </div>
          </div> */}
        </div>
      </section>

      {/* 6. Affiliations & Certifications */}
      {/* <section id="certifications" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Certifications & Affiliations</h2>
        <p className="text-center mb-8">
          All our systems are designed and built to meet or exceed CPCB, ISO 9001, and relevant state pollution-control standards.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 grayscale">
          <Image src="/placeholder-logo.png" alt="CPCB" width={80} height={80} />
          <Image src="/placeholder-logo.png" alt="ISO 9001" width={80} height={80} />
          <Image src="/placeholder-logo.png" alt="State Environment Board" width={80} height={80} />
        </div>
      </section> */}

      {/* 7. Awards & Recognition */}
      {/* <section id="awards" className="py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto awards-list">
          <li className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
            <Image src="/placeholder-logo.png" alt="Best Water-Treatment Solution 2023" width={60} height={60} />
            <p>Best Water-Treatment Solution 2023 (Industry Association Awards)</p>
          </li>
          <li className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
            <Image src="/placeholder-logo.png" alt="Innovation in Enviro Tech 2021" width={60} height={60} />
            <p>Innovation in Environmental Technology 2021 (Global Water Forum)</p>
          </li>
        </ul>
      </section> */}

      {/* 8. Call-to-Action */}
      <section id="about-cta" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Partner on Your Next Project?</h2>
        <p className="mb-8">Contact our team for a no-obligation site review and customized solution proposal.</p>
        <Link href="/contact" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-emerald-700 transition">Get in Touch</Link>
      </section>

      {/* Mission Section */}
      <MissionSection />
    </div>
  )
}

// Tailwind CSS for animation (add to globals.css or as a style block):
// .animate-mission-highlight { animation: mission-highlight 1.2s; }
// @keyframes mission-highlight { 0% { background-color: #e0f7fa; } 100% { background-color: transparent; } }
// .animate-fade-in { animation: fadeInUp 1s; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }

'use client'
import { useRef, useEffect } from "react"

export default function MissionSection() {
  const missionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#mission" && missionRef.current) {
        missionRef.current.classList.add("animate-mission-highlight")
        setTimeout(() => {
          missionRef.current?.classList.remove("animate-mission-highlight")
        }, 1200)
      }
    }
    window.addEventListener("hashchange", handleHash)
    if (window.location.hash === "#mission" && missionRef.current) {
      missionRef.current.classList.add("animate-mission-highlight")
      setTimeout(() => {
        missionRef.current?.classList.remove("animate-mission-highlight")
      }, 1200)
    }
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <section id="mission" className="py-16 bg-white mission-section relative">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={missionRef} className="transition-all">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5 w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#005F87]">Our Mission & Vision</h2>
                <a
                  href="#our-story"
                  className="hidden md:inline-block btn-secondary back-link text-emerald-700 border border-emerald-600 px-4 py-2 rounded-full font-semibold hover:bg-emerald-50 transition text-sm ml-4"
                >
                  ↑ Back to Our Story
                </a>
              </div>
              <div className="mission-content space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1FAE9B] mb-2">Our Mission</h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    To deliver best-in-class, turnkey water-treatment solutions that safeguard public health and the environment—empowering industries and municipalities to operate sustainably through innovative engineering, unwavering quality, and responsive service.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1FAE9B] mb-2">Our Vision</h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    To be the most trusted name in water management—leading the global shift toward zero-liquid-discharge, circular water economies, and low-carbon water infrastructure by 2030.
                  </p>
                </div>
                <a
                  href="#our-story"
                  className="md:hidden inline-block btn-secondary back-link text-emerald-700 border border-emerald-600 px-4 py-2 rounded-full font-semibold hover:bg-emerald-50 transition text-sm mt-4"
                >
                  ↑ Back to Our Story
                </a>
              </div>
            </div>
            <div className="md:w-2/5 w-full flex justify-center items-center">
              {/* Placeholder SVG graphic */}
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-fade-in">
                <circle cx="90" cy="90" r="80" fill="#E0F7FA" />
                <ellipse cx="90" cy="110" rx="50" ry="60" fill="#1FAE9B" opacity="0.2" />
                <path d="M90 40C110 70 130 90 90 140C50 90 70 70 90 40Z" fill="#1FAE9B" />
                <circle cx="90" cy="90" r="30" fill="#fff" />
                <circle cx="90" cy="90" r="18" fill="#1FAE9B" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Simpson Plumbing",
    tagline: "Expert Plumbing. Always On Time.",
    phone: "(209) 229-4749",
    phoneHref: "tel:+12092294749",
    email: "customerservice@simpsonplumbingservices.com",
    address: "123 Main St",
    city: "Tracy",
    serviceAreas: ["Bethel Island, CA", "Bixler, CA", "Brentwood, CA", "Discovery Bay, CA", "French Camp, CA", "Knightsen, CA", "Lathrop, CA", "Manteca, CA", "Modesto, CA", "Mountain House, CA", "Orwood, CA", "River Islands", "Tracy, CA"],
    license: "852669",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "forest",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Slab Leak Repair", desc: "We accurately detect and repair slab leaks to prevent costly structural damage.", urgent: true },
    { icon: "wrench", title: "Toilet Repair & Replacement", desc: "From minor repairs to full replacements, we handle all your toilet needs efficiently.", urgent: false },
    { icon: "droplets", title: "Water Leak Detection", desc: "Using advanced technology, we pinpoint hidden water leaks to save you money and prevent damage.", urgent: true },
    { icon: "hammer", title: "Water Line Repair & Installation", desc: "Expert repair and installation of water lines, ensuring reliable water flow to your property.", urgent: false },
    { icon: "flame", title: "Tankless Water Heater Installation", desc: "Enjoy endless hot water with our professional tankless water heater installation services.", urgent: false },
    { icon: "droplets", title: "Drain & Sewer Cleaning", desc: "Thorough cleaning services to clear blockages and restore optimal function to your drains and sewers.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Tracy, CA", stars: 5, text: "Simpson Plumbing saved us from a major headache! We had a burst pipe in our kitchen late on a Saturday night. Their technician arrived within an hour, was incredibly professional, and fixed the issue quickly. The price was fair, and the service was outstanding. Highly recommend their emergency service!" },
    { name: "Mark T.", location: "Brentwood, CA", stars: 5, text: "I called Simpson Plumbing for a persistent clogged toilet. They were able to schedule me for the same day. The plumber was courteous, explained everything clearly, and got the job done without any fuss. My toilet is working perfectly now, and I appreciate the upfront pricing." },
    { name: "Emily R.", location: "Manteca, CA", stars: 5, text: "We recently had a new tankless water heater installed by Simpson Plumbing. From the initial consultation to the final installation, the process was seamless. The team was knowledgeable, efficient, and left our home spotless. We're thrilled with our new water heater and the excellent service!" }
  ],

  trustBadges: [
    "Licensed & Insured", "NATE Certified", "Same-Day Service", "5-Star Rated", "24/7 Emergency", "GAF Master Elite"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your emergency, arriving quickly to resolve plumbing issues." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, certified, and experienced in all aspects of plumbing." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is available around the clock to assist you with scheduling and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts for efficient repairs." }
  ],

  formServiceOptions: ["Slab Leak Repair", "Toilet Repair & Replacement", "Clogged Toilet Repair", "Water Leak Detection", "Water Line Repair & Installation", "Water Filtration Installation", "Gas Line Repair & Installation", "Plumbing Fixture Repair & Installation", "Burst Pipe Repair", "Piping & Repiping Services", "Kitchen Plumbing Services", "Bathroom Plumbing Services", "New Construction Plumbing", "Backflow Valve Repair & Replacement", "Grease Trap Services", "Sump Pump Repair & Installation", "Sewer Ejector Pump Repair & Installation", "Drain & Sewer Cleaning", "Hot Water Hydro Jetting", "Trenchless Sewer Line Repair", "Sewer Lateral Repair & Replacement", "Tank Water Heater Repair & Installation", "Tankless Water Heater Repair & Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!
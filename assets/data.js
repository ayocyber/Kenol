/* ============================================================
   KENOL — shared content data

   ⚠️ DRAFT CONTENT — NEEDS KENOL SIGN-OFF BEFORE LAUNCH ⚠️
   The challenge / whatWeDid / outcome copy below is AI-drafted
   placeholder narrative, written to read well and sit in the
   right shape for each section — it is NOT based on verified
   facts about what Kenol actually did for these clients. No
   specific dates, figures, or results are claimed anywhere,
   on purpose. Several of these are real, named organizations
   (including a financial market infrastructure company and a
   state government ministry), so this copy must be reviewed
   and confirmed by the Kenol team — or replaced with real case
   study content — before the site goes live.

   IMAGES: local project photography, served from
   assets/images/<file-base>-cover.jpg and
   assets/images/<file-base>-gallery-1.jpg / -2.jpg / -3.jpg
   File-base names match what's actually in /assets/images (some are
   capitalized, one has a space, and the taekwondo project uses
   "sport" rather than its slug) — see the map below.
   ============================================================ */

const PORTFOLIO_IMAGE_BASE = {
  "vectar": "vectar",
  "henosis": "henosis",
  "wale-university": "Wale University",
  "monietribe": "Monietribe",
  "curating-chaos": "curating-chaos",
  "naija-taekwondo": "sport",
  "fmdq": "FMDQ",
  "southstar": "Southstar",
  "acetrove": "acetrove"
};

function portfolioImg(slug, name){
  const base = PORTFOLIO_IMAGE_BASE[slug] || slug;
  return `assets/images/${base}-${name}.jpg`;
}

const CATEGORIES = ["Branding", "Communication Design", "Print Production"];

const PROJECTS = [
  {
    slug: "vectar",
    title: "Vectar",
    client: "Vectar",
    industry: "Technology",
    category: "Branding",
    descriptor: "A confident identity system for a fast-moving technology brand.",
    image: portfolioImg("vectar", "cover"),
    gallery: [
      portfolioImg("vectar", "gallery-1"),
      portfolioImg("vectar", "gallery-2"),
      portfolioImg("vectar", "gallery-3")
    ],
    challenge: "Vectar needed a visual identity that could keep pace with a fast-growing product roadmap, without the brand looking like an afterthought bolted onto the technology.",
    whatWeDid: "Kenol led brand strategy and visual identity — positioning, logo system, and a flexible identity kit built to scale across product, marketing, and investor-facing material.",
    outcome: "The result is a brand system the Vectar team can apply consistently, from the product interface to the pitch deck, without needing a designer in the room every time."
  },
  {
    slug: "henosis",
    title: "Henosis",
    client: "Henosis International",
    industry: "Professional Services",
    category: "Branding",
    descriptor: "An identity built to read as established, not new.",
    image: portfolioImg("henosis", "cover"),
    gallery: [
      portfolioImg("henosis", "gallery-1"),
      portfolioImg("henosis", "gallery-2"),
      portfolioImg("henosis", "gallery-3")
    ],
    challenge: "Entering a competitive market, Henosis International needed to look credible and established from day one, not like a firm still finding its footing.",
    whatWeDid: "We built strategy and visual identity from the ground up — positioning, naming logic, and a mark designed to hold up in formal, high-trust settings.",
    outcome: "Henosis now has a brand system built for the boardroom — consistent across proposals, presentations, and everyday client communication."
  },
  {
    slug: "wale-university",
    title: "Wale University",
    client: "Wale University",
    industry: "Education",
    category: "Communication Design",
    descriptor: "Communication design that makes a growing institution feel established.",
    image: portfolioImg("wale-university", "cover"),
    gallery: [
      portfolioImg("wale-university", "gallery-1"),
      portfolioImg("wale-university", "gallery-2"),
      portfolioImg("wale-university", "gallery-3")
    ],
    challenge: "Wale University needed consistent, professional communication design across admissions, campus life, and institutional materials — pieces that are often designed separately and end up feeling disconnected.",
    whatWeDid: "Kenol developed a communication design system spanning admissions materials, campus communication, and institutional collateral, built around one clear visual hierarchy.",
    outcome: "The university now presents a consistent look across everything prospective students, staff, and partners encounter, on and off campus."
  },
  {
    slug: "monietribe",
    title: "Monietribe",
    client: "Monietribe",
    industry: "Fintech",
    category: "Branding",
    descriptor: "A brand built to make financial services feel approachable.",
    image: portfolioImg("monietribe", "cover"),
    gallery: [
      portfolioImg("monietribe", "gallery-1"),
      portfolioImg("monietribe", "gallery-2"),
      portfolioImg("monietribe", "gallery-3")
    ],
    challenge: "Monietribe needed a brand that could make financial services feel approachable rather than intimidating, without sacrificing the credibility a money-focused product depends on.",
    whatWeDid: "We developed brand strategy and visual identity centered on clarity and trust — plain language, a warm but confident visual system, and an identity that doesn't talk down to its audience.",
    outcome: "The brand now reads as approachable and modern, built to earn trust from an audience that's often wary of new entrants in financial services."
  },
  {
    slug: "curating-chaos",
    title: "Curating ChAOS",
    client: "Curating ChAOS Africa",
    industry: "Arts & Culture",
    category: "Communication Design",
    descriptor: "Bold communication design for an ambitious arts platform.",
    image: portfolioImg("curating-chaos", "cover"),
    gallery: [
      portfolioImg("curating-chaos", "gallery-1"),
      portfolioImg("curating-chaos", "gallery-2"),
      portfolioImg("curating-chaos", "gallery-3")
    ],
    challenge: "Curating ChAOS Africa needed communication design as bold and experimental as the artists and events the platform showcases — nothing generic, nothing safe.",
    whatWeDid: "Kenol built out campaign and communication design across the platform's key touchpoints, matching the energy of the work it exists to platform.",
    outcome: "The visual language now carries the same ambition as the programming itself — distinct, expressive, and unmistakably its own."
  },
  {
    slug: "naija-taekwondo",
    title: "Naija Taekwondo International Open",
    client: "Nigeria Taekwondo Advancement Initiative",
    industry: "Sports",
    category: "Communication Design",
    descriptor: "Event-ready communication design for a national sporting event.",
    image: portfolioImg("naija-taekwondo", "cover"),
    gallery: [
      portfolioImg("naija-taekwondo", "gallery-1"),
      portfolioImg("naija-taekwondo", "gallery-2"),
      portfolioImg("naija-taekwondo", "gallery-3")
    ],
    challenge: "The Nigeria Taekwondo Advancement Initiative needed communication design that could carry a national sporting event — credible enough for federations, exciting enough for competitors and fans.",
    whatWeDid: "We designed the event's communication materials, from promotional assets to on-site signage direction, all built around one consistent visual system.",
    outcome: "The Open now has a look that matches its ambitions — professional enough for international federations, energetic enough for the athletes it's built for."
  },
  {
    slug: "fmdq",
    title: "FMDQ",
    client: "FMDQ Group PLC",
    industry: "Financial Markets",
    category: "Branding",
    descriptor: "Brand work for a key financial market infrastructure business.",
    image: portfolioImg("fmdq", "cover"),
    gallery: [
      portfolioImg("fmdq", "gallery-1"),
      portfolioImg("fmdq", "gallery-2"),
      portfolioImg("fmdq", "gallery-3")
    ],
    challenge: "Operating as financial market infrastructure, FMDQ's brand needed to project stability and authority to institutional stakeholders — a very different bar than most consumer-facing brand work.",
    whatWeDid: "Kenol supported brand identity work built around clarity, precision, and trust — the qualities a market infrastructure brand needs to project before anything else.",
    outcome: "The brand system reinforces FMDQ's position as serious, dependable infrastructure — built to be trusted by the institutions that rely on it."
  },
  {
    slug: "southstar",
    title: "Southstar",
    client: "Southstar Energy Group",
    industry: "Energy",
    category: "Branding",
    descriptor: "A brand identity that reflects scale without losing warmth.",
    image: portfolioImg("southstar", "cover"),
    gallery: [
      portfolioImg("southstar", "gallery-1"),
      portfolioImg("southstar", "gallery-2"),
      portfolioImg("southstar", "gallery-3")
    ],
    challenge: "Southstar Energy Group needed a brand identity that reflected the scale of its operations without feeling cold or purely industrial.",
    whatWeDid: "We developed a visual identity system that balances industrial credibility with a more human, approachable tone — built to work across corporate and community-facing contexts alike.",
    outcome: "The brand now carries the same weight as the company's operations, while staying approachable to the communities it works alongside."
  },
  {
    slug: "acetrove",
    title: "Acetrove",
    client: "Acetrove",
    industry: "Consumer Goods",
    category: "Print Production",
    descriptor: "Print production built to match the quality of the product.",
    image: portfolioImg("acetrove", "cover"),
    gallery: [
      portfolioImg("acetrove", "gallery-1"),
      portfolioImg("acetrove", "gallery-2"),
      portfolioImg("acetrove", "gallery-3")
    ],
    challenge: "Acetrove needed print collateral that matched the quality of what it produces — nothing generic, nothing that undersold the brand at the point of contact.",
    whatWeDid: "Kenol handled print production end-to-end — stationery, packaging support materials, and promotional print — with consistent quality control throughout.",
    outcome: "Every printed touchpoint now matches the standard of the product itself, reinforcing the brand instead of working against it."
  }
];

/* ⚠️ DRAFT — DO NOT PUBLISH AS-IS ⚠️
   These testimonials are AI-drafted placeholder copy, written to show
   how the reviews section looks populated. They are intentionally
   NOT attributed to any of the real named clients above — putting
   fabricated words in a real company's mouth as a "testimonial" is a
   false-endorsement risk, not just a content-completeness one.
   Before launch: replace with real, consented client quotes (see
   brief: "Testimonial content to be supplied by team"). */
const REVIEWS = [
  {
    quote: "Kenol didn't just redesign how we look — they changed how our own team talks about the brand internally. That shift mattered more than the visuals.",
    name: "Adaeze Chukwu",
    role: "Marketing Lead, Financial Services"
  },
  {
    quote: "They pushed back when we asked for something safe. In hindsight, that pushback is exactly why the brand actually stands out now.",
    name: "Tunde Bakare",
    role: "Founder, Technology Startup"
  },
  {
    quote: "Everything from the strategy deck to the final print files felt considered. Nothing about the process felt rushed, even inside a tight timeline.",
    name: "Ngozi Umeh",
    role: "Communications Director, Education Sector"
  }
];

const CLIENTS = [
  "Vectar", "Sabini Homes", "Northburg", "Bank of Industry Nigeria",
  "TAPE", "ITC Advisory", "Senator Abiola Ajimobi Foundation", "Henosis International",
  "Wale University", "Monietribe", "Curating ChAOS Africa", "Nigeria Taekwondo Advancement Initiative",
  "Oyo State Ministry of Environment and Natural Resources", "FMDQ Group PLC", "Southstar Energy Group",
  "AFT", "Ask4Help"
];
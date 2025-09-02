import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Star, Calendar, Clock, ShieldCheck, ChevronDown, Facebook, Instagram, Car, Sparkles, SprayCan, Droplet } from "lucide-react";

/*
  ✅ HOW TO USE
  - This single-file React component is a complete, SEO-focused website for CJ’s Auto Detailing.
  - It’s designed to be exported to a modern React/Tailwind setup (Next.js, Vite, CRA) or copied into a static page with React support.
  - Tailwind is assumed to be available in this environment.

  🔧 Where to customize
  - BUSINESS INFO: Update NAME, PHONE, EMAIL, ADDRESS, HOURS, and SOCIAL LINKS in the CONFIG below.
  - SEO: Edit meta title/description/keywords, and the JSON-LD schema.
  - IMAGERY: Replace placeholder images (unsplash) with your own work photos to boost conversions and local trust signals.
  - SERVICE AREA: Add/remove cities/zip codes you want to target in Westmoreland & Allegheny Counties.

  🧭 Files you should also add to your production site (copy/paste):
  robots.txt
  ---------------------------------
  User-agent: *
  Allow: /
  Sitemap: https://www.example.com/sitemap.xml

  sitemap.xml (example; replace with your final routes)
  ---------------------------------
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.example.com/</loc></url>
    <url><loc>https://www.example.com/#services</loc></url>
    <url><loc>https://www.example.com/#packages</loc></url>
    <url><loc>https://www.example.com/#gallery</loc></url>
    <url><loc>https://www.example.com/#reviews</loc></url>
    <url><loc>https://www.example.com/#service-area</loc></url>
    <url><loc>https://www.example.com/#faq</loc></url>
    <url><loc>https://www.example.com/#contact</loc></url>
  </urlset>
*/

// =========================
// CONFIG — EDIT ME
// =========================
const BIZ = {
  name: "CJ’s Auto Detailing",
  phone: "724-972-3957", // ← replace with your phone number
  phoneHref: "tel:+17249723957",
  email: "ckushnerautodetailing@gmail.com", // ← replace
  mailHref: "mailto:ckushnerautodetailing@gmail.com",
  street: "123 Main St",           // ← replace (or leave blank if mobile-only)
  city: "Greensburg",
  region: "PA",
  postal: "15601",
  country: "US",
  geo: { lat: 40.3015, lng: -79.5389 }, // approximate Greensburg; edit as needed
  hours: [
    { day: "Mon–Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579612289787", // replace
    instagram: "https://www.instagram.com/cjs_auto_detail_pa/", // replace
  },
  serviceAreaCities: [
    // Westmoreland County
    "Greensburg", "Latrobe", "Hempfield Township", "Murrysville", "Jeannette", "Monessen", "New Kensington",
    // Allegheny County
    "Pittsburgh", "Monroeville", "Penn Hills", "Plum", "Fox Chapel", "Mt. Lebanon", "Bethel Park",
  ],
  keywords: [
    "auto detailing Westmoreland County",
    "auto detailing Allegheny County",
    "car detailing Greensburg PA",
    "mobile detailing Pittsburgh",
    "ceramic coating Westmoreland",
    "paint correction Pittsburgh",
    "interior shampoo Greensburg",
    "headlight restoration PA"
  ],
};

// Utility: simple container
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const Stat = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-3">
    <Icon className="w-6 h-6" aria-hidden="true" />
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  </div>
);

const Pill = ({ children }: any) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm">{children}</span>
);

const PackageCard = ({ title, price, features, cta }: any) => (
  <div className="rounded-2xl shadow p-6 bg-white">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-3xl font-extrabold">{price}</p>
    <ul className="mt-4 space-y-2">
      {features.map((f: string) => (
        <li key={f} className="flex gap-2 items-start"><ShieldCheck className="w-5 h-5 mt-0.5" /> <span>{f}</span></li>
      ))}
    </ul>
    <a href={BIZ.phoneHref} className="mt-6 inline-block w-full text-center rounded-xl border px-4 py-3 font-semibold">{cta}</a>
  </div>
);

const FaqItem = ({ q, a }: any) => (
  <details className="group rounded-2xl border px-6 py-4">
    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
      {q}
      <ChevronDown className="transition group-open:rotate-180" />
    </summary>
    <p className="pt-3 text-gray-700 leading-relaxed">{a}</p>
  </details>
);

export default function CJsAutoDetailingSite() {
  const title = `${BIZ.name} | Professional Auto Detailing in Westmoreland & Allegheny County, PA`;
  const description = `${BIZ.name} offers premium interior & exterior detailing, paint correction, and ceramic coatings in Westmoreland County (Greensburg, Latrobe, Murrysville) and Allegheny County (Pittsburgh, Monroeville). Mobile or shop appointments.`;
  const ogImage = "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=1400&auto=format&fit=crop";

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: BIZ.name,
    image: ogImage,
    telephone: BIZ.phoneHref.replace("tel:", ""),
    email: BIZ.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.street,
      addressLocality: BIZ.city,
      addressRegion: BIZ.region,
      postalCode: BIZ.postal,
      addressCountry: BIZ.country,
    },
    areaServed: ["Westmoreland County, PA", "Allegheny County, PA", ...BIZ.serviceAreaCities],
    geo: { "@type": "GeoCoordinates", latitude: BIZ.geo.lat, longitude: BIZ.geo.lng },
    openingHoursSpecification: BIZ.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "08:00",
      closes: "18:00"
    })),
    sameAs: [BIZ.social.facebook, BIZ.social.instagram].filter(Boolean),
    url: "https://www.example.com/", // replace with your domain
    priceRange: "$$",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you serve Pittsburgh and Greensburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve Westmoreland County (Greensburg, Latrobe, Murrysville) and Allegheny County (Pittsburgh, Monroeville, and surrounding areas).",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer mobile detailing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can come to your home or office when weather and access to power/water allow.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a full detail take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most full details take 3–5 hours depending on vehicle size and condition.",
        },
      },
    ],
  };

  return (
    <main className="font-sans text-gray-900">
      {/* SEO HEAD */}
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={BIZ.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLdBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        {/* Optional: Google Analytics / GTag */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
        `}</script> */}
      </Helmet>

      {/* Top Bar / NAP */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#contact" className="underline">Get an Estimate</a>
            <a href="#service-area" className="underline">Serving Westmoreland & Allegheny County</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={BIZ.phoneHref} className="flex items-center gap-2"><Phone className="w-4 h-4" /> {BIZ.phone}</a>
            <a href={BIZ.mailHref} className="hidden md:flex items-center gap-2"><Mail className="w-4 h-4" /> {BIZ.email}</a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl">{BIZ.name}</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#packages" className="hover:underline">Packages</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#reviews" className="hover:underline">Reviews</a>
            <a href="#service-area" className="hover:underline">Service Area</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <a href={BIZ.phoneHref} className="rounded-xl border px-4 py-2 text-sm font-semibold">Call {BIZ.phone}</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
          alt="Freshly detailed car in Pittsburgh area"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold max-w-3xl"
            >
              Showroom Shine, Local Service
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              Premium auto detailing, ceramic coatings, and paint correction serving Westmoreland County & Allegheny County.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl border px-5 py-3 font-semibold">Get an Estimate</a>
              <a href="#services" className="rounded-xl border px-5 py-3 font-semibold">View Services</a>
              <a href={BIZ.phoneHref} className="rounded-xl border px-5 py-3 font-semibold">Call {BIZ.phone}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <Stat icon={Calendar} label="Easy Scheduling" value="Mobile & In‑Shop" />
              <Stat icon={Clock} label="Turnaround" value="Same‑Week Slots" />
              <Stat icon={ShieldCheck} label="Protection" value="Pro-Grade Products" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar / badges */}
      <div className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-2"><Star className="w-5 h-5" /> 5-Star Local Service</div>
          <div className="flex items-center gap-2"><Sparkles className="w-5 h-5" /> Ceramic Coating Options</div>
          <div className="flex items-center gap-2"><SprayCan className="w-5 h-5" /> Paint Correction</div>
          <div className="flex items-center gap-2"><Droplet className="w-5 h-5" /> Interior Deep Clean</div>
          <div className="flex items-center gap-2"><Car className="w-5 h-5" /> Mobile Detailing Available</div>
        </div>
      </div>

      {/* Services */}
      <Section id="services" title="Auto Detailing Services" subtitle="Hand wash, interior restoration, paint decon, machine polish, ceramic coatings, and more.">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Exterior Detail",
            desc: "Foam wash, iron decon, clay, wheels & tires, machine-applied sealant.",
            bullets: ["Bug & tar removal","Door jambs","Tire shine"],
          },{
            title: "Interior Detail",
            desc: "Vacuum, steam clean, fabric & leather care, streak-free glass.",
            bullets: ["Carpet shampoo","Odor neutralizer","UV protectant"],
          },{
            title: "Paint Correction",
            desc: "Cut & polish to reduce swirls and oxidation for a deep glossy finish.",
            bullets: ["Test spot included","Gloss enhancement","Safe methods"],
          },{
            title: "Ceramic Coatings",
            desc: "Durable hydrophobic protection; easier washes and long‑lasting gloss.",
            bullets: ["1–5 year options","Warranties available","Pro application"],
          },{
            title: "Headlight Restoration",
            desc: "Clarity restored and UV sealed for safer night driving.",
            bullets: ["UV sealant","Improved output","Fast service"],
          },{
            title: "Fleet & Commercial",
            desc: "Keep your vehicles clean and on-brand with flexible maintenance plans.",
            bullets: ["Volume rates","On-site service","Scheduled visits"],
          }].map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 bg-white">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.bullets.map((b: string) => <Pill key={b}>{b}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages / Pricing */}
      <Section id="packages" title="Popular Packages" subtitle="Every vehicle is different—call for an exact quote.">
        <div className="grid md:grid-cols-3 gap-6">
          <PackageCard
            title="Express Refresh"
            price="$99 – $149"
            features={["Hand wash & protect","Quick interior tidy","Windows & wheels"]}
            cta="Book Express"
          />
          <PackageCard
            title="Full Interior + Exterior"
            price="$199 – $299"
            features={["Deep interior clean","Decon + sealant","Wheel & tire detail"]}
            cta="Book Full Detail"
          />
          <PackageCard
            title="Correction + Ceramic"
            price="From $699"
            features={["1–2 stage correction","Pro ceramic coating","Maintenance guide"]}
            cta="Get Coating Quote"
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">Prices vary by size/condition. Ask about multi‑car and maintenance discounts.</p>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Recent Work" subtitle="Real results from customers across Westmoreland & Allegheny County.">
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <img key={i} className="rounded-2xl w-full h-56 object-cover" alt={`Auto detailing example ${i} in Western Pennsylvania`} src={`https://images.unsplash.com/photo-15${60+i}466835-00a7907e9de1?q=80&w=900&auto=format&fit=crop`} />
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">Replace these photos with your own before/after shots to improve local trust and conversions.</p>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="Customer Reviews" subtitle="What drivers around Pittsburgh & Greensburg are saying.">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: "Emily R.", text: "Booked a full detail in Greensburg—car looks brand new! Scheduling was easy and the quality is top tier.", stars: 5
          },{
            name: "Marcus P.", text: "They removed heavy swirl marks and applied a ceramic—paint pops now. Worth every penny.", stars: 5
          },{
            name: "Dana K.", text: "Interior shampoo in Monroeville. Pet hair gone and it smells amazing. Fast and professional.", stars: 5
          }].map((r) => (
            <figure key={r.name} className="rounded-2xl border p-6 bg-white">
              <figcaption className="font-semibold">{r.name}</figcaption>
              <div className="flex items-center gap-1 mt-1" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="w-4 h-4" />)}
              </div>
              <blockquote className="mt-2 text-gray-700">“{r.text}”</blockquote>
            </figure>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section id="service-area" title="Service Area" subtitle="Proudly serving Westmoreland County & Allegheny County.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-bold">Cities & Communities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {BIZ.serviceAreaCities.map((c) => <Pill key={c}>{c}</Pill>)}
            </div>
            <p className="mt-4 text-sm text-gray-600">Don’t see your town? Call us—we often travel throughout Western PA for coatings and fleet work.</p>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-bold">Why Local Matters</h3>
            <ul className="mt-3 space-y-2 list-disc ml-5 text-gray-700">
              <li>Optimized for Pittsburgh, Greensburg, and surrounding search queries.</li>
              <li>Localized content and headings for better Google Maps & organic results.</li>
              <li>Clear NAP (Name, Address, Phone) and service-area schema for local SEO.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Frequently Asked Questions">
        <div className="grid md:grid-cols-2 gap-6">
          <FaqItem q="Do you offer mobile detailing?" a="Yes, weather permitting and where power/water access allows. We also offer in‑shop appointments." />
          <FaqItem q="What areas do you serve?" a="Westmoreland County (Greensburg, Latrobe, Murrysville, and more) and Allegheny County (Pittsburgh, Monroeville, and nearby)." />
          <FaqItem q="Are ceramic coatings worth it in PA winters?" a="Absolutely—coatings add durable protection and make winter cleanup faster and easier." />
          <FaqItem q="How do I get a quote?" a={`Call ${BIZ.phone} or use the contact form below with your vehicle make, model, and condition.`} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get an Estimate" subtitle="Tell us about your vehicle and the services you want.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-bold">Book Now</h3>
            <div className="mt-3 grid gap-3">
              <a href={BIZ.phoneHref} className="rounded-xl border px-4 py-3 font-semibold text-center">Call {BIZ.phone}</a>
              <a href={BIZ.social.instagram} className="rounded-xl border px-4 py-3 font-semibold text-center">Message on Instagram</a>
              <a href={BIZ.social.facebook} className="rounded-xl border px-4 py-3 font-semibold text-center">Message on Facebook</a>
            </div>
            <p className="mt-3 text-sm text-gray-600">We’re mobile-only: we come to you in Westmoreland & Allegheny County.</p>
          </div>

          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-bold">Contact & Hours</h3>
            <div className="mt-3 space-y-2 text-gray-700">
              <div className="flex items-center gap-2"><Phone className="w-5 h-5" /><a href={BIZ.phoneHref} aria-label={`Call ${BIZ.name}`}>{BIZ.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="w-5 h-5" /><a href={BIZ.mailHref}>{BIZ.email}</a></div>
              <div className=\"flex items-center gap-2\"><MapPin className=\"w-5 h-5\" /><span>Mobile service — Westmoreland & Allegheny County, PA</span></div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Hours</h4>
              <ul className="mt-2 text-gray-700">
                {BIZ.hours.map((h) => (
                  <li key={h.day} className="flex justify-between"><span>{h.day}</span><span>{h.time}</span></li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex gap-3">
              <a className="rounded-xl border px-4 py-2" href={BIZ.social.facebook} aria-label="Facebook">Facebook</a>
              <a className="rounded-xl border px-4 py-2" href={BIZ.social.instagram} aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer with Local SEO copy */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-extrabold">{BIZ.name}</div>
            <p className="mt-2 text-sm text-gray-300 max-w-sm">
              {BIZ.name} provides professional car detailing across Westmoreland County and Allegheny County—Greensburg, Latrobe, Murrysville, Pittsburgh, Monroeville, and beyond. From deep interior cleaning to ceramic coatings, we protect your investment in Western PA conditions.
            </p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#packages" className="hover:underline">Packages</a></li>
              <li><a href="#reviews" className="hover:underline">Reviews</a></li>
              <li><a href="#service-area" className="hover:underline">Service Area</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <address className="not-italic mt-2 text-sm text-gray-300">
              Mobile service — Westmoreland & Allegheny County, PA
            </address>
            <div className="mt-2 text-sm"><a href={BIZ.phoneHref}>{BIZ.phone}</a></div>
            <div className="mt-1 text-sm"><a href={BIZ.mailHref}>{BIZ.email}</a></div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-400 flex flex-wrap justify-between items-center gap-2">
            <span>© {new Date().getFullYear()} {BIZ.name}. All rights reserved.</span>
            <div className="flex flex-wrap gap-2">
              {BIZ.keywords.slice(0,6).map(k => <Pill key={k}>{k}</Pill>)}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

<!-- =============================
     DROP-IN BUILD: Single-file HTML
     ============================= -->

<!-- Save the following as index.html in your GitHub Pages repo
     https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/ -->

<!-- ================= index.html ================= -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CJ’s Auto Detailing | Mobile Detailing in Westmoreland & Allegheny County, PA</title>
  <meta name="description" content="Mobile auto detailing serving Westmoreland County and Allegheny County: interior deep clean, exterior detail, paint correction, ceramic coatings. Call 724-972-3957." />
  <meta name="keywords" content="auto detailing Westmoreland County, auto detailing Allegheny County, car detailing Greensburg PA, mobile detailing Pittsburgh, ceramic coating Westmoreland, paint correction Pittsburgh, interior shampoo Greensburg, headlight restoration PA" />
  <link rel="canonical" href="https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/" />
  <meta property="og:title" content="CJ’s Auto Detailing | Mobile Detailing in Westmoreland & Allegheny County, PA" />
  <meta property="og:description" content="Mobile auto detailing serving Westmoreland & Allegheny County. Call 724-972-3957 or message us on Instagram/Facebook to book." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop" />
  <meta name="twitter:card" content="summary_large_image" />
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html { scroll-behavior: smooth; }
  </style>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "CJ’s Auto Detailing",
    "url": "https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/",
    "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop",
    "telephone": "+1-724-972-3957",
    "email": "ckushnerautodetailing@gmail.com",
    "address": {"@type":"PostalAddress","streetAddress":"","addressLocality":"","addressRegion":"PA","postalCode":"","addressCountry":"US"},
    "areaServed": ["Westmoreland County, PA","Allegheny County, PA","Greensburg","Latrobe","Murrysville","Jeannette","New Kensington","Pittsburgh","Monroeville","Penn Hills","Plum","Mt. Lebanon","Bethel Park"],
    "openingHoursSpecification": [{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"18:00"}],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579612289787",
      "https://www.instagram.com/cjs_auto_detail_pa/"
    ],
    "priceRange": "$$",
    "serviceType": ["Interior Detail","Exterior Detail","Paint Correction","Ceramic Coatings","Headlight Restoration","Mobile Detailing"],
    "hasOfferCatalog": {"@type":"OfferCatalog","name":"Detail Packages","itemListElement":[
      {"@type":"Offer","name":"Express Refresh","price":"99-149","priceCurrency":"USD"},
      {"@type":"Offer","name":"Full Interior + Exterior","price":"199-299","priceCurrency":"USD"},
      {"@type":"Offer","name":"Correction + Ceramic","price":"699+","priceCurrency":"USD"}
    ]}
  }
  </script>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"Do you serve Pittsburgh and Greensburg?","acceptedAnswer":{"@type":"Answer","text":"Yes. We serve Westmoreland County (Greensburg, Latrobe, Murrysville) and Allegheny County (Pittsburgh, Monroeville, and surrounding areas)."}},
      {"@type":"Question","name":"Do you offer mobile detailing?","acceptedAnswer":{"@type":"Answer","text":"Yes. We are mobile-only and come to you when weather and access allow."}},
      {"@type":"Question","name":"How long does a full detail take?","acceptedAnswer":{"@type":"Answer","text":"Most full details take 3–5 hours depending on vehicle size and condition."}}
    ]}
  </script>
</head>
<body class="text-gray-900">
  <!-- Top bar -->
  <div class="bg-black text-white text-sm">
    <div class="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="#contact" class="underline">Book Now</a>
        <span>Mobile service — Westmoreland & Allegheny County</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="tel:+17249723957" class="underline">Call 724-972-3957</a>
        <a href="mailto:ckushnerautodetailing@gmail.com" class="hidden md:inline underline">ckushnerautodetailing@gmail.com</a>
      </div>
    </div>
  </div>

  <!-- Nav -->
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" class="font-extrabold text-xl">CJ’s Auto Detailing</a>
      <div class="hidden md:flex items-center gap-6 text-sm">
        <a href="#services" class="hover:underline">Services</a>
        <a href="#packages" class="hover:underline">Packages</a>
        <a href="#gallery" class="hover:underline">Gallery</a>
        <a href="#reviews" class="hover:underline">Reviews</a>
        <a href="#service-area" class="hover:underline">Service Area</a>
        <a href="#faq" class="hover:underline">FAQ</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </div>
      <a href="tel:+17249723957" class="rounded-xl border px-4 py-2 text-sm font-semibold">Call 724-972-3957</a>
    </nav>
  </header>

  <!-- Hero -->
  <section id="home" class="relative overflow-hidden">
    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop" alt="Freshly detailed car in Western PA" class="w-full h-[60vh] md:h-[70vh] object-cover" />
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute inset-0 flex items-center">
      <div class="max-w-6xl mx-auto px-4 text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold max-w-3xl">Showroom Shine, Local Service</h1>
        <p class="mt-4 max-w-2xl text-lg md:text-xl">Mobile auto detailing, ceramic coatings, and paint correction serving Westmoreland & Allegheny County.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#contact" class="rounded-xl border px-5 py-3 font-semibold">Book Now</a>
          <a href="#services" class="rounded-xl border px-5 py-3 font-semibold">View Services</a>
          <a href="tel:+17249723957" class="rounded-xl border px-5 py-3 font-semibold">Call 724-972-3957</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust bar -->
  <div class="bg-gray-50 border-y">
    <div class="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
      <div class="flex items-center gap-2">★ 5‑Star Local Service</div>
      <div class="flex items-center gap-2">✨ Ceramic Coatings</div>
      <div class="flex items-center gap-2">🧴 Paint Correction</div>
      <div class="flex items-center gap-2">💧 Interior Deep Clean</div>
      <div class="flex items-center gap-2">🚗 Mobile Appointments</div>
    </div>
  </div>

  <!-- Services -->
  <section id="services" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-extrabold">Auto Detailing Services</h2>
      <p class="mt-2 text-lg text-gray-600">Hand wash, interior restoration, paint decon, machine polish, ceramic coatings, and more.</p>
      <div class="grid md:grid-cols-3 gap-6 mt-10">
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Exterior Detail</h3>
          <p class="mt-2 text-gray-700">Foam wash, iron decon, clay, wheels & tires, sealant.</p>
        </div>
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Interior Detail</h3>
          <p class="mt-2 text-gray-700">Vacuum, steam clean, fabric & leather care, glass.</p>
        </div>
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Paint Correction</h3>
          <p class="mt-2 text-gray-700">Cut & polish to reduce swirls and oxidation.</p>
        </div>
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Ceramic Coatings</h3>
          <p class="mt-2 text-gray-700">Durable protection; easier washes and long‑lasting gloss.</p>
        </div>
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Headlight Restoration</h3>
          <p class="mt-2 text-gray-700">Clarity restored and UV sealed for safer night driving.</p>
        </div>
        <div class="rounded-2xl border p-6 bg-white">
          <h3 class="text-lg font-bold">Fleet & Commercial</h3>
          <p class="mt-2 text-gray-700">Maintenance plans for consistent, on‑brand vehicles.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Packages -->
  <section id="packages" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-extrabold">Popular Packages</h2>
      <p class="mt-2 text-lg text-gray-600">Every vehicle is different—call for an exact quote.</p>
      <div class="grid md:grid-cols-3 gap-6 mt-10">
        <div class="rounded-2xl shadow p-6 bg-white">
          <h3 class="text-xl font-bold">Express Refresh</h3>
          <p class="mt-2 text-3xl font-extrabold">$99 – $149</p>
          <a href="tel:+17249723957" class="mt-6 inline-block w-full text-center rounded-xl border px-4 py-3 font-semibold">Book Express</a>
        </div>
        <div class="rounded-2xl shadow p-6 bg-white">
          <h3 class="text-xl font-bold">Full Interior + Exterior</h3>
          <p class="mt-2 text-3xl font-extrabold">$199 – $299</p>
          <a href="tel:+17249723957" class="mt-6 inline-block w-full text-center rounded-xl border px-4 py-3 font-semibold">Book Full Detail</a>
        </div>
        <div class="rounded-2xl shadow p-6 bg-white">
          <h3 class="text-xl font-bold">Correction + Ceramic</h3>
          <p class="mt-2 text-3xl font-extrabold">From $699</p>
          <a href="tel:+17249723957" class="mt-6 inline-block w-full text-center rounded-xl border px-4 py-3 font-semibold">Get Coating Quote</a>
        </div>
      </div>
      <p class="mt-4 text-sm text-gray-600">Prices vary by size/condition. Ask about multi‑car and maintenance discounts.</p>
    </div>
  </section>

  <!-- Gallery -->
  <section id="gallery" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-extrabold">Recent Work</h2>
      <p class="mt-2 text-lg text-gray-600">Real results around Pittsburgh & Greensburg.</p>
      <div class="grid md:grid-cols-3 gap-4 mt-8">
        <img class="rounded-2xl w-full h-56 object-cover" alt="Auto detailing example 1 in Western Pennsylvania" src="https://images.unsplash.com/photo-1560466835-00a7907e9de1?q=80&w=900&auto=format&fit=crop" />
        <img class="rounded-2xl w-full h-56 object-cover" alt="Auto detailing example 2 in Western Pennsylvania" src="https://images.unsplash.com/photo-1561466835-00a7907e9de1?q=80&w=900&auto=format&fit=crop" />
        <img class="rounded-2xl w-full h-56 object-cover" alt="Auto detailing example 3 in Western Pennsylvania" src="https://images.unsplash.com/photo-1562466835-00a7907e9de1?q=80&w=900&auto=format&fit=crop" />
      </div>
      <p class="mt-4 text-sm text-gray-600">Replace with your own before/after shots for best results.</p>
    </div>
  </section>

  <!-- Reviews -->
  <section id="reviews" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-extrabold">Customer Reviews</h2>
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <figure class="rounded-2xl border p-6 bg-white">
          <figcaption class="font-semibold">Emily R.</figcaption>
          <blockquote class="mt-2 text-gray-700">“Booked a full detail in Greensburg—car looks brand new! Scheduling was easy and the quality is top tier.”</blockquote>
        </figure>
        <figure class="rounded-2xl border p-6 bg-white">
          <figcaption class="font-semibold">Marcus P.</figcaption>
          <blockquote class="mt-2 text-gray-700">“They removed heavy swirl marks and applied a ceramic—paint pops now. Worth every penny.”</blockquote>
        </figure>
        <figure class="rounded-2xl border p-6 bg-white">
          <figcaption class="font-semibold">Dana K.</figcaption>
          <blockquote class="mt-2 text-gray-700">“Interior shampoo in Monroeville. Pet hair gone and it smells amazing. Fast and professional.”</blockquote>
        </figure>
      </div>
    </div>
  </section>

  <!-- Service Area -->
  <section id="service-area" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div class="rounded-2xl border p-6 bg-white">
        <h3 class="font-bold">Cities & Communities</h3>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">
          <span class="inline-block rounded-full border px-3 py-1">Greensburg</span>
          <span class="inline-block rounded-full border px-3 py-1">Latrobe</span>
          <span class="inline-block rounded-full border px-3 py-1">Hempfield Township</span>
          <span class="inline-block rounded-full border px-3 py-1">Murrysville</span>
          <span class="inline-block rounded-full border px-3 py-1">Jeannette</span>
          <span class="inline-block rounded-full border px-3 py-1">New Kensington</span>
          <span class="inline-block rounded-full border px-3 py-1">Pittsburgh</span>
          <span class="inline-block rounded-full border px-3 py-1">Monroeville</span>
          <span class="inline-block rounded-full border px-3 py-1">Penn Hills</span>
          <span class="inline-block rounded-full border px-3 py-1">Plum</span>
          <span class="inline-block rounded-full border px-3 py-1">Mt. Lebanon</span>
          <span class="inline-block rounded-full border px-3 py-1">Bethel Park</span>
        </div>
        <p class="mt-4 text-sm text-gray-600">Don’t see your town? Message us—we often travel across Western PA.</p>
      </div>
      <div class="rounded-2xl border p-6 bg-white">
        <h3 class="font-bold">Why Local Matters</h3>
        <ul class="mt-3 space-y-2 list-disc ml-5 text-gray-700">
          <li>Optimized for Pittsburgh, Greensburg, and nearby search terms.</li>
          <li>Clear contact buttons for fast booking: phone, Instagram, Facebook.</li>
          <li>LocalBusiness & FAQ schema to boost Google visibility.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div class="rounded-2xl border p-6 bg-white">
        <h3 class="font-bold">Book Now</h3>
        <div class="mt-3 grid gap-3">
          <a href="tel:+17249723957" class="rounded-xl border px-4 py-3 font-semibold text-center">Call 724-972-3957</a>
          <a href="https://www.instagram.com/cjs_auto_detail_pa/" class="rounded-xl border px-4 py-3 font-semibold text-center">Message on Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61579612289787" class="rounded-xl border px-4 py-3 font-semibold text-center">Message on Facebook</a>
        </div>
        <p class="mt-3 text-sm text-gray-600">We’re mobile-only: we come to you in Westmoreland & Allegheny County.</p>
      </div>
      <div class="rounded-2xl border p-6 bg-white">
        <h3 class="font-bold">Contact & Hours</h3>
        <div class="mt-3 space-y-2 text-gray-700">
          <div>Phone: <a class="underline" href="tel:+17249723957">724-972-3957</a></div>
          <div>Email: <a class="underline" href="mailto:ckushnerautodetailing@gmail.com">ckushnerautodetailing@gmail.com</a></div>
          <div>Service Type: Mobile service — Westmoreland & Allegheny County, PA</div>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold">Hours</h4>
          <ul class="mt-2 text-gray-700">
            <li class="flex justify-between"><span>Mon–Fri</span><span>8:00 AM – 6:00 PM</span></li>
            <li class="flex justify-between"><span>Saturday</span><span>9:00 AM – 3:00 PM</span></li>
            <li class="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-white">
    <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div class="text-xl font-extrabold">CJ’s Auto Detailing</div>
        <p class="mt-2 text-sm text-gray-300 max-w-sm">Professional car detailing across Westmoreland & Allegheny County—Greensburg, Latrobe, Murrysville, Pittsburgh, Monroeville, and more. We protect your investment in Western PA conditions.</p>
      </div>
      <div>
        <div class="font-semibold">Quick Links</div>
        <ul class="mt-2 space-y-2 text-sm">
          <li><a href="#services" class="hover:underline">Services</a></li>
          <li><a href="#packages" class="hover:underline">Packages</a></li>
          <li><a href="#reviews" class="hover:underline">Reviews</a></li>
          <li><a href="#service-area" class="hover:underline">Service Area</a></li>
          <li><a href="#faq" class="hover:underline">FAQ</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="font-semibold">Book</div>
        <div class="mt-2 text-sm"><a class="underline" href="tel:+17249723957">Call 724-972-3957</a></div>
        <div class="mt-1 text-sm"><a class="underline" href="https://www.instagram.com/cjs_auto_detail_pa/">Instagram</a></div>
        <div class="mt-1 text-sm"><a class="underline" href="https://www.facebook.com/profile.php?id=61579612289787">Facebook</a></div>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-400 flex flex-wrap justify-between items-center gap-2">
        <span>© <span id="year"></span> CJ’s Auto Detailing. All rights reserved.</span>
        <div class="flex flex-wrap gap-2">
          <span class="inline-block rounded-full border px-3 py-1">auto detailing Westmoreland County</span>
          <span class="inline-block rounded-full border px-3 py-1">auto detailing Allegheny County</span>
          <span class="inline-block rounded-full border px-3 py-1">mobile detailing Pittsburgh</span>
          <span class="inline-block rounded-full border px-3 py-1">ceramic coating Westmoreland</span>
        </div>
      </div>
    </div>
  </footer>

  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html>
<!-- =============== end index.html =============== -->


<!-- ================= robots.txt ================= -->
# Save as robots.txt at repo root (or /docs if that’s your Pages root)
User-agent: *
Allow: /
Sitemap: https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/sitemap.xml


<!-- ================= sitemap.xml ================= -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#services</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#packages</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#gallery</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#reviews</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#service-area</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#faq</loc></url>
  <url><loc>https://cjsautodetailing.github.io/CJ-s-Auto-Detailing/#contact</loc></url>
</urlset>


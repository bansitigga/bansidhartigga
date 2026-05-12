const coreValues = [
  "Customer First",
  "Innovation",
  "Dependability",
  "Integrity",
  "Sustainability"
];

const highlights = [
  {
    title: "Award-Winning Team",
    description:
      "Recognized for excellence in telecom, managed IT operations, and enterprise-grade digital transformation services."
  },
  {
    title: "People-Centric Culture",
    description:
      "Competitive benefits, strong collaboration, and a work environment that supports growth and well-being."
  },
  {
    title: "Career Development",
    description:
      "Continuous learning through practical training, mentorship, and opportunities to lead high-impact projects."
  }
];

const certifications = [
  "ISO 27001-aligned information security practices",
  "Industry-recognized innovation and delivery excellence",
  "Quality-focused and sustainability-driven operations",
  "Customer-trust-led service and governance model"
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Us</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Welcome to <span className="text-cyan-300">Your New Brand Name</span>
        </h1>
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          Your New Brand Name is a technology-driven company focused on enterprise IT, connectivity,
          cybersecurity, cloud infrastructure, and managed digital services. We help organizations design,
          secure, and scale modern infrastructure with dependable execution and measurable business impact.
        </p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          Our teams deliver practical, cost-effective solutions tailored to business goals. From networking and
          managed operations to communication systems and infrastructure modernization, we simplify complex IT
          environments so clients can focus on strategic growth.
        </p>
        <blockquote className="mt-8 border-l-4 border-cyan-400 pl-5 text-lg italic text-slate-200">
          “Seamless connectivity and strong security are the foundation of digital progress—enabling innovation
          while protecting what matters most.”
        </blockquote>
        <p className="mt-4 text-sm font-semibold text-slate-400">Founder & CEO</p>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-semibold text-cyan-300">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold text-cyan-300">Our Vision</h2>
          <p className="mt-4 leading-8 text-slate-300">
            To deliver high-performance enterprise IT and connectivity solutions that empower businesses with
            speed, resilience, and confidence. We envision a digital ecosystem where organizations operate on secure,
            future-ready infrastructure and remain competitive through continuous innovation.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold text-cyan-300">Our Mission</h2>
          <p className="mt-4 leading-8 text-slate-300">
            To provide flexible, value-driven technology services across IT infrastructure, telecom, security,
            and cloud operations. Our mission is rooted in integrity, accountability, and customer-centric delivery
            that creates long-term business value.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-cyan-300">Core Values</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            We are committed to hassle-free service delivery, operational excellence, and trust-first partnerships.
            Our value system shapes every decision, from solution architecture to day-to-day client support.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <li key={value} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-200">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-cyan-300">Our Team</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Our team is the backbone of our delivery capability. With expertise across telecom, managed network
            operations, cybersecurity, cloud services, and enterprise IT, our specialists design and support
            reliable digital foundations for organizations of every size.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Guided by experienced leadership, we focus on performance, security, and scale. Whether it is managed
            IT services, infrastructure planning, support operations, or connectivity modernization, we provide
            tailored solutions built around each client&apos;s requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-cyan-300">Certifications & Achievements</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 leading-7 text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  aboutSecondaryFallbackImage,
  aboutSecondaryImage,
  allProjects,
  contactInfo,
  cvFile,
  designPortfolio,
  designProjects,
  frontendProjects,
  navItems,
  profileImage,
  projectCategoryByKey,
  projectCategoryOptions,
  selectedWork,
  serviceCards,
  serviceProcess,
  serviceReasons,
  services,
  serviceTools,
  skillCategories,
  skillGroups,
  videoProjects,
} from './data/portfolioData'

const getNavHref = (item) => {
  if (item === 'Home') return '/'
  if (item === 'About') return '/about'
  if (item === 'Projects') return '/projects'
  return '/contact'
}

const isCurrentNavItem = (item) => {
  const currentPath = window.location.pathname

  if (item === 'Home') return currentPath === '/'
  if (item === 'About') return currentPath === '/about'
  if (item === 'Projects') return currentPath === '/projects'
  return currentPath === '/contact'
}

const getProjectCategoryFromUrl = () => {
  const categoryParam = new URLSearchParams(window.location.search).get('category')
  if (!categoryParam) return 'all'
  return Object.prototype.hasOwnProperty.call(projectCategoryByKey, categoryParam) ? categoryParam : 'all'
}

const buttonPrimaryClass = 'inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0'
const buttonSecondaryClass = 'inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-stone-500 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0'
const cardClass = 'rounded-[1.75rem] border border-white/10 bg-stone-900/70 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-stone-100 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-stone-300 md:text-lg">{description}</p> : null}
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">Charles T. Nzelu</p>
            <p className="mt-2 text-sm text-stone-400">Graphic Designer • Frontend Developer • Video Editor</p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/projects" className="transition hover:text-white">Projects</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
          </div>

          <div className="space-y-2 text-sm text-stone-400">
            <p>
              <a href={`mailto:${contactInfo.email}`} className="transition hover:text-white">{contactInfo.email}</a>
            </p>
            <p>
              <a href={`tel:${contactInfo.phone}`} className="transition hover:text-white">+234 8149368077</a>
            </p>
            <p>
              <a href={contactInfo.discordUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">Discord</a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-stone-500">© 2026 Charles T. Nzelu. All rights reserved.</div>
      </div>
    </footer>
  )
}

function HomePage() {
  const featuredProjects = frontendProjects.slice(0, 2)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="/" className="font-display text-xl font-bold tracking-tight text-white">Charles T. Nzelu</a>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-8">
            {navItems.map((item) => {
              const href = getNavHref(item)
              const activeClass = isCurrentNavItem(item) ? 'text-white' : 'text-stone-300'
              return (
                <a key={item} href={href} className={`transition hover:text-white ${activeClass}`}>
                  {item}
                </a>
              )
            })}
          </div>
          <a href="/contact" className="rounded-full border border-stone-700 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">
                Graphic Designer • Frontend Developer
              </p>

              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                I design clear brands and build polished digital experiences that feel premium and functional.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300 md:text-xl">
                I&apos;m Charles T. Nzelu — a multidisciplinary creative focused primarily on graphic design and frontend development, with video editing as a supporting creative skill for visual storytelling and digital content.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/projects" className={buttonPrimaryClass}>
                  View My Work
                </a>
                <a href="/contact" className={buttonSecondaryClass}>
                  Contact Me
                </a>
                <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0">
                  Download CV
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-stone-300">
                {['Branding', 'Frontend', 'React', 'Tailwind CSS', 'UI Design', 'Creative Direction'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-8 right-4 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-800 to-stone-900 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <img src={profileImage} alt="Portrait of Charles T. Nzelu" className="h-[520px] w-full rounded-[1.5rem] object-cover object-center" />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-stone-950/80 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 text-sm text-stone-300">
                    <span>Available for new work</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      Open
                    </span>
                  </div>
                  <p className="mt-3 font-display text-2xl font-semibold text-white">Design-driven digital work with a sharp creative eye.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Featured Work" title="Selected projects shaped for clarity and impact." description="A focused look at the web work that brings together thoughtful design, intuitive interfaces, and practical user experience." />
            <p className="mb-8 max-w-2xl text-sm leading-7 text-stone-300 md:text-base">
              Here are a few self-initiated projects where I took an idea from concept and design through to a working frontend experience.
            </p>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80 transition duration-300 hover:-translate-y-1 hover:border-stone-600">
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">{project.category}</span>
                    </div>

                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">{project.ownershipLabel ?? 'Self-Initiated Project'}</p>
                    <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-300">{project.homeDescription ?? project.description}</p>

                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">My Role</p>
                      <div className="flex flex-wrap gap-2">
                        {(project.role ?? []).map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-stone-800/70 px-2.5 py-1 text-xs text-stone-200">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveLink ? (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                          Live Demo
                        </a>
                      ) : null}
                      {project.githubLink ? (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Core Focus" title="Creative work shaped around design, interface thinking, and digital clarity." description="Graphic design and frontend development are the primary strengths of the portfolio, while video editing remains a supporting creative skill." />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className={`rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 transition duration-300 hover:border-violet-500/30 ${service.title === 'Graphic Design' || service.title === 'Frontend Development' ? 'ring-1 ring-violet-500/20' : 'opacity-95'}`}>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="graphic-design-preview" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                <img src="/images/design/portfolio-preview.svg" alt="Graphic Design Portfolio Preview" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Graphic Design</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Graphic Design Portfolio — Coming Soon</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
                  The full design portfolio PDF is still being prepared, so this section remains polished and ready for the completed collection when it is available.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-300 opacity-90">
                    Graphic Design Portfolio — Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video-editing-preview" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-6 md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[0.7fr_1.3fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-950">
                <img src="/images/video/video-preview.svg" alt="Video Editing preview" className="h-40 w-full object-cover md:h-48" />
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Video Editing</p>
                <h3 className="font-display text-3xl font-semibold text-white">Video Editing</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-stone-300">
                  An additional creative skill I enjoy exploring as a hobby.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Skills Preview" title="Core tools behind my creative workflow." />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js', 'Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW', 'Video Editing'].map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-stone-900/70 px-4 py-5 text-center text-sm font-medium text-stone-200">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="about-preview" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">About</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">A multidisciplinary creative with a strong eye for detail.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-stone-300 md:text-lg">
              <p>I enjoy taking ideas from concept to reality — designing the visual experience, building the interface, and refining the details until everything comes together.</p>
              <div className="pt-2">
                <a href="/about" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">Learn More About Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Let&apos;s work together</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Ready to create something polished and memorable?</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View My Work</a>
                  <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">Contact Me</a>
                  <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-400 hover:bg-violet-500/20">Download CV</a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-stone-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contact details</p>
                <div className="mt-5 space-y-4 text-base text-stone-200">
                  <p><span className="text-stone-400">Email:</span>{' '}<a href="mailto:nzelucharles98@gmail.com" className="text-violet-200 hover:text-violet-100">nzelucharles98@gmail.com</a></p>
                  <p><span className="text-stone-400">Phone:</span>{' '}<a href="tel:+2348149368077" className="text-violet-200 hover:text-violet-100">+234 8149368077</a></p>
                  <p><span className="text-stone-400">Discord:</span>{' '}<a href={contactInfo.discordUrl} target="_blank" rel="noreferrer" aria-label="Open Charles T. Nzelu on Discord" className="text-violet-200 hover:text-violet-100">Discord</a></p>
                  <p><span className="text-stone-400">GitHub:</span>{' '}<a href="https://github.com/Charles-spe" target="_blank" rel="noreferrer" className="text-violet-200 hover:text-violet-100">github.com/Charles-spe</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function AboutPage() {
  const personalInterests = [
    {
      title: 'Creativity',
      description: 'I enjoy turning simple ideas into visuals and digital experiences that feel thoughtful and purposeful.',
    },
    {
      title: 'Games & Strategy',
      description: 'I enjoy mind and board games because I like strategy, problem-solving, and figuring out different ways to approach a challenge.',
    },
    {
      title: 'Music',
      description: 'Music is one of my favorite ways to relax, stay inspired, and set the mood while working or creating.',
    },
  ]

  const profileImageStyle = 'h-[520px] w-full rounded-[1.75rem] object-cover object-center md:h-[620px]'

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="/" className="font-display text-xl font-bold tracking-tight text-white">Charles T. Nzelu</a>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-8">
            {navItems.map((item) => {
              const href = getNavHref(item)
              const activeClass = isCurrentNavItem(item) ? 'text-white' : 'text-stone-300'
              return <a key={item} href={href} className={`transition hover:text-white ${activeClass}`}>{item}</a>
            })}
          </div>
          <a href="/contact" className="hidden rounded-full border border-stone-700 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200 md:inline-flex">Let&apos;s Talk</a>
        </nav>
      </header>

      <main className="overflow-x-hidden">
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="order-2 lg:order-1">
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-200">
                Creative professional
              </p>

              <h1 className="max-w-xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-white md:text-6xl">
                Hey, I&apos;m Charles Tochukwu Nzelu.
              </h1>

              <div className="mt-6 space-y-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
                <p>
                  Hey, I&apos;m Charles Tochukwu Nzelu, a frontend developer and graphic designer with a love for turning ideas into things people can actually see, use, and connect with. I also enjoy video editing as a hobby, which gives me another way to explore creativity and visual storytelling.
                </p>
                <p>
                  I&apos;m naturally drawn to creative work. I enjoy taking a simple idea and finding ways to make it more interesting, meaningful, and visually appealing. For me, good design isn&apos;t just about making something look beautiful; it&apos;s about making people feel something, understand something, or experience something differently.
                </p>
                <p>
                  I also enjoy creating self-initiated projects where I can take an idea from concept and design through to a working frontend experience.
                </p>
                <p>
                  Outside of design and development, I&apos;m into mind and board games because I enjoy challenges, strategy, and figuring things out. Music is another big part of my downtime. Whether I&apos;m listening while working, relaxing, or simply enjoying a good song, it has always been one of the easiest ways for me to reset and get inspired.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/projects" className={buttonPrimaryClass}>View My Work</a>
                <a href="/contact" className={buttonSecondaryClass}>Contact Me</a>
                <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0">
                  Download CV
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[520px]">
                <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                  <img
                    src={profileImage}
                    alt="Portrait of Charles Tochukwu Nzelu"
                    className={profileImageStyle}
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = '/images/profile/profile-placeholder.svg'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                  <img
                    src={aboutSecondaryImage}
                    alt="Personal lifestyle portrait of Charles Tochukwu Nzelu"
                    className="h-[380px] w-full rounded-[1.5rem] object-cover object-center md:h-[460px]"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = aboutSecondaryFallbackImage
                    }}
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Personal</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">The creative side beyond the screen.</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
                  I like to keep a balance between focused creative work and the things that keep me inspired. My interests help shape how I think, how I build, and how I approach visual ideas.
                </p>

                <div className="mt-8 space-y-4">
                  {personalInterests.map((interest) => (
                    <div key={interest.title} className="rounded-[1.4rem] border border-white/10 bg-stone-900/70 p-5">
                      <h3 className="font-display text-2xl font-semibold text-white">{interest.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-300 md:text-base">{interest.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading
            eyebrow="Creative focus"
            title="What I build and what I enjoy creating."
            description="Frontend development and graphic design are the strongest focus, while video editing remains a meaningful creative hobby and a way to explore motion and storytelling."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-violet-500/20 bg-gradient-to-b from-stone-900 to-stone-950 p-6 ring-1 ring-violet-500/15">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Primary</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Frontend Development</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">
                I enjoy building responsive, modern interfaces that are clean, practical, and easy to use.
              </p>
            </article>

            <article className="rounded-[2rem] border border-violet-500/20 bg-gradient-to-b from-stone-900 to-stone-950 p-6 ring-1 ring-violet-500/15">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Primary</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Graphic Design</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">
                I enjoy creating visual designs that communicate ideas clearly while still feeling creative and memorable.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 opacity-95">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">Secondary</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Video Editing</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">
                Video editing is something I enjoy exploring as a hobby, especially when I want to experiment with movement, timing, and visual storytelling.
              </p>
            </article>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
            <div className="rounded-[2rem] border border-white/10 bg-stone-900/80 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">How I work</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                I like learning by building.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300 md:text-lg">
                I like learning by building. Whether I&apos;m designing a visual or developing an interface, I enjoy experimenting, solving problems, refining the details, and seeing an idea gradually become something real.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2.25rem] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 text-center md:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">Let&apos;s create something meaningful.</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Let&apos;s create something meaningful.</h2>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/projects" className={buttonPrimaryClass}>View My Work</a>
              <a href="/contact" className={buttonSecondaryClass}>Contact Me</a>
              <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0">
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold text-white">Charles T. Nzelu</p>
              <p className="mt-2 text-sm text-stone-400">Graphic Designer • Frontend Developer • Video Editor</p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/projects" className="hover:text-white">Projects</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-stone-500">© 2026 Charles T. Nzelu. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(() => getProjectCategoryFromUrl())
  const [selectedProject, setSelectedProject] = useState(null)

  const activeCategoryLabel = projectCategoryByKey[activeCategory] ?? 'All'
  const visibleProjects = activeCategory === 'all' ? allProjects : allProjects.filter((project) => project.category === activeCategoryLabel)
  const showSection = (category) => activeCategory === 'all' || activeCategoryLabel === category

  const setCategoryAndUrl = (nextCategory) => {
    setActiveCategory(nextCategory)
    const nextUrl = nextCategory === 'all' ? '/projects' : `/projects?category=${nextCategory}`
    window.history.pushState({}, '', nextUrl)
  }

  useEffect(() => {
    const syncCategoryFromUrl = () => setActiveCategory(getProjectCategoryFromUrl())
    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    window.addEventListener('popstate', syncCategoryFromUrl)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('popstate', syncCategoryFromUrl)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="/" className="font-display text-xl font-bold tracking-tight text-white">Charles T. Nzelu</a>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-8">
            {navItems.map((item) => {
              const href = getNavHref(item)
              const activeClass = isCurrentNavItem(item) ? 'text-white' : 'text-stone-300'
              return <a key={item} href={href} className={`transition hover:text-white ${activeClass}`}>{item}</a>
            })}
          </div>
          <a href="/contact" className="hidden rounded-full border border-stone-700 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200 md:inline-flex">Let&apos;s Talk</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">Selected Work</p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">Selected Work</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              Here are some of the projects and creative work I&apos;ve built across frontend development and graphic design, with video editing as an additional creative skill.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10">
          <div className="flex flex-wrap gap-3">
            {projectCategoryOptions.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setCategoryAndUrl(key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeCategory === key ? 'border-white bg-white text-stone-900' : 'border-stone-700 bg-stone-900 text-stone-200 hover:border-stone-500 hover:bg-stone-800'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {!visibleProjects.length ? (
          <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
            <div className="rounded-[2rem] border border-dashed border-white/10 bg-stone-900/60 p-10 text-center text-stone-300">More work coming soon.</div>
          </section>
        ) : null}

        {showSection('Frontend Development') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <p className="mb-6 text-sm text-stone-400">These are self-initiated projects created from my own ideas. I handled the concept, interface design, user experience, and frontend development for each project.</p>
            <SectionHeading
              eyebrow="Frontend Development"
              title="Frontend Development"
              description="Responsive interfaces and interactive web experiences built with a focus on clean design, usability, and practical functionality."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {frontendProjects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-violet-500/20 bg-stone-900/80 shadow-[0_28px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">{project.category}</span>
                    </div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">{project.ownershipLabel ?? 'Self-Initiated Project'}</p>
                    <h2 className="font-display text-3xl font-semibold text-white">{project.title}</h2>
                    <p className="mt-3 text-base leading-7 text-stone-300">{project.description}</p>
                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">My Role</p>
                      <div className="flex flex-wrap gap-2">
                        {(project.role ?? []).map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-stone-800/70 px-2.5 py-1 text-xs text-stone-200">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950">Live Demo</a> : null}
                      {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950">GitHub</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {showSection('Graphic Design') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <SectionHeading
              eyebrow="Graphic Design"
              title="Graphic Design"
              description="Visual work focused on identity, layout, promotional graphics, and creative communication."
            />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80">
              <div className="grid items-center gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="overflow-hidden">
                  <img src="/images/design/portfolio-preview.svg" alt="Graphic Design portfolio preview" className="h-72 w-full object-cover md:h-full" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">Portfolio preview</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">Graphic Design Portfolio</h3>
                  <p className="mt-4 text-base leading-7 text-stone-300">
                    The completed design portfolio is still being prepared, so this section is kept polished and ready for the full PDF when it is available.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {designPortfolio.available ? (
                      <a href={designPortfolio.file} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950">
                        View Design Portfolio
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-300 opacity-90">
                        Graphic Design Portfolio — Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {showSection('Video Editing') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <SectionHeading
              eyebrow="Skills & Tools"
              title="Skills & Tools"
              description="The practical tools and creative systems behind the work, kept concise and easy to scan."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-[1.6rem] border border-white/10 bg-stone-900/75 p-5">
                <h3 className="font-display text-2xl font-semibold text-white">Frontend Development</h3>
                <ul className="mt-5 space-y-3 text-sm text-stone-300">
                  {['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js'].map((item) => (
                    <li key={item} className="rounded-xl border border-white/10 bg-stone-950/60 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.6rem] border border-white/10 bg-stone-900/75 p-5">
                <h3 className="font-display text-2xl font-semibold text-white">Graphic Design</h3>
                <ul className="mt-5 space-y-3 text-sm text-stone-300">
                  {['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW'].map((item) => (
                    <li key={item} className="rounded-xl border border-white/10 bg-stone-950/60 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.6rem] border border-white/10 bg-stone-900/75 p-5 opacity-90">
                <h3 className="font-display text-2xl font-semibold text-white">Video Editing</h3>
                <ul className="mt-5 space-y-3 text-sm text-stone-300">
                  {['Video Editing'].map((item) => (
                    <li key={item} className="rounded-xl border border-white/10 bg-stone-950/60 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        ) : null}

        {showSection('Frontend Development') || showSection('Graphic Design') || showSection('Video Editing') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <SectionHeading eyebrow="What I Do" title="What I Do" description="Focused, practical creative work shaped around clear thinking and strong visual execution." />
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-[2rem] border border-violet-500/20 bg-gradient-to-b from-stone-900 to-stone-950 p-6 ring-1 ring-violet-500/15">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h3 className="font-display text-2xl font-semibold text-white">Graphic Design</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">Branding, posters, editorial layouts, social graphics, and visual design.</p>
              </article>
              <article className="rounded-[2rem] border border-violet-500/20 bg-gradient-to-b from-stone-900 to-stone-950 p-6 ring-1 ring-violet-500/15">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h3 className="font-display text-2xl font-semibold text-white">Frontend Development</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">Responsive, modern interfaces and interactive web experiences.</p>
              </article>
              <article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 opacity-80 md:translate-y-1">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h3 className="font-display text-2xl font-semibold text-white">Video Editing</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">Video editing for promotional content, social media, and visual storytelling.</p>
              </article>
            </div>
          </section>
        ) : null}

        {selectedProject ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true" aria-label={selectedProject.title}>
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-stone-950/80 px-3 py-1.5 text-sm text-stone-200 transition hover:bg-stone-800" aria-label="Close preview">Close</button>
              <img src={selectedProject.image} alt={selectedProject.title} className="h-72 w-full object-cover md:h-96" />
              <div className="p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{selectedProject.category}</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">{selectedProject.ownershipLabel ?? 'Self-Initiated Project'}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{selectedProject.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">{selectedProject.description}</p>
                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">My Role</p>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.role ?? []).map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-stone-800/70 px-2.5 py-1 text-xs text-stone-200">{item}</span>
                    ))}
                  </div>
                </div>
                {selectedProject.tools ? <div className="mt-5 flex flex-wrap gap-2">{selectedProject.tools.map((tool) => <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>)}</div> : null}
              </div>
            </div>
          </div>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Have a project in mind?</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Have a project in mind?</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-stone-300 md:text-lg">Let&apos;s talk about what you&apos;re working on.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950">Contact Me</a>
                <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-400 hover:bg-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950">Download CV</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold text-white">Charles T. Nzelu</p>
              <p className="mt-2 text-sm text-stone-400">Graphic Designer • Frontend Developer • Video Editor</p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/projects" className="hover:text-white">Projects</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-stone-500">© 2026 Charles T. Nzelu. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required.'
      case 'email': {
        if (!value.trim()) return 'Email is required.'
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.'
      }
      case 'subject':
        return value.trim() ? '' : 'Subject is required.'
      case 'message': {
        if (!value.trim()) return 'Message is required.'
        return value.trim().length >= 20 ? '' : 'Message must be at least 20 characters long.'
      }
      default:
        return ''
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextFormData = { ...formData, [name]: value }
    setFormData(nextFormData)

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, value),
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
  }

  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Project enquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="/" className="font-display text-xl font-bold tracking-tight text-white">Charles T. Nzelu</a>
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm text-stone-300 md:gap-8">
            {navItems.map((item) => {
              const href = getNavHref(item)
              const activeClass = isCurrentNavItem(item) ? 'text-white' : 'text-stone-300'
              return (
                <a key={item} href={href} className={`transition hover:text-white ${activeClass}`}>
                  {item}
                </a>
              )
            })}
          </div>
          <a href="/contact" className="hidden rounded-full border border-stone-700 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200 md:inline-flex">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">
                Contact
              </p>
              <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">
                Let&apos;s Work Together
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300 md:text-xl">
                I&apos;m available for frontend development, graphic design, video editing, project ideas, and collaboration work. If you have something in mind, I&apos;d love to hear about it.
              </p>

              <div className="mt-10 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="mt-2 inline-block text-lg text-violet-200 transition hover:text-violet-100">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="mt-2 inline-block text-lg text-violet-200 transition hover:text-violet-100">
                    +234 8149368077
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Discord</p>
                  <a
                    href={contactInfo.discordUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Charles T. Nzelu on Discord"
                    className="mt-2 inline-block text-lg text-violet-200 transition hover:text-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                  >
                    Discord
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Location</p>
                  <p className="mt-2 text-lg text-stone-200">Lagos, Ojo Itakete, Nigeria</p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                  Email Me
                </a>
                <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">
                  Call Me
                </a>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-stone-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Discord</p>
                <p className="mt-3 text-base leading-7 text-stone-300">Prefer chatting on Discord? You can reach me there.</p>
                <a
                  href={contactInfo.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Charles T. Nzelu on Discord"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                >
                  Message me on Discord
                </a>
              </div>
            </div>

            <div className={`${cardClass} bg-gradient-to-br from-stone-900 via-stone-950 to-violet-500/10 p-6 md:p-8`}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-white">Send a message</h2>
                    <p className="mt-2 text-sm text-stone-400">Tell me a little about your idea, timeline, and what you need.</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-200">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-base text-white placeholder:text-stone-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                    />
                    {errors.name ? <p id="name-error" className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-200">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-base text-white placeholder:text-stone-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                    />
                    {errors.email ? <p id="email-error" className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-stone-200">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project enquiry"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-base text-white placeholder:text-stone-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                    />
                    {errors.subject ? <p id="subject-error" className="mt-2 text-sm text-rose-300">{errors.subject}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-200">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea, timeline, and what you're looking for."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-base text-white placeholder:text-stone-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                    />
                    {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
                  </div>

                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-stone-950">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex h-full flex-col justify-center">
                  <div className="mb-4 inline-flex w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Ready to send
                  </div>
                  <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-white">Thanks for reaching out. Your message is ready to send.</h2>
                  <p className="mt-4 text-base leading-7 text-stone-300">
                    This is a client-side demo, so the next step is to send the message through your email app using the pre-filled details below.
                  </p>
                  <a href={mailtoHref} className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                    Send via Email
                  </a>
                  <p className="mt-6 text-sm text-stone-400">
                    Direct email: <a href={`mailto:${contactInfo.email}`} className="text-violet-200 hover:text-violet-100">{contactInfo.email}</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-stone-900/60 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Availability</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
              I&apos;m open to project ideas, collaboration requests, and questions about design, frontend work, and video editing. If you have an opportunity or concept you&apos;d like to explore, feel free to reach out.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">Project inquiry</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-white">Interested in a similar project?</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/projects" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">
                View My Work
              </a>
              <a href={cvFile} download className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold text-white">Charles T. Nzelu</p>
              <p className="mt-2 text-sm text-stone-400">Graphic Designer • Frontend Developer • Video Editor</p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/projects" className="hover:text-white">Projects</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-stone-500">© 2026 Charles T. Nzelu. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-stone-950 px-6 py-20 text-stone-100">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-stone-900/70 p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.12)] md:p-12">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-200">404</p>
        <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">Page not found</h1>
        <p className="mt-5 text-base leading-7 text-stone-300 md:text-lg">
          The page you’re looking for may have moved or no longer exists. Let’s get you back to the portfolio.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="/" className={buttonPrimaryClass}>Back Home</a>
        </div>
      </div>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/skills" element={<Navigate to="/projects" replace />} />
      <Route path="/services" element={<Navigate to="/projects" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
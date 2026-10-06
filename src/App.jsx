import { useEffect, useState } from 'react'
import {
  aboutContent,
  allProjects,
  contactInfo,
  cvFile,
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
  if (item === 'Skills') return '/skills'
  if (item === 'Projects') return '/projects'
  if (item === 'Services') return '/services'
  return '/contact'
}

const isCurrentNavItem = (item) => {
  const currentPath = window.location.pathname

  if (item === 'Home') return currentPath === '/'
  if (item === 'About') return currentPath === '/about'
  if (item === 'Skills') return currentPath === '/skills'
  if (item === 'Projects') return currentPath === '/projects'
  if (item === 'Services') return currentPath === '/services'
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
                Graphic Designer • Frontend Developer • Video Editor
              </p>

              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                I design clean experiences, build responsive interfaces, and craft visual stories.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300 md:text-xl">
                I&apos;m Charles T. Nzelu — a multidisciplinary creative blending graphic design, frontend development, and video editing to shape ideas into polished digital experiences.
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
                {['Design', 'Frontend', 'React', 'Tailwind CSS', 'Video Editing', 'Branding'].map((item) => (
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

                    <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-300">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveLink ? (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                          View Live Site
                        </a>
                      ) : null}
                      {project.githubLink ? (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">
                          View GitHub
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
          <SectionHeading eyebrow="What I Do" title="Creative support across design, code, and content." description="I work at the intersection of visual storytelling and digital execution to help brands and ideas feel clear, polished, and engaging." />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 transition duration-300 hover:border-violet-500/30">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">{service.description}</p>
              </div>
            ))}
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
              <p>I&apos;m Charles T. Nzelu, a creative professional bringing together design thinking, frontend development, and video production. I enjoy turning ideas into visual systems that feel thoughtful, useful, and memorable.</p>
              <p>My work balances aesthetics with practical execution, helping businesses and projects communicate more clearly across screens, branding, and digital content.</p>
              <div className="pt-2">
                <a href="/about" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">More About Me</a>
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
                  <p><span className="text-stone-400">GitHub:</span>{' '}<a href="https://github.com/Charles-spe" target="_blank" rel="noreferrer" className="text-violet-200 hover:text-violet-100">github.com/Charles-spe</a></p>
                </div>
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
              {navItems.map((item) => {
                const href = getNavHref(item)
                const activeClass = isCurrentNavItem(item) ? 'text-white' : 'text-stone-300'
                return <a key={item} href={href} className={`transition hover:text-white ${activeClass}`}>{item}</a>
              })}
            </div>
            <div className="space-y-2 text-sm text-stone-400">
              <p><a href="mailto:nzelucharles98@gmail.com" className="hover:text-white">nzelucharles98@gmail.com</a></p>
              <p><a href="tel:+2348149368077" className="hover:text-white">+234 8149368077</a></p>
              <p><a href="https://github.com/Charles-spe" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-stone-500">© 2026 Charles T. Nzelu. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function AboutPage() {
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
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">Graphic Designer • Frontend Developer • Video Editor</p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-[-0.05em] text-white md:text-6xl">Charles T. Nzelu</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300 md:text-xl">{aboutContent.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View My Work</a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">Contact Me</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute left-4 top-4 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-6 right-4 h-36 w-36 rounded-full bg-amber-400/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-800 to-stone-900 p-4">
                <img src={profileImage} alt="Portrait of Charles T. Nzelu" className="h-[500px] w-full rounded-[1.5rem] object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="My Story" title="Creative direction shaped by visual thinking and practical build skills." />
            <div className="grid gap-6 lg:grid-cols-2">
              {aboutContent.story.map((paragraph) => (
                <div key={paragraph} className="rounded-[1.5rem] border border-white/10 bg-stone-900/70 p-6 text-base leading-8 text-stone-300 md:text-lg">{paragraph}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="What I Do" title="Design, development, and motion work done with intention." />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Graphic Design</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">I create visual designs including branding, posters, social media graphics, layouts, and other digital design work with a focus on clarity and visual identity.</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Frontend Development</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">I build responsive websites and interfaces using technologies such as React, HTML, CSS, and Tailwind CSS to create polished, functional digital experiences.</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6">
              <h3 className="font-display text-2xl font-semibold text-white">Video Editing</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">I create and edit video content for digital platforms and promotional work, shaping purpose, rhythm, and visual storytelling through editing.</p>
            </article>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Skills" title="Tools I use to shape digital work." />
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-[1.7rem] border border-white/10 bg-stone-900/70 p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
                  <ul className="mt-6 space-y-3 text-stone-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-none last:pb-0"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Selected Work" title="Recent projects that reflect my direction." />
          <div className="grid gap-8 md:grid-cols-2">
            {selectedWork.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">{project.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View Project</a> : null}
                    {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">GitHub</a> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">CV</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Want to know more about my experience and skills?</h2>
            <div className="mt-8">
              <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-400 hover:bg-violet-500/20">Download CV</a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Contact</p>
                <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Let&apos;s build something polished and useful.</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View My Work</a>
                <a href="mailto:nzelucharles98@gmail.com" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">Contact Me</a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 text-base text-stone-200 md:grid-cols-2">
              <p><span className="text-stone-400">Email:</span>{' '}<a href="mailto:nzelucharles98@gmail.com" className="text-violet-200 hover:text-violet-100">nzelucharles98@gmail.com</a></p>
              <p><span className="text-stone-400">Phone:</span>{' '}<a href="tel:+2348149368077" className="text-violet-200 hover:text-violet-100">+234 8149368077</a></p>
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

function SkillsPage() {
  const tools = ['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW', 'React', 'Tailwind CSS']
  const practicalWork = [
    ...selectedWork,
    ...designProjects.slice(0, 2).map((project) => ({ title: project.title, category: project.category, image: project.image, liveLink: null, githubLink: null })),
    ...videoProjects.slice(0, 2).map((project) => ({ title: project.title, category: project.category, image: project.image, liveLink: null, githubLink: null })),
  ]

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
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">Skills & Tools</p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">Skills & Tools</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">Charles T. Nzelu brings together creative design, frontend development, and video editing to build polished digital experiences that are both functional and visually engaging.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <article key={category.title} className="rounded-[2rem] border border-white/10 bg-stone-900/75 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-white">{category.title}</h2>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-violet-200">{category.title.split(' ')[0].slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="rounded-2xl border border-white/10 bg-stone-950/60 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-medium text-white">{skill.name}</p>
                        <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Design + Development</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">A creative process shaped by both visual thinking and technical execution.</h2>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 p-6 text-base leading-8 text-stone-300 md:text-lg">I approach each project from both sides: one eye on the visual quality, and one eye on how it will function in real use. That balance helps me move between graphic design, frontend development, and video editing without losing clarity or purpose.</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Tools I Use" title="The tools behind my workflow." description="A practical set of tools that support the way I design, build, and refine creative work." />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-stone-900 px-4 py-2 text-sm text-stone-200">{tool}</span>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Practical Work" title="These skills are applied in the work I share." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {practicalWork.map((project) => (
                <article key={`${project.title}-${project.category}`} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900/80">
                  <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                    {project.liveLink ? <div className="mt-5"><a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View Project</a></div> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Contact</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Have a project in mind?</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">View My Work</a>
                <a href="mailto:nzelucharles98@gmail.com" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">Contact Me</a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 text-base text-stone-200 md:grid-cols-3">
              <p><span className="text-stone-400">Email:</span>{' '}<a href="mailto:nzelucharles98@gmail.com" className="text-violet-200 hover:text-violet-100">nzelucharles98@gmail.com</a></p>
              <p><span className="text-stone-400">Phone:</span>{' '}<a href="tel:+2348149368077" className="text-violet-200 hover:text-violet-100">+234 8149368077</a></p>
              <p><span className="text-stone-400">Location:</span>{' '}<span className="text-stone-200">Lagos, Ojo Itakete, Nigeria</span></p>
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
              <a href="/skills" className="hover:text-white">Skills</a>
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
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">Selected Work</p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">Selected Work</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">These projects reflect Charles T. Nzelu&apos;s work across frontend development, graphic design, and video editing, showing how thoughtful design, practical execution, and visual storytelling come together.</p>
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
            <SectionHeading eyebrow="Frontend Development" title="Selected web experiences." />
            <div className="grid gap-8 lg:grid-cols-2">
              {frontendProjects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/80 transition duration-300 hover:-translate-y-1 hover:border-stone-600">
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">{project.category}</span>
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-white">{project.title}</h2>
                    <p className="mt-3 text-base leading-7 text-stone-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">Live Demo</a> : null}
                      {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">GitHub</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {showSection('Graphic Design') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <SectionHeading eyebrow="Graphic Design" title="Visual identity and layouts." description="A curated selection of design work focused on branding, editorial layouts, and clear visual communication." />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {designProjects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900/80 transition duration-300 hover:-translate-y-1 hover:border-stone-600">
                  <button type="button" onClick={() => setSelectedProject(project)} className="block w-full text-left" aria-label={`Open preview for ${project.title}`}>
                    <div className="overflow-hidden"><img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                    <div className="p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-300">{project.description}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {showSection('Video Editing') ? (
          <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <SectionHeading eyebrow="Video Editing" title="Motion and story-led edits." description="Short-form visual storytelling and campaign-driven edits created to communicate clearly and keep viewers engaged." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videoProjects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900/80 transition duration-300 hover:-translate-y-1 hover:border-stone-600">
                  <button type="button" onClick={() => setSelectedProject(project)} className="block w-full text-left" aria-label={`Open preview for ${project.title}`}>
                    <div className="overflow-hidden"><img src={project.image} alt={project.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                    <div className="p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-300">{project.description}</p>
                    </div>
                  </button>
                </article>
              ))}
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
                <h3 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{selectedProject.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-300">{selectedProject.description}</p>
                {selectedProject.tools ? <div className="mt-5 flex flex-wrap gap-2">{selectedProject.tools.map((tool) => <span key={tool} className="rounded-full bg-stone-800 px-2.5 py-1 text-xs text-stone-200">{tool}</span>)}</div> : null}
              </div>
            </div>
          </div>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Contact</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Let&apos;s Build Something.</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-stone-300 md:text-lg">I&apos;m available for thoughtful creative work across branding, frontend development, and video storytelling.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">Contact Me</a>
                <a href={cvFile} download className="inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-400 hover:bg-violet-500/20">Download CV</a>
              </div>
            </div>
            <div className="mt-8 text-base text-stone-200"><p><span className="text-stone-400">Location:</span>{' '}<span>Lagos, Ojo Itakete, Nigeria</span></p></div>
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
              <a href="/skills" className="hover:text-white">Skills</a>
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

function ServicesPage() {
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
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">Services</p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">What I Can Do</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              I work across graphic design, frontend development, and video editing to turn ideas into polished digital content and experiences that feel clear, useful, and visually intentional.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.id} className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-lg text-violet-200">✦</div>
                <h2 className="font-display text-3xl font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-300">{service.summary}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-stone-300">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href={service.href} className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">{service.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="How I Work" title="A simple process built around clarity and quality." />
            <div className="grid gap-6 md:grid-cols-3">
              {serviceProcess.map((step) => (
                <div key={step.step} className="rounded-[1.75rem] border border-white/10 bg-stone-900/75 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">{step.step}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Why Work With Me</p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">A balance of design thinking and practical development.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceReasons.map((reason) => (
                <div key={reason} className="rounded-[1.4rem] border border-white/10 bg-stone-900/70 p-4 text-sm leading-6 text-stone-200">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">✓</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <SectionHeading eyebrow="Tools & Skills" title="The tools that support the work." description="A compact view of the technologies and creative tools I use across frontend, design, and video work." />
            <div className="grid gap-6 md:grid-cols-3">
              {serviceTools.map((group) => (
                <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-stone-900/70 p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-stone-950 px-3 py-2 text-sm text-stone-200">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionHeading eyebrow="Portfolio Connection" title="A few examples of the work behind the services." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {selectedWork.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-stone-900/80">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                  {project.liveLink ? (
                    <div className="mt-5">
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">Live Demo</a>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
            {designProjects.slice(0, 1).map((project) => (
              <article key={`${project.title}-service`} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-stone-900/80">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </article>
            ))}
            {videoProjects.slice(0, 1).map((project) => (
              <article key={`${project.title}-video-service`} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-stone-900/80">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-500/10 via-stone-900 to-amber-500/10 p-8 md:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">Contact</p>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Have a project in mind?</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-stone-300 md:text-lg">If you need design, frontend development, or video editing, I&apos;d be happy to hear about the idea and see how it can come together.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">Start a Conversation</a>
                <a href="/projects" className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-stone-500 hover:bg-stone-800">View My Work</a>
              </div>
            </div>
            <div className="mt-8 grid gap-4 text-base text-stone-200 md:grid-cols-3">
              <p><span className="text-stone-400">Location:</span>{' '}<span>Lagos, Ojo Itakete, Nigeria</span></p>
              <p><span className="text-stone-400">Email:</span>{' '}<a href="mailto:nzelucharles98@gmail.com" className="text-violet-200 hover:text-violet-100">nzelucharles98@gmail.com</a></p>
              <p><span className="text-stone-400">Phone:</span>{' '}<a href="tel:+2348149368077" className="text-violet-200 hover:text-violet-100">+234 8149368077</a></p>
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
              <a href="/skills" className="hover:text-white">Skills</a>
              <a href="/projects" className="hover:text-white">Projects</a>
              <a href="/services" className="hover:text-white">Services</a>
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
              <a href="/skills" className="hover:text-white">Skills</a>
              <a href="/projects" className="hover:text-white">Projects</a>
              <a href="/services" className="hover:text-white">Services</a>
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
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/" className={buttonPrimaryClass}>Back Home</a>
          <a href="/projects" className={buttonSecondaryClass}>View Projects</a>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState(() => {
    const path = window.location.pathname
    if (path === '/about') return 'about'
    if (path === '/skills') return 'skills'
    if (path === '/projects') return 'projects'
    if (path === '/services') return 'services'
    if (path === '/contact') return 'contact'
    if (path === '/404' || path === '/not-found') return 'not-found'
    if (path === '/' || path === '') return 'home'
    return 'not-found'
  })

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname
      if (path === '/about') setPage('about')
      else if (path === '/skills') setPage('skills')
      else if (path === '/projects') setPage('projects')
      else if (path === '/services') setPage('services')
      else if (path === '/contact') setPage('contact')
      else if (path === '/404' || path === '/not-found') setPage('not-found')
      else if (path === '/' || path === '') setPage('home')
      else setPage('not-found')
    }
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  return page === 'about' ? <AboutPage /> : page === 'skills' ? <SkillsPage /> : page === 'projects' ? <ProjectsPage /> : page === 'services' ? <ServicesPage /> : page === 'contact' ? <ContactPage /> : page === 'not-found' ? <NotFoundPage /> : <HomePage />
}

export default App
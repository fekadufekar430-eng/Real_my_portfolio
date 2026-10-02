"use client";

/** Main portfolio page: navigation, sections, interactive cards, and hero motion. */
import { motion, useReducedMotion,type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  ArrowDown, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, Code2,
  Database, Download, Github, GraduationCap, Linkedin, Mail, Menu, Monitor,
  Palette, Send, Server, Sparkles, Video, X
} from "lucide-react";
import { useState, type PointerEvent as ReactPointerEvent } from "react";
import ThemeToggle from "./theme-toggle";
import PageLoader from "./page-loader";





const navItems = ["Home", "About", "Services", "Portfolio", "Skills", "Blog"];

// const reveal = {
//   hidden: { opacity: 0, y: 34 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
// };

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const skills = [
  { title: "Frontend Engineering", icon: <Monitor />, text: "React.js, Next.js, JavaScript ES6+, Tailwind CSS, HTML5 and CSS3 with responsive, accessible interfaces." },
  { title: "Backend Development", icon: <Server />, text: "Node.js, Express.js, REST APIs, HTTP fundamentals, routing, validation and practical server architecture." },
  { title: "Data & Tooling", icon: <Database />, text: "MySQL, Git, GitHub, Postman and Vercel with a focus on clean development workflows." },
  { title: "Creative Production", icon: <Video />, text: "Video editing, visual storytelling, creative composition and motion-focused digital content." },
];

const services = [
  { title: "Full-Stack Web Development", icon: <Code2 />, text: "Responsive applications from polished frontend interfaces to API-driven backend services and databases." },
  { title: "UI & Frontend Development", icon: <Palette />, text: "Modern interfaces with thoughtful hierarchy, responsive layouts, reusable components and smooth interactions." },
  { title: "Creative & Video Editing", icon: <Video />, text: "Clean visual storytelling for digital content, portfolio presentations, promotional material and social media." },
];

const projects = [
  {
    title: "Modern E-Commerce Platform", tag: "FULL STACK",
    desc: "A product-focused commerce experience designed around discovery, product details, responsive layouts and API-ready architecture.",
    tech: ["Next.js", "React", "Tailwind", "REST API"], demo: "#", github: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Coffee Cafe Management API", tag: "BACKEND",
    desc: "A practical cafe backend concept using Node.js, Express and MySQL to model products, requests, routing and database operations.",
    tech: ["Node.js", "Express", "MySQL", "Postman"], demo: "#", github: "#",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Creative Portfolio Studio", tag: "FRONTEND",
    desc: "A performance-minded personal brand site combining Bento layouts, motion design, responsive UI and visual storytelling.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"], demo: "#", github: "#",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
];

const posts = [
  { title: "Building a Portfolio That Performs", category: "Frontend", text: "How semantic HTML, optimized assets, responsive design and restrained animation create a faster portfolio experience.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80" },
  { title: "From React Components to Full-Stack Thinking", category: "Development", text: "A practical look at connecting reusable UI components with APIs, databases and real application workflows.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" },
  { title: "Learning by Building Real Projects", category: "Learning", text: "Why structured courses become more valuable when combined with projects, debugging, documentation and consistent practice.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80" },
];

const learning = [
  { name: "DevVoltz Technology", detail: "Technology-focused learning and practical development training.", icon: <BookOpen size={19} /> },
  { name: "freeCodeCamp", detail: "Self-paced web-development learning, coding practice and project-based study.", icon: <Code2 size={19} /> },
  { name: "Evangadi Education", detail: "Full-stack development learning with practical web-development workflows.", icon: <GraduationCap size={19} /> },
];

const tech = ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "REST API", "Git", "GitHub", "Vercel", "Postman"];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const closeMenu = () => setOpen(false);

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setHeroTilt({
      x: Number(((0.5 - py) * 10).toFixed(2)),
      y: Number(((px - 0.5) * 12).toFixed(2)),
    });
  };

  const resetHeroTilt = () => setHeroTilt({ x: 0, y: 0 });

  return (
    <>
      <PageLoader />

      <div aria-hidden="true" className="ambient-scene">
        <motion.div className="ambient-grid" animate={reducedMotion ? undefined : { x: [0, 28, 0], y: [0, -12, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="ambient-aurora" animate={reducedMotion ? undefined : { rotate: [0, 12, -8, 0], scale: [1, 1.04, .98, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="ambient-orb one" animate={reducedMotion ? undefined : { x: [0, 120, 35, 0], y: [0, -50, 80, 0], scale: [1, 1.18, .9, 1] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="ambient-orb two" animate={reducedMotion ? undefined : { x: [0, -100, 45, 0], y: [0, 55, -35, 0], scale: [1, .88, 1.15, 1] }} transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="ambient-orb three" animate={reducedMotion ? undefined : { x: [0, 70, -60, 0], y: [0, -40, -80, 0], scale: [1, 1.1, .94, 1] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
        <div className="ambient-stars" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="relative mx-auto max-w-7xl">
        <motion.nav
          initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass nav-glow flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/5"
        >
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-2 font-bold tracking-tight">
            <motion.span whileHover={{ rotate: 8, scale: 1.06 }} className="grid h-9 w-9 place-items-center rounded-xl bg-black text-xs text-white dark:bg-white dark:text-black">FF</motion.span>
            <span className="hidden sm:block">Fikadu Fikir<span className="text-zinc-400">.</span></span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="nav-link rounded-full px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                {item}
                {i === 0 && <span className="ml-1 inline-block h-1 w-1 rounded-full bg-emerald-400 align-middle" />}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button aria-label="Open navigation" className="glass grid h-10 w-10 place-items-center rounded-full md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </motion.nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mobile-menu absolute left-0 right-0 top-full mt-2 rounded-2xl border border-black/10 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                onClick={closeMenu}
                href={`#${item.toLowerCase()}`}
                className="block rounded-xl px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
      </header>

      <main>
        <section id="home" className="hero-grid relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32">
          <motion.div aria-hidden className="orb orb-one" animate={reducedMotion ? undefined : { x: [0, 80, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.92, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div aria-hidden className="orb orb-two" animate={reducedMotion ? undefined : { x: [0, -70, 30, 0], y: [0, 35, -30, 0], scale: [1, 0.9, 1.12, 1] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,.10),transparent_36%)]" />

          <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-12">
            <motion.div variants={reveal} initial="hidden" animate="show" className="glass hero-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:col-span-8 lg:p-14">
              <motion.div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-black/10 dark:border-white/10" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
              <motion.p initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="mb-4 text-sm text-zinc-500">Hi, I&apos;m Fikadu Fikir</motion.p>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-.06em] sm:text-7xl lg:text-8xl">Full Stack <span className="gradient-text">Developer.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">I build fast, responsive and visually refined web experiences with React, Next.js and Node.js, while bringing a creative edge from video editing and visual storytelling.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a whileHover={{ y: -5, scale: 1.035 }} whileTap={{ scale: 0.97 }} href="#portfolio" className="primary-btn rounded-full px-5 py-3 text-sm text-white">View Portfolio <ArrowUpRight className="ml-1 inline" size={16} /></motion.a>
                <motion.a whileHover={{ y: -5, scale: 1.035 }} whileTap={{ scale: 0.97 }} href="/resume.pdf" download className="glass rounded-full px-5 py-3 text-sm transition"> <Download className="mr-1 inline" size={16} /> Download Resume</motion.a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-black/10 pt-6 text-xs dark:border-white/10"><div><b className="text-xl">3+</b><p className="mt-1 text-zinc-500">Featured projects</p></div><div><b className="text-xl">3rd</b><p className="mt-1 text-zinc-500">Year Computer Science</p></div><div><b className="text-xl">∞</b><p className="mt-1 text-zinc-500">Learning mindset</p></div></div>
              <motion.a href="#about" aria-label="Scroll to about" animate={reducedMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-7 right-8 hidden rounded-full border border-black/10 p-2 text-zinc-400 dark:border-white/10 sm:block"><ArrowDown size={16} /></motion.a>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" animate="show" transition={{ delay: .12 }} className="profile-card glass relative min-h-[420px] overflow-hidden rounded-[2rem] p-7 lg:col-span-4">
              <div className="profile-aura" />
              <motion.div className="profile-ring" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div className="flex items-center gap-4"><div className="profile-thumb"><img src="/profile.jpg" alt="Fikadu Fikir" className="h-full w-full object-cover" /></div><div><p className="text-sm font-medium">Fikadu Fikir</p><p className="text-xs text-zinc-500">Developer · Creative · Video Editor</p></div></div>
                <motion.div
                  onPointerMove={handleHeroPointerMove}
                  onPointerLeave={resetHeroTilt}
                  onPointerCancel={resetHeroTilt}
                  animate={{ rotateX: heroTilt.x, rotateY: heroTilt.y, scale: heroTilt.x || heroTilt.y ? 1.025 : 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.7 }}
                  whileTap={{ scale: 0.985 }}
                  style={{ transformPerspective: 900 }}
                  className="profile-photo-wrap group relative mx-auto mt-8 h-64 w-52 overflow-hidden rounded-[2rem] border border-white/20 bg-zinc-900/20 shadow-2xl shadow-violet-500/10 dark:border-black/10"
                >
                  <img src="/profile.jpg" alt="Fikadu Fikir portrait" className="h-full w-full object-cover" draggable={false} />
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.34),transparent_28%),linear-gradient(120deg,transparent_25%,rgba(255,255,255,.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.6rem] border border-white/20 opacity-70" />
                </motion.div>
                <div className="mt-7"><Sparkles size={24} /><p className="mt-5 text-3xl font-medium tracking-tight">Code meets creativity.</p><p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">Building digital products with engineering discipline and a visual mindset.</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24"><SectionTitle eyebrow="About me" title="A Computer Science student building across code and creativity." /><div className="mt-10 grid gap-5 lg:grid-cols-3"><motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="glass rounded-[2rem] p-8 lg:col-span-2"><BriefcaseBusiness size={25} /><h3 className="mt-7 text-2xl font-medium">Developer with a creative workflow.</h3><p className="mt-4 max-w-3xl leading-8 text-zinc-500">I am a 3rd-year Computer Science student focused on full-stack development. My learning path combines frontend engineering, backend APIs, databases and deployment with creative work such as video editing and visual storytelling.</p><p className="mt-4 max-w-3xl leading-8 text-zinc-500">I learn through structured study and hands-on projects, including training and learning resources from DevVoltz Technology, freeCodeCamp and Evangadi Education. My goal is to turn technical knowledge into useful, polished products.</p></motion.div><motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ delay: .1 }} className="glass rounded-[2rem] p-8"><GraduationCap size={25} /><h3 className="mt-7 text-2xl font-medium">Education</h3><p className="mt-3 text-zinc-500">Computer Science</p><p className="mt-1 text-sm text-zinc-500">3rd Year · University student</p><div className="mt-7 h-px bg-black/10 dark:bg-white/10" /><p className="mt-6 text-sm leading-6 text-zinc-500">Current focus: full-stack engineering, APIs, databases, deployment, UI systems and creative production.</p></motion.div></div><div className="mt-5 grid gap-4 md:grid-cols-3">{learning.map((item, i) => <motion.div key={item.name} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -8, scale: 1.018 }} onClick={() => setActiveCard(activeCard === `learning-${i}` ? null : `learning-${i}`)} className={`glass card-interactive ${activeCard === `learning-${i}` ? "card-active" : ""} rounded-3xl p-6`}><div className="mb-5">{item.icon}</div><h3 className="font-medium">{item.name}</h3><p className="card-description mt-2 text-sm leading-6 text-zinc-500">{item.detail}</p></motion.div>)}</div></section>

        <section id="services" className="dark-section services-section px-5 py-24 text-white dark:text-black"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Services" title="Practical digital work from idea to polished delivery." dark /><div className="mt-10 grid gap-5 lg:grid-cols-3">{services.map((service, i) => <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * .08 }} whileHover={{ y: -11, rotateX: 4, rotateY: -2, scale: 1.012 }} key={service.title} onClick={() => setActiveCard(activeCard === `service-${i}` ? null : `service-${i}`)} className={`service-card card-interactive ${activeCard === `service-${i}` ? "card-active" : ""} rounded-[2rem] border border-white/10 bg-white/[.03] p-8 dark:border-black/10 dark:bg-black/[.03]`}><div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 dark:border-black/10">{service.icon}</div><h3 className="mt-7 text-xl font-medium">{service.title}</h3><p className="card-description mt-3 leading-7 text-zinc-400 dark:text-zinc-600">{service.text}</p><div className="service-meta mt-7 flex items-center gap-2 text-xs"><CheckCircle2 size={14} /> Responsive · Modern · Maintainable</div></motion.div>)}</div></div></section>

        <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24"><SectionTitle eyebrow="Portfolio" title="Selected projects that solve real problems." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55, delay: i * .08 }} whileHover={{ y: -12, scale: 1.012, rotateX: 2 }} onClick={() => setActiveCard(activeCard === `project-${i}` ? null : `project-${i}`)} className={`project-card glass group card-interactive ${activeCard === `project-${i}` ? "card-active" : ""} overflow-hidden rounded-[1.75rem]`}><div className="relative aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /><span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-[10px] tracking-[.2em] text-white backdrop-blur">{p.tag}</span><span className="absolute bottom-5 left-5 text-xs text-white/80">Project 0{i + 1}</span></div><div className="p-6"><h3 className="text-xl font-medium">{p.title}</h3><p className="card-description mt-2 text-sm leading-6 text-zinc-500">{p.desc}</p><div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-full border border-black/10 px-3 py-1 text-[11px] dark:border-white/10">{t}</span>)}</div><div className="mt-6 flex gap-2"><motion.a onClick={(e) => e.stopPropagation()} whileHover={{ y: -2 }} href={p.demo} className="flex-1 rounded-xl bg-black px-3 py-2.5 text-center text-xs text-white dark:bg-white dark:text-black">Live Demo <ArrowUpRight className="ml-1 inline" size={13} /></motion.a><motion.a onClick={(e) => e.stopPropagation()} whileHover={{ y: -2 }} href={p.github} className="flex-1 rounded-xl border border-black/10 px-3 py-2.5 text-center text-xs dark:border-white/10"><Github className="mr-1 inline" size={13} /> GitHub</motion.a></div></div></motion.article>)}</div></section>

        <section id="skills" className="dark-section skills-section px-5 py-24 text-white dark:text-black"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Skills" title="The tools behind the work." dark /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill, i) => <motion.div key={skill.title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .06 }} whileHover={{ scale: 1.035, y: -8, rotateX: 2, rotateY: -2 }} onClick={() => setActiveCard(activeCard === `skill-${i}` ? null : `skill-${i}`)} className={`skill-card card-interactive ${activeCard === `skill-${i}` ? "card-active" : ""} rounded-3xl border border-white/10 p-6 dark:border-black/10`}><div className="mb-8">{skill.icon}</div><h3 className="text-lg font-medium">{skill.title}</h3><p className="card-description mt-2 text-sm leading-6 text-zinc-400 dark:text-zinc-600">{skill.text}</p></motion.div>)}</div><div className="mt-7 flex flex-wrap gap-2">{tech.map((x, i) => <motion.span key={x} initial={{ opacity: 0, scale: .85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .035 }} whileHover={{ y: -3 }} className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300 dark:border-black/10 dark:text-zinc-700">{x}</motion.span>)}</div></div></section>

        <section id="blog" className="mx-auto max-w-7xl px-5 py-24"><SectionTitle eyebrow="Blog" title="Notes from the learning and building process." /><div className="mt-10 grid gap-5 md:grid-cols-3">{posts.map((post, i) => <motion.article key={post.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -10, scale: 1.012, rotateX: 2 }} onClick={() => setActiveCard(activeCard === `post-${i}` ? null : `post-${i}`)} className={`glass group card-interactive ${activeCard === `post-${i}` ? "card-active" : ""} overflow-hidden rounded-[1.75rem]`}><div className="aspect-[16/10] overflow-hidden"><img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div><div className="p-6"><span className="text-xs uppercase tracking-[.2em] text-zinc-500">{post.category}</span><h3 className="mt-3 text-xl font-medium tracking-tight">{post.title}</h3><p className="card-description mt-3 text-sm leading-6 text-zinc-500">{post.text}</p><button onClick={(e) => e.stopPropagation()} className="mt-5 text-sm font-medium">Read article <ArrowUpRight className="ml-1 inline" size={14} /></button></div></motion.article>)}</div></section>

        <section id="contact" className="px-5 pb-10"><div className="contact-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black p-8 text-white dark:bg-white dark:text-black sm:p-12"><div className="grid gap-12 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[.3em] text-zinc-500">Contact</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Have an idea? Let&apos;s build it.</h2><p className="contact-description mt-5 max-w-md leading-7 text-zinc-400 dark:text-zinc-600">For projects, collaboration or professional opportunities, send me a message or reach me directly.</p><div className="contact-details mt-7"><a href="tel:+251991647452" className="flex items-center gap-2 text-sm font-medium"><FontAwesomeIcon icon={faPhone} className="contact-phone-icon" aria-hidden="true" />+251 991 647 452</a><a href="tel:+251708085488" className="mt-2 flex items-center gap-2 text-sm font-medium"><FontAwesomeIcon icon={faPhone} className="contact-phone-icon" aria-hidden="true" />+251 708 085 488</a><a href="mailto:fekadufekar430@gmail.com" className="mt-3 inline-flex items-center gap-2 text-sm underline underline-offset-4"><Mail size={16} /> fekadufekar430@gmail.com</a></div><div className="mt-6 flex flex-wrap gap-3"><motion.a whileHover={{ y: -5, scale: 1.08, rotate: -4 }} href="https://github.com/fekadufekar430-eng" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link social-github rounded-full p-3"><Github size={17} /></motion.a><motion.a whileHover={{ y: -5, scale: 1.08, rotate: 4 }} href="https://www.linkedin.com/in/fikadu-fikir-a44862425/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link social-linkedin rounded-full p-3"><Linkedin size={17} /></motion.a><motion.a whileHover={{ y: -5, scale: 1.08, rotate: -4 }} href="https://t.me/F6ike" target="_blank" rel="noreferrer" aria-label="Telegram @F6ike" className="social-link social-telegram rounded-full p-3"><Send size={17} /></motion.a><motion.a whileHover={{ y: -5, scale: 1.08, rotate: 4 }} href="https://wa.me/F21ike" target="_blank" rel="noreferrer" aria-label="WhatsApp @F21ike" className="social-link social-whatsapp rounded-full p-3"><FontAwesomeIcon icon={faWhatsapp} /></motion.a></div></div><form onSubmit={e => { e.preventDefault(); setSent(true); }} className="rounded-3xl border border-white/10 bg-white/5 p-5 dark:border-black/10 dark:bg-black/5"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs text-zinc-400 dark:text-zinc-600">Name<input required className="contact-input" placeholder="Your name" /></label><label className="text-xs text-zinc-400 dark:text-zinc-600">Email<input required type="email" className="contact-input" placeholder="you@example.com" /></label></div><label className="mt-4 block text-xs text-zinc-400 dark:text-zinc-600">Message<textarea required rows={6} className="contact-input resize-none" placeholder="Tell me about your project..." /></label><motion.button whileHover={{ y: -4, scale: 1.025 }} whileTap={{ scale: .97 }} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm text-black dark:bg-black dark:text-white"><Send size={15} /> {sent ? "Message ready to send" : "Send Message"}</motion.button>{sent && <p className="mt-3 text-xs text-zinc-400">Connect this form to an email/API service when you are ready for production submissions.</p>}</form></div></div><footer className="mx-auto flex max-w-7xl items-center justify-center px-2 py-7 text-center text-xs text-zinc-500"><span>© 2026 Fikadu Fikir</span></footer></section>
      </main>
    </>
  );
}

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .6 }}><p className={dark ? "text-xs uppercase tracking-[.3em] text-zinc-500" : "text-xs uppercase tracking-[.3em] text-zinc-500"}>{eyebrow}</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2></motion.div>;
}

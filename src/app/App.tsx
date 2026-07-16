import { useState, useEffect } from "react";
import myPhoto from "@/assets/myphoto.jpeg";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun, Moon, Menu, X, Download, Mail, Phone, MapPin,
  Github, Linkedin, ExternalLink, ChevronUp, Code2,
  Trophy, Award, BookOpen, Briefcase, User,
  Search, Terminal, Database, Cpu, Globe,
  ArrowRight, GraduationCap, Layers, Zap, Star,
  CheckCircle, Send, Eye, Target,
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internship", href: "#internship" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Profiles", href: "#profiles" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const TYPING_TITLES = [
  "B.Tech CS Graduate",
  "Frontend Developer",
  "AI & ML Engineer",
  "Problem Solver",
];

const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layers,
    gradient: "from-violet-500 to-purple-500",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js"],
  },
  {
    category: "Backend",
    icon: Terminal,
    gradient: "from-emerald-500 to-green-500",
    items: ["Node.js", "FastAPI"],
  },
  {
    category: "Databases",
    icon: Database,
    gradient: "from-orange-500 to-amber-500",
    items: ["MySQL"],
  },
  {
    category: "Machine Learning",
    icon: Cpu,
    gradient: "from-pink-500 to-rose-500",
    items: ["Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Tools & DevOps",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    items: ["Git", "GitHub", "VS Code", "Streamlit", "Postman"],
  },
  {
    category: "Soft Skills",
    icon: Star,
    gradient: "from-teal-500 to-cyan-500",
    items: ["Communication", "Teamwork", "Leadership", "Problem Solving", "Adaptability"],
  },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Diabetes Prediction using ML",
    category: "ML",
    description:
      "Machine learning model predicting diabetes using Pima Indians dataset. Achieved 78% accuracy using SVM and logistic regression, deployed with an interactive Streamlit UI.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    image:
      "https://diabetesandwellnessclinic.com/wp-content/uploads/elementor/thumbs/dr-10-r014h9ihul3bas6xel1k5jnwgtme6c0me5q8a8dngg.jpg",
    github: "https://github.com/aravindpotlapelly/Diabetes-Prediction-ML",
  },
  {
  id: 2,
  title: "Breast Cancer Classification",
  category: "ML",
  description:
    "Classifies breast tumors as malignant or benign using the Breast Cancer Wisconsin dataset (569 samples, 30 features). Logistic Regression model achieves 93% accuracy on test data.",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Logistic Regression"],
  image:
    "https://www.omegahospitals.com/blog/storage/2024/01/blog_breast_cancer_11-e1705062587725.png",
  github: "https://github.com/aravindpotlapelly/Breast-Cancer-Classification-ML",
},
  {
  id: 3,
  title: "Multiple_disease_prediction_system",
  category: "ML",
  description:
    "A unified ML system that predicts three diseases from clinical and biomedical data: diabetes (SVM, ~77% accuracy on the PIMA dataset), heart disease (Logistic Regression, ~82% accuracy on clinical data), and Parkinson's disease (SVM, ~87% accuracy on voice-measurement biomarkers).",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "SVM", "Logistic Regression"],
  image:
    "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/02/Heart-Disease-Prediction-using-Machine-Learning.webp",
  github: "https://github.com/aravindpotlapelly/Multiple_disease_prediction_system-ML",
  },
  {
    id: 4,
    title: "South Sanchaari Tourism Bot",
    category: "Web",
    description:
      "AI-powered tourism assistant chatbot for South Indian travel. Provides destination recommendations, travel tips, and smart itinerary planning through NLP.",
    tech: ["Python", "React.js", "Node.js", "NLP", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=340&fit=crop&auto=format",
    github: "#",
  },
  {
    id: 5,
    title: "VayuDrishti – Air Quality Monitor",
    category: "ML",
    description:
      "Rural air quality monitoring and forecasting system using IoT sensor data. Provides real-time AQI predictions, pollution trend analysis, and health alerts.",
    tech: ["Python", "React.js", "Flask", "Scikit-learn", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?w=600&h=340&fit=crop&auto=format",
    github: "#",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    category: "Web",
    description:
      "Modern, responsive portfolio built with React.js and Tailwind CSS. Features dark/light mode, smooth animations, typing effects, and a glassmorphism design language.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop&auto=format",
    github: "https://github.com/aravindpotlapelly/portfolio",
  },
];

const CERTIFICATIONS_DATA = [
  { org: "MassMutual India / AIDEA", title: "Case Study – Work Item Extraction Automation using UiPath", year: "Oct 2025", badge: "from-yellow-500 to-orange-500", file: "https://drive.google.com/file/d/1rzJJldM6QRfa0u9ZjquKLlZEWs70eJ8U/view?usp=sharing" },
  { org: "Adobe / Unstop", title: "Adobe India Hackathon – Round 1 Participant", year: "2026", badge: "from-red-500 to-pink-500", file: "https://drive.google.com/file/d/1OBcODusI3DYeI2z-cmSDw-jWKYfyF5iL/view?usp=drive_link" },
  { org: "LinkedIn Learning", title: "Git Essential Training", year: "Mar 2025", badge: "from-blue-600 to-indigo-600", file: "https://drive.google.com/file/d/1wn47lcCySGi9McqH2orBsxoKcsm8tFcJ/view?usp=drive_link" },
  { org: "LinkedIn Learning", title: "Prompt Engineering with ChatGPT", year: "Mar 2025", badge: "from-blue-600 to-indigo-600", file: "https://drive.google.com/file/d/1_kFdIhz30f3GHhylgCS1EiUw9ruulATo/view?usp=drive_link" },
  { org: "ServiceNow University / SmartBridge", title: "Virtual Internship Program (incl. CSA Exam Prep)", year: "Nov 2025", badge: "from-green-600 to-emerald-600", file: "https://drive.google.com/file/d/1NIPmjuPYSbKSfsaGcDmf_MqzBNfJ7_ix/view?usp=drive_link" },
  { org: "Devengers / Unstop", title: "PromptWars 2026 – Participant", year: "2026", badge: "from-purple-500 to-violet-500", file: "https://drive.google.com/file/d/1oViZOiTty4-SUhb7O6aCSSl28Vr_DpQk/view?usp=drive_link" },
  { org: "Cisco Networking Academy", title: "Networking Basics", year: "Sep 2025", badge: "from-teal-500 to-green-500", file: "https://drive.google.com/file/d/1tMq6aG-cCBq1aSJdunGEw2v0Not93Uy1/view?usp=drive_link" },
  { org: "VOIS / Vodafone Idea Foundation", title: "Data Visualization", year: "Sep 2025", badge: "from-red-500 to-rose-500", file: "https://drive.google.com/file/d/1W_Zv46ZpbdWdR9NvTGq4C25BittSvrKw/view?usp=drive_link" },
];

const ACHIEVEMENTS_DATA = [
  {
    IconComp: Trophy,
    category: "Hackathon",
    title: "Bashabandu Hackathon – Semi-Finalist",
    desc: "Reached the semi-final round of Bashabandu Hackathon with VayuDrishti, an air quality monitoring project.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    IconComp: Award,
    category: "Hackathon",
    title: "Smart India Hackathon – Participant",
    desc: "Participated in Smart India Hackathon, a national-level hackathon initiative by the Government of India.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    IconComp: Globe,
    category: "Hackathon",
    title: "Adobe India Hackathon – Round 1 Participant",
    desc: "Participated in Round 1 (Online MCQ Assessment + Coding) of Adobe India Hackathon as Team Pranahitha, via Unstop.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    IconComp: Star,
    category: "Competition",
    title: "Devengers PromptWars 2026 – Participant",
    desc: "Participated in Devengers PromptWars 2026, a prompt engineering competition organised by Devengers, via Unstop.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    IconComp: CheckCircle,
    category: "Academic",
    title: "B.Tech CSE – CGPA 8.9",
    desc: "Maintaining a CGPA of 8.9 in Computer Science & Engineering at Vardhaman College of Engineering, Hyderabad.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
];

const CODING_PROFILES = [
  { name: "GitHub", username: "aravindpotlapelly", url: "https://github.com/aravindpotlapelly", IconComp: Github, color: "group-hover:text-gray-300" },
  { name: "LinkedIn", username: "aravind-potlapelli-43250728b", url: "https://www.linkedin.com/in/aravind-potlapelli-43250728b", IconComp: Linkedin, color: "group-hover:text-blue-400" },
  { name: "LeetCode", username: "aravindpotlapelly", url: "https://leetcode.com/u/aravindpotlapelly/", IconComp: Code2, color: "group-hover:text-yellow-400" },
  { name: "HackerRank", username: "aravind_10", url: "https://www.hackerrank.com/profile/aravind_10", IconComp: Terminal, color: "group-hover:text-green-400" },
  { name: "CodeChef", username: "aravind_00110", url: "https://www.codechef.com/users/aravind_00110", IconComp: Cpu, color: "group-hover:text-orange-400" },
  { name: "GeeksforGeeks", username: "aravindpotlapey", url: "https://www.geeksforgeeks.org/profile/aravindpotlapey", IconComp: BookOpen, color: "group-hover:text-green-500" },
  { name: "InterviewBit", username: "aravind-potlapelli", url: "https://www.interviewbit.com/profile/aravind-potlapelli", IconComp: Layers, color: "group-hover:text-purple-400" },
  { name: "CampusTrack", username: "POTLAPELLY ARAVIND", url: "https://www.campustrack.in/profile", IconComp: Database, color: "group-hover:text-cyan-400" },
];

const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Vardhaman College of Engineering",
    score: "CGPA: 8.88 / 10",
    year: "2023 – 2027",
    desc: "Specialized in AI/ML, Full Stack Web Development, Data Structures & Algorithms.",
    dot: "bg-blue-500",
  },
  {
    degree: "Intermediate — MPC (12th Grade)",
    institution: "MJPTWRIES junior College",
    university: "Board of Intermediate Education, Telangana",
    score: "97.0%",
    year: "2021 – 2023",
    desc: "Mathematics, Physics, and Chemistry with distinction. State-level olympiad participant.",
    dot: "bg-purple-500",
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "MJPTWRIES High School",
    university: "Board of Secondary Education, Telangana",
    score: "GPA: 10 / 10",
    year: "2019 – 2021",
    desc: "Achieved perfect GPA with distinction in all subjects. School topper and school people leader.",
    dot: "bg-green-500",
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={`py-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-5 flex justify-center items-center gap-1">
        <div className="h-1 w-12 rounded-full bg-blue-500" />
        <div className="h-1 w-4 rounded-full bg-blue-400/50" />
        <div className="h-1 w-2 rounded-full bg-blue-300/30" />
      </div>
    </motion.div>
  );
}

function Tag({ label, variant = "default" }: { label: string; variant?: "default" | "blue" | "green" }) {
  const cls =
    variant === "blue"
      ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
      : variant === "green"
      ? "bg-green-500/10 text-green-600 dark:text-green-400"
      : "bg-muted text-muted-foreground";
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-medium ${cls}`}>{label}</span>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  // Typing effect
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Projects
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Contact form
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Loading screen
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = TYPING_TITLES[titleIdx];
    const speed = deleting ? 55 : 110;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setDeleting(false);
          setTitleIdx((titleIdx + 1) % TYPING_TITLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, titleIdx]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchFilter = filter === "All" || p.category === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  // ─── LOADING ───────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0f172a] flex flex-col items-center justify-center z-[200]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent mb-6"
        />
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-white mb-1">Aravind Potlapelly</p>
          <p className="text-blue-400 text-sm tracking-[0.25em] uppercase font-medium">Loading Portfolio…</p>
        </motion.div>
      </div>
    );
  }

  // ─── RENDER ────────────────────────────────────────────────────────────────

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] transition-all duration-100"
        style={{ width: `${scrollPct}%` }}
      />

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("#home")}
            className="text-xl font-bold text-blue-500 tracking-tight hover:opacity-80 transition-opacity"
          >
            &lt;Aravind /&gt;
          </button>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-blue-500 hover:bg-blue-500/8 rounded-lg transition-all"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-xl bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-xl bg-muted hover:bg-muted/70 text-muted-foreground transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4"
            >
              <div className="grid grid-cols-3 gap-1.5 pt-2">
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-muted-foreground hover:text-blue-500 hover:bg-blue-500/8 px-3 py-2 rounded-lg transition-all text-left"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-background to-purple-950/10" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-blue-500 font-semibold text-sm tracking-[0.15em] uppercase mb-5"
              >
                👋 Hello, I am
              </motion.span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] mb-4 tracking-tight">
                Aravind
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Potlapelly
                </span>
              </h1>
              <div className="flex items-center gap-3 mb-7 h-10">
                <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                  {displayed}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-7 bg-blue-500 rounded-full"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-9 max-w-xl">
                Passionate about building impactful software that solves real problems. I bridge the
                gap between intelligent ML systems and polished user experiences — from full-stack web
                apps to production-ready ML models.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://drive.google.com/file/d/1WUG_tUZx9Mr4u1ZgYCA2ACq1D3bkYhEZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm"
                  >
                  <Eye className="w-4 h-4" /> View Resume
                  </a>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center gap-2 px-6 py-3 border border-blue-500/50 hover:border-blue-500 text-blue-500 hover:bg-blue-500/8 rounded-xl font-semibold transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </button>
                <button
                  onClick={() => scrollTo("#projects")}
                  className="flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground rounded-xl font-semibold transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Eye className="w-4 h-4" /> View Projects
                </button>
              </div>
              <div className="flex gap-3">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2.5 rounded-xl bg-muted hover:bg-blue-500/15 hover:text-blue-500 text-muted-foreground transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg"
                />
                <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-muted">
                  <img
                  src={myPhoto}
                  alt="Aravind Potlapelly — Software Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl shadow-blue-500/30"
                >
                  Open to Work 🚀
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="absolute -top-4 -left-4 bg-card border border-border text-foreground px-4 py-2 rounded-2xl text-sm font-bold shadow-xl"
                >
                  ⭐ 8.88 CGPA
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50"
        >
          <ChevronUp className="w-6 h-6 rotate-180" />
        </motion.div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <Section id="about" className="border-t border-border">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves turning complex problems into elegant, user-friendly solutions."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m a final-year B.Tech Computer Science student with a deep passion for building
              software that actually makes a difference. I thrive at the intersection of clean code,
              intelligent systems, and great user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it&apos;s crafting responsive UIs with React, building REST APIs with Node.js,
              or training ML models with Python — I bring curiosity and attention to detail to every
              project. I believe great software is both technically solid and a joy to use.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Role Target", value: "Software / ML Engineer" },
                { label: "Location", value: "Hyderabad, India" },
                { label: "Languages", value: "Telugu, Hindi, English" },
                { label: "Availability", value: "Immediate" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-foreground text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> Career Objective
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                To secure a challenging Software or ML Engineer role where I can leverage my
                technical skills and academic knowledge to develop innovative solutions, contribute
                to impactful projects, and continuously grow as a professional.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" /> Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML Research",
                  "Competitive Programming",
                  "Open Source",
                  "Tech Blogging",
                  "Cricket",
                  "UI/UX Design",
                ].map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted hover:bg-blue-500/10 hover:text-blue-500 text-muted-foreground rounded-lg text-sm transition-colors cursor-default"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" /> Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Quick Learner",
                  "Detail-Oriented",
                  "Team Player",
                  "Analytical Thinker",
                  "Self-Motivated",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" /> Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Deep Learning", "System Design", "AWS Cloud", "TypeScript", "Docker", "Kubernetes"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── EDUCATION ──────────────────────────────────────────────────────── */}
      <Section id="education" className="bg-muted/30 border-t border-border">
        <SectionHeading
          title="Education"
          subtitle="My academic journey — building the foundation for a career in technology."
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30" />
          {EDUCATION_DATA.map((edu, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-16 pb-10 last:pb-0">
              <div
                className={`absolute left-3.5 top-1 w-5 h-5 rounded-full ${edu.dot} flex items-center justify-center ring-4 ring-background shadow-lg`}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/25 transition-all hover:-translate-y-0.5">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-blue-500/10 text-blue-500 rounded-full font-semibold">
                    {edu.year}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full font-semibold">
                    {edu.score}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-blue-500 dark:text-blue-400 font-semibold text-sm mb-0.5">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mb-3">{edu.university}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
      <Section id="skills" className="border-t border-border">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical toolkit — from systems to interfaces to intelligence."
        />
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SKILLS_DATA.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/25 hover:-translate-y-1 transition-all group"
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <CatIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-muted hover:bg-blue-500/10 hover:text-blue-500 text-muted-foreground rounded-lg text-xs font-medium transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
      <Section id="projects" className="bg-muted/30 border-t border-border">
        <SectionHeading
          title="Projects"
          subtitle="From ML models to full-stack apps — a showcase of work I am proud of."
        />

        {/* Filter & Search */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or technology…"
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-colors text-sm"
            />
          </div>
          <div className="flex gap-2 shrink-0">
            {["All", "ML", "Web"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  filter === f
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-card border border-border text-muted-foreground hover:border-blue-500/40 hover:text-blue-500"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-500/25 hover:-translate-y-1 transition-all group"
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2 text-base">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Tag key={t} label={t} variant="blue" />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-muted hover:bg-foreground/8 text-foreground rounded-lg text-sm font-medium transition-all"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    </div>
                </div>
              </motion.div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No projects found matching your query.</p>
                <button onClick={() => { setFilter("All"); setSearch(""); }} className="mt-3 text-blue-500 text-sm hover:underline">
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ── INTERNSHIP ─────────────────────────────────────────────────────── */}
      <Section id="internship" className="border-t border-border">
        <SectionHeading
          title="Internship Experience"
          subtitle="Real-world experience that shaped my professional skills and work ethic."
        />
        <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-7 text-white">
              <div className="flex flex-wrap justify-between gap-4 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-blue-200" />
                    <span className="text-blue-200 text-sm font-medium">Internship</span>
                  </div>
                  <h3 className="text-2xl font-bold">Data Analytics Virtual Intern —</h3>
                  <p className="text-blue-200 text-lg font-medium">VOIS & Vodafone Idea Foundation (AICTE / Edunet Foundation) </p>
                </div>
                <div className="text-right">
                  <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl font-semibold text-sm">
                    Oct 2025 – Nov 2025
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <Briefcase className="w-4 h-4 text-blue-500" /> Responsibilities
                </h4>
                <ul className="space-y-3">
                  {[
                    "Completed a mentor-led virtual internship on data analytics fundamentals as part of the VOIS & Vodafone Idea Foundation CSR program",
                    "Built a major project analyzing a Netflix content dataset in Python using Pandas",
                    "Cleaned and structured raw data to prepare it for exploratory analysis",
                    "Created visualizations to uncover trends in content type, release patterns, and ratings",
                    "Presented findings in a data visualization report and project presentation",
                  ].map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Zap className="w-4 h-4 text-blue-500" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "NumPy", "Data Cleaning", "Data Visualization", "EDA"].map(
                      (t) => <Tag key={t} label={t} variant="blue" />
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Trophy className="w-4 h-4 text-yellow-400" /> Key Achievements
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Completed the full mentor-led internship program covering Python, data cleaning, and visualization",
                      "Delivered a complete Netflix dataset analysis with a data visualization report and project presentation",
                    ].map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── CERTIFICATIONS ─────────────────────────────────────────────────── */}
      <Section id="certifications" className="bg-muted/30 border-t border-border">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized certifications validating my skills across cloud, ML, and software development."
        />
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS_DATA.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/25 transition-all group cursor-pointer block"
            >
              <div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cert.badge} mb-4 shadow-sm`}
              >
                {cert.org}
              </div>
              <h3 className="font-bold text-foreground text-sm leading-snug mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-xs mb-4">{cert.year}</p>
              <div className="flex items-center text-blue-500 text-xs font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate <ArrowRight className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Section>

      {/* ── ACHIEVEMENTS ───────────────────────────────────────────────────── */}
<Section id="achievements" className="border-t border-border">
  <SectionHeading
    title="Achievements"
    subtitle="Milestones, recognitions, and competitions that mark my journey."
  />
  <motion.div variants={stagger} className="max-w-4xl mx-auto space-y-4">
    {ACHIEVEMENTS_DATA.map((ach, i) => {
      const AIcon = ach.IconComp;
      return (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/25 hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 ${ach.bgColor} rounded-xl shrink-0`}>
              <AIcon className={`w-6 h-6 ${ach.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs px-2.5 py-0.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full font-semibold">
                  {ach.category}
                </span>
                <h3 className="font-bold text-foreground text-sm">{ach.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{ach.desc}</p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
</Section>

      {/* ── CODING PROFILES ────────────────────────────────────────────────── */}
      <Section id="profiles" className="bg-muted/30 border-t border-border">
        <SectionHeading
          title="Coding Profiles"
          subtitle="Find me across competitive programming and developer platforms."
        />
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CODING_PROFILES.map((profile) => {
            const PIcon = profile.IconComp;
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/25 transition-all group flex items-center gap-4"
                >
                <div className="p-3 bg-muted group-hover:bg-blue-500/15 rounded-xl transition-colors shrink-0">
                  <PIcon
                    className={`w-6 h-6 text-muted-foreground transition-colors ${profile.color}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{profile.name}</h3>
                  <p className="text-muted-foreground text-sm truncate">@{profile.username}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all shrink-0" />
              </motion.a>
            );
          })}
        </motion.div>
      </Section>

      {/* ── RESUME ─────────────────────────────────────────────────────────── */}
      <Section id="resume" className="border-t border-border">
        <SectionHeading title="Resume" subtitle="Preview my latest resume." />
        <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-br from-muted to-muted/50 h-80 flex flex-col items-center justify-center border-b border-border gap-4">
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center">
             <User className="w-10 h-10 text-blue-500" />
          </div>
             <div className="text-center">
              <p className="font-bold text-foreground text-lg">Aravind Potlapelly</p>
              <p className="text-muted-foreground text-sm">
                   B.Tech CSE · Frontend · AI/ML Engineer
              </p>
               <p className="text-muted-foreground text-xs mt-1">
                 Resume PDF preview will display here
              </p>
              </div>
             <div className="flex gap-2">
                <Tag label="React.js" variant="blue" />
                <Tag label="Python" variant="blue" />
                <Tag label="Machine Learning" variant="blue" />
              </div>
            </div>
          <div className="p-6 flex justify-center">
            <a
              href="https://drive.google.com/file/d/1WUG_tUZx9Mr4u1ZgYCA2ACq1D3bkYhEZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm"
            >
          <Eye className="w-4 h-4" /> View Full Resume
        </a>
      </div>
    </div>
  </motion.div>
  </Section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <Section id="contact" className="bg-muted/30 border-t border-border">
        <SectionHeading
          title="Get In Touch"
          subtitle="I would love to hear from you. Let's discuss opportunities, collaborations, or just say hello."
        />
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              {[
                { IconComp: Mail, label: "Email", value: "aravindpotlapelly@gmail.com" },
                { IconComp: Phone, label: "Phone", value: "+91 9392959817" },
                { IconComp: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
                { IconComp: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aravindpotlapelly" },
                { IconComp: Github, label: "GitHub", value: "github.com/aravindpotlapelly-dev" },
              ].map(({ IconComp: CIcon, label, value }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <CIcon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="font-semibold text-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-52 flex flex-col items-center justify-center text-center">
              <Globe className="w-10 h-10 text-blue-500/30 mb-3" />
              <p className="text-muted-foreground font-medium text-sm">Google Maps Embed</p>
              <p className="text-muted-foreground text-xs mt-1">Hyderabad, Telangana, India</p>
              <a
                href="https://maps.google.com/?q=Hyderabad,India"
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-blue-500 text-xs flex items-center gap-1 hover:underline"
              >
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeUp}>
            {sent ? (
              <div className="bg-card border border-green-500/20 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 space-y-4"
              >
                <h3 className="font-bold text-foreground text-lg mb-2">Send a Message</h3>
                {[
                  { key: "name", label: "Your Name *", type: "text", placeholder: "Aravind Potlapelly" },
                  { key: "email", label: "Email Address *", type: "email", placeholder: "aravindpotlapelly@gmail.com" },
                  { key: "phone", label: "Phone Number (optional)", type: "tel", placeholder: "+91 9392959817" },
                  { key: "subject", label: "Subject *", type: "text", placeholder: "Job Opportunity / Collaboration" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-colors text-sm ${
                        errors[field.key] ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors[field.key] && (
                      <p className="text-red-500 text-xs mt-1">{errors[field.key]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the opportunity or project you have in mind…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-2.5 bg-muted border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-foreground text-lg">&lt;Aravind Potlapelly /&gt;</p>
            <p className="text-muted-foreground text-sm mt-0.5">
              © 2025 All rights reserved. Built with React & Tailwind.
            </p>
          </div>
          <div className="flex gap-3">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 bg-muted hover:bg-blue-500/15 hover:text-blue-500 text-muted-foreground rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            <ChevronUp className="w-4 h-4" /> Back to Top
          </button>
        </div>
      </footer>

      {/* Scroll-to-top FAB */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-500/30 z-40 transition-colors hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

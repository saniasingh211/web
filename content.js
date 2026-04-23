/**
 * ============================================================
 *  SANIA SINGH — WEBSITE CONTENT
 *  Edit this file to update your site. No coding needed.
 *  After editing, save the file. Refresh your browser to see changes.
 * ============================================================
 */

const SITE_CONTENT = {

  // ── YOUR DETAILS ──────────────────────────────────────────
  name:       "Sania Singh",
  email:      "saniasingh72@gmail.com",
  instagram:  "https://instagram.com/sania_sings",
  soundcloud: "https://soundcloud.com/osania-singso",
  tagline:    "Musician · Scientist · Writer",

  // ── HOMEPAGE HERO ─────────────────────────────────────────
  hero: {
    eyebrow: "Musician · Scientist · Writer",
    tagline: "Multi-instrumentalist and producer working on her debut album — alongside a life in astrophysics, applied mathematics, and physics. Passionate about the law, yoga, and dogs."
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    heading: "The same mind that hears music in the cosmos.",
    para1: "I'm Sania — a physicist and mathematician by training, a musician by calling. I hold a BSc in Physics (First Class, 90%) from Miranda House, University of Delhi, and an MSc in Applied Mathematics (Merit) from Imperial College London (2023–25).",
    para2: "In parallel, I've spent years building a life in music — playing, producing, composing. My debut album is in the works: a deeply personal body of work that sits somewhere between introspection and experiment, written and produced entirely by me.",
    para3: "When I'm not at a desk or behind an instrument, I'm reading about law, practicing yoga, or spending time with dogs (I have a special place in my heart for labradors).",
    tags: ["Physics", "Applied Maths", "Astrophysics", "Music Production", "Multi-instrumentalist", "Law", "Yoga"]
  },

  // ── MUSIC PAGE ────────────────────────────────────────────
  music: {
    album: {
      label: "Debut Album",
      heading: "Written from the inside out.",
      para1: "My debut album is a deeply personal body of work — written, composed and produced entirely by me. It draws from my life as a young woman in her 20s: navigating relationships, moving to a foreign country, tough situations, and expressing my true feelings about all of it.",
      para2: "No filter. No compromise. Just my voice, my instruments, and everything I've needed to say.",
      status: "In Production · 2025"
    },
    instruments: [
      { name: "Guitar",     grade: "Trinity Grade 4" },
      { name: "Vocals",     grade: "RSL Grade 6"     },
      { name: "Piano",      grade: ""                },
      { name: "Bass",       grade: ""                },
      { name: "Production", grade: "Since 2015"      }
    ],
    bio: {
      heading: "Ten years of making sound from scratch.",
      para1: "I've been producing music independently since 2015 — long before it became a central part of my identity. What started as curiosity became craft: full creative ownership from the initial idea to the final file.",
      para2: "Performed at London venues and open mic nights. Battle of the Bands and Imperial College Live Music Society. Every stage a different kind of conversation."
    },
    live: [
      { year: "2023–2025", title: "London Venues & Open Mics",       desc: "Performed at multiple London venues and open mic nights — original material, solo sets, and collaborations." },
      { year: "2024",      title: "Battle of the Bands",             desc: "Imperial College London. Competing and performing original work in front of a live audience."                 },
      { year: "2023–2024", title: "Imperial Live Music Society",      desc: "Active member and performer. Sessions, collaborations and events across the academic year."                  }
    ]
  },

  // ── RESEARCH PAGE ─────────────────────────────────────────
  research: {
    intro: "I work at the intersection of computational physics and applied mathematics — building numerical solvers, implementing algorithms from scratch, and applying rigorous quantitative methods to real physical problems.",
    phdStatement: "Seeking a funded PhD position in computational astroparticle physics or dark matter detection — ideally based in Germany or the Netherlands. I work independently, build things that work, and am drawn to groups doing rigorous, data-driven science at the frontier.",
    modules: [
      { name: "Advanced Probability & Group Theory",  score: "95%" },
      { name: "Computational Quantum Mechanics",      score: "86%" },
      { name: "Numerical ODEs",                       score: "91%" },
      { name: "Finite Element Methods",               score: "76%" },
      { name: "Linear Algebra & Tensor Analysis",     score: "76%" }
    ]
  },

  // ── CONTACT ───────────────────────────────────────────────
  contact: {
    heading: "Intrigued? Let's talk.",
    note: "Open to collaborations, PhD enquiries, session work, press features, and conversations that go somewhere interesting."
  }

};

// Make available globally
if (typeof window !== 'undefined') window.SITE_CONTENT = SITE_CONTENT;
if (typeof module !== 'undefined') module.exports = SITE_CONTENT;

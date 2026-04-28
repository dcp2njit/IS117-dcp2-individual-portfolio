export type ProjectStatus = "Concept" | "In Progress" | "Completed";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  summary: string;
  processNotes: string[];
  proofLabel: string;
  technologies: string[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export const projects: Project[] = [
  {
    slug: "ai-study-buddy",
    title: "AI Study Buddy",
    tagline: "Adaptive study planning for overwhelmed students.",
    status: "Completed",
    summary:
      "A concept-to-prototype product that translates assignment pressure into personalized study steps, reminders, and feedback loops.",
    processNotes: [
      "Mapped a student planning workflow before drafting the AI interaction model.",
      "Designed the experience around reducing task friction instead of adding more dashboards.",
      "Validated the direction with low-fidelity interface screens and prompt testing."
    ],
    proofLabel: "Wireframes, interaction flow, and prompt exploration",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Figma"],
    featured: true
  },
  {
    slug: "portfolio-lab",
    title: "Portfolio Interaction Lab",
    tagline: "A motion-first environment for testing recruiter-facing storytelling.",
    status: "In Progress",
    summary:
      "An internal sandbox for exploring animated layouts, project framing, and the balance between technical clarity and creative direction.",
    processNotes: [
      "Compared multiple portfolio structures to see which one surfaces credibility fastest.",
      "Built motion prototypes that prioritize readability on mobile instead of desktop-only effects.",
      "Documented what interaction patterns feel intentional rather than decorative."
    ],
    proofLabel: "Animation studies, layout experiments, and responsive checkpoints",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true
  },
  {
    slug: "ai-campus-guide",
    title: "AI Campus Guide",
    tagline: "A concept for guided onboarding across campus systems.",
    status: "Concept",
    summary:
      "A service concept focused on helping new students navigate forms, deadlines, and support resources through conversational guidance.",
    processNotes: [
      "Defined the user journey around confusing first-week tasks.",
      "Outlined trust and transparency patterns for showing what the AI knows and what it guesses.",
      "Created a roadmap for future prototyping and usability checks."
    ],
    proofLabel: "Concept map, user journey, and service blueprint",
    technologies: ["Research", "Service Design", "Prompt Design"]
  }
];

export const processPillars = [
  {
    title: "Prototype the behavior",
    description:
      "I start by mapping the user decision points, then shape the interface and AI behavior around those moments."
  },
  {
    title: "Show the evidence",
    description:
      "I make the process visible through wireframes, notes, and status labels so the work feels credible instead of inflated."
  },
  {
    title: "Refine for real use",
    description:
      "I care about how things scroll, respond, and read on actual devices because the interaction is part of the product quality."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Workflow",
    description: "How I scope, test, and communicate AI-powered product decisions.",
    items: ["Prompt design", "Workflow mapping", "AI feature framing", "Model output evaluation"]
  },
  {
    title: "Design and Storytelling",
    description: "How I make technical work understandable and engaging.",
    items: ["Interaction design", "Scrollytelling concepts", "Wireframing", "Visual hierarchy"]
  },
  {
    title: "Development",
    description: "How I ship responsive front-end experiences.",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  }
];

export const contactMethods = [
  {
    label: "Email",
    value: "denapayumo@gmail.com",
    href: "mailto:denapayumo@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/denisepayumo",
    href: "https://linkedin.com/in/denisepayumo"
  },
  {
    label: "GitHub",
    value: "github.com/dcp2njit",
    href: "https://github.com/dcp2njit"
  }
];

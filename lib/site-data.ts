import { assetPath } from "@/lib/asset-path";

export type ProjectStatus = "Concept" | "In Progress" | "Completed";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  summary: string;
  caseStudyFacts: Array<{
    label: string;
    text: string;
  }>;
  storyPoints: Array<{
    label: string;
    text: string;
  }>;
  processNotes: string[];
  proofLabel: string;
  artifactType: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  description: string;
  recruiterValue: string;
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
    caseStudyFacts: [
      {
        label: "Role",
        text: "I owned the product framing, interface direction, and early AI interaction logic for the prototype concept."
      },
      {
        label: "Constraint",
        text: "The experience had to reduce overwhelm quickly, which meant avoiding dense planning tools and guiding users toward one immediate next step."
      },
      {
        label: "Outcome Signal",
        text: "The final prototype demonstrates a clearer planning flow, lightweight prompting, and a tighter connection between stress points and recommended actions."
      }
    ],
    storyPoints: [
      {
        label: "Problem",
        text: "Students often know they are overwhelmed before they know what to do next. The product needed to turn stress into a clear first action."
      },
      {
        label: "Approach",
        text: "I framed the experience around breaking assignments into smaller guided decisions, then tested interface directions that kept the workflow lightweight."
      },
      {
        label: "Why It Matters",
        text: "This project shows how I think about AI as a support layer inside a product experience, not just a feature added on top."
      }
    ],
    processNotes: [
      "Mapped a student planning workflow before drafting the AI interaction model.",
      "Designed the experience around reducing task friction instead of adding more dashboards.",
      "Validated the direction with low-fidelity interface screens and prompt testing."
    ],
    proofLabel: "Wireframes, interaction flow, and prompt exploration",
    artifactType: "Prototype interface mockup",
    imageSrc: assetPath("/projects/ai-study-buddy-proof.svg"),
    imageAlt: "AI Study Buddy screens showing planning and study flow interface mockups.",
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
    caseStudyFacts: [
      {
        label: "Role",
        text: "I use this project as both designer and front-end builder, testing how motion, typography, and proof framing affect credibility."
      },
      {
        label: "Constraint",
        text: "The layout has to feel editorial and interactive without becoming fragile across mobile, tablet, and static export deployment."
      },
      {
        label: "Outcome Signal",
        text: "The current build has already shaped the live portfolio through breakpoint refinements, stronger proof presentation, and more deliberate motion decisions."
      }
    ],
    storyPoints: [
      {
        label: "Problem",
        text: "A portfolio can look polished without proving anything. I needed a way to test how layout and motion affect credibility for recruiters."
      },
      {
        label: "Approach",
        text: "I used this project as an experimentation space for editorial structure, animation timing, and responsive composition before applying ideas to the live site."
      },
      {
        label: "Why It Matters",
        text: "It demonstrates that I treat interaction and presentation as product decisions, with deliberate tradeoffs around clarity, motion, and performance."
      }
    ],
    processNotes: [
      "Compared multiple portfolio structures to see which one surfaces credibility fastest.",
      "Built motion prototypes that prioritize readability on mobile instead of desktop-only effects.",
      "Documented what interaction patterns feel intentional rather than decorative."
    ],
    proofLabel: "Animation studies, layout experiments, and responsive checkpoints",
    artifactType: "Motion and layout study board",
    imageSrc: assetPath("/projects/portfolio-lab-proof.svg"),
    imageAlt: "Portfolio Interaction Lab board showing layout studies and motion direction.",
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
    caseStudyFacts: [
      {
        label: "Role",
        text: "I framed the concept from a service-design perspective, defining where AI guidance could clarify onboarding across fragmented campus systems."
      },
      {
        label: "Constraint",
        text: "The concept needed to balance helpful guidance with trust, especially in moments where students would not know what the AI can answer confidently."
      },
      {
        label: "Outcome Signal",
        text: "The deliverable set establishes a credible concept direction with journey mapping, trust patterns, and a clear path toward future prototyping."
      }
    ],
    storyPoints: [
      {
        label: "Problem",
        text: "New students face fragmented systems and unclear deadlines, which creates anxiety before they have enough context to ask the right questions."
      },
      {
        label: "Approach",
        text: "I treated the concept like a service design problem first, mapping the support journey and identifying where conversational guidance could reduce confusion."
      },
      {
        label: "Why It Matters",
        text: "Even as a concept, it shows how I frame AI work around trust, onboarding, and cross-system usability rather than novelty alone."
      }
    ],
    processNotes: [
      "Defined the user journey around confusing first-week tasks.",
      "Outlined trust and transparency patterns for showing what the AI knows and what it guesses.",
      "Created a roadmap for future prototyping and usability checks."
    ],
    proofLabel: "Concept map, user journey, and service blueprint",
    artifactType: "Service concept overview",
    imageSrc: assetPath("/projects/ai-campus-guide-proof.svg"),
    imageAlt: "AI Campus Guide concept board with journey and service interface visuals.",
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
    recruiterValue:
      "This group reflects how I turn vague AI ideas into clearer product decisions, from feature framing to evaluating whether the behavior is actually useful.",
    items: ["Prompt design", "Workflow mapping", "AI feature framing", "Model output evaluation"]
  },
  {
    title: "Design and Storytelling",
    description: "How I make technical work understandable and engaging.",
    recruiterValue:
      "This group shows how I use structure, motion, and interface decisions to make technical work feel legible, intentional, and credible to real users.",
    items: ["Interaction design", "Scrollytelling concepts", "Wireframing", "Visual hierarchy"]
  },
  {
    title: "Development",
    description: "How I ship responsive front-end experiences.",
    recruiterValue:
      "This group shows that I can move beyond concepting and build the responsive front-end systems needed to make portfolio and product ideas real.",
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

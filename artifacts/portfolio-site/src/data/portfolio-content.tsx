import type { ComponentType, ReactNode } from 'react';
import {
  SiCplusplus,
  SiFastapi,
  SiGo,
  SiJavascript,
  SiLeetcode,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPeerlist,
  SiPostgresql,
  SiPydantic,
  SiPython,
  SiPytorch,
  SiRender,
  SiScikitlearn,
  SiSqlalchemy,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { FaDev, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MatplotlibIcon, SeabornIcon } from '@/components/BrandIcons';

/* Project screenshots: lossless WebP builds of the supplied attached_assets
   PNGs (pixel-identical, full 1901px width, ~2.6x smaller) that Vite
   fingerprints and bundles. */
import lumenShot1 from '@assets/lumen-screenshot-1.webp';
import lumenShot2 from '@assets/lumen-screenshot-2.webp';
import lumenShot3 from '@assets/lumen-screenshot-3.webp';
import lumenShot4 from '@assets/lumen-screenshot-4.webp';
import lumenShot5 from '@assets/lumen-screenshot-5.webp';

/**
 * All static portfolio content lives here; the section components in
 * src/App.tsx only render it. Icon components are referenced (not string
 * names) so the data stays tree-shakeable and type-safe.
 */

export interface SocialLink {
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number }>;
  testId: string;
  color: string;
  /** Shown again in the contact section's "Elsewhere" list. */
  contact?: boolean;
}

export interface Project {
  number: string;
  name: string;
  description: string;
  stack: string[];
  accent: string;
  url: string;
  github: string;
  details: string[];
  capabilities: string[];
  images: string[];
}

export interface SkillGroup {
  title: string;
  items: Array<{ name: string; Icon: ComponentType<{ size?: number; className?: string }> }>;
}

export interface ExperienceEntry {
  date: string;
  role: string;
  description: ReactNode;
}

export interface Achievement {
  key: string;
  title: ReactNode;
  detail: ReactNode;
}

export const CONTACT_INBOX = 'karan.giri.9622@gmail.com';

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/karangiri3',
    Icon: FaGithub,
    testId: 'link-nav-github',
    color: '#24292e'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karan-giri-17a769384/',
    Icon: FaLinkedin,
    testId: 'link-nav-linkedin',
    color: '#0077b5',
    contact: true
  },
];
export const projects: Project[] = [
  {
    number: '01',
    name: 'Interactive To-Do List',
    description: 'A simple and responsive task management application with CRUD functionality.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    accent: 'blue',
    url: '',
    github: '',
    details: [
      'Create, edit, complete and delete tasks.',
      'Clean and responsive user interface.',
      'Uses browser local storage for saving tasks.'
    ],
    capabilities: [
      'Task management',
      'CRUD operations',
      'Local storage persistence'
    ],
    images: [],
  },
  {
    number: '02',
    name: 'Expense Tracker',
    description: 'A simple expense tracking application for managing income, expenses and monthly budget.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    accent: 'green',
    url: '',
    github: '',
    details: [
      'Track income and expenses.',
      'Calculate remaining monthly budget.',
      'Stores data using local storage.'
    ],
    capabilities: [
      'Income tracking',
      'Expense tracking',
      'Budget calculation'
    ],
    images: [],
  },
];

/* Reserved card slots — kept in the grid but empty until the next project ships. */
export const emptyProjectSlots = 1;

export const skills: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'Go', Icon: SiGo },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'C++', Icon: SiCplusplus },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      { name: 'NumPy', Icon: SiNumpy },
      { name: 'Pandas', Icon: SiPandas },
      { name: 'Matplotlib', Icon: MatplotlibIcon },
      { name: 'Seaborn', Icon: SeabornIcon },
      { name: 'scikit-learn', Icon: SiScikitlearn },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'PyTorch', Icon: SiPytorch },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Pydantic', Icon: SiPydantic },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', Icon: SiMysql },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'SQLAlchemy', Icon: SiSqlalchemy },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Render', Icon: SiRender },
      { name: 'Vercel', Icon: SiVercel },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    date: '2025 — 2029',
    role: 'B.Tech in Computer Science',
    description: <>Technocrats Institute of Technology</>,
  },
  {
    date: '2025 — Present',
    role: 'Independent ML & Backend Developer',
    description: <>Building practical applications across machine learning, backend systems, APIs, databases, and frontend development, with a focus on developing software end to end.</>,
  },
  {
    date: '2025 — Present',
    role: 'Founder & Lead, Nextgen Programmers',
    description: <>Built and lead a worldwide programming community of <strong className="font-semibold">700+ active members</strong>, creating a space for developers to learn, collaborate, and grow together.</>,
  },
  {
    date: 'May 2026 — Jun 2026',
    role: 'GSSOC Contributor',
    description: <>Merged <strong className="font-semibold">9 pull requests</strong> while contributing to open source projects during GirlScript Summer of Code 2026.</>,
  },
];

export const achievements: Achievement[] = [
  { key: 'community-lead', title: 'Community Lead', detail: <>Founded and lead a programming community where curious builders learn, collaborate, and build together.</> },
  {
    key: 'hackathon-finalist',
    title: <><span className="font-sans">3×</span> Hackathon Finalist</>,
    detail: <>Reached the finals in three hackathons, building and presenting technical solutions under competitive constraints.</>,
  },
  {
    key: 'gssoc-2026',
    title: <>Top <span className="font-sans">4%</span> · GSSOC <span className="font-sans">2026</span></>,
    detail: <>Ranked <strong className="font-semibold">2,525th among 47,951 participants</strong>, placing in the top 4% of contributors.</>,
  },
];
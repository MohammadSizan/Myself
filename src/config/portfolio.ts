/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION
 * ============================================================================
 * Replace PROFILE_PHOTO_PATH below with your own image path or URL whenever
 * you want to update your profile portrait without editing component code.
 *
 * Example using a file placed inside /public/images/:
 *   export const PROFILE_PHOTO_PATH = "/images/my-new-portrait.jpg";
 */
export const PROFILE_PHOTO_PATH = "/assets/aistudio/IMG-20261119-WA0000_558bd5bd.jpg";

export interface SkillEntry {
  id: string;
  name: string;
  stage: 'current' | 'goal';
  levelLabel: string;
  focusArea: string;
  summary: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  statusLabel: string;
  attributes: string[];
  githubProfileUrl: string;
}

export const PORTFOLIO_DATA = {
  name: 'Mohammad Sizan',
  role: 'Aspiring Game Developer',
  statusText: 'Currently Learning & Building',
  tagline: 'Building Exciting Games and Creating Interactive Web Experiences.',
  heroIntro:
    'Student at Bangladesh Navy College Dhaka exploring programming, game mechanics, and interactive browser experiences.',
  profilePhotoAlt: 'Portrait of Mohammad Sizan',

  about: {
    heading: 'Driven by curiosity, games, and the craft of software.',
    paragraphs: [
      "Hello! I'm Mohammad Sizan, an aspiring game developer and technology enthusiast currently studying at Bangladesh Navy College Dhaka. I am passionate about programming, game development, and creating interactive digital experiences.",
      'My ultimate dream is to develop one of the world\'s best games and become a skilled software engineer. I aspire to work at Google one day while continuously learning, experimenting, and turning creative ideas into reality.',
    ],
    highlights: [
      {
        label: 'Primary Craft',
        value: 'Game Development & Interactive Web',
      },
      {
        label: 'Long-Term Ambition',
        value: 'Software Engineer at Google',
      },
      {
        label: 'Current Base',
        value: 'Dhaka, Bangladesh',
      },
      {
        label: 'Approach',
        value: 'Learning by Building & Experimenting',
      },
    ],
  },

  skills: [
    {
      id: 'python',
      name: 'Python',
      stage: 'current',
      levelLabel: 'Beginner',
      focusArea: 'Current Foundation',
      summary:
        'Practicing core programming logic, control flow, data structures, and problem-solving fundamentals.',
    },
    {
      id: 'cpp',
      name: 'C++',
      stage: 'goal',
      levelLabel: 'Future Learning Goal',
      focusArea: 'Game Systems & Performance',
      summary:
        'Planned next step for understanding memory management, object-oriented design, and core game engine architecture.',
    },
    {
      id: 'html',
      name: 'HTML',
      stage: 'goal',
      levelLabel: 'Future Learning Goal',
      focusArea: 'Web Structure',
      summary:
        'Learning semantic document structure to build clean, accessible browser interfaces and web game containers.',
    },
    {
      id: 'css',
      name: 'CSS',
      stage: 'goal',
      levelLabel: 'Future Learning Goal',
      focusArea: 'Layout & Visual Design',
      summary:
        'Exploring responsive layouts, styling systems, and smooth visual presentation across mobile and desktop screens.',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      stage: 'goal',
      levelLabel: 'Future Learning Goal',
      focusArea: 'Interactive Logic',
      summary:
        'Aiming to master interactive browser programming, event handling, and real-time game loops.',
    },
  ] satisfies SkillEntry[],

  featuredProject: {
    id: 'cricket-simulation-game',
    title: 'Cricket Simulation Game',
    description:
      'A browser-based cricket simulation game developed through AI-assisted coding. It reflects my interest in cricket, programming, and interactive game experiences.',
    statusLabel: 'In Development',
    attributes: ['Browser-Based', 'AI-Assisted Coding'],
    githubProfileUrl: 'https://github.com/MohammadSizan',
  } satisfies ProjectEntry,

  education: [
    {
      id: 'bncd-hsc-2028',
      institution: 'Bangladesh Navy College Dhaka',
      academicLevel: 'HSC 2028',
      timeframe: 'Current Studies',
      description:
        'Pursuing Higher Secondary Certificate studies while independently building programming fundamentals and exploring game development.',
    },
  ],

  contact: {
    email: 'mohammadsizan12@gmail.com',
    githubUrl: 'https://github.com/MohammadSizan',
    githubHandle: '@MohammadSizan',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61594888045882',
    facebookLabel: 'Mohammad Sizan on Facebook',
  },
} as const;

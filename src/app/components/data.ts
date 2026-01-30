import { Experience } from './ExperienceItem'

export const workExperience: Experience[] = [
    {
        company: 'Zee Matrix LLC',
        role: 'Full Stack Developer',
        period: 'June 2024 - August 2024',
        logo: '/images/logoPlaceholder.png',
        link: 'https://zee-matrix.com',
        details: [
            'CRM development with Mollak API integration for document submission',
            'Webhook-based notification processing',
            'RBAC implementation across modules',
            'Stack: Next.js, NestJS, PostgreSQL, Material UI',
        ],
    },
    {
        company: 'Aylab',
        role: 'Full Stack Engineer',
        period: 'March 2024 - April 2024',
        logo: '/images/logoPlaceholder.png',
        link: 'https://aylab.io',
        details: [
            'Cross-chain app development using Wormhole',
            'Smart contracts on BNB, Polygon, Base & RaaS',
            'Wormhole query integration for cross-chain data',
            'Frontend with Next.js & Tailwind CSS',
        ],
    },
    {
        company: 'FusionTech',
        role: 'Full Stack Developer',
        period: 'Jan 2024 - March 2024',
        logo: '/images/logoPlaceholder.png',
        link: '#',
        details: [
            'Stripe payment gateway integration',
            'Laravel checkout application',
            'Next.js management system',
            'Cloudflare R2 bucket configuration',
        ],
    },
    {
        company: 'OpusAI',
        role: 'Software Engineer',
        period: 'Oct 2022 - Jan 2024',
        logo: '/images/logoPlaceholder.png',
        link: 'https://opus.ai',
        details: [
            'ERC721, ERC721A & ERC20 smart contracts',
            'Polygon NFTs & OpenSea integration',
            'Crypto payment smart contracts + Stripe',
            'DevOps pipelines with Jenkins & Gitea',
            'Flutter crypto wallet UI',
            'Cloudflare Workers, Pages & Functions',
        ],
    },
    {
        company: 'Assetize SARL',
        role: 'Full Stack Developer',
        period: 'Apr 2023 - Oct 2023',
        logo: '/images/logoPlaceholder.png',
        link: 'https://assetize.today',
        details: [
            'Fintech frontend & backend development',
            'KYB/KYC integrations',
            'NestJS REST APIs',
            'Payment gateways: Stripe, GuruPay',
            'Third-party APIs: Plaid, Klarna, Codat',
        ],
    },
    {
        company: 'B2B Systems',
        role: 'Junior Software Engineer',
        period: 'June 2020 - Aug 2022',
        logo: '/images/logoPlaceholder.png',
        link: '#',
        details: [
            'Bug fixes and feature development',
            'Git-based collaboration & code reviews',
            'Learned debugging, testing & clean code practices',
        ],
    },
]

import { Education } from './EducationItem'

export const educationData: Education[] = [
  {
    institute: 'Virtual University of Pakistan',
    degree: 'BS Software Engineering',
    period: '2016 - 2020',
    logo: '/images/logoPlaceholder.png',
    link: 'https://vu.edu.pk',
  },
]

export const skills = [
  'React',
  'Next.js',
  'NestJS',
  'TypeScript',
  'Node.js',
  'Python',
  'Rust',
  'Jekyll',
  'PostgreSQL',
  'Docker',
  'Cloudflare',
  'AWS',
  'Solidity',
  'Web3',
]

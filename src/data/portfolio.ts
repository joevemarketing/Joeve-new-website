export type MediaItem = {
  type: 'youtube' | 'link';
  youtubeId?: string;
  url?: string;
  title?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  date?: string;
  client?: string;
  description: string;
  image: string;
  tags?: string[];
  externalUrl?: string;
  media?: MediaItem[];
  coreValue?: string;
  concept?: string;
  functions?: string[];
  builtWith?: string;
  challenge?: string;
  solution?: string;
  result?: string;
};

// Real works referenced by the user
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'radio-traders-association',
    title: 'Radio Traders Association Website + Media',
    category: 'Web Development',
    date: '2024–2025',
    client: 'Radio Traders Association of Penang & Wellesley',
    description:
      'Association website and corporate media showcasing history, leadership, and community initiatives.',
    image:
      'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20association%20website%20showcase%2C%20radio%20communications%20heritage%20in%20Penang%2C%20blue%20and%20gold%20accents%2C%20modern%20UI%20mockup&image_size=landscape_16_9',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    externalUrl: 'https://www.radiotraderspenang.com/',
    media: [
      { type: 'youtube', youtubeId: 'hX537OXLRRg', title: 'Corporate Video' },
      { type: 'youtube', youtubeId: 'E8B8WtTTTHc', title: 'Presidents Timeline' },
      { type: 'youtube', youtubeId: 'prRpyUWOJAU', title: '光辉电波' }
    ],
    coreValue:
      'Preserve and celebrate heritage while strengthening community trust and engagement.',
    concept:
      'Story-driven association site that blends historical archives, leadership timelines, and corporate films to foster continuity and pride.',
    functions: [
      'Embedded corporate videos to communicate mission and impact',
      'Leadership timeline highlighting presidents (1960–present)',
      'Editorial content with event coverage and announcements',
      'Accessible, mobile-first layouts and SEO-friendly markup'
    ]
  },
  {
    id: 'sheng-fatt-superbike',
    title: 'Sheng Fatt Superbikes E‑Commerce Website',
    category: 'Web Development',
    date: '2024',
    client: 'Sheng Fatt Superbikes (Penang)',
    description:
      'High-performance superbike specialist store website with service booking and product showcase.',
    image:
      'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=superbike%20specialist%20store%20website%20showcase%2C%20Ducati%20red%20accents%2C%20motorcycle%20showroom%20visual%2C%20modern%20commerce%20UI&image_size=landscape_16_9',
    tags: ['Next.js', 'CMS', 'Optimization'],
    externalUrl: 'https://shengfattsuperbike.com',
    media: [],
    builtWith: 'WordPress custom theme',
    coreValue:
      'Drive service bookings and sales by showcasing trust, expertise, and convenience.',
    concept:
      'Performance-focused retail experience emphasizing certified technicians, quick-fit services, and curated hot deals.',
    functions: [
      'Online appointment scheduling with form capture',
      'Inventory browsing with filters for Conditions, Types, and Brands',
      'Pickup & delivery service information and request flow',
      'Featured hot deals and recent items section',
      'Service categories such as Tyres & Brakes and Diagnosis & Repair'
    ]
  },
  {
    id: 'chatmbpp-intro-video',
    title: 'ChatMBPP Intro Video',
    category: 'Corporate Video',
    date: '2024',
    client: 'Internal',
    description:
      'Intro video production highlighting ChatMBPP capabilities and use cases.',
    image: 'https://img.youtube.com/vi/zJenV4tIKWo/hqdefault.jpg',
    tags: ['Video Editing', 'Motion Graphics'],
    externalUrl: 'https://youtu.be/zJenV4tIKWo',
    media: [{ type: 'youtube', youtubeId: 'zJenV4tIKWo', title: 'YouTube' }],
    coreValue:
      'Communicate product value clearly and succinctly to accelerate stakeholder buy-in.',
    concept:
      'Concise explainer crafted with motion graphics to showcase core workflows and benefits.',
    functions: [
      'YouTube distribution for reach and analytics',
      'Brand-aligned visuals and captions'
    ]
  },
  {
    id: 'stem-talent-pipeline',
    title: 'STEM Talent Pipeline Launch Video',
    category: 'Corporate Video',
    date: '2024',
    client: 'STEM Initiative',
    description:
      'Launch video introducing the STEM talent pipeline program and its impact.',
    image: 'https://img.youtube.com/vi/2X1ylWjE1Hw/hqdefault.jpg',
    tags: ['Video Editing', 'Storyboarding'],
    externalUrl: 'https://youtu.be/2X1ylWjE1Hw',
    media: [{ type: 'youtube', youtubeId: '2X1ylWjE1Hw', title: 'YouTube' }],
    coreValue:
      'Inspire stakeholders and participants by highlighting program goals and outcomes.',
    concept:
      'Narrative-led launch piece with interviews and program highlights to build momentum.',
    functions: [
      'YouTube hosting with shareable links',
      'Support materials for event presentations'
    ]
  },
  {
    id: 'joevesmartsolutions-site',
    title: 'JOeve Smart Solutions Website',
    category: 'Web Development',
    date: '2025',
    client: 'JOeve Smart Solutions',
    description:
      'Company website with service pages, portfolio, and integrated lead capture.',
    image:
      'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20tech%20consultancy%20website%20landing%20page%2C%20sleek%20blue%20neon%20accents%2C%20professional%20UI%20mockup&image_size=landscape_16_9',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    externalUrl: 'https://joevesmartsolutions.com',
    media: [],
    coreValue:
      'Generate qualified leads and showcase solutions with clarity and speed.',
    concept:
      'Modern Next.js site with persuasive hero, service templates, and portfolio case studies.',
    functions: [
      'Lead capture via Request Quotation and Contact forms',
      'Admin dashboard for services and leads',
      'Portfolio pages with media embeds',
      'Lightweight chat widget integration'
    ]
  }
];

export const getPortfolioById = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find((p) => p.id === id);
};

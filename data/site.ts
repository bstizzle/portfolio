/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  // TODO: replace with your deployed domain
  url: 'https://example.com',
  meta: {
    title: 'Benjamin Stein | Audio & embedded software engineer',
    description:
      'Portfolio of Benjamin Stein, engineer and researcher in sound and music computing: DSP, physical modeling, machine learning, embedded audio, and interactive music systems.',
  },
  hero: {
    name: 'Benjamin Stein',
    role: '· Audio & embedded software engineer ·\n· Interactive system designer ·\n· Sound & music computing researcher ·',
    tagline:
      'Building expressive digital instruments and real-time audio systems, from physical models and machine learning to embedded hardware and production-ready software.',
    contact:
      'Based in Copenhagen. Open to audio software, DSP, embedded systems, and sonic interaction design roles.',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Benjamin Stein',
  },
  about: {
    paragraphs: [
      'I am an engineer and researcher working on audio applications: sonic interaction, embedded system design, accessibility and hearing research, digital signal processing, and more. I hold an MSc in Sound & Music Computing from Aalborg University and a BM in Music Technology from New York University. In between, I spent three years as a software engineer at Capgemini.',
      'My recent work focuses on physical modeling, machine learning, and real-time interaction with procedural audio. For my master\'s thesis I built a pipeline that uses physics-informed machine learning to tune a physical modeling synthesizer against recordings of real instruments. The resulting digital twins can be played in VR through hand tracking. I have published work at conferences including MOCO (Movement and Computing) and ISMAR (International Symposium on Mixed and Augmented Reality).',
      {
        heading: 'Focus areas',
        bullets: [
          'User-centred sonic interaction design and perceptual / psychoacoustic research studies',
          'Physical modeling synthesis: digital waveguides, finite difference schemes, and differentiable DSP',
          'Machine learning for audio, gesture recognition, and computer-vision-driven instruments',
          'Embedded audio software and hardware, from wearable instruments to effects units',
          'Production software engineering: UI/UX and frontends, REST APIs, Cloud services, CI/CD',
        ],
      },
      {
        heading: 'Core stack',
        techItems: [
          'C++',
          'JUCE',
          'Python',
          'C#/.NET',
          'Unity',
          'VST3',
          'MaxMSP',
          'Arduino',
          'MATLAB',
          'Faust',
          'JavaScript',
          'React',
          'Azure',
        ],
      },
    ],
  },
  experiences: [
    {
      period: '2026 – Present',
      title: 'Research Assistant',
      company: 'Aalborg University',
      summary:
        'Research and development across noise handling and hearing protection, embedded software, and machine learning, plus grant writing for national and international funding calls.',
      highlights: [
        'Contribute to research spanning noise handling and hearing protection, embedded software, and machine learning algorithms',
        'Research and write grant proposals for national and international funding calls',
        'Install and maintain lab equipment and run quality and consistency testing',
        'Coordinate communication and planning between multinational research groups',
      ],
      tech: ['Embedded Software', 'Machine Learning', 'DSP', 'Python', 'Grant Writing'],
    },
    {
      period: '2025 – 2026',
      title: 'Teaching Assistant',
      company: 'Aalborg University',
      summary:
        'Supported four bachelor\'s and master\'s courses in human-computer interaction, wearable computing, and audio signal processing.',
      highlights: [
        'Assisted Advanced Human-Computer Interfaces, Audio Processing, Mobile and Wearable Computing, and Signal Processing for Interactive Systems',
        'Helped students understand course material and design and develop semester-long projects',
        'Helped the lead professor prepare and run lectures and course materials',
      ],
      tech: ['Signal Processing', 'HCI', 'Wearable Computing', 'Python', 'MATLAB'],
    },
    {
      period: '2025 – 2026',
      title: 'Product Development Intern',
      company: 'Audio Modeling',
      summary:
        'Research and development of professional digital musical instruments for an Italian virtual instrument company (remote).',
      highlights: [
        'Developed a highly expressive acoustic guitar VST3 plugin using digital waveguide synthesis and other DSP techniques',
        'Implemented the instrument in C++ with JUCE',
        'Designed user interactions and the plugin interface',
      ],
      tech: ['C++', 'JUCE', 'VST3', 'Digital Waveguide Synthesis', 'DSP'],
    },
    {
      period: '2021 – 2024',
      title: 'Associate Consultant & Software Engineer',
      company: 'Capgemini',
      summary:
        'Full-stack and cloud engineering to modernize a major insurance company\'s underwriting systems and workflows.',
      highlights: [
        'Designed and implemented backend REST API operations in C#/.NET, as part of a small team that architected the client\'s infrastructure modernization',
        'Migrated workflows from AS400/WINS mainframe and Excel macros to Azure-hosted app services, Functions, Cosmos DB, and Key Vault',
        'Built front ends with React, Blazor, Bootstrap, and Angular, plus Power Platform apps for internal use cases on tight deadlines',
        'Used Azure DevOps and Agile practices to set up and manage sprints',
      ],
      tech: ['C#', '.NET', 'Azure', 'React', 'Angular', 'Power Platform'],
    },
  ],
  featuredProjects: [
    {
      title: 'SoundField: Collaborative, Movement-based Ear Training',
      period: '2025',
      summary:
        'A research project studying whether adding social collaboration and full-body movement to traditional music training tasks makes ear training more effective.',
      solution:
        'Built an environment where 3D camera-based body tracking gives a group of people shared control over a physically modeled digital guitar. Real-time audio and visual feedback make the experience more immersive.',
      impact:
        'Provided a working platform for studying collaborative, movement-based music learning, combining body tracking, physical modeling synthesis, and real-time audiovisual feedback in a single interactive system.',
      // TODO: replace with your YouTube/Vimeo embed URL
      video: 'https://www.youtube.com/embed/y1B_Wtb2v0o',
      videoTitle: 'SoundField collaborative body-tracking ear training demo',
      techCategories: [
        {
          category: 'Interaction',
          items: ['3D Body Tracking', 'Collaborative Interaction', 'Real-time Visuals'],
        },
        {
          category: 'Audio',
          items: ['Physical Modeling', 'Real-time Audio', 'Ear Training'],
        },
      ],
    },
    {
      title: 'Digital Surrogates of the Ancient Greek Lyre',
      period: '2026',
      summary:
        'Master\'s thesis: an end-to-end system that turns audio recordings of a musical instrument into a playable digital twin, motivated by museums\' difficulty in conveying the sound of instruments too fragile or rare to handle.',
      solution:
        'Combined a body impulse-response extractor, a machine-learning optimizer that uses differentiable DSP to estimate physical model parameters from audio, and a VR tool where the instruments are played through expressively mapped hand-tracking gestures. Built around recordings gifted by the Seikilo Museum of Ancient Music.',
      impact:
        'Each component was evaluated objectively and perceptually. The impulse-response extractor convincingly reproduced the target body, and the VR tool met the usability benchmark for an average system, with its sound a clear strength. The result is a workable foundation for bringing real instruments into interactive digital form.',
      // TODO: replace with your YouTube/Vimeo embed URL
      video: 'https://www.youtube.com/embed/GNKlOVfNTkc',
      videoTitle: 'Playing a digital twin of an ancient Greek lyre in VR',
      techCategories: [
        {
          category: 'Audio & ML',
          items: ['Differentiable DSP', 'Physical Modeling', 'Machine Learning', 'Python'],
        },
        {
          category: 'Interaction',
          items: ['Unity', 'Virtual Reality', 'Hand Tracking', 'Perceptual Evaluation'],
        },
      ],
    },
    {
      title: 'Tapxophone: Finger Rehabilitation with Computer Vision and Music',
      period: '2025',
      summary:
        'A physical therapy tool for people recovering from strokes or traumatic brain injuries that builds therapeutic finger exercises into music-making, which patients find more motivating than repetitive drills.',
      solution:
        'Computer vision and machine learning track hand gestures in real time, mapping finger positions to saxophone fingerings that control a digital instrument. Mirroring familiar instrument patterns places the rehabilitation exercises in a meaningful musical context.',
      impact:
        'A preliminary study with ten participants showed spontaneous desire to keep playing without prompting, rapid skill acquisition within a single session, and self-directed experimentation. These are promising signs for the sustained practice that recovery requires.',
      // TODO: replace with your YouTube/Vimeo embed URL
      video: 'https://www.youtube.com/embed/Z6vo5XGrQQI',
      videoTitle: 'Tapxophone hand-tracking music rehabilitation demo',
      techCategories: [
        {
          category: 'Sensing & ML',
          items: ['Computer Vision', 'Hand Tracking', 'Machine Learning'],
        },
        {
          category: 'Research',
          items: ['Rehabilitation', 'User Study', 'Thematic Analysis'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description:
      'Project archive: research, DSP, embedded, and interactive audio projects by Benjamin Stein.',
    intro:
      'An archive of research, digital instruments, and audio software projects, from embedded hardware to VR.',
  },
  projectArchive: [
    {
      date: '2026',
      project: 'Physical modeling, ML & VR digital twins of the Greek lyre (MSc thesis)',
      role: 'Research / DSP',
      techStack: 'Python, Differentiable DSP, Machine Learning, VR, Hand Tracking',
    },
    {
      date: '2025',
      project: 'Expressive acoustic guitar VST3 plugin (Audio Modeling)',
      role: 'Audio Software',
      techStack: 'C++, JUCE, VST3, Digital Waveguide Synthesis',
    },
    {
      date: '2025',
      project: 'Tapxophone: stroke rehabilitation with music & computer vision',
      role: 'Interactive Software / Research',
      techStack: 'Computer Vision, Machine Learning, Hand Tracking',
    },
    {
      date: '2025',
      project: 'SoundField: collaborative, movement-based ear training',
      role: 'Interactive Software / Research',
      techStack: '3D Body Tracking, Physical Modeling, Real-time Audio & Visuals',
    },
    {
      date: '2025',
      project: 'Digital hurdy-gurdy using finite difference schemes',
      role: 'Embedded Software / DSP',
      techStack: 'C++, JUCE, Finite Difference Schemes',
    },
    {
      date: '2024',
      project: 'HRTF comparisons for localisation in audio-only VR',
      role: 'Research',
      techStack: 'Spatial Audio, HRTFs, User Study',
    },
    {
      date: '2024',
      project: 'Analog tape saturation simulation',
      role: 'DSP',
      techStack: 'MATLAB, Hysteresis Modeling, Virtual Analog',
    },
    {
      date: '2024',
      project: 'PsychoPosture: wearable NIME using IRCAM\'s RAVE',
      role: 'Embedded Software / DSP',
      techStack: 'RAVE, Machine Learning, Wearable Sensors',
    },
    {
      date: '2021',
      project: 'Synthesiz.io: in-browser synthesizer',
      role: 'Web Audio / DSP',
      techStack: 'JavaScript, Web Audio API, HTML/CSS',
    },
    {
      date: '2018',
      project: 'BrassBox: multi-effects pedal for winds',
      role: 'Embedded Hardware / DSP',
      techStack: 'Embedded DSP, Analog Circuitry, Mic Preamp',
    },
  ],
  contact: {
    email: 'stein.benjamin.m@gmail.com',
    // TODO: add your GitHub profile URL (not found in CV or LinkedIn)
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/benjamin-m-stein/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
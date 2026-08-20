export const disciplinesData = [
  {
    id: "chess",
    title: "Chess Mastery",
    icon: "Crown",
    emoji: "♟️",
    tagline: "Strategic foresight, risk evaluation & tactical patience",
    tag: "High Strategy",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Chess trains children to visualize 3–5 moves ahead, think before acting, evaluate trade-offs, and handle high-pressure situations with calm composure.",
    neuroscience: "Activates prefrontal cortex for executive functioning, working memory, and inhibition control.",
    ageRange: "Ages 5+",
    curriculum: [
      "Board visualization & piece dynamic valuation",
      "Tactical patterns: Pins, forks, skewers & discovered attacks",
      "Calculated risk vs. defensive positional play",
      "Endgame precision & clock time management",
      "Tournament etiquette & sportsmanship resilience"
    ],
    skills: ["Foresight", "Pattern Recognition", "Decision Speed", "Patience"]
  },
  {
    id: "juggling",
    title: "Juggling & Bi-Lateral Flow",
    icon: "Sparkles",
    emoji: "🤹",
    tagline: "Left/Right brain hemisphere sync & hand-eye rhythm",
    tag: "Brain-Body Agility",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    description: "Physical brain training that synchronizes both cerebral hemispheres, enhances peripheral vision, develops rhythmic focus, and strengthens the corpus callosum.",
    neuroscience: "Studies in Nature show juggling increases gray matter in the visual-motor cortex and builds deep neuroplasticity.",
    ageRange: "Ages 5+",
    curriculum: [
      "Proprioception & spatial arc throwing techniques",
      "2-ball rhythm exchange & cross-lateral crossing",
      "3-ball cascade & peripheral vision widening",
      "Dual-task cognitive challenges (counting/reciting while juggling)",
      "Balance, posture & breath-flow regulation"
    ],
    skills: ["Dual-Hemisphere Sync", "Peripheral Vision", "Reaction Time", "Focus State"]
  },
  {
    id: "speedcubing",
    title: "Rubik’s Cube & Speedcubing",
    icon: "Box",
    emoji: "🧊",
    tagline: "3D Spatial algorithms, fine motor speed & mental mapping",
    tag: "Spatial IQ",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "Transforms a chaotic 3D puzzle into clear algorithmic sequences. Kids build spatial rotation intelligence, muscle memory, and problem decomposition skills.",
    neuroscience: "Enhances parietal lobe activation responsible for spatial reasoning, mental 3D rotation, and processing speed.",
    ageRange: "Ages 6+",
    curriculum: [
      "Layer-by-layer methodology & 3D orientation intuition",
      "Algorithmic muscle memory & finger-trick mechanics",
      "CFOP speedcubing introduction (Cross, F2L, OLL, PLL)",
      "Multi-cube variants: 2x2, Pyraminx, 4x4 & Megaminx",
      "Sub-60 second timer pacing & blindfolded foundations"
    ],
    skills: ["3D Spatial IQ", "Algorithmic Thinking", "Finger Agility", "Persistence"]
  },
  {
    id: "puzzles",
    title: "Logic & Deduction Puzzles",
    icon: "Puzzle",
    emoji: "🧩",
    tagline: "Deductive reasoning, constraint satisfaction & lateral thinking",
    tag: "Core Logic",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Hands-on tactile and visual puzzles that teach kids how to break overwhelming problems into simple solvable constraints, eliminating blind spots.",
    neuroscience: "Stimulates logical-mathematical neural pathways and increases cognitive cognitive flexibility.",
    ageRange: "Ages 4+",
    curriculum: [
      "Spatial tangrams & polyomino tile arrangements",
      "Deduction grids (Einstein logic riddles for kids)",
      "Topology mazes & pathfinding optimization",
      "Non-verbal pattern matrices & series completions",
      "Error-detection & hypothesis testing"
    ],
    skills: ["Deductive Logic", "Problem Breakdown", "Lateral Thinking", "Attention to Detail"]
  },
  {
    id: "sudoku",
    title: "Sudoku & Grid Systems",
    icon: "Grid",
    emoji: "🔢",
    tagline: "Systematic elimination, working memory & numerical intuition",
    tag: "Algorithmic Focus",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Step-by-step logic without complex math. Children master the art of systematic proof, process of elimination, and deep sustained concentration.",
    neuroscience: "Strengthens working memory capacity and sharpens executive processing speed.",
    ageRange: "Ages 5+",
    curriculum: [
      "4x4 Mini-grids with visual icons & colors for juniors",
      "6x6 Intermediate grid row/column cross-checks",
      "9x9 Standard Sudoku: Single candidates & naked pairs",
      "Advanced techniques: Hidden pairs, X-Wings & Swordfish",
      "Speed solving challenges & mental stamina drills"
    ],
    skills: ["Systematic Deduction", "Working Memory", "Process of Elimination", "Focus Stamina"]
  },
  {
    id: "memory",
    title: "Memory & Concentration Lab",
    icon: "Target",
    emoji: "🎯",
    tagline: "Visual chunking, mind palaces & hyper-focus conditioning",
    tag: "Memory & Recall",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    description: "Ancient mnemonics reimagined through fun games. Kids learn to remember sequences, numbers, and vocabulary effortlessly using visual association.",
    neuroscience: "Engages the hippocampus and temporal lobes for rapid information encoding and long-term consolidation.",
    ageRange: "Ages 4+",
    curriculum: [
      "Visual chunking & association linkage techniques",
      "The 'Mind Palace' (Method of Loci) for children",
      "Auditory vs. visual working memory expansion drills",
      "Flash card rapid pattern recognition (Dual N-Back fun)",
      "Distraction resistance & mindfulness focus anchors"
    ],
    skills: ["Rapid Recall", "Mind Palace Mnemonic", "Distraction Shield", "Auditory Memory"]
  }
];

export const ageTracksData = [
  {
    id: "junior",
    name: "BrainSpark Junior",
    age: "Ages 4 – 6",
    badge: "Foundation Builders",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-500/10",
    borderAccent: "border-amber-500/40",
    summary: "Nurturing curiosity, tactile motor skills, and playful discovery through interactive stories and tactile games.",
    activities: [
      "Story-based Chess (The adventures of King Leo & Knight Spark)",
      "2-Scarf rhythm throwing & hand-eye tracking",
      "4x4 Picture Sudoku & Shape Tangrams",
      "Tactile 2x2 Rubik's cube color matching",
      "5-minute deep focus games"
    ],
    outcomes: [
      "Builds 10-15 minute unbroken focus span",
      "Coordinates both hands independently",
      "Understands basic rules & turns without frustration",
      "Develops spatial vocabulary (left, right, diagonal, grid)"
    ],
    classSize: "Max 4 kids per mentor"
  },
  {
    id: "explorer",
    name: "BrainSpark Explorer",
    age: "Ages 6 – 8",
    badge: "Tactical Thinkers",
    color: "from-orange-500 to-rose-500",
    bgLight: "bg-orange-500/10",
    borderAccent: "border-orange-500/40",
    summary: "Bridging tactile play with systematic thinking, multi-step problem solving, and early strategic competition.",
    activities: [
      "Full chess rules, checkmate patterns & opening principles",
      "3-Ball juggling progression & cross-body coordination",
      "Complete 3x3 Rubik's Cube layer-by-layer mastery",
      "6x6 Sudoku & Einstein logic deduction riddles",
      "Memory grid challenges (8-12 item visual recall)"
    ],
    outcomes: [
      "Can solve the 3x3 Rubik's Cube unassisted",
      "Evaluates choices before impulsively moving in chess",
      "Develops healthy sportsmanship & learning from losses",
      "Increases continuous concentration to 25+ minutes"
    ],
    classSize: "Max 5 kids per mentor"
  },
  {
    id: "master",
    name: "BrainSpark Master",
    age: "Ages 8 – 12",
    badge: "Strategic Masters",
    color: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/40",
    summary: "Deep algorithmic reasoning, tournament-level tactical chess, speedcubing sub-60s benchmarks, and dual-task agility.",
    activities: [
      "Rated chess tactics, pawn structures & clock play",
      "CFOP Speedcubing algorithms (Cross, F2L, OLL, PLL)",
      "3-Ball juggling variations, behind-the-back & columns",
      "9x9 standard Sudoku & competitive logic puzzles",
      "Mind palace memory techniques for school academics"
    ],
    outcomes: [
      "Official internal chess Elo rating (800 - 1200+)",
      "Solves Rubik's Cube in under 60 seconds",
      "Transfers strategic thinking directly to school STEM subjects",
      "Dual-task brain-body mastery (juggling while reciting)"
    ],
    classSize: "Max 6 kids per mentor"
  },
  {
    id: "advanced",
    name: "BrainSpark Advanced",
    age: "Ages 12+",
    badge: "Cognitive Elite",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-500/10",
    borderAccent: "border-violet-500/40",
    summary: "High-performance cognitive conditioning for teenage thinkers, competitive tournament prep, and rapid decision-tree analysis.",
    activities: [
      "Advanced chess positional play & endgame masterclasses",
      "Sub-25 second speedcubing, 4x4, Pyraminx & Megaminx",
      "Complex game theory, probabilistic reasoning & blindfold recall",
      "4-Ball juggling & complex bi-lateral coordination patterns",
      "High-pressure mental stamina & timed Olympiad logic"
    ],
    outcomes: [
      "Tournament-ready competitive chess & cubing ranking",
      "Exceptional spatial intuition & mathematical modeling",
      "Laser-focused study stamina under exam conditions",
      "Superior emotional resilience and self-confidence"
    ],
    classSize: "Max 6 kids per mentor"
  }
];

export const benefitsData = [
  {
    icon: "Brain",
    title: "Critical Thinking",
    short: "Question, evaluate, and foresee outcomes.",
    desc: "Kids learn not to rush into first-instinct answers. Through chess and logic grids, they analyze consequences before committing to a decision."
  },
  {
    icon: "Target",
    title: "Deep Concentration",
    short: "Unbroken focus in a high-distraction world.",
    desc: "In an era of short attention spans, our tactile physical activities build sustained, unbroken attention muscles that carry directly into schoolwork."
  },
  {
    icon: "Lightbulb",
    title: "Creative Problem Solving",
    short: "Finding multiple non-linear solutions.",
    desc: "When a Rubik's cube or chess position is blocked, kids discover how to backtrack, reframe constraints, and discover innovative pathways."
  },
  {
    icon: "Zap",
    title: "Brain-Body Coordination",
    short: "Left and right brain hemisphere harmony.",
    desc: "Juggling and physical speed drills activate both hemispheres simultaneously, building neural pathways that improve motor agility and mental alertness."
  },
  {
    icon: "Trophy",
    title: "Emotional Resilience",
    short: "Learning that mistakes are just valuable data.",
    desc: "Losing a chess game or dropping a juggling ball is transformed into a learning diagnostic. Kids build indestructible confidence and grit."
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Assess",
    subtitle: "Cognitive Baseline Diagnostic",
    description: "In our complimentary 45-minute trial, coaches assess your child's current focus span, spatial intuition, problem-solving style, and hand-eye rhythm.",
    icon: "Compass",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    title: "Learn",
    subtitle: "Tactile, Story-Driven Micro-Lessons",
    description: "Kids are introduced to core concepts using fun physical props, stories, visual patterns, and gamified challenges with zero boring lectures.",
    icon: "BookOpen",
    color: "from-amber-500 to-orange-500"
  },
  {
    step: "03",
    title: "Practice",
    subtitle: "Active Guided Hands-On Mastery",
    description: "With an ultra-low 4:1 child-to-mentor ratio, each child gets personalized real-time coaching, adapting to their unique learning speed.",
    icon: "Layers",
    color: "from-orange-500 to-red-500"
  },
  {
    step: "04",
    title: "Challenge",
    subtitle: "Friendly Tournaments & League Quests",
    description: "Weekly friendly matches, Rubik's timer leagues, and juggling showcase quests where kids test their skills in a fun, supportive atmosphere.",
    icon: "Swords",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "05",
    title: "Improve",
    subtitle: "Parent Analytics & Milestone Badges",
    description: "Track measurable cognitive growth on your Parent Portal. Receive monthly radar charts, coach video notes, and official skill certificates.",
    icon: "TrendingUp",
    color: "from-emerald-500 to-teal-500"
  }
];

export const parentProfiles = [
  {
    id: "aarav",
    name: "Aarav Sharma",
    age: 7,
    track: "BrainSpark Explorer",
    avatar: "👦",
    joinedMonths: 4,
    attendanceStreak: "16 Weeks (98%)",
    totalSessions: 32,
    cognitiveScore: 88,
    cognitiveGrowth: "+24% in 90 days",
    radarScores: {
      strategy: 85,
      focus: 90,
      spatial: 82,
      memory: 78,
      speed: 84,
      coordination: 92
    },
    activities: [
      { name: "Chess", level: "Tactics II", metric: "Rating: 840 Elo", progress: 85 },
      { name: "Rubik's Cube", level: "3x3 Layer-by-Layer", metric: "Best Time: 1m 12s", progress: 92 },
      { name: "Juggling", level: "3-Ball Cascade", metric: "24 Catches in Flow", progress: 80 },
      { name: "Sudoku", level: "6x6 Intermediate", metric: "Avg Time: 4m 30s", progress: 75 }
    ],
    recentBadges: [
      { name: "Cube Conqueror", date: "Last week", icon: "🧊", desc: "Solved 3x3 unassisted 10 times" },
      { name: "Focus Knight", date: "2 weeks ago", icon: "♟️", desc: "Completed 25-min uninterrupted chess match" },
      { name: "Cascade Champ", date: "3 weeks ago", icon: "🤹", desc: "First 20 clean 3-ball juggling catches" }
    ],
    latestCoachFeedback: {
      coach: "Coach Vikram (FIDE Instructor)",
      date: "Aug 16, 2026",
      comment: "Aarav showed tremendous patience in yesterday's tournament game! Instead of impulsively moving his Queen, he calculated the opponent's Knight fork and found the winning defensive pawn push. His hand-eye sync in 3-ball juggling has also improved his classroom handwriting stability.",
      rating: 5
    }
  },
  {
    id: "maya",
    name: "Maya Chen",
    age: 10,
    track: "BrainSpark Master",
    avatar: "👧",
    joinedMonths: 7,
    attendanceStreak: "28 Weeks (100%)",
    totalSessions: 56,
    cognitiveScore: 94,
    cognitiveGrowth: "+38% in 6 months",
    radarScores: {
      strategy: 95,
      focus: 92,
      spatial: 96,
      memory: 89,
      speed: 94,
      coordination: 88
    },
    activities: [
      { name: "Speedcubing", level: "CFOP Method", metric: "Personal Best: 38.4s", progress: 96 },
      { name: "Chess", level: "Advanced Openings", metric: "Rating: 1150 Elo", progress: 90 },
      { name: "Logic & Deduction", level: "Level 4 Grid Mastery", metric: "100% Accuracy", progress: 95 },
      { name: "Memory Lab", level: "Mind Palace 20-Item", metric: "Recall: 100% in 90s", progress: 88 }
    ],
    recentBadges: [
      { name: "Sub-40 Speed Demon", date: "Yesterday", icon: "⚡", desc: "Broke 40-second 3x3 Rubik's barrier" },
      { name: "Grandmaster Thinker", date: "10 days ago", icon: "👑", desc: "Top 3 in Regional Junior Chess Cup" },
      { name: "Memory Maestro", date: "3 weeks ago", icon: "🧠", desc: "Memorized 25 random cards with loci method" }
    ],
    latestCoachFeedback: {
      coach: "Coach Ananya (National Speedcuber & Neuro Educator)",
      date: "Aug 18, 2026",
      comment: "Maya is performing at an exceptional level. Her F2L lookahead in speedcubing has shaved 8 seconds off her average this month. In logic class, her ability to deconstruct complex multi-variable problems has made her a natural team captain during group puzzle quests.",
      rating: 5
    }
  }
];

export const coachesData = [
  {
    name: "Coach Vikramaditya Rao",
    role: "Head of Chess & Strategic Game Theory",
    credentials: "FIDE Master & Certified Junior Arbiter • 12+ yrs training state champions",
    specialty: "Turning impulsive impulsive decisions into calm, deep calculation",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    badge: "FIDE Master"
  },
  {
    name: "Coach Ananya Deshmukh",
    role: "Lead Speedcubing & 3D Spatial Mentor",
    credentials: "National Speedcubing Medallist (Sub-9s) • Cognitive Neuropsychology MSc",
    specialty: "3D mental rotation, algorithmic muscle memory & rapid visual indexing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    badge: "Sub-9s Cuber"
  },
  {
    name: "Coach Rohan Malhotra",
    role: "Kinesthetic Flow & Bi-Lateral Movement Lead",
    credentials: "Flow Arts International Coach • Certified Sensory Integration Specialist",
    specialty: "Hemispheric brain synchronization through multi-prop juggling & rhythm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    badge: "Flow Arts Lead"
  },
  {
    name: "Dr. Sarah Al-Mansoor",
    role: "Child Cognitive Development Advisor",
    credentials: "PhD in Developmental Cognitive Neuroscience • Author of 'Play That Thinks'",
    specialty: "Curriculum pacing, neuroplasticity benchmarks & attention span expansion",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    badge: "Neuro Scientist"
  }
];

export const testimonialsData = [
  {
    parentName: "Dr. Priyamvada & Rohit Nair",
    childInfo: "Parents of Advait (Age 7)",
    program: "Explorer Track (Chess + Juggling + Cubing)",
    quote: "Advait used to struggle sitting still for more than 5 minutes for homework. 3 months into BrainSpark's juggling and chess sessions, his school teacher actually called to ask what changed! His concentration stamina and spatial math scores have skyrocketed.",
    rating: 5,
    highlight: "Focus span jumped from 5 mins to 40 mins"
  },
  {
    parentName: "Kavita Sunder",
    childInfo: "Mother of Rhea (Age 9)",
    program: "Master Track (Speedcubing & Logic Grids)",
    quote: "The Parent Dashboard gives me real data instead of vague feedback. Seeing her 3x3 solve time drop from 4 minutes to 48 seconds gave Rhea so much genuine confidence. She no longer fears complex math word problems at school.",
    rating: 5,
    highlight: "Overcame fear of difficult math problems"
  },
  {
    parentName: "Gaurav Mehta (Tech Director)",
    childInfo: "Father of Kabir (Age 11)",
    program: "Advanced Track (Chess & Game Theory)",
    quote: "BrainSpark is the antidote to mindless iPad scrolling. Kabir looks forward to his Saturday studio cohort more than any gaming console. The mentors treat kids with immense respect while challenging their cognitive limits.",
    rating: 5,
    highlight: "Replaced 8 hours of weekly screen time"
  }
];

export const pricingPlansData = [
  {
    id: "starter",
    name: "Spark Starter",
    badge: "Curiosity Tier",
    price: "$89",
    period: "/month",
    description: "Great for young beginners exploring their first cognitive discipline.",
    features: [
      "1 Core Discipline of choice (Chess or Juggling or Cubing)",
      "2 Sessions per week (60 mins each)",
      "Small cohort (Max 5 kids per mentor)",
      "Access to weekly friendly practice arena",
      "Standard monthly progress report",
      "BrainSpark welcome kit (Activity book & starter pack)"
    ],
    popular: false,
    cta: "Start with 1 Discipline"
  },
  {
    id: "all-rounder",
    name: "All-Rounder Thinker",
    badge: "Most Popular",
    price: "$149",
    period: "/month",
    description: "Our signature multi-disciplinary brain conditioning for complete cognitive growth.",
    features: [
      "3 Core Disciplines (e.g. Chess + Juggling + Speedcubing)",
      "3-4 Sessions per week (Flexible scheduling)",
      "Ultra-low 4:1 child-to-mentor mentorship ratio",
      "Full access to Live Parent Analytics Dashboard",
      "Monthly 1-on-1 Coach strategy review with parents",
      "Official tournament & speed league entry passes",
      "BrainSpark Pro Kit (Speedcube, juggling balls & chess set)"
    ],
    popular: true,
    cta: "Book Most Popular Plan"
  },
  {
    id: "grandmaster",
    name: "Grandmaster Genius",
    badge: "Elite Mastery",
    price: "$229",
    period: "/month",
    description: "Intensive 1-on-1 mentorship & competitive preparation for high-performing young minds.",
    features: [
      "All 6 Disciplines unlocked + Olympiad logic",
      "Dedicated 1-on-1 FIDE Master / Speedcuber Mentor",
      "Unlimited studio practice and open-arena drop-ins",
      "Advanced blindfolded memory & speedcubing coaching",
      "Priority tournament sponsorship & ranking coaching",
      "Bi-weekly live video deep-dive reviews with Dr. Sarah",
      "Executive BrainSpark Elite Tournament Kit"
    ],
    popular: false,
    cta: "Apply for Elite Cohort"
  }
];

export const faqsData = [
  {
    question: "What age is suitable for BrainSpark?",
    answer: "We have custom tailored programs for children aged 4 to 14+. Our BrainSpark Junior program (ages 4-6) uses story-based play, tactile puzzles, and 2-scarf juggling, while older cohorts tackle tournament chess, CFOP speedcubing, and advanced deduction logic."
  },
  {
    question: "Are classes conducted in-person or online?",
    answer: "We offer both! You can choose between our interactive physical studio cohorts (tactile hands-on tables, max 4-5 kids) or our high-energy live interactive online cohorts with multi-camera board views and digital puzzle software."
  },
  {
    question: "Why combine Chess with Juggling and Rubik's Cubes?",
    answer: "Neuroscience shows that true cognitive agility requires both analytical thinking (left brain - chess, sudoku) and spatial kinesthetic coordination (right brain & motor cortex - juggling, 3D cubes). Combining them builds stronger inter-hemispheric communication (corpus callosum), creating superior focus, spatial IQ, and emotional calm."
  },
  {
    question: "My child has never played chess or touched a Rubik's Cube. Can they join?",
    answer: "Absolutely! Over 70% of our students start with zero prior experience. Our coaches break every skill down into joyful, bite-sized micro-steps so children feel continuous small wins without frustration."
  },
  {
    question: "What happens during the Free Trial Session?",
    answer: "The 45-minute Free Trial is a playful diagnostic session. Your child interacts with our coach through a fun chess mini-game, tactile 3D cube rotation, and rhythm coordination test. At the end, parents receive a personalized Cognitive Agility Assessment and track recommendation."
  },
  {
    question: "How do parents track their child's progress?",
    answer: "Every enrolled family gets access to the BrainSpark Parent Portal. You can see real-time skill radar charts, attendance streaks, chess rating gains, puzzle solve times, and weekly personal voice/text notes from your child's coach."
  }
];

export type CourseDetail = {
  facts: { label: string; value: string }[];
  partsTitle: string;
  parts: { name: string; time: string; what: string }[];
  versions?: { name: string; text: string }[];
  marking: { title: string; criteria: string[] }[];
  scoreNote?: string;
  steps: { title: string; description: string }[];
  faq: { q: string; a: string }[];
  showBandGuide?: boolean;
};

export const courseDetails: Record<string, CourseDetail> = {
  ielts: {
    showBandGuide: true,
    facts: [
      { label: "Test length", value: "About 2 hr 45 min" },
      { label: "Sections", value: "4" },
      { label: "Score scale", value: "Band 1 to 9" },
      { label: "Versions", value: "Academic · General" },
    ],
    partsTitle: "Four sections, one overall band.",
    parts: [
      {
        name: "Listening",
        time: "30 minutes",
        what: "Four recordings, from everyday conversations to academic lectures, with 40 questions.",
      },
      {
        name: "Reading",
        time: "60 minutes",
        what: "Three sections with 40 questions in total. The texts differ between Academic and General Training.",
      },
      {
        name: "Writing",
        time: "60 minutes",
        what: "Two tasks. Task 1 needs at least 150 words and Task 2 at least 250 words. Task 2 carries more weight.",
      },
      {
        name: "Speaking",
        time: "11 to 14 minutes",
        what: "A live conversation with an examiner: an introduction, a short talk on a topic, and a discussion.",
      },
    ],
    versions: [
      {
        name: "IELTS Academic",
        text: "For higher education and professional registration. Writing Task 1 describes visual information such as a graph, chart or diagram.",
      },
      {
        name: "IELTS General Training",
        text: "For work experience, training programmes and migration. Writing Task 1 is a letter.",
      },
    ],
    marking: [
      {
        title: "Listening and Reading",
        criteria: [
          "Each section has 40 questions.",
          "Your correct answers are converted into a band from 1 to 9.",
        ],
      },
      {
        title: "Writing",
        criteria: [
          "Task achievement (Task 1) or task response (Task 2)",
          "Coherence and cohesion",
          "Lexical resource (vocabulary)",
          "Grammatical range and accuracy",
        ],
      },
      {
        title: "Speaking",
        criteria: [
          "Fluency and coherence",
          "Lexical resource (vocabulary)",
          "Grammatical range and accuracy",
          "Pronunciation",
        ],
      },
    ],
    scoreNote:
      "Your overall band is the average of the four section bands, rounded to the nearest half band.",
    steps: [
      {
        title: "Know the test",
        description: "Understand each section, the question types and how marks are awarded.",
      },
      {
        title: "Build the skills",
        description: "Strengthen listening, reading, writing and speaking with guided lessons.",
      },
      {
        title: "Practise with feedback",
        description: "Apply what you learn to exam-style tasks and get feedback you can act on.",
      },
      {
        title: "Review and refine",
        description: "Track your progress and focus on the areas that raise your band.",
      },
    ],
    faq: [
      {
        q: "How is IELTS scored?",
        a: "Each section receives a band from 1 to 9, and your overall band is the average of the four, rounded to the nearest half band.",
      },
      {
        q: "Academic or General Training: which one do I need?",
        a: "Academic is usually required for university study. General Training is usually used for work experience, training programmes and migration. Always check the requirement of the institution or authority you are applying to.",
      },
      {
        q: "How long does the test take?",
        a: "Listening, Reading and Writing take 2 hours 30 minutes together, on the same day without a break. Speaking takes 11 to 14 minutes and, depending on the test centre, can be on the same day or up to 7 days before or after.",
      },
      {
        q: "Is IELTS taken on paper or on a computer?",
        a: "Depending on the test centre, IELTS is available on paper or on a computer. Check the format offered when you book.",
      },
      {
        q: "Where do I check test dates and fees?",
        a: "They change, so check the official IELTS website at ielts.org before you book.",
      },
    ],
  },
  pte: {
    facts: [
      { label: "Test length", value: "About 2 hours" },
      { label: "Parts", value: "3" },
      { label: "Question types", value: "22" },
      { label: "Score scale", value: "10 to 90" },
    ],
    partsTitle: "Three parts, one computer-based test.",
    parts: [
      {
        name: "Speaking & Writing",
        time: "Part 1",
        what: "The longest part. Tasks include reading aloud, re-telling a lecture, summarising text and writing an essay. It includes two newer speaking tasks, Respond to a Situation and Summarize Group Discussion.",
      },
      {
        name: "Reading",
        time: "Part 2",
        what: "Fill-in-the-blanks and other tasks on written texts. Some tasks test reading and writing together.",
      },
      {
        name: "Listening",
        time: "Part 3",
        what: "Tasks based on audio, such as summarising spoken text, multiple-choice questions and choosing the correct summary.",
      },
    ],
    versions: [
      { name: "PTE Academic", text: "The version used for study and many professional purposes." },
      {
        name: "PTE Academic UKVI",
        text: "An approved version for UK visa applications that require a secure English test.",
      },
      {
        name: "PTE Core",
        text: "Designed for everyday English communication and Canadian immigration applications that require proof of English proficiency.",
      },
    ],
    marking: [
      {
        title: "Overall score",
        criteria: [
          "Reported on a scale from 10 to 90.",
          "Reflects your performance across all the tasks in the test.",
        ],
      },
      {
        title: "Communicative skills",
        criteria: [
          "Listening",
          "Reading",
          "Speaking",
          "Writing",
          "One task can count towards more than one skill.",
        ],
      },
      {
        title: "Enabling skills",
        criteria: [
          "Grammar",
          "Oral fluency",
          "Pronunciation",
          "Spelling",
          "Vocabulary",
          "Written discourse",
        ],
      },
    ],
    scoreNote:
      "PTE is primarily scored by AI, and your score report shows your overall score together with your skill scores.",
    steps: [
      {
        title: "Learn the question types",
        description: "Understand each task, its timing and how it is scored.",
      },
      {
        title: "Build speaking and writing",
        description: "Practise clear, fluent speech and well-structured written answers.",
      },
      {
        title: "Practise on screen",
        description: "Get used to answering exam-style tasks on a computer within the time limits.",
      },
      {
        title: "Review and refine",
        description: "Study your results and focus on the skills that lift your score.",
      },
    ],
    faq: [
      {
        q: "How is PTE scored?",
        a: "Your overall score is on a scale of 10 to 90. Your report also shows scores for Listening, Reading, Speaking and Writing, and for enabling skills such as grammar, fluency and pronunciation. The test is primarily scored by AI.",
      },
      {
        q: "How long is the PTE Academic test?",
        a: "Pearson describes it as about two hours, taken in one session on a computer. The exact time varies from one test form to another.",
      },
      {
        q: "What changed in the 2025 format?",
        a: "From August 2025, two new speaking tasks were added: Respond to a Situation and Summarize Group Discussion. Make sure any practice material you use is up to date.",
      },
      {
        q: "Do I speak to an examiner?",
        a: "No. Speaking is part of the computer-based test, with no separate face-to-face interview.",
      },
      {
        q: "Which PTE version do I need?",
        a: "Pearson offers PTE Academic, PTE Academic UKVI, PTE Core and PTE Home. The right one depends on the institution or authority you are applying to, so check their requirement before booking.",
      },
      {
        q: "Where do I check test dates and fees?",
        a: "They change, so check the official PTE website, pearsonpte.com, before you book.",
      },
    ],
  },

  toefl: {
    facts: [
      { label: "Test length", value: "About 2 hours" },
      { label: "Sections", value: "4" },
      { label: "Primary score scale", value: "1 to 6" },
      { label: "Test format", value: "Computer-based · Adaptive" },
    ],
    partsTitle: "Four skills, one academic English test.",
    parts: [
      {
        name: "Reading",
        time: "About 30 minutes",
        what: "Tasks include completing words, reading everyday materials and understanding academic passages. The section adapts to the test taker's performance.",
      },
      {
        name: "Listening",
        time: "About 29 minutes",
        what: "Tasks include choosing an appropriate response and understanding conversations, announcements and academic talks. The section adapts to the test taker's performance.",
      },
      {
        name: "Writing",
        time: "About 23 minutes",
        what: "Tasks include building sentences, writing an email and responding to an academic discussion prompt.",
      },
      {
        name: "Speaking",
        time: "About 8 minutes",
        what: "Tasks focus on listening and repeating spoken English, and responding to questions in an interview format.",
      },
    ],
    versions: [
      {
        name: "TOEFL iBT at a test centre",
        text: "Taken on a computer at an authorised TOEFL test centre. Check the official ETS website for current availability and booking requirements.",
      },
      {
        name: "TOEFL iBT Home Edition",
        text: "Taken on a computer at home under live human proctoring, subject to current ETS availability and requirements.",
      },
    ],
    marking: [
      {
        title: "Overall score",
        criteria: [
          "The updated score scale ranges from 1 to 6 in half-point increments.",
          "The overall score is based on the four section scores and rounded to the nearest half point.",
        ],
      },
      {
        title: "Academic reading and listening",
        criteria: [
          "Understanding written information and vocabulary in context",
          "Following conversations, announcements and academic talks",
          "Working accurately with adaptive test tasks",
        ],
      },
      {
        title: "Writing and speaking",
        criteria: [
          "Building clear, grammatically appropriate sentences",
          "Communicating ideas in written responses",
          "Speaking clearly and responding appropriately to interview questions",
        ],
      },
    ],
    scoreNote:
      "For tests taken from January 21, 2026, score reports use the 1–6 scale. During the two-year transition period, reports also include a comparable overall score on the 0–120 scale. Always check the current ETS score guidance.",
    steps: [
      {
        title: "Understand the current test",
        description:
          "Learn the updated task types, adaptive sections, test structure and scoring scale.",
      },
      {
        title: "Build the four skills",
        description:
          "Develop academic reading, listening comprehension, sentence construction, writing and spoken responses.",
      },
      {
        title: "Practise the task formats",
        description:
          "Work through relevant task types and become familiar with computer-based test instructions and timing.",
      },
      {
        title: "Review and refine",
        description:
          "Identify areas that need more practice and continue developing accuracy and clarity.",
      },
    ],
    faq: [
      {
        q: "How long does the TOEFL iBT take?",
        a: "ETS advises allowing approximately two hours. Actual test time and item counts can vary because the updated test adapts to performance.",
      },
      {
        q: "How is TOEFL iBT scored in 2026?",
        a: "From January 21, 2026, the four sections and overall score use a 1–6 scale in half-point increments. During the two-year transition period, a comparable overall score on the 0–120 scale is also provided.",
      },
      {
        q: "What are the TOEFL iBT sections?",
        a: "The test assesses Reading, Listening, Writing and Speaking. The updated format includes tasks such as completing words, reading everyday materials, writing emails, building sentences, listening and repeating, and responding in an interview.",
      },
      {
        q: "Is the TOEFL iBT adaptive?",
        a: "Yes. Under the format introduced on January 21, 2026, the Reading and Listening sections adapt to the test taker's performance. Timing and item counts may vary.",
      },
      {
        q: "Can I take TOEFL iBT at home?",
        a: "ETS offers the TOEFL iBT Home Edition under live human proctoring, subject to current availability and requirements. Check the official ETS website before booking.",
      },
      {
        q: "Where can I check official test details and fees?",
        a: "Test availability, booking requirements and fees can change. Check the official ETS TOEFL website for the latest information.",
      },
    ],
  },

  "spoken-english": {
    facts: [
      { label: "Course type", value: "Language training" },
      { label: "Learning focus", value: "Practical English communication" },
      { label: "Language framework", value: "CEFR (A1–C2)" },
      { label: "Core skills", value: "Speaking, listening, vocabulary and grammar" },
    ],

    partsTitle: "What you'll develop",

    parts: [
      {
        name: "Speaking & fluency",
        time: "Progressive practice",
        what: "Develop speaking fluency and practise everyday conversations and practical communication.",
      },
      {
        name: "Listening & understanding",
        time: "Progressive practice",
        what: "Build the ability to understand spoken English in everyday, social, academic and professional situations.",
      },
      {
        name: "Vocabulary & grammar",
        time: "Language fundamentals",
        what: "Strengthen vocabulary, grammar and sentence formation to express ideas more clearly.",
      },
      {
        name: "Pronunciation & expression",
        time: "Practical application",
        what: "Work towards clearer pronunciation, natural expression and effective interaction.",
      },
    ],

    marking: [
      {
        title: "Language development",
        criteria: [
          "Speaking fluency and clarity",
          "Listening comprehension",
          "Vocabulary and grammar control",
          "Pronunciation and natural expression",
          "Conversation and interaction",
        ],
      },
      {
        title: "CEFR proficiency framework",
        criteria: [
          "A1–A2: Basic language user",
          "B1–B2: Independent language user",
          "C1–C2: Proficient language user",
        ],
      },
    ],

    scoreNote:
      "The CEFR describes language proficiency from A1 to C2. These levels are a reference framework, not a claim that the institute's course awards an official CEFR certification.",

    steps: [
      {
        title: "Build your foundation",
        description: "Strengthen essential vocabulary, grammar and sentence formation.",
      },
      {
        title: "Practise understanding",
        description:
          "Develop listening skills and learn to follow spoken English in different situations.",
      },
      {
        title: "Develop fluency",
        description: "Practise conversations, pronunciation and expressing ideas clearly.",
      },
      {
        title: "Communicate independently",
        description:
          "Work towards using English more effectively in everyday, academic and professional interactions.",
      },
    ],

    faq: [
      {
        q: "Who can benefit from Spoken English training?",
        a: "It is intended for learners who want to improve everyday communication, strengthen language fundamentals or develop English skills for study, work and professional interaction.",
      },
      {
        q: "What skills does the course focus on?",
        a: "The stated learning areas include speaking fluency, listening comprehension, vocabulary, grammar, sentence formation, pronunciation and practical communication.",
      },
      {
        q: "What is the CEFR?",
        a: "The Common European Framework of Reference for Languages describes language proficiency across six levels, from A1 beginner to C2 proficient user.",
      },
      {
        q: "How long does it take to improve spoken English?",
        a: "Progress varies with your starting level, practice and learning needs. Please contact the institute for its current course duration and guidance.",
      },
      {
        q: "What are the fees and batch timings?",
        a: "Please contact The Howards Council directly for current fees, available batches and timings.",
      },
    ],
  },

  "interview-preparation": {
    facts: [
      { label: "Course type", value: "Interview and communication skills" },
      { label: "Learning focus", value: "Professional communication and interview preparation" },
      { label: "Practice format", value: "Question practice and mock interviews" },
      { label: "Core skills", value: "Speaking, self-presentation and confidence" },
    ],

    partsTitle: "Prepare to present yourself with confidence.",

    parts: [
      {
        name: "Self-introduction",
        time: "Practical practice",
        what: "Structure a clear, relevant introduction that communicates your background, strengths and goals.",
      },
      {
        name: "Interview questions",
        time: "Guided practice",
        what: "Practise organising answers to common interview questions using clear examples and relevant details.",
      },
      {
        name: "Professional communication",
        time: "Communication practice",
        what: "Work on clear speaking, listening, appropriate language and expressing ideas professionally.",
      },
      {
        name: "Mock interviews",
        time: "Practice sessions",
        what: "Apply your learning through simulated interview questions and review areas for improvement.",
      },
    ],

    marking: [
      {
        title: "Communication",
        criteria: [
          "Clarity and structure of answers",
          "Speaking fluency and expression",
          "Relevance of examples and explanations",
        ],
      },
      {
        title: "Professional presentation",
        criteria: [
          "Self-introduction and personal presentation",
          "Listening and responding appropriately",
          "Body language and interview etiquette",
        ],
      },
    ],

    steps: [
      {
        title: "Understand your strengths",
        description:
          "Identify your relevant skills, experience and the qualities you want to communicate.",
      },
      {
        title: "Build structured answers",
        description:
          "Practise presenting your ideas clearly and supporting answers with relevant examples.",
      },
      {
        title: "Improve your presentation",
        description:
          "Develop professional speaking habits and become more aware of non-verbal communication.",
      },
      {
        title: "Practise and refine",
        description:
          "Use mock interviews and feedback to identify areas that need further practice.",
      },
    ],

    faq: [
      {
        q: "Who can benefit from interview preparation?",
        a: "Students, job seekers and professionals who want to improve their interview communication and professional presentation may benefit from this training.",
      },
      {
        q: "What skills can I practise?",
        a: "Suggested areas include self-introduction, structured answers, professional communication, body language, interview etiquette and mock interviews.",
      },
      {
        q: "Will I get mock interview practice?",
        a: "Mock interviews are a suggested part of this course structure. Confirm the actual practice format with The Howards Council before publishing this information.",
      },
      {
        q: "What are the course fees and timings?",
        a: "Please contact The Howards Council directly for current fees, available batches and timings.",
      },
    ],
  },
};

import ielts from "@/assets/photos/ielts.jpg";
import pte from "@/assets/photos/pte.jpg";
import toefl from "@/assets/photos/toefl.jpg";
import celpip from "@/assets/photos/celpip.jpg";
import spokenEnglish from "@/assets/photos/spoken-english.jpg";
import businessEnglish from "@/assets/photos/business-english.jpg";
import german from "@/assets/photos/german.jpg";
import spanish from "@/assets/photos/spanish.jpg";
import french from "@/assets/photos/french.jpg";
import personalityDevelopment from "@/assets/photos/personality-development.jpg";

export const photos = {
  ielts: ielts,
  pte: pte,
  toefl: toefl,
  celpip: celpip,
  spokenEnglish: spokenEnglish,
  businessEnglish: businessEnglish,
  german: german,
  spanish: spanish,
  french: french,
  personalityDevelopment: personalityDevelopment,
};
const classroomFiles = import.meta.glob("/src/assets/classroom/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
export const classroomPhotos = Object.entries(classroomFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src], i) => ({
    src,
    alt: `Classroom training at The Howards Council, photo ${i + 1}`,
  }));

const mentorFiles = import.meta.glob("/src/assets/mentor/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
export const mentor = {
  name: "Saurabh Sharma",
  photo: Object.values(mentorFiles)[0] ?? null,
};
export const phone = "+919997756675";
export const phoneLabel = "+91 99977 56675";
export const whatsapp = (message: string) =>
  `https://wa.me/919997756675?text=${encodeURIComponent(message)}`;
type RoadmapStep = {
  title: string;
  description: string;
};
type Course = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  overview: string;
  audience: string;
  covered: string[];
  roadmap?: RoadmapStep[];
};
export const courses: Course[] = [
  {
    slug: "ielts",

    name: "IELTS",

    category: "Test preparation",

    tagline: "Prepare with purpose. Aim for your target band.",

    image: photos.ielts,

    overview:
      "IELTS (International English Language Testing System) is an internationally recognised English language proficiency test designed to assess how effectively a candidate can communicate in English. The test evaluates Listening, Reading, Writing and Speaking. IELTS can be taken on computer, and IELTS (Writing on Paper) also allows test takers to complete the Writing section by hand on paper while taking Listening and Reading on computer. Speaking remains a face-to-face interview with an expert examiner. IELTS is widely used for study, work and migration, depending on the requirements of the relevant organisation or authority.",

    audience:
      "For students, professionals and other candidates preparing for IELTS Academic or General Training for study, work, professional registration or migration, depending on the requirements of the relevant institution or authority.",

    covered: [
      "Listening & Reading — completed on computer",
      "Writing — choose computer or handwritten on paper",
      "Speaking — face-to-face interview with an examiner",
      "Academic & General Training test formats",
      "Same IELTS content, scoring and global acceptance across formats",

      "Test-day strategies and preparation for each section",
    ],

    roadmap: [
      {
        title: "Understand the test",
        description:
          "Learn the four IELTS skills, the test format and the requirements of your chosen test type.",
      },
      {
        title: "Build core skills",
        description: "Work on Listening, Reading, Writing and Speaking through focused practice.",
      },
      {
        title: "Practise question types",
        description:
          "Become familiar with common task formats and develop clear response strategies.",
      },
      {
        title: "Review and improve",
        description: "Use practice and feedback to identify areas for improvement before test day.",
      },
    ],
  },

  {
    slug: "pte",

    name: "PTE",

    category: "Test preparation",

    tagline: "Get confident with the computer-based test.",

    image: photos.pte,

    overview:
      "PTE Academic is a computer-based English language proficiency test designed to assess a candidate's ability to communicate effectively in English for academic and international purposes. It assesses Speaking, Writing, Reading and Listening through integrated computer-based tasks, with question types designed around academic and real-life communication. The test is divided into three main parts — Speaking & Writing, Reading and Listening — and is completed in a single test session.",

    audience:
      "For students, professionals and other candidates preparing for PTE Academic for study, work or migration purposes, depending on the requirements of the university, organisation or relevant authority.",

    covered: [
      "Speaking & Writing — 76–84 minutes, 9 question types",
      "Reading — 23–30 minutes, 5 question types",
      "Listening — 31–39 minutes, 8 question types",
      "Integrated Speaking, Writing, Reading and Listening tasks",
      "Computer-based question formats and timing",
      "Test strategies, practice and response techniques",
    ],
  },
  {
    slug: "toefl",

    name: "TOEFL",

    category: "Test preparation",

    tagline: "Build the academic English you need.",

    image: photos.toefl,

    overview:
      "TOEFL iBT is an English language proficiency test designed to measure the academic English skills needed for communication in higher-education environments. The test evaluates four core areas — Reading, Listening, Writing and Speaking — using tasks that reflect academic, classroom and everyday university contexts. The current TOEFL iBT uses a multistage adaptive format for Reading and Listening, allowing the test experience to adjust according to a candidate's performance. The test takes approximately two hours, although the exact number of questions and timing can vary.",

    audience:
      "For students and other candidates preparing to demonstrate their English language ability for universities, higher education and other academic environments where TOEFL iBT scores are accepted.",

    covered: [
      "Reading — adaptive tasks including everyday and academic texts",
      "Listening — conversations, announcements and academic talks",
      "Writing — sentence building, email and academic discussion tasks",
      "Speaking — listen-and-repeat and interview tasks",
      "Computer-based test format and adaptive sections",
      "Academic English strategies, task practice and timed preparation",
    ],
  },
  {
    slug: "spoken-english",

    name: "Spoken English",

    category: "Language training",

    tagline: "Speak clearly. Communicate with confidence.",

    image: photos.spokenEnglish,

    overview:
      "Spoken English training focuses on developing the practical communication skills needed to understand and use English effectively in everyday, social, academic and professional situations. Language proficiency can be understood through the Common European Framework of Reference for Languages (CEFR), which describes progression from A1 beginner to C2 proficient user. As learners progress, they develop greater control over vocabulary, grammar, pronunciation, fluency and interaction, allowing them to communicate with increasing confidence and independence.",

    audience:
      "For learners who want to improve their everyday English communication, build speaking confidence, strengthen their language fundamentals or develop the English skills needed for study, work and professional interaction.",

    covered: [
      "Speaking fluency and everyday conversation",
      "Listening and understanding spoken English",
      "Vocabulary, grammar and sentence formation",
      "Pronunciation, clarity and natural expression",
      "Conversation, interaction and practical communication",
      "Progressive development from foundational to advanced levels",
    ],
  },
  {
    slug: "celpip",

    name: "CELPIP",

    category: "Test preparation",

    tagline: "Build practical English for real-world communication.",

    image: photos.celpip,

    overview:
      "CELPIP (Canadian English Language Proficiency Index Program) is a computer-delivered English language proficiency test that assesses Listening, Reading, Writing and Speaking. The CELPIP-General Test is designed around English used in everyday social, educational and workplace situations and is completed in a single test sitting. The test measures all four language skills through practical, real-life communication tasks and is used for purposes including Canadian immigration, professional designation and admission to certain educational programs, depending on the requirements of the relevant organisation or authority.",

    audience:
      "For candidates preparing to demonstrate English proficiency for Canadian immigration, professional purposes or educational opportunities where CELPIP scores are accepted.",

    covered: [
      "Listening — 46–55 minutes across 6 sections",
      "Reading — 43–56 minutes across 4 sections",
      "Writing — 53 minutes across 2 tasks",
      "Speaking — 15 minutes across 8 tasks",
      "Computer-delivered test format and timing",
      "Real-life communication tasks and test strategies",
    ],
  },
  {
    slug: "business-english",

    name: "Business English",

    category: "Language training",

    tagline: "Communicate clearly and professionally at work.",

    image: photos.businessEnglish,

    overview:
      "Business English focuses on developing the English communication skills needed in professional and workplace environments. It goes beyond general vocabulary by helping learners communicate more effectively with colleagues, clients and other professional contacts through practical situations such as meetings, presentations, interviews, workplace conversations and written communication. A structured approach to language development can be aligned with CEFR proficiency levels, helping learners build greater accuracy, fluency and confidence as their professional communication needs grow.",

    audience:
      "For students, professionals, job seekers and working individuals who want to improve their English for interviews, workplace communication, professional relationships and international business environments.",

    covered: [
      "Professional speaking and workplace conversations",
      "Business vocabulary and professional expressions",
      "Meetings, presentations and discussions",
      "Professional emails and written communication",
      "Interview and workplace communication practice",
      "Listening and communication skills for professional settings",
    ],
  },
  {
    slug: "german",

    name: "German",

    category: "Language training",

    tagline: "Build your German, level by level.",

    image: photos.german,

    overview:
      "German is taught through a structured progression of language proficiency based on the Common European Framework of Reference for Languages (CEFR), ranging from A1 for beginners to C2 for highly proficient users. As learners progress through these levels, they develop their ability to understand, speak, read and write German with increasing independence and accuracy. The Goethe-Institut offers internationally recognised German examinations corresponding to CEFR levels from A1 to C2, providing formal proof of German language proficiency for a range of academic, professional and other purposes.",

    audience:
      "For learners starting German from the beginner level as well as students, professionals and other candidates working toward a specific CEFR level or preparing for a recognised German language examination.",

    covered: [
      "A1–C2 CEFR language progression",
      "German speaking and everyday communication",
      "Reading, listening and written communication",
      "Grammar, vocabulary and pronunciation",
      "Level-focused practice and assessment",
      "Preparation for recognised German language examinations",
    ],
  },
  {
    slug: "spanish",

    name: "Spanish",

    category: "Language training",

    tagline: "Learn Spanish with a clear path from A1 to C2.",

    image: photos.spanish,

    overview:
      "Spanish is a widely spoken international language that can be developed through a structured progression based on the Common European Framework of Reference for Languages (CEFR), from A1 beginner to C2 advanced proficiency. As learners progress through these levels, they build the ability to understand and communicate in Spanish across personal, social, educational and professional situations. The Instituto Cervantes administers the DELE examinations, official Spanish qualifications covering the six CEFR levels from A1 to C2, providing formal recognition of Spanish language proficiency.",

    audience:
      "For learners beginning Spanish as well as students, professionals and other candidates who want to develop their Spanish communication skills or work toward a recognised CEFR level and Spanish language qualification.",

    covered: [
      "A1–C2 CEFR language progression",
      "Spanish speaking and everyday communication",
      "Reading and listening comprehension",
      "Writing and written interaction",
      "Grammar, vocabulary and pronunciation",
      "Preparation for recognised Spanish language examinations",
    ],
  },
  {
    slug: "french",

    name: "French",

    category: "Language training",

    tagline: "Build your French with a clear path from A1 to C2.",

    image: photos.french,

    overview:
      "French is an internationally spoken language that can be developed through a structured progression based on the Common European Framework of Reference for Languages (CEFR), from A1 beginner to C2 advanced proficiency. As learners progress, they develop their ability to understand and communicate in French across everyday, academic and professional situations. France Éducation international administers the DELF and DALF diplomas, which provide official recognition of French language proficiency across the different CEFR levels.",

    audience:
      "For learners beginning French as well as students, professionals and other candidates who want to develop their French communication skills or work toward a recognised CEFR level and French language qualification.",

    covered: [
      "A1–C2 CEFR language progression",
      "French speaking and everyday communication",
      "Listening and reading comprehension",
      "Written and oral communication",
      "Grammar, vocabulary and pronunciation",
      "Preparation for recognised French language examinations",
    ],
  },
  {
    slug: "personality-development",

    name: "Personality Development",

    category: "Personal development",

    tagline: "Build confidence. Communicate with greater impact.",

    image: photos.personalityDevelopment,

    overview:
      "Personality development focuses on strengthening the personal and interpersonal skills that influence how individuals communicate, present themselves and interact with others. It can include areas such as communication, confidence, self-expression, interpersonal awareness and professional behaviour. Developing these skills can help learners become more comfortable in conversations, presentations, interviews and other situations where clear communication and a confident presence are important.",

    audience:
      "For students, job seekers, professionals and individuals who want to improve their communication, confidence, interpersonal skills and overall professional presence.",

    covered: [
      "Communication and self-expression",
      "Confidence and interpersonal interaction",
      "Public speaking and presentation practice",
      "Interview and professional communication skills",
      "Body language and professional presence",
      "Practical activities for personal and social development",
    ],
  },
] as const;

export const address = "618, Near Shiv Mandir, Begum Bagh, Meerut, Uttar Pradesh 250001, India";
const place = encodeURIComponent(`The Howards Council ${address}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place}`;

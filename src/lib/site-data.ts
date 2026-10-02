import hero from "@/assets/photos/hero.jpg";
import classroom from "@/assets/photos/classroom.jpg";
import campus from "@/assets/photos/campus.jpg";
import language from "@/assets/photos/language.jpg";
import lesson from "@/assets/photos/lesson.jpg";
import study from "@/assets/photos/study.jpg";
import business from "@/assets/photos/business.jpg";
import galleryOne from "@/assets/photos/gallery-one.jpg";
import galleryTwo from "@/assets/photos/gallery-two.jpg";
import galleryThree from "@/assets/photos/gallery-three.jpg";

export const photos = {
  hero: hero,
  classroom: classroom,
  campus: campus,
  language: language,
  lesson: lesson,
  study: study,
  business: business,
  galleryOne: galleryOne,
  galleryTwo: galleryTwo,
  galleryThree: galleryThree,
};
export const phone = "+919997756675";
export const phoneLabel = "099977 56675";
export const whatsapp = (message: string) =>
  `https://wa.me/919997756675?text=${encodeURIComponent(message)}`;
export const courses = [
  {
    slug: "ielts",
    name: "IELTS",
    category: "Test preparation",
    tagline: "Make every band count.",
    image: photos.study,
    overview:
      "Build confidence in every part of the Academic or General Training test with structured practice and feedback.",
    audience:
      "For students planning to study overseas and applicants preparing for work or migration.",
    covered: [
      "Listening and reading strategies",
      "Writing Task 1 and Task 2",
      "Speaking practice and feedback",
      "Timed practice tests",
    ],
  },
  {
    slug: "pte",
    name: "PTE",
    category: "Test preparation",
    tagline: "Get ready for the computer-based test.",
    image: photos.lesson,
    overview:
      "Targeted PTE Academic preparation with practice across speaking, writing, reading and listening.",
    audience: "For students and applicants who prefer a computer-based English test.",
    covered: [
      "Speaking fluency and pronunciation",
      "Writing and summarising",
      "Reading and listening tasks",
      "Practice tests and feedback",
    ],
  },
  {
    slug: "toefl",
    name: "TOEFL",
    category: "Test preparation",
    tagline: "Prepare for what comes next.",
    image: photos.campus,
    overview:
      "Develop the academic English skills and test-day strategies needed for the TOEFL iBT.",
    audience: "For students applying to universities that accept or prefer TOEFL.",
    covered: [
      "Academic reading",
      "Listening and note-taking",
      "Integrated writing tasks",
      "Speaking practice and mocks",
    ],
  },
  {
    slug: "celpip",
    name: "CELPIP",
    category: "Test preparation",
    tagline: "Feel ready for every section.",
    image: photos.hero,
    overview:
      "Practical preparation for the CELPIP General test, with everyday English and exam-format practice.",
    audience: "For applicants preparing for Canadian permanent residence or citizenship.",
    covered: [
      "Listening and reading",
      "Writing tasks",
      "Speaking prompts",
      "Practice tests and review",
    ],
  },
  {
    slug: "spoken-english",
    name: "Spoken English",
    category: "Languages & skills",
    tagline: "Find your voice in English.",
    image: photos.language,
    overview:
      "Build everyday confidence through guided conversation, vocabulary and regular speaking practice.",
    audience: "For learners who want to speak more naturally at work, in class or in daily life.",
    covered: [
      "Conversation practice",
      "Pronunciation and fluency",
      "Useful everyday vocabulary",
      "Listening and confidence",
    ],
  },
  {
    slug: "business-english",
    name: "Business English",
    category: "Languages & skills",
    tagline: "Speak with confidence at work.",
    image: photos.business,
    overview:
      "Communicate clearly and professionally in workplace conversations and written communication.",
    audience: "For professionals and job seekers who use English at work.",
    covered: [
      "Meetings and presentations",
      "Email and workplace writing",
      "Interview preparation",
      "Professional conversation",
    ],
  },
  {
    slug: "german",
    name: "German",
    category: "Languages & skills",
    tagline: "Open a new world of conversation.",
    image: photos.galleryOne,
    overview:
      "Start speaking, reading and understanding German with an approachable, structured learning path.",
    audience: "For beginners and learners exploring study, travel or work opportunities.",
    covered: [
      "Speaking and pronunciation",
      "Vocabulary and grammar",
      "Listening and reading",
      "Everyday conversation",
    ],
  },
  {
    slug: "spanish",
    name: "Spanish",
    category: "Languages & skills",
    tagline: "Say more in Spanish.",
    image: photos.galleryTwo,
    overview: "Learn practical Spanish in supportive classes focused on real communication.",
    audience: "For beginners and anyone interested in language, travel or personal growth.",
    covered: [
      "Pronunciation and conversation",
      "Everyday vocabulary",
      "Grammar foundations",
      "Listening and reading",
    ],
  },
  {
    slug: "personality-development",
    name: "Personality Development",
    category: "Languages & skills",
    tagline: "Show up as your best self.",
    image: photos.galleryThree,
    overview:
      "Strengthen communication, confidence and the way you present yourself in everyday and professional settings.",
    audience: "For students, job seekers and professionals looking to build confidence.",
    covered: ["Public speaking", "Body language", "Interview confidence", "Communication skills"],
  },
] as const;
export const galleryPhotos = [
  photos.classroom,
  photos.lesson,
  photos.study,
  photos.language,
  photos.galleryOne,
  photos.galleryTwo,
  photos.galleryThree,
  photos.business,
  photos.campus,
];

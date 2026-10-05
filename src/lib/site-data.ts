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
    tagline: "Prepare with purpose. Aim for your target band.",
    image: photos.study,
    overview:
      "Prepare for IELTS with focused practice across Listening, Reading, Writing and Speaking, supported by feedback, strategy and regular test practice.",
    audience:
      "For students and professionals preparing for study, work or migration through IELTS Academic or General Training.",
    covered: [
      "Listening and Reading strategies",
      "Academic & General Training Writing",
      "Speaking practice and feedback",
      "Timed mock tests",
    ],
  },
  {
    slug: "pte",
    name: "PTE",
    category: "Test preparation",
    tagline: "Get confident with the computer-based test.",
    image: photos.lesson,
    overview:
      "Build the skills and test familiarity needed for PTE Academic through targeted practice in Speaking & Writing, Reading and Listening.",
    audience:
      "For students and applicants looking for a computer-based English proficiency test for study or other international goals.",
    covered: [
      "Speaking & Writing task practice",
      "Reading strategies",
      "Listening & note-taking",
      "Timed computer-based practice",
    ],
  },
  {
    slug: "toefl",
    name: "TOEFL",
    category: "Test preparation",
    tagline: "Build the academic English you need.",
    image: photos.campus,
    overview:
      "Prepare for TOEFL iBT with focused practice in academic Reading, Listening, Writing and Speaking, along with strategies for the current test format.",
    audience:
      "For students preparing to demonstrate English proficiency for university and academic environments.",
    covered: [
      "Academic Reading & Listening",
      "Speaking practice",
      "Academic Writing",
      "Current-format mock practice",
    ],
  },
  {
    slug: "celpip",
    name: "CELPIP",
    category: "Test preparation",
    tagline: "Prepare for English in real-world situations.",
    image: photos.hero,
    overview:
      "Build practical English skills for the CELPIP General test with focused preparation across Listening, Reading, Writing and Speaking.",
    audience:
      "For applicants preparing to demonstrate English proficiency for Canadian permanent residence, citizenship or other eligible purposes.",
    covered: [
      "Listening & Reading strategies",
      "Email and written-response practice",
      "Speaking task practice",
      "Full-length practice tests",
    ],
  },
  {
    slug: "spoken-english",
    name: "Spoken English",
    category: "Languages & skills",
    tagline: "Speak more clearly. Communicate with confidence.",
    image: photos.language,
    overview:
      "Build practical English for everyday conversations through guided speaking, listening, vocabulary and pronunciation practice.",
    audience:
      "For learners who want to communicate more naturally and confidently in daily life, education or work.",
    covered: [
      "Everyday conversation",
      "Pronunciation & fluency",
      "Practical vocabulary",
      "Listening & speaking confidence",
    ],
  },
  {
    slug: "business-english",
    name: "Business English",
    category: "Languages & skills",
    tagline: "Communicate with confidence at work.",
    image: photos.business,
    overview:
      "Develop the English needed for meetings, presentations, professional conversations, interviews and workplace writing.",
    audience:
      "For professionals, students and job seekers who want to communicate more effectively in professional settings.",
    covered: [
      "Meetings & presentations",
      "Professional emails & writing",
      "Interviews & networking",
      "Workplace communication",
    ],
  },
  {
    slug: "german",
    name: "German",
    category: "Languages & skills",
    tagline: "Start speaking German with confidence.",
    image: photos.galleryOne,
    overview:
      "Build a practical foundation in German through structured lessons covering pronunciation, vocabulary, grammar and everyday communication.",
    audience:
      "For beginners and learners preparing for study, work, travel or personal language goals.",
    covered: [
      "Pronunciation & speaking",
      "Vocabulary & grammar",
      "Reading & listening",
      "Everyday conversation",
    ],
  },
  {
    slug: "spanish",
    name: "Spanish",
    category: "Languages & skills",
    tagline: "Learn Spanish for real conversations.",
    image: photos.galleryTwo,
    overview:
      "Develop a practical foundation in Spanish through guided speaking, vocabulary, grammar, listening and everyday communication.",
    audience:
      "For beginners and learners interested in travel, study, work or learning a new language.",
    covered: [
      "Pronunciation & conversation",
      "Everyday vocabulary",
      "Grammar foundations",
      "Listening & reading",
    ],
  },
  {
    slug: "personality-development",
    name: "Personality Development",
    category: "Languages & skills",
    tagline: "Build confidence that shows.",
    image: photos.galleryThree,
    overview:
      "Develop communication, presentation and interpersonal skills that help you express yourself with greater confidence in academic and professional situations.",
    audience:
      "For students, job seekers and professionals looking to strengthen communication and personal confidence.",
    covered: ["Public speaking", "Body language", "Interview skills", "Communication confidence"],
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
export const address = "618, Shiv Mandir Lane, Begum Bagh, Meerut, Uttar Pradesh 250001";
const place = encodeURIComponent(`The Howards Council ${address}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place}`;

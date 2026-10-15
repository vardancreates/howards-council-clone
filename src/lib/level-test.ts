export type Question = { q: string; options: string[]; answer: number };

export const GOALS = [
  { label: "Prepare for IELTS", course: "ielts" },
  { label: "Prepare for PTE", course: "pte" },
  { label: "Prepare for TOEFL", course: "toefl" },
  { label: "Prepare for CELPIP", course: "celpip" },
  { label: "Speak English fluently", course: "spoken-english" },
  { label: "English for work", course: "business-english" },
  { label: "Interview and personality skills", course: "personality-development" },
  { label: "Learn German, Spanish or French", course: "" },
] as const;

// Ordered from easiest to hardest.
export const QUESTIONS: Question[] = [
  { q: "My name ___ Ravi.", options: ["am", "is", "are", "be"], answer: 1 },
  { q: "They ___ from Meerut.", options: ["is", "am", "are", "be"], answer: 2 },
  { q: "I ___ breakfast at 8 o'clock every day.", options: ["have", "has", "having", "am have"], answer: 0 },
  { q: "She ___ to the market yesterday.", options: ["go", "goes", "went", "gone"], answer: 2 },
  { q: "There isn't ___ milk in the fridge.", options: ["some", "any", "a", "many"], answer: 1 },
  { q: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "would stay", "stayed"], answer: 1 },
  { q: "I have lived in this city ___ 2015.", options: ["for", "from", "since", "by"], answer: 2 },
  { q: "He asked me where ___.", options: ["did I live", "I lived", "do I live", "I live"], answer: 1 },
  { q: "By the time we arrived, the film ___.", options: ["started", "was starting", "had already started", "has started"], answer: 2 },
  { q: "I wish I ___ more time to prepare.", options: ["have", "had", "would have", "having"], answer: 1 },
  { q: "Hardly ___ the office when it started to rain.", options: ["she had left", "had she left", "did she leave", "she left"], answer: 1 },
  { q: "The report, ___ was published last week, has drawn criticism.", options: ["that", "which", "what", "who"], answer: 1 },
];

export const LEVELS = [
  { min: 0, name: "Beginner", note: "You are building the basics. A structured course will move you quickly." },
  { min: 4, name: "Intermediate", note: "You can handle everyday English. Practice and feedback will take you further." },
  { min: 8, name: "Upper-Intermediate", note: "You communicate well. Targeted preparation will sharpen accuracy and range." },
  { min: 11, name: "Advanced", note: "Your English is strong. Focus on test strategy and polish." },
] as const;

export function levelFor(score: number) {
  return [...LEVELS].reverse().find((l) => score >= l.min) ?? LEVELS[0];
}
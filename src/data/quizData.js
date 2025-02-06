export const quizStructure = {
  levels: {
    beginner: {
      name: "Beginner",
      questionsPerRound: 5,
      timeLimit: 300, // seconds
      passingScore: 60
    },
    intermediate: {
      name: "Intermediate",
      questionsPerRound: 10,
      timeLimit: 450,
      passingScore: 70
    },
    advanced: {
      name: "Advanced",
      questionsPerRound: 15,
      timeLimit: 600,
      passingScore: 80
    }
  },
  categories: [
    "Physical Impairments",
    "Visual Impairments",
    "Intellectual Impairments",
    "Classification Process",
    "Paralympic History"
  ]
}; 
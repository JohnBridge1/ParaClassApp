export const disabilityData = {
  visual: {
    id: "visual",
    title: "T/F11-13",
    description: "Visual Impairments",
    color: "bg-blue-500",
    details: "Athletes with visual impairments compete in three sport classes: T/F11, T/F12, and T/F13. T11 athletes have very low visual acuity and/or no light perception. T12 athletes have limited visual acuity and/or visual field radius of less than 5 degrees. T13 athletes have the least severe visual impairment eligible for Paralympic sport.",
    questions: [
      {
        question: "What is the classification T11-13 primarily used for in Paralympics?",
        options: [
          "Intellectual impairments",
          "Visual impairments",
          "Physical impairments",
          "Hearing impairments"
        ],
        correctAnswer: 1,
        explanation: "T11-13 classifications are used for athletes with visual impairments, where T11 represents complete or near complete blindness, T12 severe visual impairment, and T13 moderate visual impairment."
      },
      {
        question: "Which class represents athletes with the most severe visual impairment?",
        options: [
          "T11",
          "T12",
          "T13",
          "T14"
        ],
        correctAnswer: 0,
        explanation: "T11 athletes have the most severe visual impairment, with very low visual acuity and/or no light perception. They compete with mandatory guides and blindfolds."
      },
      {
        question: "What special accommodation is required for T11 athletes in track events?",
        options: [
          "Wheelchair",
          "Guide runner and blindfold",
          "Special shoes",
          "No special accommodation"
        ],
        correctAnswer: 1,
        explanation: "T11 athletes must compete with a guide runner and wear blindfolds during competition to ensure fair competition."
      }
    ]
  },
  intellectual: {
    id: "intellectual",
    title: "T/F20",
    description: "Intellectual Impairments",
    color: "bg-green-500",
    details: "The T/F20 classification is for athletes with intellectual impairments. These athletes have limitations in intellectual functioning and adaptive behavior which must be diagnosed before the age of 18.",
    questions: [
      {
        question: "What characterizes the T20 classification in Paralympics?",
        options: [
          "Visual impairment",
          "Intellectual impairment",
          "Physical impairment",
          "Hearing impairment"
        ],
        correctAnswer: 1,
        explanation: "T20 classification is specifically for athletes with intellectual impairments who meet specific criteria related to cognitive function."
      },
      {
        question: "When must an intellectual impairment be diagnosed to qualify for T20?",
        options: [
          "Before age 18",
          "Before age 21",
          "At any age",
          "Before first competition"
        ],
        correctAnswer: 0,
        explanation: "To qualify for T20 classification, the intellectual impairment must be diagnosed before the age of 18."
      },
      {
        question: "Which areas are assessed for T20 classification?",
        options: [
          "Only physical ability",
          "Only IQ testing",
          "Intellectual functioning and adaptive behavior",
          "Only sports performance"
        ],
        correctAnswer: 2,
        explanation: "T20 classification assesses both intellectual functioning and adaptive behavior to determine eligibility."
      }
    ]
  },
  coordination: {
    id: "coordination",
    title: "T/F31-38",
    description: "Coordination Impairments",
    color: "bg-purple-500",
    details: "Classes T/F31-38 are for athletes with coordination impairments such as hypertonia, ataxia and athetosis. These conditions typically result from cerebral palsy, brain injury or similar neurological conditions.",
    questions: [
      // Add coordination impairment questions
    ]
  },
  // Add more categories with their respective details and questions
}; 
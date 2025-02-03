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
      {
        question: "What types of impairments are classified in the T31-38 category?",
        options: [
          "Visual impairments",
          "Intellectual impairments",
          "Coordination impairments (hypertonia, ataxia, athetosis)",
          "Amputation"
        ],
        correctAnswer: 2,
        explanation: "T31-38 classifications are specifically for athletes with coordination impairments, including conditions like hypertonia, ataxia, and athetosis, often resulting from cerebral palsy or brain injury."
      },
      {
        question: "Which condition is commonly associated with T31-38 classifications?",
        options: [
          "Cerebral palsy",
          "Multiple sclerosis",
          "Spinal cord injury",
          "Muscular dystrophy"
        ],
        correctAnswer: 0,
        explanation: "Cerebral palsy is one of the most common conditions associated with T31-38 classifications, as it typically affects coordination and muscle control."
      },
      {
        question: "What is hypertonia?",
        options: [
          "Decreased muscle tension",
          "Increased muscle tension and reduced ability to stretch",
          "Loss of muscle control",
          "Involuntary movements"
        ],
        correctAnswer: 1,
        explanation: "Hypertonia is a condition characterized by increased muscle tension and reduced ability to stretch. This affects movement control and coordination in athletes."
      }
    ]
  },
  shortStature: {
    id: "shortStature",
    title: "T/F40-41",
    description: "Short Stature",
    color: "bg-yellow-500",
    details: "Classes T/F40-41 are for athletes with short stature. T40 includes athletes with more significant impacts on limb length, while T41 includes athletes with less severe short stature.",
    questions: [
      {
        question: "What is the main characteristic of athletes in T40-41 classes?",
        options: [
          "Visual impairment",
          "Short stature",
          "Limb deficiency",
          "Coordination impairment"
        ],
        correctAnswer: 1,
        explanation: "T40-41 classifications are specifically for athletes with short stature, which includes conditions that affect overall height and limb length."
      },
      {
        question: "Which class represents athletes with more significant impacts on limb length?",
        options: [
          "T40",
          "T41",
          "T42",
          "T43"
        ],
        correctAnswer: 0,
        explanation: "T40 is the classification for athletes with more significant impacts on limb length, while T41 is for those with less severe short stature."
      },
      {
        question: "What type of measurements are considered for T40-41 classification?",
        options: [
          "Only height",
          "Height and arm length",
          "Standing height, arm length, and limb length ratios",
          "Weight and height"
        ],
        correctAnswer: 2,
        explanation: "Classification for T40-41 involves measuring standing height, arm length, and the ratios between different limb measurements to determine eligibility and appropriate class."
      }
    ]
  },
    upperLimb: {
    id: "upperLimb",
    title: "T45-47",
    description: "Upper Limb Impairments",
    color: "bg-orange-500",
    details: "Classes T45-47 are for athletes with upper limb impairments. T45 includes athletes with impairments of both arms, T46 for single arm impairments, and T47 for athletes with unilateral upper limb impairments with less severe impact.",
    questions: [
      {
        question: "Which class (T45-47) represents athletes with bilateral upper limb impairments?",
        options: [
          "T45",
          "T46",
          "T47",
          "None of the above"
        ],
        correctAnswer: 0,
        explanation: "T45 is the classification for athletes with impairments affecting both arms, such as bilateral above elbow amputations or similar conditions."
      },
      {
        question: "What is the key difference between T46 and T47 classifications?",
        options: [
          "T46 is for lower limb impairments",
          "T46 is for more significant unilateral impairments than T47",
          "T46 is for bilateral impairments",
          "T46 is for visual impairments"
        ],
        correctAnswer: 1,
        explanation: "T46 is for athletes with more significant single arm impairments, while T47 is for athletes with unilateral upper limb impairments that have less impact on function."
      },
      {
        question: "Which types of events can T45-47 athletes typically compete in?",
        options: [
          "Only field events",
          "Only throwing events",
          "Both track and field events",
          "Only wheelchair events"
        ],
        correctAnswer: 2,
        explanation: "Athletes in T45-47 classes can compete in both track events (running) and field events, as their lower limb function is not affected by their impairment."
      }
    ]
  },
    wheelchairRacing: {
    id: "wheelchairRacing",
    title: "T51-54",
    description: "Wheelchair Racing Classes",
    color: "bg-indigo-500",
    details: "Classes T51-54 are for wheelchair racing athletes. The classification is based on trunk control and upper limb function, with T51 having the most severe impairments and T54 the least severe eligible impairments.",
    questions: [
      {
        question: "What is the primary factor in determining T51-54 classification?",
        options: [
          "Running speed",
          "Trunk control and upper limb function",
          "Lower limb strength",
          "Visual ability"
        ],
        correctAnswer: 1,
        explanation: "T51-54 classification is primarily based on the athlete's trunk control and upper limb function, which affects their ability to propel and control the racing wheelchair."
      },
      {
        question: "Which class represents athletes with the most severe impairments?",
        options: [
          "T51",
          "T52",
          "T53",
          "T54"
        ],
        correctAnswer: 0,
        explanation: "T51 represents athletes with the most severe impairments affecting trunk and upper limb function, while T54 represents those with the least severe eligible impairments."
      },
      {
        question: "What type of events do T51-54 athletes typically compete in?",
        options: [
          "Swimming events",
          "Field events only",
          "Track events in racing wheelchairs",
          "Standing track events"
        ],
        correctAnswer: 2,
        explanation: "Athletes in classes T51-54 compete in track events using racing wheelchairs, from sprints to marathon distances."
      }
    ]
  },
  limbDeficiency: {
    id: "limbDeficiency",
    title: "T/F61-64",
    description: "Limb Deficiency and Leg Length Difference",
    color: "bg-red-500",
    details: "Classes T/F61-64 are for athletes with limb deficiencies, including amputations and limb length differences. The numbers indicate different levels and types of lower limb affected.",
    questions: [
      {
        question: "What do T61-64 classifications primarily cover?",
        options: [
          "Upper limb deficiencies",
          "Lower limb deficiencies",
          "Both upper and lower limb deficiencies",
          "Spinal cord injuries"
        ],
        correctAnswer: 1,
        explanation: "T61-64 classifications are specifically for athletes with lower limb deficiencies, including amputations and limb length differences."
      },
      {
        question: "Which class would an athlete with a single below-knee amputation typically compete in?",
        options: [
          "T61",
          "T62",
          "T63",
          "T64"
        ],
        correctAnswer: 3,
        explanation: "T64 is typically the class for athletes with a single below-knee amputation or equivalent limb deficiency."
      },
      {
        question: "What factors are considered when classifying athletes in T61-64?",
        options: [
          "Only the number of amputations",
          "Level of amputation and functional impact",
          "Only running speed",
          "Age of amputation"
        ],
        correctAnswer: 1,
        explanation: "Classification considers both the level of amputation/limb deficiency and its functional impact on sport performance."
      }
    ]
  }
}; 
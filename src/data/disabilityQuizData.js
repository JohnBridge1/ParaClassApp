export const disabilityData = {
  visual: {
    id: "visual",
    title: "T/F11-13",
    description: "Visual Impairments",
    color: "bg-blue-500",
    detailedInfo: {
      mainDescription: "Athletes with visual impairments compete in three sport classes based on their level of visual acuity and field of vision.",
      classificationProcess: "Athletes undergo thorough vision testing by certified classifiers to determine their appropriate category.",
      eligibilityCriteria: [
        "Must have an eligible impairment that leads to competitive limitation",
        "Vision impairment must be permanent and verifiable",
        "Must meet minimum impairment criteria"
      ]
    },
    multimedia: {
      images: [
        {
          url: "/images/visual/classification-testing.jpg",
          alt: "Vision classification testing process",
          description: "An athlete undergoing visual classification assessment"
        }
      ],
      videos: [
        {
          url: "https://example.com/visual-classification-explained",
          title: "Understanding T11-13 Classifications",
          duration: "3:45"
        }
      ],
      interactiveDiagrams: [
        {
          id: "visual-field-comparison",
          title: "Visual Field Comparison Tool",
          description: "Interactive diagram showing different visual fields in T11-13"
        }
      ]
    },
    featuredAthletes: [
      {
        name: "David Brown",
        country: "USA",
        classification: "T11",
        achievements: [
          "Paralympic Gold Medalist Tokyo 2020",
          "World Record Holder 100m T11"
        ],
        story: "David Brown became the first totally blind athlete to run 100m in under 11 seconds...",
        image: "/athletes/david-brown.jpg"
      }
    ],
    learningResources: {
      beginnerGuide: "Basic introduction to visual impairment classifications",
      technicalGuide: "Detailed technical criteria for classification",
      commonMisconceptions: [
        "All visually impaired athletes compete together",
        "Guide runners are optional for T11 athletes"
      ],
      factSheets: [
        {
          title: "Understanding Visual Acuity",
          content: "Detailed explanation of how visual acuity is measured..."
        }
      ]
    },
    interactiveElements: {
      simulationTools: [
        {
          id: "vision-simulator",
          description: "Experience different levels of visual impairment"
        }
      ],
      practiceTests: [
        {
          id: "classification-practice",
          type: "Match athletes to classifications"
        }
      ]
    },
    accessibility: {
      audioDescriptions: true,
      screenReaderNotes: "Detailed notes for screen reader users",
      keyboardNavigation: true,
      highContrastMode: true
    },
    community: {
      discussionTopics: [
        {
          title: "Guide Running Techniques",
          participants: 45,
          lastActive: "2024-03-20"
        }
      ],
      expertInsights: [
        {
          expert: "Dr. Jane Smith",
          role: "Paralympic Classifier",
          insight: "Understanding the importance of standardized classification..."
        }
      ]
    },
    questions: [
      {
        difficulty: "beginner",
        points: 1,
        question: "What is the classification T11-13 primarily used for in Paralympics?",
        options: [
          "Intellectual impairments",
          "Visual impairments",
          "Physical impairments",
          "Hearing impairments"
        ],
        correctAnswer: 1,
        explanation: "T11-13 classifications are used for athletes with visual impairments, where T11 represents complete or near complete blindness, T12 severe visual impairment, and T13 moderate visual impairment.",
        feedback: {
          correct: "Excellent! You understand the basic classification category.",
          incorrect: "Remember that T11-13 specifically relates to visual impairments. Each number represents a different level of visual capacity."
        },
        hints: [
          "Think about the sense that's most affected",
          "Consider why guide runners are used in some cases"
        ],
        relatedContent: {
          videoId: "visual-basics-101",
          articleUrl: "understanding-visual-classifications"
        }
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
      },
      {
        question: "What is the visual acuity range for T/F13 athletes?",
        options: [
          "No light perception",
          "Up to 2/60",
          "Above 2/60 up to 6/60",
          "Above 6/60"
        ],
        correctAnswer: 2,
        explanation: "T/F13 athletes have a visual acuity ranging from above 2/60 up to 6/60 and/or a visual field of more than 5 degrees and less than 20 degrees."
      },
      {
        question: "What is the visual field requirement for T/F12 athletes?",
        options: [
          "More than 20 degrees",
          "Less than 5 degrees",
          "Between 5-10 degrees",
          "No visual field requirement"
        ],
        correctAnswer: 1,
        explanation: "T/F12 athletes have a visual field of less than 5 degrees, along with the ability to recognize hand shapes up to a visual acuity of 2/60."
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
      },
      {
        question: "What specific criteria must be met for T20 classification?",
        options: [
          "Only IQ below 75",
          "Only adaptive behavior limitations",
          "Both IQ and adaptive behavior limitations",
          "Either IQ or adaptive behavior limitations"
        ],
        correctAnswer: 2,
        explanation: "Athletes must demonstrate both an IQ below 75 and significant limitations in adaptive behavior for T20 classification."
      },
      {
        question: "How is adaptive behavior assessed for T20 classification?",
        options: [
          "Through sports performance only",
          "Through conceptual, social, and practical skills",
          "Through physical tests only",
          "Through medical examination only"
        ],
        correctAnswer: 1,
        explanation: "Adaptive behavior is assessed through conceptual, social, and practical skills that are learned and performed in daily life."
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
      },
      {
        question: "What is the key difference between T/F31-34 and T/F35-38?",
        options: [
          "Type of impairment",
          "Competition position (seated vs. standing)",
          "Severity of impairment",
          "Event type"
        ],
        correctAnswer: 1,
        explanation: "The main difference is that T/F31-34 athletes compete in a seated position (e.g., wheelchair), while T/F35-38 athletes compete in a standing position."
      },
      {
        question: "Which group competes in wheelchair racing?",
        options: [
          "T31-34",
          "T35-38",
          "Both groups",
          "Neither group"
        ],
        correctAnswer: 0,
        explanation: "T31-34 athletes compete in seated positions, including wheelchair racing, due to their level of coordination impairment."
      }
    ]
  },
  coordinationStanding35_36: {
    id: "coordinationStanding35_36",
    title: "T/F35-36",
    description: "Coordination Impairments (Standing - Moderate)",
    color: "bg-teal-500",
    details: "Classes T/F35-36 are for athletes with coordination impairments who compete in a standing position. These athletes typically have moderate forms of hypertonia, ataxia, or athetosis affecting their whole body.",
    questions: [
      {
        question: "What distinguishes T/F35 from T/F36 athletes?",
        options: [
          "Type of impairment",
          "Severity of coordination problems",
          "Competition events only",
          "Age of onset"
        ],
        correctAnswer: 1,
        explanation: "T/F35 athletes typically have more severe coordination problems than T/F36 athletes, though both compete in a standing position."
      },
      {
        question: "How does balance typically affect T/F35 athletes?",
        options: [
          "No balance issues",
          "Significant balance problems requiring support",
          "Moderate balance issues",
          "Balance issues only when running"
        ],
        correctAnswer: 1,
        explanation: "T/F35 athletes typically have significant balance problems and may need support when standing still."
      },
      {
        question: "What type of movement patterns characterize T/F36 athletes?",
        options: [
          "Smooth, coordinated movements",
          "Involuntary movements and tremors",
          "No movement difficulties",
          "Only lower body involvement"
        ],
        correctAnswer: 1,
        explanation: "T/F36 athletes typically show involuntary movements and tremors, particularly when attempting precise movements."
      },
      {
        question: "Which activities are most challenging for T/F35-36 athletes?",
        options: [
          "Only running",
          "Only throwing",
          "Activities requiring fine motor control and balance",
          "Walking only"
        ],
        correctAnswer: 2,
        explanation: "Athletes in these classes find activities requiring fine motor control and balance most challenging due to their coordination impairments."
      },
      {
        question: "What is a key feature of T/F35-36 classification?",
        options: [
          "Use of wheelchairs",
          "Standing competition only",
          "Use of prosthetics",
          "Guide runners required"
        ],
        correctAnswer: 1,
        explanation: "A key feature of T/F35-36 classification is that athletes compete in a standing position, distinguishing them from seated classes."
      }
    ]
  },
  coordinationStanding37_38: {
    id: "coordinationStanding37_38",
    title: "T/F37-38",
    description: "Coordination Impairments (Standing - Better Function)",
    color: "bg-cyan-500",
    details: "Classes T/F37-38 are for athletes with better functional ability who compete in a standing position. T37 athletes typically have moderate to mild hemiplegia, while T38 athletes show minimal impairment in terms of coordination and balance.",
    questions: [
      {
        question: "What is the main characteristic of T37 athletes?",
        options: [
          "Quadriplegia",
          "Hemiplegia",
          "Diplegia",
          "No limb impairment"
        ],
        correctAnswer: 1,
        explanation: "T37 athletes typically have moderate to mild hemiplegia, meaning one side of their body is more affected than the other."
      },
      {
        question: "How does T38 differ from T37 in terms of impairment?",
        options: [
          "T38 has more severe impairment",
          "T38 has minimal impairment",
          "T38 requires wheelchair use",
          "T38 affects both sides equally"
        ],
        correctAnswer: 1,
        explanation: "T38 athletes show minimal impairment in coordination and balance compared to T37 athletes, representing the highest functioning class in this category."
      },
      {
        question: "Which side of the body is typically affected in T37 athletes?",
        options: [
          "Both sides equally",
          "One side only",
          "Lower body only",
          "Upper body only"
        ],
        correctAnswer: 1,
        explanation: "T37 athletes typically have hemiplegia affecting one side of their body, which impacts their running stride and arm movement on that side."
      },
      {
        question: "What distinguishes T38 athletes in competition?",
        options: [
          "Use of assistive devices",
          "Minimal coordination problems visible only during running",
          "Severe balance issues",
          "Need for guide runners"
        ],
        correctAnswer: 1,
        explanation: "T38 athletes have minimal coordination problems that may only become visible during running or high-intensity sporting activities."
      },
      {
        question: "What type of events can T37-38 athletes typically compete in?",
        options: [
          "Only field events",
          "Only sprint events",
          "Both track and field events",
          "Only throwing events"
        ],
        correctAnswer: 2,
        explanation: "T37-38 athletes can compete in both track and field events as they have sufficient functional ability and balance to perform various athletic movements."
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
      },
      {
        question: "What is the maximum standing height typically allowed for T40 classification?",
        options: [
          "130 cm for men, 125 cm for women",
          "140 cm for men, 135 cm for women",
          "150 cm for men, 145 cm for women",
          "160 cm for men, 155 cm for women"
        ],
        correctAnswer: 0,
        explanation: "T40 classification typically has maximum standing height requirements of 130 cm for men and 125 cm for women, though exact measurements may vary."
      },
      {
        question: "What conditions commonly lead to T40-41 classification?",
        options: [
          "Only achondroplasia",
          "Only osteogenesis imperfecta",
          "Multiple conditions including achondroplasia and growth hormone deficiency",
          "Only growth hormone deficiency"
        ],
        correctAnswer: 2,
        explanation: "Multiple conditions can lead to T40-41 classification, including but not limited to achondroplasia, growth hormone deficiency, and other forms of skeletal dysplasia."
      }
    ]
  },
  lowerLimbNoProstheses: {
    id: "lowerLimbNoProstheses",
    title: "T/F42-44",
    description: "Lower Limb Deficiencies (Without Prostheses)",
    color: "bg-emerald-500",
    details: "Classes T/F42-44 are for athletes with lower limb deficiencies, leg length difference, impaired muscle power, or impaired range of movement who compete without prostheses.",
    questions: [
      {
        question: "What distinguishes T/F42-44 from T/F61-64 classifications?",
        options: [
          "Type of impairment",
          "Severity of impairment",
          "Use of prostheses",
          "Competition events"
        ],
        correctAnswer: 2,
        explanation: "The main distinction is that T/F42-44 athletes compete without prostheses, while T/F61-64 athletes compete with prostheses."
      },
      {
        question: "What types of impairments are included in T/F42-44?",
        options: [
          "Only amputations",
          "Only leg length differences",
          "Multiple conditions including amputations, leg length differences, and muscle power impairments",
          "Only muscle weakness"
        ],
        correctAnswer: 2,
        explanation: "T/F42-44 includes various lower limb impairments: amputations, leg length differences, impaired muscle power, and impaired range of movement."
      },
      {
        question: "How do T/F42-44 athletes typically compete in track events?",
        options: [
          "With prostheses",
          "Without prostheses",
          "In wheelchairs",
          "With guide runners"
        ],
        correctAnswer: 1,
        explanation: "Athletes in T/F42-44 classes compete without prostheses, adapting their movement patterns accordingly."
      },
      {
        question: "What is a key consideration for T/F42-44 classification?",
        options: [
          "Visual acuity",
          "Functional impact of the impairment",
          "Age of impairment onset",
          "Training history"
        ],
        correctAnswer: 1,
        explanation: "Classification focuses on how the impairment impacts functional movement and sport performance."
      },
      {
        question: "Which activities are assessed during T/F42-44 classification?",
        options: [
          "Only running",
          "Only jumping",
          "Multiple activities including running, jumping, and balance",
          "Only throwing"
        ],
        correctAnswer: 2,
        explanation: "Classification involves assessing multiple activities to determine how the impairment affects different aspects of movement and sport performance."
      }
    ]
  },
    upperLimb: {
    id: "upperLimb",
    title: "T/F45-47",
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
      },
      {
        question: "What specific criteria defines T45 classification?",
        options: [
          "Single arm amputation",
          "Bilateral arm amputation or equivalent impairment",
          "Partial hand impairment",
          "Lower limb impairment"
        ],
        correctAnswer: 1,
        explanation: "T45 classification is for athletes with bilateral arm amputations or equivalent impairment affecting both upper limbs."
      },
      {
        question: "How does T47 classification differ in functional ability?",
        options: [
          "No functional ability in arms",
          "Partial function in one arm only",
          "Better functional ability than T46",
          "No difference from T46"
        ],
        correctAnswer: 2,
        explanation: "T47 athletes have better functional ability than T46 athletes, with less severe unilateral upper limb impairments."
      }
    ]
  },
    wheelchairRacing: {
    id: "wheelchairRacing",
    title: "T/F51-54",
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
      },
      {
        question: "What distinguishes T53 from T54 classification?",
        options: [
          "Arm function",
          "Trunk function",
          "Leg function",
          "Visual ability"
        ],
        correctAnswer: 1,
        explanation: "The main difference between T53 and T54 is trunk function, with T54 athletes having more trunk control and function."
      },
      {
        question: "What specific ability characterizes T51 athletes?",
        options: [
          "Full arm function",
          "Limited shoulder function only",
          "Full trunk control",
          "Full hand function"
        ],
        correctAnswer: 1,
        explanation: "T51 athletes typically have limited shoulder function and elbow flexion, with no hand or trunk function."
      }
    ]
  },
  seatedThrowing: {
    id: "seatedThrowing",
    title: "F55-58",
    description: "Seated Throwing Events",
    color: "bg-pink-500",
    details: "Classes F55-58 are for athletes competing in seated throwing events, with normal arm function but varying degrees of trunk and leg function.",
    questions: [
      {
        question: "What is the primary difference between F55 and F58 athletes?",
        options: [
          "Arm function",
          "Trunk and leg function",
          "Throwing technique",
          "Equipment used"
        ],
        correctAnswer: 1,
        explanation: "The main difference is the level of trunk and leg function, with F58 athletes having more trunk and leg function than F55 athletes."
      },
      {
        question: "What characterizes F55-58 classifications?",
        options: [
          "Impaired arm function",
          "Normal arm function with varying trunk/leg function",
          "Complete leg function",
          "Visual impairments"
        ],
        correctAnswer: 1,
        explanation: "F55-58 athletes have normal arm function but different levels of trunk and leg function impairment."
      },
      {
        question: "Which events do F55-58 athletes typically compete in?",
        options: [
          "Running events",
          "Jumping events",
          "Seated throwing events",
          "Swimming events"
        ],
        correctAnswer: 2,
        explanation: "F55-58 athletes compete in seated throwing events such as shot put, discus, and javelin."
      },
      {
        question: "How does trunk function affect F55-58 classification?",
        options: [
          "It's not considered",
          "It's the primary factor",
          "Only leg function matters",
          "Only arm function matters"
        ],
        correctAnswer: 1,
        explanation: "Trunk function is a primary factor in determining classification between F55-58, as it affects throwing performance and technique."
      },
      {
        question: "What type of throwing frame is used in F55-58 events?",
        options: [
          "Standing frame",
          "Secured throwing frame/chair",
          "No frame needed",
          "Mobile frame"
        ],
        correctAnswer: 1,
        explanation: "Athletes use a secured throwing frame or chair that meets specific technical requirements for safety and fair competition."
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
      },
      {
        question: "What distinguishes T61/62 from T63/64 classifications?",
        options: [
          "Age of athletes",
          "Type of prosthesis used",
          "Bilateral vs unilateral impairments",
          "Sport selection"
        ],
        correctAnswer: 2,
        explanation: "T61/62 are for bilateral lower limb impairments, while T63/64 are for unilateral lower limb impairments."
      },
      {
        question: "What specific criteria defines T62 classification?",
        options: [
          "Single above knee amputation",
          "Bilateral below knee amputation",
          "Single below knee amputation",
          "No amputation"
        ],
        correctAnswer: 1,
        explanation: "T62 is for athletes with bilateral below knee amputations or equivalent bilateral limb deficiencies."
      }
    ]
  },
  roadRace: {
    id: "roadRace",
    title: "RR1-RR3",
    description: "Road Race Classifications",
    color: "bg-violet-500",
    details: "Classes RR1-RR3 are for wheelchair road racing athletes. RR1 is for athletes with most significant impairments affecting both upper and lower body, while RR3 represents athletes with better trunk and arm function.",
    questions: [
      {
        question: "What is the primary difference between RR1 and RR3 athletes?",
        options: [
          "Racing speed only",
          "Equipment used",
          "Level of functional ability",
          "Race distance"
        ],
        correctAnswer: 2,
        explanation: "The main difference is the level of functional ability, with RR1 athletes having more significant impairments affecting trunk and arm function compared to RR3 athletes."
      },
      {
        question: "Which body functions are most important in determining RR classification?",
        options: [
          "Leg strength only",
          "Arm and trunk function",
          "Visual ability",
          "Cognitive function"
        ],
        correctAnswer: 1,
        explanation: "Arm and trunk function are the key determinants in RR classification, as these directly affect the athlete's ability to propel and control their racing wheelchair."
      },
      {
        question: "What characterizes RR2 classification?",
        options: [
          "Complete function",
          "No impairment",
          "Intermediate impairment between RR1 and RR3",
          "Same as RR1"
        ],
        correctAnswer: 2,
        explanation: "RR2 represents an intermediate level of impairment between RR1 and RR3, with moderate limitations in trunk and/or arm function."
      },
      {
        question: "What type of events do RR class athletes compete in?",
        options: [
          "Track sprints only",
          "Marathon and road races",
          "Field events",
          "Swimming events"
        ],
        correctAnswer: 1,
        explanation: "RR classifications are specifically for marathon and road racing events, where athletes compete over longer distances on roads rather than tracks."
      },
      {
        question: "How does equipment regulation differ across RR classes?",
        options: [
          "No differences",
          "Completely different equipment",
          "Specific modifications allowed based on functional ability",
          "Random variations"
        ],
        correctAnswer: 2,
        explanation: "Equipment regulations allow for specific modifications based on the athlete's functional ability and classification, while maintaining fair competition."
      }
    ]
  }
};

// New helper functions to support enhanced features
export const quizHelpers = {
  // Difficulty progression
  calculateUserLevel: (previousScores) => {
    // Logic to determine user's skill level
  },

  // Interactive feedback
  generateFeedback: (answer, difficulty, previousAttempts) => {
    // Personalized feedback logic
  },

  // Accessibility
  getAccessibleContent: (content, userPreferences) => {
    // Adapt content based on accessibility needs
  },

  // Learning path
  suggestNextTopic: (userHistory, currentScore) => {
    // Recommend next learning area
  }
};

export const classificationInfo = {
  physicalImpairments: {
    hypertonia: {
      name: "Hypertonia",
      description: "Increased muscle tension and reduced ability to stretch",
      examples: ["Cerebral Palsy", "Traumatic brain injury", "Stroke"],
      classifications: ["T/F31-34", "T/F35-38"],
      details: "Athletes with hypertonia may compete in either wheelchair or standing events depending on severity..."
    },
    ataxia: {
      name: "Ataxia",
      description: "Lack of muscle coordination affecting movement",
      examples: ["Cerebral Palsy", "Friedreich's ataxia"],
      classifications: ["T/F31-34", "T/F35-38"],
      details: "Ataxia affects balance and precise movements..."
    },
    // ... other impairment types
  },
  visualImpairments: {
    description: "Impairment ranging from partial vision loss to total blindness",
    classifications: {
      B1: "No vision",
      B2: "Up to 2/60 visual acuity",
      B3: "Under 6/60 visual acuity"
    }
  },
  intellectualImpairments: {
    description: "Significant limitation in intellectual functioning and adaptive behavior",
    examples: ["Down syndrome", "Developmental delay"],
    classifications: ["T/F20"]
  }
}; 
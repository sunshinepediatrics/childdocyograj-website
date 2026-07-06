import {
  Activity,
  Baby,
  Brain,
  CalendarCheck,
  Ear,
  HeartPulse,
  Leaf,
  MessageCircleQuestion,
  ShieldCheck,
  Soup,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

export const brand = {
  name: "YourChildDoc",
  doctor: "Dr. Yograj Sharma",
  title: "Senior Consultant Pediatrician",
  affiliation: "Serving under the Government of Nepal",
  specialty: "Neonatology and Child Health",
  phone: "+9779855081016",
  displayPhone: "9855081016",
  email: "dryogi99@gmail.com",
  whatsapp: "https://wa.me/9779855081016",
  locations: [
    {
      name: "Om Hospital",
      address: "Hospital Road, Chitwan, Nepal",
      timing: "Morning 7:00 AM to 9:00 AM",
    },
    {
      name: "Nanibabu Clinic",
      address: "Hospital Road, Chitwan, Nepal",
      timing: "Evening 3:00 PM to 7:00 PM",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Milestones", href: "/milestones" },
  { label: "Vaccination", href: "/vaccination" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Newborn Care",
    slug: "newborn-care",
    icon: Baby,
    summary: "Gentle guidance for feeding, jaundice, sleep, weight gain, and early newborn concerns.",
    concerns: ["Feeding difficulty", "Jaundice", "Low weight gain", "Sleep and crying"],
  },
  {
    title: "Well Child Visits",
    slug: "well-child-visits",
    icon: CalendarCheck,
    summary: "Routine checkups focused on growth, development, prevention, and parent confidence.",
    concerns: ["Growth review", "Development checks", "Preventive screening", "Parent questions"],
  },
  {
    title: "Growth Monitoring",
    slug: "growth-monitoring",
    icon: Activity,
    summary: "Evidence-based tracking of height, weight, BMI, and nutrition patterns over time.",
    concerns: ["Poor weight gain", "Short stature", "Obesity risk", "Appetite changes"],
  },
  {
    title: "Development Assessment",
    slug: "development-assessment",
    icon: Brain,
    summary: "Structured review of motor, language, social, and cognitive milestones.",
    concerns: ["Delayed speech", "Motor delay", "Social concerns", "School readiness"],
  },
  {
    title: "Vaccination",
    slug: "vaccination",
    icon: Syringe,
    summary: "Clear vaccine planning, catch-up guidance, and side-effect counselling.",
    concerns: ["Routine vaccines", "Catch-up vaccines", "Travel advice", "Post-vaccine fever"],
  },
  {
    title: "Nutrition",
    slug: "nutrition",
    icon: Soup,
    summary: "Practical feeding plans for infants, picky eaters, anemia risk, and healthy growth.",
    concerns: ["Breastfeeding", "Weaning", "Picky eating", "Micronutrients"],
  },
  {
    title: "Asthma",
    slug: "asthma",
    icon: HeartPulse,
    summary: "Diagnosis, inhaler technique, prevention plans, and acute wheeze care.",
    concerns: ["Wheezing", "Night cough", "Exercise symptoms", "Inhaler plans"],
  },
  {
    title: "Allergy",
    slug: "allergy",
    icon: Leaf,
    summary: "Support for food allergy, eczema, allergic rhinitis, and recurring rashes.",
    concerns: ["Rashes", "Food reactions", "Sneezing", "Itchy eyes"],
  },
  {
    title: "Adolescent Health",
    slug: "adolescent-health",
    icon: Users,
    summary: "Respectful support for puberty, growth, mental wellbeing, and healthy habits.",
    concerns: ["Puberty", "Acne", "Sleep", "Emotional health"],
  },
  {
    title: "Parenting Advice",
    slug: "parenting-advice",
    icon: MessageCircleQuestion,
    summary: "Calm, realistic coaching for behavior, sleep, screen time, and routines.",
    concerns: ["Tantrums", "Sleep battles", "Screen time", "Positive discipline"],
  },
  {
    title: "School Health",
    slug: "school-health",
    icon: ShieldCheck,
    summary: "Health reviews for learning, attendance, infections, fitness, and school readiness.",
    concerns: ["Frequent illness", "Learning concerns", "Vision checks", "Fitness"],
  },
  {
    title: "Emergency Consultation",
    slug: "emergency-consultation",
    icon: Stethoscope,
    summary: "Prompt pediatric assessment for urgent symptoms and worried parents.",
    concerns: ["High fever", "Breathing difficulty", "Dehydration", "Severe pain"],
  },
  {
    title: "Hearing Assessment",
    slug: "hearing-assessment",
    icon: Ear,
    summary: "Newborn and Pediatric Hearing Screening (OAE) for early detection and timely referral.",
    concerns: ["Newborn hearing screen", "Delayed speech", "Poor response to sound", "OAE screening"],
  },
];

export const milestoneAges = [
  "Newborn",
  "2 months",
  "4 months",
  "6 months",
  "9 months",
  "12 months",
  "18 months",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
] as const;

export const milestones = [
  {
    age: "Newborn",
    gross: ["Flexed posture with symmetric limb movements.", "Turns head to side when lying on the back."],
    fine: ["Hands mostly closed, briefly grasps a finger.", "Looks at faces and high-contrast objects."],
    language: ["Cries to communicate needs.", "Startles or responds to loud sound."],
    social: ["Calms with caregiver voice or holding.", "Begins brief eye contact during feeding or care."],
    cognitive: ["Recognizes caregiver smell, voice, and feeding routines.", "Sleeps and wakes in short cycles."],
    redFlags: ["Poor feeding, persistent lethargy, blue lips, fever, jaundice spreading to palms or soles.", "Very floppy or very stiff body, seizures, or no response to sound."],
  },
  {
    age: "2 months",
    gross: ["Lifts head briefly during tummy time.", "Moves both arms and legs actively and symmetrically."],
    fine: ["Opens hands more often.", "Watches faces and follows movement briefly."],
    language: ["Coos and makes soft vowel sounds.", "Turns toward familiar voices."],
    social: ["Social smile appears.", "Enjoys face-to-face interaction."],
    cognitive: ["Pays attention to faces.", "Begins to calm with familiar routines."],
    redFlags: ["No social smile, poor feeding, or persistent poor weight gain.", "No response to loud sounds or very poor head movement."],
  },
  {
    age: "4 months",
    gross: ["Holds head steady without support.", "Pushes up on forearms during tummy time."],
    fine: ["Brings hands to mouth.", "Reaches toward toys and holds objects briefly."],
    language: ["Laughs, squeals, and turns toward sound.", "Uses different cries for needs."],
    social: ["Smiles spontaneously and engages with caregivers.", "Enjoys play and may stop crying when approached."],
    cognitive: ["Watches hands and toys with interest.", "Recognizes familiar people at a distance."],
    redFlags: ["Poor head control, persistent fisting, or not tracking faces.", "No smiling, no response to sounds, or parental concern."],
  },
  {
    age: "6 months",
    gross: ["Rolls over and may sit with support.", "Bears weight on legs when held standing."],
    fine: ["Transfers objects hand to hand.", "Uses both hands to explore toys."],
    language: ["Babbles with consonant-like sounds.", "Responds to name and tone of voice."],
    social: ["Recognizes familiar people and enjoys mirror play.", "Shows pleasure and displeasure clearly."],
    cognitive: ["Explores by mouthing and handling objects.", "Looks for nearby dropped objects."],
    redFlags: ["Not rolling, very stiff/floppy body, or persistent feeding difficulty.", "No babbling, no response to sound/name, or poor eye contact."],
  },
  {
    age: "9 months",
    gross: ["Sits without support.", "Crawls or moves around by rolling, pivoting, or creeping."],
    fine: ["Uses raking grasp and begins finger feeding.", "Passes toys between hands and bangs objects."],
    language: ["Babbles repeated sounds like ba-ba or da-da.", "Understands simple words such as no or bye-bye."],
    social: ["May show stranger anxiety.", "Plays peekaboo and responds to familiar games."],
    cognitive: ["Looks for hidden objects.", "Explores cause and effect through play."],
    redFlags: ["Cannot sit with support, does not bear weight, or uses one side much more.", "No babbling, no response to name, or loss of skills."],
  },
  {
    age: "12 months",
    gross: ["Pulls to stand and cruises along furniture.", "May stand briefly or take first steps."],
    fine: ["Uses pincer grasp.", "Puts objects into containers and points with index finger."],
    language: ["Says mama/dada specifically and one or more words.", "Follows simple commands with gestures."],
    social: ["Waves bye-bye and imitates simple actions.", "Shows preference for caregivers."],
    cognitive: ["Searches for hidden objects.", "Uses objects correctly, such as cup or comb, with help."],
    redFlags: ["Not sitting or not pulling to stand.", "No pointing, no babbling/words, poor eye contact, or loss of skills."],
  },
  {
    age: "18 months",
    gross: ["Walks independently and begins to run stiffly.", "Climbs onto low furniture with help."],
    fine: ["Scribbles spontaneously.", "Stacks blocks and uses spoon with spills."],
    language: ["Uses several single words.", "Points to show interest and follows one-step commands."],
    social: ["Shows affection and may have separation anxiety.", "Engages in simple pretend play."],
    cognitive: ["Identifies familiar body parts or objects.", "Explores and imitates household activities."],
    redFlags: ["Not walking independently.", "Fewer than 6 meaningful words, no pointing to show interest, or loss of skills."],
  },
  {
    age: "2 years",
    gross: ["Runs, kicks a ball, and walks up/down stairs with help.", "Jumps with both feet may begin."],
    fine: ["Stacks several blocks.", "Turns book pages and uses spoon more steadily."],
    language: ["Uses two-word phrases.", "Follows two-step instructions and names familiar objects."],
    social: ["Parallel play with other children.", "Begins to show independence and simple pretend play."],
    cognitive: ["Sorts shapes/colors in simple play.", "Completes simple puzzles and imitates adults."],
    redFlags: ["No two-word phrases, poor understanding, or not walking steadily.", "No pretend play, poor social response, or loss of skills."],
  },
  {
    age: "3 years",
    gross: ["Climbs well, runs easily, and pedals a tricycle.", "Walks upstairs alternating feet."],
    fine: ["Copies a circle and builds block towers.", "Feeds self and helps with dressing."],
    language: ["Speaks in 3-word sentences and is understood by family.", "Follows 2-3 step instructions."],
    social: ["Takes turns in simple games.", "Shows concern for crying friends and separates more easily."],
    cognitive: ["Engages in imaginative play.", "Understands simple concepts like in/on and big/small."],
    redFlags: ["Speech mostly unclear, no sentences, or cannot follow simple instructions.", "Frequent falling, no pretend play, extreme behavior concerns, or loss of skills."],
  },
  {
    age: "4 years",
    gross: ["Hops or balances briefly on one foot.", "Catches a bounced ball most of the time."],
    fine: ["Copies a cross and draws a person with body parts.", "Uses scissors with supervision."],
    language: ["Tells stories and asks many questions.", "Speech is understandable to most people."],
    social: ["Cooperates with other children.", "Prefers playing with others rather than alone."],
    cognitive: ["Names colors and understands counting concepts.", "Follows rules in simple games."],
    redFlags: ["Cannot jump, has very unclear speech, or cannot follow directions.", "No interactive play, severe separation difficulty, or loss of skills."],
  },
  {
    age: "5 years",
    gross: ["Skips, hops, and balances well.", "Uses playground equipment with improving coordination."],
    fine: ["Copies shapes, prints some letters, and dresses with little help.", "Uses utensils and pencil with better control."],
    language: ["Speaks clearly in full sentences.", "Tells longer stories and understands time words."],
    social: ["Wants to please friends and follows group routines.", "Shows empathy and increasing self-control."],
    cognitive: ["Counts, recognizes letters/numbers, and follows multi-step tasks.", "Ready for structured school activities with support."],
    redFlags: ["Very unclear speech, cannot follow two-step instructions, or cannot play with peers.", "Loss of skills, marked learning concerns, or behavior that prevents daily routines."],
  },
];

export const vaccines = [
  { age: "At birth", vaccines: ["BCG"], note: "National Immunization Programme vaccine for protection against severe childhood tuberculosis." },
  { age: "6 weeks", vaccines: ["Pentavalent 1", "OPV 1", "PCV 1", "Rotavirus 1"], note: "First infant vaccine visit in the Nepal routine schedule." },
  { age: "10 weeks", vaccines: ["Pentavalent 2", "OPV 2", "PCV 2", "Rotavirus 2"], note: "Second primary doses for diphtheria, pertussis, tetanus, hepatitis B, Hib, polio, pneumococcal disease, and rotavirus." },
  { age: "14 weeks", vaccines: ["Pentavalent 3", "OPV 3", "fIPV 1"], note: "Completes the pentavalent and OPV primary series and starts injectable polio protection." },
  { age: "9 months", vaccines: ["MR 1", "fIPV 2", "PCV 3"], note: "Measles-rubella first dose plus polio and pneumococcal booster doses." },
  { age: "12 months", vaccines: ["JE"], note: "Japanese encephalitis vaccine as per Nepal National Immunization Programme." },
  { age: "15 months", vaccines: ["MR 2", "TCV"], note: "Second measles-rubella dose and typhoid conjugate vaccine." },
  { age: "Adolescent girls in grades 6-10 and out-of-school girls aged 10 years", vaccines: ["HPV"], note: "HPV vaccine in the national programme for cervical cancer prevention; confirm campaign/school delivery details locally." },
];

export const additionalVaccines = [
  { age: "6 months and yearly", vaccines: ["Influenza"], note: "Annual flu vaccine is commonly advised, especially for young children and children with chronic illness." },
  { age: "12 months and above", vaccines: ["Hepatitis A"], note: "Private/additional vaccine; schedule depends on product and previous doses." },
  { age: "15 months and above", vaccines: ["Varicella"], note: "Helps protect against chickenpox; discuss timing and two-dose planning." },
  { age: "9 months to adolescence, risk-based", vaccines: ["Meningococcal"], note: "Consider for travel, outbreaks, hostel settings, immune risk, or specialist advice." },
  { age: "As advised", vaccines: ["MMR", "IPV boosters", "DTaP/Tdap", "COVID-19", "Cholera", "Rabies pre-exposure"], note: "Additional or catch-up vaccines depend on age, risk, availability, and prior records." },
];

export const resources = [
  "Fever",
  "Cough",
  "Cold",
  "Vomiting",
  "Diarrhea",
  "Nutrition",
  "Breastfeeding",
  "Sleep",
  "Screen Time",
  "Child Safety",
  "School Readiness",
  "First Aid",
  "Growth",
  "Skin Problems",
].map((title) => ({
  title,
  slug: title.toLowerCase().replaceAll(" ", "-"),
  summary: `Parent-friendly guidance on ${title.toLowerCase()} in children, including home care and warning signs.`,
  redFlags: ["Breathing difficulty", "Unusual drowsiness", "Signs of dehydration", "Symptoms worsening or not improving"],
}));

export const blogPosts = [
  {
    title: "How to prepare for your child’s first pediatric visit",
    slug: "first-pediatric-visit",
    category: "Parenting",
    minutes: 4,
    excerpt: "A calm checklist for questions, feeding notes, growth records, and vaccine history.",
  },
  {
    title: "Fever in children: what parents should watch closely",
    slug: "fever-watch",
    category: "Illness",
    minutes: 5,
    excerpt: "Fever is common, but age, behavior, hydration, and breathing matter more than the number alone.",
  },
  {
    title: "Building healthy sleep routines for infants and toddlers",
    slug: "sleep-routines",
    category: "Growth",
    minutes: 3,
    excerpt: "Small, consistent routines can make nights easier for children and parents.",
  },
];

export const faqs = [
  {
    question: "When should I take my child to the emergency department instead of waiting for a clinic visit?",
    answer:
      "Seek immediate medical attention if your child:\nHas difficulty breathing or is breathing very fast.\nIs difficult to wake up or unusually sleepy.\nHas a seizure.\nHas blue lips or tongue.\nHas severe dehydration: very little urine, no tears, very dry mouth.\nHas persistent vomiting with inability to keep fluids down.\nHas a fever in a baby younger than 3 months.\nHas severe injury or uncontrolled bleeding.\n\nIf you are unsure, it is always safer to seek medical advice promptly.",
  },
  {
    question: "Does every fever need antibiotics?",
    answer:
      "No.\n\nMost fevers in children are caused by viral infections, which do not improve with antibiotics. Antibiotics are only prescribed when a bacterial infection is suspected or confirmed.\n\nThe temperature itself is less important than how your child looks and behaves.",
  },
  {
    question: "How high is too high for a fever?",
    answer:
      "The number on the thermometer is only one part of the picture.\n\nA child with 39.5 C who is playful and drinking fluids may be less concerning than a child with 38 C who is lethargic and struggling to breathe.\n\nFocus on your child's overall condition rather than the temperature alone.",
  },
  {
    question: "Should I wake my child to give fever medicine?",
    answer:
      "Usually not.\n\nIf your child is sleeping comfortably, it is generally okay to let them rest. Fever medicines are meant to improve comfort, not simply to lower the temperature.",
  },
  {
    question: "When should my baby start solid foods?",
    answer:
      "Most babies are ready around 6 months of age.\n\nSigns of readiness include:\nGood head control\nSitting with support\nInterest in food\nAbility to swallow food rather than pushing it out\n\nBreastfeeding should continue alongside complementary feeding.",
  },
  {
    question: "How long should I breastfeed?",
    answer:
      "Exclusive breastfeeding is recommended for the first 6 months.\n\nBreastfeeding should continue along with complementary foods until at least 2 years of age, or longer if mother and child wish.",
  },
  {
    question: "My child is not eating well. Should I worry?",
    answer:
      "Poor appetite is common, especially between 1 and 5 years of age.\n\nIf your child is:\nGrowing well\nActive\nMeeting developmental milestones\n\nthen occasional picky eating is usually normal.\n\nAvoid forcing meals. Offer healthy foods regularly and let your child decide how much to eat.",
  },
  {
    question: "Does teething cause fever?",
    answer:
      "Teething may cause:\nMild discomfort\nIncreased drooling\nIrritability\n\nHowever, teething does not cause high fever, severe diarrhea, or serious illness.\n\nThese symptoms should be evaluated for another cause.",
  },
  {
    question: "Are vaccines safe?",
    answer:
      "Yes.\n\nVaccines undergo extensive testing before approval and are continuously monitored for safety.\n\nThe benefits of vaccination far outweigh the risks and help protect both your child and the community from serious diseases.",
  },
  {
    question: "What should I do if my child misses a vaccine?",
    answer:
      "Most vaccines do not need to be restarted.\n\nYour pediatrician can create a catch-up schedule so your child receives the remaining doses as soon as possible.",
  },
  {
    question: "How often should healthy children have check-ups?",
    answer:
      "Regular well-child visits help monitor:\nGrowth\nDevelopment\nNutrition\nVision and hearing\nVaccinations\nGeneral health\n\nEven healthy children benefit from routine preventive visits.",
  },
  {
    question: "How much screen time is recommended?",
    answer:
      "Under 18 months: Avoid screen time except for video calls.\n18-24 months: Only high-quality content with a caregiver.\n2-5 years: Around one hour per day of high-quality programming.\nOlder children: Encourage a healthy balance between screens, sleep, physical activity, and family time.",
  },
  {
    question: "When should I worry about my child's growth?",
    answer:
      "Consult your pediatrician if your child:\nIs not gaining weight appropriately.\nIs losing weight.\nIs much shorter than expected.\nHas stopped growing.\nHas a rapidly increasing or decreasing head size during infancy.\n\nGrowth is best assessed using standardized growth charts over time.",
  },
  {
    question: "Can I give over-the-counter cough medicines to young children?",
    answer:
      "Generally, no.\n\nCough and cold medicines are not recommended for children younger than 4 years because they offer little benefit and may cause side effects.",
  },
];

export const testimonials = [
  {
    name: "Parent of a newborn",
    review: "The consultation felt calm and reassuring. Our questions were answered with patience and clear next steps.",
  },
  {
    name: "Mother of a toddler",
    review: "We appreciated the gentle approach and practical advice. The clinic experience felt child-friendly.",
  },
  {
    name: "Father of a school-age child",
    review: "Dr. Sharma explained the symptoms clearly and helped us understand when to worry and what to do at home.",
  },
];

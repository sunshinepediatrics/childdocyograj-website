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
    questionNe: "क्लिनिक पर्खिनुभन्दा बच्चालाई emergency मा कहिले लैजाने?",
    answer:
      "Seek immediate medical attention if your child:\nHas difficulty breathing or is breathing very fast.\nIs difficult to wake up or unusually sleepy.\nHas a seizure.\nHas blue lips or tongue.\nHas severe dehydration: very little urine, no tears, very dry mouth.\nHas persistent vomiting with inability to keep fluids down.\nHas a fever in a baby younger than 3 months.\nHas severe injury or uncontrolled bleeding.\n\nIf you are unsure, it is always safer to seek medical advice promptly.",
    answerNe:
      "बच्चामा यी लक्षण छन् भने तुरुन्त medical help लिनुहोस्:\nसास फेर्न गाह्रो हुनु वा धेरै छिटो सास फेर्नु।\nउठाउन गाह्रो हुनु वा असामान्य रूपमा धेरै निदाउनु।\nझट्का आउनु।\nओठ वा जिब्रो नीलो हुनु।\nगम्भीर dehydration: पिसाब धेरै कम, आँसु नआउनु, मुख धेरै सुख्खा हुनु।\nलगातार बान्ता भएर पानी पनि नरहनु।\n३ महिनाभन्दा कम उमेरको बच्चामा fever हुनु।\nगम्भीर चोट वा रक्तस्राव नरोक्नु।\n\nशंका भएमा ढिला नगरी medical advice लिनु सुरक्षित हुन्छ।",
  },
  {
    question: "Does every fever need antibiotics?",
    questionNe: "के हरेक fever मा antibiotics चाहिन्छ?",
    answer:
      "No.\n\nMost fevers in children are caused by viral infections, which do not improve with antibiotics. Antibiotics are only prescribed when a bacterial infection is suspected or confirmed.\n\nThe temperature itself is less important than how your child looks and behaves.",
    answerNe:
      "चाहिँदैन।\n\nबालबालिकामा धेरै fever viral infection का कारण हुन्छन्, जसमा antibiotics ले फाइदा गर्दैन। Bacterial infection शंका वा पुष्टि भएमा मात्र antibiotics दिइन्छ।\n\nTemperature भन्दा बच्चाको अवस्था, activity, खानपान र सासको अवस्था बढी महत्वपूर्ण हुन्छ।",
  },
  {
    question: "How high is too high for a fever?",
    questionNe: "Fever कति पुगेपछि धेरै मानिन्छ?",
    answer:
      "The number on the thermometer is only one part of the picture.\n\nA child with 39 degree Celsius (103 degree Fahrenheit) who is playful and drinking fluids may be less concerning than a child with 38 C (100.4 F) who is lethargic and struggling to breathe.\n\nFocus on your child's overall condition rather than the temperature alone.",
    answerNe:
      "Thermometer मा देखिएको अंक मात्र सबै कुरा होइन।\n\n39 degree Celsius (103 degree Fahrenheit) fever भएको बच्चा खेलिरहेको र पानी पिइरहेको छ भने, 38 C (100.4 F) fever भए पनि धेरै सुस्त र सास फेर्न गाह्रो भएको बच्चाभन्दा कम चिन्ताजनक हुन सक्छ।\n\nTemperature मात्र होइन, बच्चाको समग्र अवस्था हेर्नुहोस्।",
  },
  {
    question: "Should I wake my child to give fever medicine?",
    questionNe: "Fever medicine दिन बच्चालाई निद्राबाट उठाउनु पर्छ?",
    answer:
      "Usually not.\n\nIf your child is sleeping comfortably, it is generally okay to let them rest. Fever medicines are meant to improve comfort, not simply to lower the temperature.",
    answerNe:
      "सामान्यतया पर्दैन।\n\nबच्चा आरामसँग सुतिरहेको छ भने सुत्न दिनु ठीक हुन्छ। Fever medicine को उद्देश्य बच्चालाई आराम दिनु हो, temperature मात्र घटाउनु होइन।",
  },
  {
    question: "When should my baby start solid foods?",
    questionNe: "Baby लाई solid food कहिले सुरु गर्ने?",
    answer:
      "Most babies are ready around 6 months of age.\n\nSigns of readiness include:\nGood head control\nSitting with support\nInterest in food\nAbility to swallow food rather than pushing it out\n\nBreastfeeding should continue alongside complementary feeding.",
    answerNe:
      "धेरैजसो baby करिब ६ महिनामा ready हुन्छन्।\n\nReady भएको संकेत:\nटाउको राम्रोसँग धान्नु\nsupport लिएर बस्न सक्नु\nखानामा रुचि देखाउनु\nखाना बाहिर नधकेली निल्न सक्नु\n\nComplementary feeding सँगै breastfeeding जारी राख्नुहोस्।",
  },
  {
    question: "How long should I breastfeed?",
    questionNe: "Breastfeeding कति समय गर्ने?",
    answer:
      "Exclusive breastfeeding is recommended for the first 6 months.\n\nBreastfeeding should continue along with complementary foods until at least 2 years of age, or longer if mother and child wish.",
    answerNe:
      "पहिलो ६ महिना exclusive breastfeeding सिफारिस गरिन्छ।\n\nComplementary food सँगै कम्तीमा २ वर्षसम्म breastfeeding जारी राख्नु राम्रो हुन्छ। आमा र बच्चाले चाहेमा अझै लामो समय गर्न सकिन्छ।",
  },
  {
    question: "My child is not eating well. Should I worry?",
    questionNe: "मेरो बच्चाले राम्रो खाँदैन। चिन्ता गर्नुपर्छ?",
    answer:
      "Poor appetite is common, especially between 1 and 5 years of age.\n\nIf your child is:\nGrowing well\nActive\nMeeting developmental milestones\n\nthen occasional picky eating is usually normal.\n\nAvoid forcing meals. Offer healthy foods regularly and let your child decide how much to eat.",
    answerNe:
      "खानामा रुचि कम हुनु सामान्य हो, विशेष गरी १ देखि ५ वर्षमा।\n\nबच्चा:\nराम्रो बढिरहेको छ\nactive छ\ndevelopment milestones पूरा गरिरहेको छ\n\nभने कहिलेकाहीँ picky eating सामान्य हुन सक्छ।\n\nजबरजस्ती नखुवाउनुहोस्। नियमित healthy food दिनुहोस् र बच्चालाई कति खाने निर्णय गर्न दिनुहोस्।",
  },
  {
    question: "Does teething cause fever?",
    questionNe: "दाँत आउँदा fever हुन्छ?",
    answer:
      "Teething may cause:\nMild discomfort\nIncreased drooling\nIrritability\n\nHowever, teething does not cause high fever, severe diarrhea, or serious illness.\n\nThese symptoms should be evaluated for another cause.",
    answerNe:
      "दाँत आउँदा हुन सक्छ:\nहल्का असहजता\nर्‍याल धेरै आउनु\nचिडचिडापन\n\nतर teething ले high fever, severe diarrhea वा गम्भीर illness गराउँदैन।\n\nयस्ता लक्षण भएमा अरू कारणका लागि जाँच गर्नु आवश्यक हुन्छ।",
  },
  {
    question: "Are vaccines safe?",
    questionNe: "खोप सुरक्षित छन्?",
    answer:
      "Yes.\n\nVaccines undergo extensive testing before approval and are continuously monitored for safety.\n\nThe benefits of vaccination far outweigh the risks and help protect both your child and the community from serious diseases.",
    answerNe:
      "हो, सुरक्षित छन्।\n\nVaccines approval अघि विस्तृत परीक्षणबाट जान्छन् र safety निरन्तर monitor गरिन्छ।\n\nVaccination को फाइदा जोखिमभन्दा धेरै बढी हुन्छ र बच्चा तथा समुदायलाई गम्भीर रोगबाट बचाउँछ।",
  },
  {
    question: "What should I do if my child misses a vaccine?",
    questionNe: "बच्चाको vaccine छुट्यो भने के गर्ने?",
    answer:
      "Most vaccines do not need to be restarted.\n\nYour pediatrician can create a catch-up schedule so your child receives the remaining doses as soon as possible.",
    answerNe:
      "धेरैजसो vaccine फेरि सुरुदेखि लगाउनुपर्दैन।\n\nPediatrician ले catch-up schedule बनाएर बाँकी dose चाँडै लगाउने योजना दिन सक्नुहुन्छ।",
  },
  {
    question: "How often should healthy children have check-ups?",
    questionNe: "स्वस्थ बच्चाको check-up कति-कति समयमा गर्ने?",
    answer:
      "Regular well-child visits help monitor:\nGrowth\nDevelopment\nNutrition\nVision and hearing\nVaccinations\nGeneral health\n\nEven healthy children benefit from routine preventive visits.",
    answerNe:
      "Regular well-child visits ले यी कुरा monitor गर्न मद्दत गर्छ:\nGrowth\nDevelopment\nNutrition\nVision and hearing\nVaccinations\nGeneral health\n\nस्वस्थ बच्चालाई पनि routine preventive visits बाट फाइदा हुन्छ।",
  },
  {
    question: "How much screen time is recommended?",
    questionNe: "Screen time कति सिफारिस गरिन्छ?",
    answer:
      "Under 18 months: Avoid screen time except for video calls.\n18-24 months: Only high-quality content with a caregiver.\n2-5 years: Around one hour per day of high-quality programming.\nOlder children: Encourage a healthy balance between screens, sleep, physical activity, and family time.",
    answerNe:
      "१८ महिनाभन्दा कम: video call बाहेक screen time नदिनु राम्रो।\n१८-२४ महिना: caregiver सँगै high-quality content मात्र।\n२-५ वर्ष: दैनिक करिब १ घण्टा high-quality programming।\nठूला बच्चा: screen, sleep, physical activity र family time बीच healthy balance राख्नुहोस्।",
  },
  {
    question: "When should I worry about my child's growth?",
    questionNe: "बच्चाको growth बारे कहिले चिन्ता गर्ने?",
    answer:
      "Consult your pediatrician if your child:\nIs not gaining weight appropriately.\nIs losing weight.\nIs much shorter than expected.\nHas stopped growing.\nHas a rapidly increasing or decreasing head size during infancy.\n\nGrowth is best assessed using standardized growth charts over time.",
    answerNe:
      "यी अवस्था भए pediatrician सँग परामर्श गर्नुहोस्:\nतौल राम्रोसँग नबढ्नु।\nतौल घट्नु।\nउमेरअनुसार धेरै होचो हुनु।\nबढ्न बन्द हुनु।\nशिशु अवस्थामा टाउकोको आकार धेरै छिटो बढ्नु वा घट्नु।\n\nGrowth लाई standardized growth charts मा समयसँगै हेरेर राम्रो मूल्यांकन गरिन्छ।",
  },
  {
    question: "Can I give over-the-counter cough medicines to young children?",
    questionNe: "सानो बच्चालाई over-the-counter cough medicine दिन मिल्छ?",
    answer:
      "Generally, no.\n\nCough and cold medicines are not recommended for children younger than 4 years because they offer little benefit and may cause side effects.",
    answerNe:
      "सामान्यतया मिल्दैन।\n\n४ वर्षभन्दा कम उमेरका बच्चामा cough र cold medicines सिफारिस गरिँदैन, किनकि फाइदा कम हुन्छ र side effects हुन सक्छ।",
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

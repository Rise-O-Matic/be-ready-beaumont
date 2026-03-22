export interface Pathway {
  slug: string;
  name: string;
  sector: string;
  school: string;
  photo: string;
  instructor: {
    name: string;
    headshot: string;
    industry: string[];
    teaching: string[];
  };
  curriculum: {
    year: string;
    title: string;
    topics: string[];
    articulated?: boolean;
    dualEnrollment?: boolean;
  }[];
  description: string;
}

export const pathways: Pathway[] = [
  {
    slug: "construction",
    name: "Building & Construction Trades",
    sector: "Building & Construction Trades",
    school: "Beaumont HS",
    photo: "images/photos/construction-framing-hard-hats.jpg",
    instructor: {
      name: "Jeremy Rager",
      headshot: "images/photos/headshot-staff-beaumont-hs-tee.jpg",
      industry: [
        "5th generation Contractor",
        "3rd generation custom woodworker/cabinetry",
        "CA builders license in Framing and Millwork",
        "BS Electronic Engineering (Industrial Robotics)",
        "BS Career Technical Studies",
        "Master of Ed. in Teaching and Learning",
      ],
      teaching: [
        "Construction Education Volunteer — 4 years",
        "Construction Education Teacher — 9 years",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Construction 1",
        topics: ["Tool Safety", "Measurement", "Design and Build documenting process"],
      },
      {
        year: "Year 2",
        title: "Construction 2",
        topics: ["Scale", "Blueprint reading", "OSHA 10", "Framing"],
      },
      {
        year: "Year 3",
        title: "Construction 3",
        topics: ["Electrical", "Plumbing", "Roofing"],
      },
    ],
    description:
      "From blueprint to build. Students learn residential and commercial construction from a 5th-generation contractor, earning OSHA certification and real framing experience along the way.",
  },
  {
    slug: "culinary-arts",
    name: "Culinary Arts",
    sector: "Hospitality, Tourism & Recreation",
    school: "Beaumont HS",
    photo: "images/photos/culinary-food-truck-exterior.jpg",
    instructor: {
      name: "Jonathon Wiener & Jasmin Diaz",
      headshot: "images/photos/headshot-staff-culinary-apron.jpg",
      industry: [
        "Le Cordon Bleu College Chef Training",
        "Michelin-starred restaurants: Alinea (3-star), Domaine Chandon (1-star), Le Comptoir (1-star)",
        "#7 Restaurant — San Pellegrino's World's 50 Best",
        "Executive Chef, Agua Caliente Casino",
        "20+ years combined food industry experience",
      ],
      teaching: [
        "3rd year at Beaumont HS (Wiener)",
        "2nd year at Beaumont HS (Diaz)",
        "Teaches Scholars on Vacation for elementary students",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Culinary Arts 1",
        topics: [
          "Food safety and sanitation",
          "Essential knife skills",
          "Recipe reading comprehension and food costing",
          "Riverside County Food Handlers Card",
        ],
        articulated: true,
      },
      {
        year: "Year 2",
        title: "Advanced Culinary Arts",
        topics: [
          "Restaurant menu planning",
          "Food cost percentages and budgets for catering",
          "Managing the BHS Culinary Food Truck",
          "Peer leadership opportunities",
          "ServSafe State Managers Food Safety Certificate",
        ],
        articulated: true,
      },
    ],
    description:
      "Trained by a Michelin-starred chef, students earn industry certifications, run a student-operated food truck, and learn the business side of the culinary world.",
  },
  {
    slug: "digital-media-game-design",
    name: "Digital Media & Game Design",
    sector: "Arts, Media & Entertainment",
    school: "Beaumont HS",
    photo: "images/photos/game-design-students-computer-lab.jpg",
    instructor: {
      name: "Christian Bonilla",
      headshot: "images/photos/headshot-staff-blue-shirt.jpg",
      industry: [
        "8 years Arts, Media & Entertainment experience",
        "Graphic Designer",
        "3D Artist",
        "Social Media Manager",
        "Creative Director",
      ],
      teaching: ["7 years teaching experience", "4th year at BHS"],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Digital Media & Game Design 1",
        topics: ["2D game creation", "Digital illustration", "Digital media tools & graphics"],
        articulated: true,
      },
      {
        year: "Year 2",
        title: "Digital Media & Game Design 2",
        topics: ["3D modeling and animation", "3D game engine", "Marketing and monetization"],
      },
      {
        year: "Year 3",
        title: "Digital Media & Game Design 3",
        topics: [
          "Concept-to-published product",
          "Advanced project management",
          "Industry preparation",
        ],
      },
    ],
    description:
      "From pixel art to published games. Students build 2D and 3D games, learn industry tools, and ship a finished product by Year 3.",
  },
  {
    slug: "video-production",
    name: "Digital Video Production",
    sector: "Arts, Media & Entertainment",
    school: "Beaumont HS",
    photo: "images/photos/broadcast-studio-wide-shot.jpg",
    instructor: {
      name: "Casey McBeath",
      headshot: "images/photos/headshot-staff-beard-hoodie.jpg",
      industry: [
        "12+ years video production experience",
        "Hollywood feature films: The Hunger Games (Catching Fire, Mockingjay 1+2), Into the Woods, Tomorrowland, The Fault in Our Stars",
        "Founded post-production company for weddings, corporate films, and TV commercials",
      ],
      teaching: ["2nd year at Beaumont HS"],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Digital Video Production 1",
        topics: [
          "Camera operation fundamentals / shot composition",
          "Video editing software and simple cuts",
          "Storyboarding and pre-production planning",
        ],
        articulated: true,
      },
      {
        year: "Year 2",
        title: "Digital Video Production 2",
        topics: [
          "Studio lighting and setup techniques",
          "Script writing and production management",
          "Motion graphics and titles",
          "Multi-camera production and live switching",
          "Color correction and sound design",
        ],
      },
    ],
    description:
      "Learn filmmaking from someone who worked on The Hunger Games. Students master camera, editing, lighting, and post-production in a professional broadcast studio.",
  },
  {
    slug: "education-family-services",
    name: "Education & Family Services",
    sector: "Education, Child Development & Family Services",
    school: "Beaumont HS",
    photo: "images/photos/performing-arts-script-reading.jpg",
    instructor: {
      name: "Aimee Downer",
      headshot: "images/photos/headshot-staff-navy-sweater.png",
      industry: [
        "29 years teaching",
        "Bachelor's in English, Master's in Art of Teaching English",
        "Teacher of the Year, Rancho Mirage High School, 2015",
        "MSJC Adjunct Professor",
      ],
      teaching: [
        "ESL, K-2 and 7th Grade",
        "English 7-12, AP Lang",
        "Dual Enrollment English",
        "CTE Education Pathway",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Intro to Careers in Education",
        topics: ["K-16 Education Pathway Collaborative introduction"],
      },
      {
        year: "Year 2",
        title: "Classroom Based Careers / School Based Mental Health Careers",
        topics: [
          "Classroom-based career exploration",
          "School-based mental health career exploration",
        ],
      },
      {
        year: "Year 3",
        title: "Educational Internships",
        topics: ["Hands-on internship experiences in educational settings"],
      },
    ],
    description:
      "A K-16 pipeline to a teaching credential. Complete the pathway at BHS, one year at MSJC, three years at CSUSM, and graduate with a Bachelor's degree and teaching credential.",
  },
  {
    slug: "law-enforcement",
    name: "Public Safety: Law Enforcement",
    sector: "Public Services",
    school: "Beaumont HS",
    photo: "images/photos/law-enforcement-students-simulation.jpg",
    instructor: {
      name: "Boris Robinson",
      headshot: "images/photos/headshot-staff-white-polo.jpg",
      industry: [
        "Retired Chief Deputy, Riverside County Sheriff's Department (1987-2012)",
        "Deputy Chief, Marine Corps Police Department (2019-2021)",
        "FBI National Academy Session #219, 2004",
      ],
      teaching: [
        "University of Phoenix Associate Faculty (2012-2020)",
        "CTE Law Enforcement Teacher, CRY-ROP Yucaipa HS (2016-2019)",
        "Beaumont HS since 2021",
        "CTE Department Chair",
      ],
    },
    curriculum: [
      {
        year: "Year 1-2",
        title: "Law Enforcement",
        topics: [
          "Defensive tactics",
          "Arrest techniques",
          "Report writing",
          "Evidence collection",
          "Criminal law knowledge",
          "Crime scene processing",
        ],
        articulated: true,
        dualEnrollment: true,
      },
    ],
    description:
      "Taught by a retired Riverside County Chief Deputy and FBI National Academy graduate. Students learn criminal law, defensive tactics, and evidence collection — with dual enrollment college credit through MSJC.",
  },
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    sector: "Manufacturing & Product Development",
    school: "Beaumont HS",
    photo: "images/photos/manufacturing-student-angle-grinder.jpg",
    instructor: {
      name: "Matt Medore",
      headshot: "images/photos/headshot-staff-beaumont-polo.jpg",
      industry: [
        "Family-owned WWII aircraft restoration business",
        "22 years in bicycle industry (design, manufacturing, product development)",
        "10 years as owner of bicycle retail store and product development company",
      ],
      teaching: [
        "Western Center Academy — applied robotics and CAD",
        "Beaumont HS CTE Teacher since 2018",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Manufacturing & Engineering 1",
        topics: [
          "Adobe Illustrator",
          "Intro to machine tools — 3D printers, CO2 lasers",
          "Advanced 3D modeling software",
        ],
      },
      {
        year: "Year 2",
        title: "Manufacturing & Engineering 2",
        topics: [
          "CAD software — 3D object creation",
          "Computer-aided manufacturing techniques",
          "Basic CNC functionality / operating a CNC milling machine",
        ],
      },
      {
        year: "Year 3",
        title: "Manufacturing & Engineering 3",
        topics: [
          "CNC machining and machine parts for industry certifications",
          "Manual machine operation",
          "Fusion 360 industry certifications from Autodesk",
        ],
        articulated: true,
      },
    ],
    description:
      "From 3D printers to industrial CNC machines. Year 3 students earn Autodesk Fusion 360 certification — with a 96% pass rate on the industry exam.",
  },
  {
    slug: "patient-care",
    name: "Patient Care",
    sector: "Health Science & Medical Technology",
    school: "Beaumont HS",
    photo: "images/photos/patient-care-anatomy-lab-coats.jpg",
    instructor: {
      name: "Christine Guevara",
      headshot: "images/photos/headshot-staff-navy-blouse.jpg",
      industry: [
        "20+ years as an occupational therapist",
        "Specialty in neurological disorders",
        "Acute, acute rehab, subacute rehab, outpatient, and home health",
        "Starting Line Strength & Stability Center / Parkinson's disease exercise center",
      ],
      teaching: [
        "Vocational College for OT Assistants — 5 years",
        "Beaumont HS CTE Teacher — 7 years",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Intro to Medical Professions",
        topics: [
          "Medical terminology",
          "Durable medical equipment",
          "Patient handling skills",
        ],
        articulated: true,
      },
      {
        year: "Year 2",
        title: "Patient Care for Medical Professionals",
        topics: [
          "Body systems",
          "Basic life-saving skills",
          "Medications (names and common uses)",
        ],
      },
      {
        year: "Year 3",
        title: "Health Careers Work Based Learning",
        topics: [
          "Clinical/office skills",
          "Professional communication",
          "Employability skills",
        ],
      },
    ],
    description:
      "Hands-on medical training from a 20-year occupational therapist. Students learn patient care, anatomy, and clinical skills — with work-based learning placements at local healthcare facilities.",
  },
  {
    slug: "performing-arts",
    name: "Performing Arts",
    sector: "Arts, Media & Entertainment",
    school: "Beaumont HS",
    photo: "images/photos/performing-arts-western-scene.jpg",
    instructor: {
      name: "Sarah Gray & Pam Bernard",
      headshot: "images/photos/headshot-staff-bw-portrait.jpg",
      industry: [
        "20+ years industry experience (acting, dancing, stage management, directing, producing)",
        "Productions in Santa Cruz, San Francisco, Washington DC, and Berkeley",
        "Community Light Opera Theatre Association",
        "The Ramona Pageant",
      ],
      teaching: [
        "11 years directing at Yucaipa High School (Gray)",
        "31 years teaching, 6th year at Beaumont HS (Bernard)",
        "3rd year at Beaumont HS (Gray)",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Theatre 1",
        topics: [
          "Improvisational and comedic acting",
          "Communication and collaboration skills",
          "Scene work in children's and musical theater",
        ],
      },
      {
        year: "Year 2",
        title: "Advanced Theatre",
        topics: [
          "Advanced acting technique",
          "Theatre directing & event producing",
          "Theatre history and methodologies",
        ],
      },
      {
        year: "Year 3",
        title: "Advanced Theatre Production",
        topics: ["Involvement in BHS theatre productions"],
      },
    ],
    description:
      "Learn performance from working artists. Students develop acting, directing, and producing skills through hands-on involvement in school and community productions.",
  },
  {
    slug: "sports-medicine",
    name: "Sports Medicine",
    sector: "Health Science & Medical Technology",
    school: "Beaumont HS",
    photo: "images/photos/sports-medicine-ankle-taping.jpg",
    instructor: {
      name: "Nicole Calderilla",
      headshot: "images/photos/headshot-staff-cougar-tee.jpg",
      industry: [
        "15+ years Athletic Training",
        "Riverside City College Athletic Trainer",
        "Head Athletic Trainer, Colton High School",
        "Head Athletic Trainer, Beaumont High School",
      ],
      teaching: [
        "Riverside County Office of Education CTE Teacher",
        "Beaumont High School CTE Teacher",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Sports Medicine 1",
        topics: ["Basic Life Support", "Infection Control"],
      },
      {
        year: "Year 2",
        title: "Sports Medicine 2",
        topics: ["Advanced taping", "Game management", "Injury assessment"],
        articulated: true,
      },
      {
        year: "Year 3",
        title: "Sports Medicine Practicum",
        topics: [
          "Work-based learning",
          "Equipment maintenance",
          "Set-up treatment for athletes",
        ],
      },
    ],
    description:
      "Train as an athletic trainer on the sidelines. Students earn certifications, learn injury assessment and taping, and work real games through practicum placements.",
  },
  {
    slug: "technical-theater",
    name: "Technical Theater",
    sector: "Arts, Media & Entertainment",
    school: "Beaumont HS",
    photo: "images/photos/technical-theater-spotlight-operator.jpg",
    instructor: {
      name: "Daniel West",
      headshot: "images/photos/headshot-staff-black-polo-blue-bg.jpg",
      industry: [
        "10 years as professional Technical Director, Scenic, Lighting, Properties, and Sound Designer",
        "Diocese of Orange County",
        "Segerstrom Performing Arts Center",
        "Ramona Bowl Amphitheatre",
      ],
      teaching: [
        "10 years Riverside County Office of Education CTE Theatre Arts Department Chair",
        "8 years Associate Faculty MSJC Theatre Arts / Stagecraft",
      ],
    },
    curriculum: [
      {
        year: "Year 1",
        title: "Technical Theatre 1",
        topics: [
          "Power tool safety",
          "Constructing set pieces from blueprints",
          "Entertainment industry job exploration and resumes",
        ],
        articulated: true,
        dualEnrollment: true,
      },
      {
        year: "Year 2-3",
        title: "Advanced Technical Theatre",
        topics: [
          "Industry-standard lighting console programming",
          "Computer-aided and hand drafting",
          "Scale modeling and rendering",
        ],
      },
    ],
    description:
      "Build sets, program lights, design sound — taught by a professional who's worked at Segerstrom Performing Arts Center. Dual enrollment college credit through MSJC from Year 1.",
  },
  {
    slug: "health-care-admin",
    name: "Health Care Administrative Services",
    sector: "Health Science & Medical Technology",
    school: "Glen View HS",
    photo: "images/photos/patient-care-students-medical-office.jpg",
    instructor: {
      name: "TBD",
      headshot: "",
      industry: [],
      teaching: [],
    },
    curriculum: [],
    description:
      "Healthcare from the business side. Students at Glen View High School learn medical office administration, health information systems, and the operational skills that keep healthcare facilities running.",
  },
];

export function getPathway(slug: string): Pathway | undefined {
  return pathways.find((p) => p.slug === slug);
}

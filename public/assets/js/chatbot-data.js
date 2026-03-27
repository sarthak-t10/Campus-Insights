/* ============================================
   CHATBOT KNOWLEDGE BASE
   ============================================ */

const chatbotKnowledge = {
  // University Information
  university: {
    name: "B.M.S. College of Engineering",
    shortName: "BMSCE",
    established: "1946",
    location: "Bangalore, India",
    accreditation: "NAAC Accredited (A Grade)",
    affiliatedTo: "Visvesvaraya Technological University (VTU)",
  },

  // Leadership (HOD/Principal)
  leadership: {
    principal: {
      name: "Dr. Janardhan G.K.",
      title: "Principal",
      contact: "principal@bmsce.ac.in",
    },
    deans: {
      academics: "Dean of Academic Affairs",
      research: "Dean of Research & Innovation",
      student_affairs: "Dean of Student Affairs",
    },
  },

  // Departments/HODs
  departments: [
    {
      name: "Civil Engineering",
      code: "CE",
      slug: "civil",
      hod: "Dr. [Civil Department HOD]",
      ug: "B.Tech Civil Engineering",
      pg: "M.Tech Civil Engineering (Structural Engineering, Geotechnical Engineering)",
      contact: "civil@bmsce.ac.in",
      description:
        "Department of Civil Engineering offers comprehensive programs in structural design, geotechnical engineering, and infrastructure development.",
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      slug: "mechanical",
      hod: "Dr. [Mechanical Department HOD]",
      ug: "B.Tech Mechanical Engineering",
      pg: "M.Tech Mechanical Engineering (Advanced Manufacturing, Thermal Systems)",
      contact: "mechanical@bmsce.ac.in",
      description:
        "Leading department in thermal systems, manufacturing, and mechanical design with state-of-the-art laboratories.",
    },
    {
      name: "Electrical Engineering",
      code: "EE",
      slug: "electrical",
      hod: "Dr. [Electrical Department HOD]",
      ug: "B.Tech Electrical Engineering",
      pg: "M.Tech Electrical Engineering (Power Systems, Electrical Machines)",
      contact: "electrical@bmsce.ac.in",
      description:
        "Excellence in power systems, electrical drives, and renewable energy integration.",
    },
    {
      name: "Electronics Engineering",
      code: "ECE",
      slug: "electronics",
      hod: "Dr. [Electronics Department HOD]",
      ug: "B.Tech Electronics Engineering",
      pg: "M.Tech Electronics Engineering (VLSI, Signal Processing)",
      contact: "electronics@bmsce.ac.in",
      description:
        "Focus on VLSI design, embedded systems, and signal processing technologies.",
    },
    {
      name: "Computer Science & Engineering",
      code: "CSE",
      slug: "cse",
      hod: "Dr. [CSE Department HOD]",
      ug: "B.Tech Computer Science & Engineering",
      pg: "M.Tech Computer Science (Software Engineering, Data Science)",
      contact: "cse@bmsce.ac.in",
      description:
        "Premier computer science department with programs in data science, software engineering, and cybersecurity.",
    },
    {
      name: "Chemical Engineering",
      code: "CHE",
      slug: "chemical",
      hod: "Dr. [Chemical Department HOD]",
      ug: "B.Tech Chemical Engineering",
      pg: "M.Tech Chemical Engineering (Process Engineering, Biochemical Engineering)",
      contact: "chemical@bmsce.ac.in",
      description:
        "Specializing in process engineering, pharmaceutical, and environmental applications.",
    },
    {
      name: "Aerospace Engineering",
      code: "AE",
      slug: "aerospace",
      hod: "Dr. [Aerospace Department HOD]",
      ug: "B.Tech Aerospace Engineering",
      pg: "M.Tech Aerospace Engineering (Aerodynamics, Flight Mechanics)",
      contact: "aerospace@bmsce.ac.in",
      description:
        "Advanced programs in aircraft design, propulsion systems, and flight mechanics.",
    },
    {
      name: "AI & Machine Learning",
      code: "AI/ML",
      slug: "ml",
      hod: "Dr. [AI/ML Department HOD]",
      ug: "B.Tech Artificial Intelligence",
      pg: "M.Tech AI & Machine Learning (Deep Learning, NLP)",
      contact: "aiml@bmsce.ac.in",
      description:
        "Cutting-edge programs in artificial intelligence, deep learning, and machine learning applications.",
    },
  ],

  // Postgraduate Programs
  postgraduate: [
    {
      name: "Civil Engineering",
      slug: "civil-engineering-mtech",
      specializations: ["Structural Engineering", "Geotechnical Engineering", "Water Resources"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Civil/relevant discipline with valid GATE score",
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical-engineering-mtech",
      specializations: ["Advanced Manufacturing", "Thermal Systems", "Robotics"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Mechanical/relevant discipline with valid GATE score",
    },
    {
      name: "Electrical Engineering",
      slug: "electrical-engineering-mtech",
      specializations: ["Power Systems", "Electrical Machines", "Renewable Energy"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Electrical/relevant discipline with valid GATE score",
    },
    {
      name: "Electronics Engineering",
      slug: "electronics-engineering-mtech",
      specializations: ["VLSI Design", "Signal Processing", "Embedded Systems"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Electronics/relevant discipline with valid GATE score",
    },
    {
      name: "Computer Science",
      slug: "computer-science-mtech",
      specializations: ["Software Engineering", "Data Science", "Cybersecurity"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in CSE/relevant discipline with valid GATE score",
    },
    {
      name: "Chemical Engineering",
      slug: "chemical-engineering-mtech",
      specializations: ["Process Engineering", "Biochemical Engineering", "Environmental"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Chemical/relevant discipline with valid GATE score",
    },
    {
      name: "Aerospace Engineering",
      slug: "aerospace-engineering-mtech",
      specializations: ["Aerodynamics", "Flight Mechanics", "Propulsion Systems"],
      duration: "2 years",
      eligibility: "B.E./B.Tech in Aerospace/relevant discipline with valid GATE score",
    },
    {
      name: "AI & Machine Learning",
      slug: "ai-machine-learning-mtech",
      specializations: ["Deep Learning", "NLP", "Computer Vision"],
      duration: "2 years",
      eligibility: "B.Tech/B.E. with valid GATE score in CSE/ECE or equivalent",
    },
  ],

  // Admissions Info
  admissions: {
    ug: {
      title: "UG Admissions",
      eligibility: "12th pass (Science stream - Physics, Chemistry, Mathematics)",
      entrance: "JEE Main | Karnataka CET | State Board Exams",
      applicationSteps: [
        "Register on admission portal",
        "Fill application form with academic details",
        "Upload required documents (10th, 12th, home stream certificate)",
        "Pay application fee",
        "Wait for merit list",
        "Attend counselling",
      ],
      documents: [
        "10th & 12th mark sheets",
        "JEE/CET admit card & result",
        "Aadhar card/ID proof",
        "Address proof",
        "Category certificate (if applicable)",
      ],
      contact: "admissions@bmsce.ac.in | +91-080-4455-xxxx",
      link: "/admissions",
    },
    pg: {
      title: "PG Admissions",
      eligibility: "B.Tech/B.E. degree",
      entrance: "GATE (valid scores accepted)",
      applicationSteps: [
        "Register on PG admission portal",
        "Submit GATE scorecard",
        "Fill application with educational qualifications",
        "Upload all required documents",
        "Wait for merit list basis GATE marks",
        "Attend counselling session",
      ],
      documents: [
        "B.E./B.Tech graduation certificate",
        "GATE admit card & scorecard",
        "Aadhar card/passport",
        "Address proof",
        "Category certificate (if applicable)",
      ],
      contact: "pg-admissions@bmsce.ac.in | +91-080-4455-xxxx",
      link: "/admissions",
    },
  },

  // Placements
  placements: {
    statistics: {
      placement_rate: "98%",
      average_salary: "₹8.5 LPA",
      highest_salary: "₹22 LPA",
      median_salary: "₹7.2 LPA",
      year: "2023-24",
    },
    topRecruiters: [
      "Infosys",
      "TCS",
      "Cognizant",
      "Capgemini",
      "Microsoft",
      "Google",
      "Amazon",
      "Deloitte",
      "Accenture",
      "Deutsche Bank",
      "IBM",
      "HCL Technologies",
    ],
    sectors: [
      "IT/Software",
      "Consulting",
      "Finance",
      "Manufacturing",
      "Core Engineering",
      "Automotive",
      "Aerospace",
      "Energy",
    ],
    contact: "placements@bmsce.ac.in",
    link: "/placements",
  },

  // Campus Facilities
  facilities: {
    academic: [
      "Well-equipped laboratories for all departments",
      "Advanced computing labs with latest software",
      "Maker labs and innovation centers",
      "Research facilities with modern equipment",
      "Seminar halls and lecture theaters",
    ],
    sports: [
      "Indoor sports complex (badminton, volleyball, table tennis)",
      "Outdoor sports facilities (cricket, football, tennis courts)",
      "Basketball court",
      "Swimming pool",
      "Gymnasium with modern equipment",
    ],
    amenities: [
      "Central Library with 50,000+ books",
      "WiFi enabled campus",
      "Health center with medical staff",
      "Student cafeteria",
      "Hostel facilities for boys and girls",
      "Cooperative store",
    ],
    clubs: [
      "Robotics Club",
      "Coding Club",
      "Entrepreneurship Cell",
      "Cultural Club",
      "Sports Club",
      "Technical Clubs (IEEE, SAE, etc.)",
    ],
    link: "/facilities",
  },

  // Campus Life
  campusLife: {
    events: [
      "Annual Tech Fest",
      "Cultural Fest",
      "Sports Day",
      "Industry interaction sessions",
      "Guest lectures by eminent personalities",
      "Workshop series",
    ],
    clubs: [
      "IEEE Student Branch",
      "SAE AutoMotive Club",
      "Robotics Club",
      "Entrepreneurship Cell",
      "Cultural Association",
      "Sports Council",
    ],
    hostels: {
      boys:
        "Spacious accommodation with modern facilities, internet connectivity, and recreational areas",
      girls:
        "Secure and comfortable hostel with 24/7 security, internet, and recreation facilities",
      amenities: ["Mess with varied cuisine", "Laundry service", "Medical support", "WiFi access"],
    },
    link: "/campus-life",
  },

  // Research
  research: {
    highlights:
      "BMSCE is recognized for research in IoT, AI, Renewable Energy, and Advanced Manufacturing",
    researchCenters: [
      "Center for Excellence in Robotics",
      "AI & Machine Learning Research Lab",
      "Sustainable Energy Research Center",
      "Advanced Manufacturing Lab",
    ],
    funding: "Research projects funded by DST, SERB, and Industry partners",
    publications: "Faculty and students regularly publish in international journals and conferences",
    link: "/research",
  },

  // Contact Information
  contact: {
    mainOffice: {
      address: "B.M.S. College of Engineering",
      location: "Visvesvaraya Technological University",
      city: "Bangalore - 560019, India",
      phone: "+91-080-4455-xxxx",
      email: "info@bmsce.ac.in",
    },
    admissions: {
      email: "admissions@bmsce.ac.in",
      phone: "+91-080-4455-1234",
    },
    placements: {
      email: "placements@bmsce.ac.in",
      phone: "+91-080-4455-5678",
    },
    link: "/contact",
  },

  // Career Opportunities
  career: {
    ugCareerPaths: [
      "Software Development Engineer (SDE)",
      "Mechanical Design Engineer",
      "Data Analyst",
      "Systems Engineer",
      "Product Engineer",
      "Technical Consultant",
      "Entrepreneur",
    ],
    pgCareerPaths: [
      "Senior Software Architect",
      "Research Scientist",
      "Project Manager",
      "Technical Lead",
      "Entrepreneur/Startup Founder",
      "Research & Development",
      "Technical Consultant",
    ],
    industries:
      "IT/Software, Consulting, Finance, Manufacturing, Energy, Aerospace, Defense, Healthcare",
  },
};

/* ============================================
   CHATBOT RESPONSES
   ============================================ */

const chatbotResponses = {
  // Greeting Keywords
  greeting: {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    response:
      "Hello! 👋 I'm the Campus Insights Assistant. Welcome! How can I help you today? You can ask me about admissions, courses, placements, campus life, or any other information.",
  },

  // Admissions Queries
  admissionsUG: {
    keywords: ["ug admissions", "b.tech admission", "undergraduate admission", "how to apply"],
    response: () => {
      return `📚 **Undergraduate Admissions - B.Tech Programs**

**Eligibility:** 12th pass (Science - PCM)

**Entrance Exam:** JEE Mains, Karnataka CET, or State Board exams

**Application Steps:**
1. Register on our admission portal
2. Fill the online application form
3. Upload required documents
4. Pay application fee
5. Wait for merit list
6. Attend counselling

**Required Documents:**
• 10th & 12th mark sheets
• JEE/CET admit card & result score
• Aadhar card & ID proof
• Address proof

**Contact:** admissions@bmsce.ac.in
📌 <a href="admissions.html">View Full Admissions Details</a>`;
    },
  },

  admissionsPG: {
    keywords: ["pg admissions", "m.tech admission", "postgraduate admission", "mtech apply"],
    response: () => {
      return `📚 **Postgraduate Admissions - M.Tech Programs**

**Eligibility:** B.E./B.Tech degree

**Entrance:** Valid GATE score in your discipline

**Application Process:**
1. Register on PG admission portal
2. Submit GATE scorecard
3. Fill application form
4. Upload documents
5. Merit list announced
6. Attend counselling

**Documents Required:**
• B.Tech/B.E. degree certificate
• GATE scorecard
• Aadhar card & ID proof
• Category certificate (if applicable)

**Available Programs:** Civil, Mechanical, Electrical, Electronics, CSE, Chemical, Aerospace, AI & Machine Learning

**Contact:** pg-admissions@bmsce.ac.in
📌 <a href="pg-civil.html">View Postgraduate Programs</a>`;
    },
  },

  // Courses & Programs
  ugCourses: {
    keywords: ["ug courses", "b.tech programs", "undergraduate programs", "courses offered"],
    response: () => {
      const depts = chatbotKnowledge.departments
        .map((d) => `• **${d.name}** (${d.code})`)
        .join("\n");
      return `🎓 **Undergraduate Programs - B.Tech**

We offer 8 B.Tech specializations:
${depts}

All programs are 4-year courses affiliated with VTU and NAAC accredited (Grade A).

Each program has:
✓ Latest curriculum aligned with industry needs
✓ State-of-the-art laboratories
✓ Experienced faculty
✓ Research opportunities
✓ Industry internships

📌 <a href="academics.html">Explore All Programs</a>`;
    },
  },

  pgCourses: {
    keywords: ["pg courses", "m.tech programs", "postgraduate programs", "master programs"],
    response: () => {
      const pgPrograms = chatbotKnowledge.postgraduate
        .map((p) => `• **M.Tech ${p.name}**`)
        .join("\n");
      return `🎓 **Postgraduate Programs - M.Tech**

We offer 8 M.Tech specializations:
${pgPrograms}

**Program Duration:** 2 years
**Eligibility:** Valid GATE score
**Mode:** Full-time

Each program includes:
✓ Advanced curriculum
✓ Research thesis component
✓ Industry partnerships
✓ Expert faculty guidance
✓ Placement assistance

📌 <a href="pg-cse.html">Explore M.Tech Programs</a>`;
    },
  },

  specificDepartment: {
    keywords: ["computer science", "mechanical", "electrical", "electronics", "civil", "chemical", "aerospace", "ai", "machine learning"],
    response: (keyword) => {
      const dept = chatbotKnowledge.departments.find(
        (d) =>
          d.name.toLowerCase().includes(keyword) ||
          d.slug.includes(keyword.toLowerCase())
      );

      if (!dept) return null;

      const departmentPageBySlug = {
        civil: "dept-civil.html",
        mechanical: "dept-mechanical.html",
        electrical: "dept-electrical.html",
        electronics: "dept-electronics.html",
        cse: "dept-cse.html",
        chemical: "dept-chemical.html",
        aerospace: "dept-aerospace.html",
        "ml-ai": "dept-ml.html"
      };
      const departmentHref = departmentPageBySlug[dept.slug] || "departments.html";

      return `📖 **${dept.name} Department**

**B.Tech Program:** ${dept.ug}
**M.Tech Program:** ${dept.pg}

${dept.description}

**Department Contact:** ${dept.contact}

**Specializations Available:**
${dept.pg.split("(")[1].split(")")[0]}

📌 <a href="${departmentHref}">View Department Details</a>`;
    },
  },

  // Placements
  placements: {
    keywords: ["placements", "placement statistics", "salary", "recruiters", "job opportunities", "internship"],
    response: () => {
      const recruiters = chatbotKnowledge.placements.topRecruiters.slice(0, 8).join(", ");
      return `💼 **Placements & Career Opportunities**

**Placement Statistics (2023-24):**
• **Placement Rate:** ${chatbotKnowledge.placements.statistics.placement_rate}
• **Average Salary:** ${chatbotKnowledge.placements.statistics.average_salary}
• **Highest Package:** ${chatbotKnowledge.placements.statistics.highest_salary}
• **Median Salary:** ${chatbotKnowledge.placements.statistics.median_salary}

**Top Recruiting Companies:**
${recruiters} & many more...

**Industries:** IT/Software, Finance, Consulting, Manufacturing, Core Engineering, Aerospace

**Career Support:**
✓ Placement training programs
✓ Industry interaction sessions
✓ Resume & interview workshops
✓ On-campus recruitment drives

📌 <a href="placements.html">View Placement Details</a>
📧 Contact: placements@bmsce.ac.in`;
    },
  },

  // Campus Facilities
  facilities: {
    keywords: ["facilities", "labs", "library", "sports", "hostel", "campus amenities", "infrastructure"],
    response: () => {
      return `🏢 **Campus Facilities & Infrastructure**

**Academic Facilities:**
${chatbotKnowledge.facilities.academic.map((f) => `• ${f}`).join("\n")}

**Sports & Recreation:**
${chatbotKnowledge.facilities.sports.slice(0, 4).map((f) => `• ${f}`).join("\n")}

**Other Amenities:**
${chatbotKnowledge.facilities.amenities.slice(0, 5).map((f) => `• ${f}`).join("\n")}

**Student Clubs:**
Robotics, IEEE, Coding, Entrepreneurship, Cultural, Sports & more

📌 <a href="facilities.html">Explore Complete Facilities</a>`;
    },
  },

  // Campus Life
  campusLife: {
    keywords: ["campus life", "events", "clubs", "hostels", "student activities", "cultural"],
    response: () => {
      return `🎉 **Campus Life at BMSCE**

**Annual Events:**
${chatbotKnowledge.campusLife.events.map((e) => `• ${e}`).join("\n")}

**Student Clubs:**
${chatbotKnowledge.campusLife.clubs.map((c) => `• ${c}`).join("\n")}

**Hostel Facilities:**
✓ Well-equipped rooms with modern amenities
✓ 24/7 security and surveillance
✓ High-speed WiFi & internet
✓ Mess with quality food
✓ Recreational areas
✓ Medical support

**Student Support:**
✓ Mentorships
✓ Career guidance
✓ Mental health support
✓ Counselling services

📌 <a href="campus-life.html">Learn More About Campus Life</a>`;
    },
  },

  // Departments/College Info
  departments: {
    keywords: ["departments", "list of departments", "how many departments", "engineering disciplines"],
    response: () => {
      return `🏛️ **Departments at BMSCE**

We have 8 engineering departments:

${chatbotKnowledge.departments.map((d) => `• **${d.name}** (${d.code})`).join("\n")}

Each department offers:
✓ Bachelor of Technology (B.Tech) - 4 years
✓ Master of Technology (M.Tech) - 2 years
✓ Research opportunities
✓ Industry collaborations

**College Overview:**
• Est. 1946 | NAAC Grade A
• Affiliated to VTU
• Located in Bangalore, India
• 50+ years of excellence

📌 <a href="departments.html">View All Departments</a>`;
    },
  },

  // Research & Innovation
  research: {
    keywords: ["research", "innovation", "research centers", "phd", "publications"],
    response: () => {
      return `🔬 **Research & Innovation at BMSCE**

${chatbotKnowledge.research.highlights}

**Research Centers:**
${chatbotKnowledge.research.researchCenters.map((c) => `• ${c}`).join("\n")}

**Key Areas:**
✓ Internet of Things (IoT)
✓ Artificial Intelligence & Machine Learning
✓ Renewable Energy & Sustainability
✓ Advanced Manufacturing
✓ Robotics & Automation

**Funding & Support:**
${chatbotKnowledge.research.funding}

**Publication Record:**
${chatbotKnowledge.research.publications}

📌 <a href="research.html">Explore Research Opportunities</a>`;
    },
  },

  // Contact Information
  contact: {
    keywords: ["contact", "phone", "email", "address", "how to reach", "get in touch"],
    response: () => {
      const contact = chatbotKnowledge.contact;
      return `📞 **Contact BMSCE**

**Main Office:**
${contact.mainOffice.address}
Bangalore - ${contact.mainOffice.city}
📱 ${contact.mainOffice.phone}
📧 ${contact.mainOffice.email}

**Admissions Desk:**
📧 ${contact.admissions.email}
📱 ${contact.admissions.phone}

**Placements Office:**
📧 ${contact.placements.email}

**Quick Links:**
📌 <a href="contact.html">Contact Page</a>
📌 <a href="admissions.html">Admissions Info</a>
📌 <a href="placements.html">Placements Info</a>`;
    },
  },

  // FAQ - General
  faq: {
    keywords: ["faq", "frequently asked", "common questions", "help"],
    response: () => {
      return `❓ **Frequently Asked Questions**

**Q: When are admissions open?**
A: UG admissions typically open after 12th board results (May-June). PG admissions open in July-August.

**Q: What's the course duration?**
A: B.Tech is 4 years, M.Tech is 2 years.

**Q: Are there scholarships available?**
A: Yes, various scholarships are available based on merit and category.

**Q: Can I pursue research?**
A: Yes! We have strong research facilities and opportunities in multiple domains.

**Q: What's the hostel facility like?**
A: Modern, well-equipped hostels with 24/7 security, internet, and recreational areas.

Need help with something specific?
📌 <a href="contact.html">Contact Admissions</a>`;
    },
  },

  // Default response
  default: {
    response:
      "I'm not sure about that, but I can help you with:\n\n• 📚 Admissions & How to Apply\n• 🎓 Courses & Programs\n• 💼 Placements & Careers\n• 🏢 Campus Facilities\n• 🎉 Campus Life\n• 📖 Departments\n• 🔬 Research\n• 📞 Contact Information\n\nFeel free to ask any of these, or rephrase your question!",
  },

  // Farewell
  farewell: {
    keywords: ["bye", "goodbye", "see you", "thanks", "thank you", "no thanks"],
    response:
      "Thank you for chatting with us! 👋 If you have more questions, feel free to reach out. Have a great day! 😊",
  },
};

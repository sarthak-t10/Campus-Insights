export type PostgraduateProgram = {
  slug: string;
  courseName: string;
  degreeTitle: 'M.Tech';
  departmentName: string;
  shortOverview: string;
  about: string;
  focusAreas: string[];
  objectives: string[];
  curriculumCore: string[];
  curriculumElectives: string[];
  researchThesis: string;
  laboratories: string[];
  facilities: string[];
  careerIndustries: string[];
  careerRoles: string[];
  faculty: { name: string; expertise: string }[];
  admissionRequirements: string[];
  entranceExam: string;
  contact: {
    departmentEmail: string;
    departmentPhone: string;
    coordinatorName: string;
    coordinatorEmail: string;
  };
};

export const postgraduatePrograms: PostgraduateProgram[] = [
  {
    slug: 'civil-engineering-mtech',
    courseName: 'Civil Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Civil Engineering',
    shortOverview:
      'An advanced program focused on resilient infrastructure, structural intelligence, and sustainable urban development.',
    about:
      'The M.Tech in Civil Engineering is designed for graduates who want to engineer future-ready infrastructure. Students work on advanced analysis, lifecycle planning, and sustainability challenges across urban and industrial systems.',
    focusAreas: ['Structural Systems', 'Geotechnical Design', 'Transportation Analytics', 'Water Resources and Sustainability'],
    objectives: [
      'Develop advanced modelling and simulation capability for complex infrastructure.',
      'Build research and design skills for sustainable construction and planning.',
      'Prepare for leadership roles in consulting, planning, and public-sector engineering.'
    ],
    curriculumCore: ['Advanced Structural Analysis', 'Finite Element Methods', 'Advanced Soil Mechanics', 'Hydrology and Water Systems'],
    curriculumElectives: ['Earthquake Engineering', 'Smart Mobility Planning', 'Green Building Technologies', 'Bridge Design and Assessment'],
    researchThesis: 'A final-year thesis solving an applied or research problem with faculty and industry mentorship.',
    laboratories: ['Structural Dynamics Lab', 'Geotechnical Characterization Lab', 'Hydraulics and Fluid Modeling Lab'],
    facilities: ['High-performance computing workstations', 'Surveying and GIS suite', 'Material testing instrumentation'],
    careerIndustries: ['Infrastructure Consulting', 'Construction and EPC', 'Urban Development', 'Transportation and Public Works'],
    careerRoles: ['Structural Design Engineer', 'Infrastructure Planning Engineer', 'Project Engineer', 'Research Associate'],
    faculty: [
      { name: 'Prof. R. Srinivas', expertise: 'Seismic-resistant structures and finite element modelling' },
      { name: 'Prof. N. Kavya', expertise: 'Sustainable transportation and mobility systems' }
    ],
    admissionRequirements: ['B.E./B.Tech in Civil Engineering or relevant discipline', 'Minimum qualifying academic score as per university norms', 'Statement of purpose and academic records'],
    entranceExam: 'Valid GATE score in Civil Engineering or university-approved entrance pathway.',
    contact: {
      departmentEmail: 'civil.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2101',
      coordinatorName: 'Dr. R. Srinivas',
      coordinatorEmail: 'coordinator.civilpg@campusinsights.edu'
    }
  },
  {
    slug: 'mechanical-engineering-mtech',
    courseName: 'Mechanical Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Mechanical Engineering',
    shortOverview:
      'A future-oriented specialization in advanced manufacturing, thermal systems, and intelligent mechanical design.',
    about:
      'The M.Tech in Mechanical Engineering equips learners for modern industrial systems. The program combines design optimization, manufacturing intelligence, and energy-efficient engineering through lab and project immersion.',
    focusAreas: ['Advanced Manufacturing', 'Thermal and Fluid Systems', 'Robotics and Automation', 'Product Design Engineering'],
    objectives: [
      'Strengthen capability in computational and experimental mechanical analysis.',
      'Build innovation skills in automation and sustainable energy systems.',
      'Prepare students for R&D, design, and process leadership roles.'
    ],
    curriculumCore: ['Advanced Thermodynamics', 'Computational Fluid Dynamics', 'Robotics and Control', 'Design Optimization'],
    curriculumElectives: ['Additive Manufacturing', 'Mechatronics', 'Industrial Automation', 'Composite Materials'],
    researchThesis: 'A guided thesis in manufacturing, design, thermal systems, or automation with practical validation.',
    laboratories: ['CAD/CAM Lab', 'Thermal Engineering Lab', 'Advanced Robotics Lab'],
    facilities: ['Rapid prototyping center', 'CAE software suite', 'Smart manufacturing test cells'],
    careerIndustries: ['Automotive', 'Aerospace Manufacturing', 'Industrial Automation', 'Energy and Process Industries'],
    careerRoles: ['Design Engineer', 'Automation Engineer', 'Thermal Systems Engineer', 'R&D Engineer'],
    faculty: [
      { name: 'Prof. A. Menon', expertise: 'Advanced thermal systems and heat transfer' },
      { name: 'Prof. P. Iyer', expertise: 'Robotics, control, and smart manufacturing' }
    ],
    admissionRequirements: ['B.E./B.Tech in Mechanical or allied engineering', 'Minimum qualifying academic score', 'Academic transcript and statement of purpose'],
    entranceExam: 'Valid GATE score in Mechanical Engineering or equivalent approved qualification.',
    contact: {
      departmentEmail: 'mechanical.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2102',
      coordinatorName: 'Dr. A. Menon',
      coordinatorEmail: 'coordinator.mechpg@campusinsights.edu'
    }
  },
  {
    slug: 'electrical-engineering-mtech',
    courseName: 'Electrical Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Electrical Engineering',
    shortOverview:
      'An advanced curriculum centered on power systems, renewable integration, and intelligent electrical networks.',
    about:
      'The M.Tech in Electrical Engineering builds expertise in modern grid engineering and energy systems. Students engage with smart-grid architecture, power electronics, and sustainable electrification models.',
    focusAreas: ['Power Systems', 'Power Electronics', 'Renewable Energy Integration', 'Control and Automation'],
    objectives: [
      'Develop expertise in analysis and control of advanced electrical networks.',
      'Enable design of energy-efficient and resilient electrical infrastructure.',
      'Prepare graduates for industry, utility, and research careers.'
    ],
    curriculumCore: ['Advanced Power System Analysis', 'Power Electronics Converters', 'Control Theory', 'Smart Grid Technologies'],
    curriculumElectives: ['Microgrids', 'Electric Drives', 'Energy Storage Systems', 'HVDC Transmission'],
    researchThesis: 'A thesis project on power quality, grid optimization, renewable systems, or intelligent control.',
    laboratories: ['Power Electronics Lab', 'High Voltage Lab', 'Smart Grid Simulation Lab'],
    facilities: ['Real-time digital simulators', 'Industrial drives platform', 'Renewable energy integration setup'],
    careerIndustries: ['Power Generation and Utilities', 'Renewable Energy', 'Industrial Automation', 'Grid Technology'],
    careerRoles: ['Power Systems Engineer', 'Protection and Control Engineer', 'Grid Analyst', 'Electrical Design Engineer'],
    faculty: [
      { name: 'Prof. S. Raman', expertise: 'Power system protection and grid stability' },
      { name: 'Prof. M. Deepa', expertise: 'Power electronics and renewable integration' }
    ],
    admissionRequirements: ['B.E./B.Tech in Electrical Engineering or related branch', 'Qualifying academic score under university rules', 'Statement of purpose and academic credentials'],
    entranceExam: 'Valid GATE score in Electrical Engineering or institution-approved entrance mode.',
    contact: {
      departmentEmail: 'electrical.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2103',
      coordinatorName: 'Dr. S. Raman',
      coordinatorEmail: 'coordinator.eepg@campusinsights.edu'
    }
  },
  {
    slug: 'electronics-engineering-mtech',
    courseName: 'Electronics Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Electronics Engineering',
    shortOverview:
      'An advanced specialization in VLSI, embedded systems, communication intelligence, and electronics design.',
    about:
      'The M.Tech in Electronics Engineering focuses on next-generation electronics and digital systems. Students gain depth in chip-level design, intelligent embedded platforms, and communication technologies.',
    focusAreas: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'IoT and Intelligent Devices'],
    objectives: [
      'Develop advanced electronic system design and verification skills.',
      'Build expertise for semiconductor, embedded, and communication industries.',
      'Prepare students for product innovation and research pathways.'
    ],
    curriculumCore: ['Digital VLSI Design', 'Embedded System Architecture', 'Advanced Signal Processing', 'Wireless Communication Systems'],
    curriculumElectives: ['SoC Design', 'IoT Security', 'Computer Vision Hardware', 'Mixed Signal Design'],
    researchThesis: 'A thesis on design, optimization, or implementation of advanced electronics systems.',
    laboratories: ['VLSI and FPGA Lab', 'Embedded Systems Lab', 'Signal Processing Lab'],
    facilities: ['EDA toolchain access', 'Prototype fabrication support', 'High-speed communication testbed'],
    careerIndustries: ['Semiconductor', 'Consumer Electronics', 'Telecommunications', 'Embedded Product Engineering'],
    careerRoles: ['VLSI Design Engineer', 'Embedded Engineer', 'Hardware Validation Engineer', 'Signal Processing Engineer'],
    faculty: [
      { name: 'Prof. K. Priya', expertise: 'VLSI architecture and low-power design' },
      { name: 'Prof. D. Arjun', expertise: 'Embedded intelligence and real-time systems' }
    ],
    admissionRequirements: ['B.E./B.Tech in Electronics, ECE, E&I, or allied discipline', 'Minimum required academic score', 'Statement of purpose and complete academic dossier'],
    entranceExam: 'Valid GATE score in Electronics and Communication or equivalent accepted pathway.',
    contact: {
      departmentEmail: 'electronics.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2104',
      coordinatorName: 'Dr. K. Priya',
      coordinatorEmail: 'coordinator.ecepg@campusinsights.edu'
    }
  },
  {
    slug: 'computer-science-mtech',
    courseName: 'Computer Science',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Computer Science and Engineering',
    shortOverview:
      'A rigorous M.Tech program focused on distributed systems, data intelligence, security, and next-gen software architecture.',
    about:
      'The M.Tech in Computer Science develops mastery in scalable computing and intelligent systems. The curriculum blends advanced theory, engineering practice, and research-oriented problem solving.',
    focusAreas: ['Distributed and Cloud Systems', 'Data Science and AI', 'Cybersecurity', 'Software Systems Engineering'],
    objectives: [
      'Build deep expertise in advanced algorithms and system design.',
      'Enable engineering of secure, scalable, and data-driven applications.',
      'Prepare students for leadership in software, product, and research teams.'
    ],
    curriculumCore: ['Advanced Algorithms', 'Distributed Systems', 'Machine Learning for Engineers', 'Secure Software Engineering'],
    curriculumElectives: ['Cloud-native Architecture', 'Big Data Platforms', 'Natural Language Processing', 'Blockchain Systems'],
    researchThesis: 'A substantial thesis involving implementation and evaluation of a novel systems or AI solution.',
    laboratories: ['High Performance Computing Lab', 'Cybersecurity Lab', 'AI and Data Engineering Lab'],
    facilities: ['GPU-enabled compute nodes', 'Cloud sandbox platform', 'Research collaboration workspace'],
    careerIndustries: ['Software Product Development', 'Cloud and Platform Engineering', 'Cybersecurity', 'AI and Data Solutions'],
    careerRoles: ['Software Architect', 'Data Engineer', 'ML Engineer', 'Security Engineer'],
    faculty: [
      { name: 'Prof. V. Mehta', expertise: 'Distributed computing and large-scale software systems' },
      { name: 'Prof. T. Nair', expertise: 'Machine learning and trustworthy AI' }
    ],
    admissionRequirements: ['B.E./B.Tech in CSE/IT or equivalent computing background', 'Qualifying score as per university admissions policy', 'Statement of purpose and academic transcripts'],
    entranceExam: 'Valid GATE score in Computer Science and Information Technology or equivalent approved criterion.',
    contact: {
      departmentEmail: 'cse.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2105',
      coordinatorName: 'Dr. V. Mehta',
      coordinatorEmail: 'coordinator.cspg@campusinsights.edu'
    }
  },
  {
    slug: 'chemical-engineering-mtech',
    courseName: 'Chemical Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Chemical Engineering',
    shortOverview:
      'An advanced program in process intensification, sustainable production, and applied chemical systems engineering.',
    about:
      'The M.Tech in Chemical Engineering trains students to solve modern process challenges with a sustainability-first mindset. Students work on optimization, process safety, and green chemistry applications.',
    focusAreas: ['Process Systems Engineering', 'Reaction Engineering', 'Sustainable and Green Processes', 'Biochemical Engineering'],
    objectives: [
      'Develop capability in modelling, optimization, and process scale-up.',
      'Prepare graduates for sustainable production and environmental compliance.',
      'Support research readiness in advanced chemical process technologies.'
    ],
    curriculumCore: ['Advanced Chemical Reaction Engineering', 'Process Dynamics and Control', 'Separation Process Design', 'Computational Process Modeling'],
    curriculumElectives: ['Bioprocess Engineering', 'Catalysis and Reactor Design', 'Waste-to-Value Systems', 'Process Safety Engineering'],
    researchThesis: 'A thesis project addressing innovation in process design, intensification, or sustainability.',
    laboratories: ['Advanced Process Control Lab', 'Reaction Engineering Lab', 'Biochemical Process Lab'],
    facilities: ['Pilot plant setup', 'Analytical instrumentation suite', 'Process simulation software environment'],
    careerIndustries: ['Petrochemicals and Refining', 'Specialty Chemicals', 'Pharmaceutical Manufacturing', 'Sustainability and Environmental Engineering'],
    careerRoles: ['Process Engineer', 'Plant Design Engineer', 'Process Safety Engineer', 'R&D Scientist'],
    faculty: [
      { name: 'Prof. G. Rao', expertise: 'Process systems and reactor optimization' },
      { name: 'Prof. L. Sneha', expertise: 'Green chemistry and sustainable process design' }
    ],
    admissionRequirements: ['B.E./B.Tech in Chemical Engineering or related field', 'Academic eligibility according to admission regulations', 'Statement of purpose and official transcripts'],
    entranceExam: 'Valid GATE score in Chemical Engineering or other recognized admission channel.',
    contact: {
      departmentEmail: 'chemical.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2106',
      coordinatorName: 'Dr. G. Rao',
      coordinatorEmail: 'coordinator.chpg@campusinsights.edu'
    }
  },
  {
    slug: 'aerospace-engineering-mtech',
    courseName: 'Aerospace Engineering',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Aerospace Engineering',
    shortOverview:
      'An advanced aerospace program emphasizing aerodynamics, propulsion, and space systems for future flight.',
    about:
      'The M.Tech in Aerospace Engineering develops advanced capability in aircraft and space technology. Students train in simulation-intensive design, propulsion innovation, and flight systems integration.',
    focusAreas: ['Aerodynamics', 'Propulsion Systems', 'Flight Mechanics and Control', 'Space Systems Engineering'],
    objectives: [
      'Build expertise in multidisciplinary aerospace system design.',
      'Develop analytical and experimental skills for high-performance flight systems.',
      'Prepare for aerospace R&D, simulation, and design careers.'
    ],
    curriculumCore: ['Advanced Aerodynamics', 'Gas Dynamics and Propulsion', 'Flight Dynamics and Control', 'Aerospace Structures'],
    curriculumElectives: ['UAV Systems Engineering', 'Computational Aeroelasticity', 'Orbital Mechanics', 'Spacecraft Design'],
    researchThesis: 'A guided thesis in aerospace modelling, testing, simulation, or design optimization.',
    laboratories: ['Aerodynamics and Wind Tunnel Lab', 'Propulsion Test Lab', 'Flight Simulation Lab'],
    facilities: ['CFD and simulation cluster', 'Composite materials workshop', 'Embedded avionics prototyping bench'],
    careerIndustries: ['Aerospace and Defense', 'UAV and Drone Systems', 'Space Technology', 'Aviation Design Services'],
    careerRoles: ['Aerospace Design Engineer', 'Flight Systems Engineer', 'Propulsion Engineer', 'Simulation Engineer'],
    faculty: [
      { name: 'Prof. H. Kumar', expertise: 'Computational aerodynamics and flight simulation' },
      { name: 'Prof. S. Alekhya', expertise: 'Propulsion systems and aerospace structures' }
    ],
    admissionRequirements: ['B.E./B.Tech in Aerospace, Mechanical, or allied engineering discipline', 'Required qualifying academic score', 'Statement of purpose and complete academic profile'],
    entranceExam: 'Valid GATE score in Aerospace/Mechanical or equivalent approved admissions route.',
    contact: {
      departmentEmail: 'aerospace.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2107',
      coordinatorName: 'Dr. H. Kumar',
      coordinatorEmail: 'coordinator.aepg@campusinsights.edu'
    }
  },
  {
    slug: 'ai-machine-learning-mtech',
    courseName: 'AI and Machine Learning',
    degreeTitle: 'M.Tech',
    departmentName: 'Department of Artificial Intelligence and Data Science',
    shortOverview:
      'A deep specialization in AI engineering, machine learning systems, and responsible intelligent technologies.',
    about:
      'The M.Tech in AI and Machine Learning is built for advanced intelligent system design and deployment. Students combine statistical rigor, deep learning, and production-grade AI engineering.',
    focusAreas: ['Deep Learning Systems', 'Natural Language Processing', 'Computer Vision', 'Responsible and Explainable AI'],
    objectives: [
      'Develop capability to build, deploy, and monitor AI systems at scale.',
      'Strengthen research depth in modern machine learning methods.',
      'Prepare for high-impact careers in AI product and research teams.'
    ],
    curriculumCore: ['Advanced Machine Learning', 'Deep Learning Architectures', 'Probabilistic Modelling', 'MLOps and Deployment'],
    curriculumElectives: ['Reinforcement Learning', 'Multimodal AI', 'Edge AI Systems', 'Trustworthy AI and Governance'],
    researchThesis: 'A thesis centered on novel AI methods or practical AI systems for real-world domains.',
    laboratories: ['Applied AI Lab', 'Computer Vision Lab', 'NLP and Language Intelligence Lab'],
    facilities: ['GPU clusters for model training', 'MLOps pipeline environment', 'Industry-grade datasets and tooling'],
    careerIndustries: ['AI Product Companies', 'FinTech and Analytics', 'Healthcare AI', 'Autonomous and Robotics Systems'],
    careerRoles: ['ML Engineer', 'AI Scientist', 'Data Scientist', 'Applied AI Researcher'],
    faculty: [
      { name: 'Prof. I. Fernandes', expertise: 'Deep learning systems and optimization' },
      { name: 'Prof. P. Gautam', expertise: 'NLP, LLM applications, and ethical AI' }
    ],
    admissionRequirements: ['B.E./B.Tech in CSE, AI/DS, IT, ECE, or relevant quantitative discipline', 'Minimum academic eligibility score', 'Statement of purpose and official academic documents'],
    entranceExam: 'Valid GATE score in Computer Science/Data Science related paper or approved equivalent entry mode.',
    contact: {
      departmentEmail: 'aiml.pg@campusinsights.edu',
      departmentPhone: '+91 80 4455 2108',
      coordinatorName: 'Dr. I. Fernandes',
      coordinatorEmail: 'coordinator.aimlpg@campusinsights.edu'
    }
  }
];

export const postgraduateProgramBySlug = Object.fromEntries(
  postgraduatePrograms.map((program) => [program.slug, program])
) as Record<string, PostgraduateProgram>;

// ═══════════════════════════════════════════════════════════
//  SAARA CONTENT YAHIN HAI — sirf is file ko edit karo.
//  Baaki kisi file ko chhune ki zaroorat nahi.
//
//  ⚠️  EK KAAM BAKI HAI: projects me `code: null` likha hai kyunki
//      mujhe aapke repo ke asli link nahi pata. Har project ka
//      GitHub repo ka URL daal do — recruiters sabse pehle wahi
//      click karte hain. Galat link se accha khaali rakha hai.
// ═══════════════════════════════════════════════════════════

export const profile = {
  name: 'Prem Tiwari',
  role: 'BTech CSE (AI) Student',
  headline: "Hey, I'm Prem — a Full Stack Developer in the making",
  tagline:
    'Passionate about building web applications and exploring modern technologies. Currently focused on Full Stack Development with a growing interest in Cyber Security.',
  available: 'Open for internships & projects',

  // Resume: apni PDF "resume.pdf" naam se `public/` folder me daalo.
  // Button nahi chahiye to -> resume: null,
  resume: 'resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a passionate computer science student with a strong foundation in web development and programming. Currently pursuing my BTech in CSE with a specialization in Artificial Intelligence, I'm dedicated to building practical solutions that make a difference.",
    'My journey started with a Diploma in Information Technology from Parul University, where I developed my core programming skills. Now, I\'m expanding my expertise in Full Stack Development while maintaining a keen interest in Cyber Security.',
  ],
  focus: ['Full Stack Development', 'Python', 'AI / Deep Learning', 'Cyber Security'],
}

export const education = [
  {
    degree: 'BTech in CSE (AI)',
    detail: 'Computer Science Engineering — Artificial Intelligence',
    period: 'Expected 2027',
    status: 'Currently Pursuing',
    ongoing: true,
  },
  {
    degree: 'Diploma in Information Technology',
    detail: 'Parul University — Gujarat, India',
    period: 'Completed 2024',
    status: 'Completed',
    ongoing: false,
  },
]

// Levels: Advanced · Proficient · Familiar · Strong · Growing
export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', level: 'Proficient' },
      { name: 'HTML', level: 'Proficient' },
      { name: 'CSS', level: 'Proficient' },
      { name: 'Vite', level: 'Familiar' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express', level: 'Proficient' },
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'Socket.io / WebSockets', level: 'Proficient' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'Prisma ORM', level: 'Proficient' },
      { name: 'PostgreSQL / SQLite', level: 'Familiar' },
      { name: 'Database Design', level: 'Familiar' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker & Compose', level: 'Familiar' },
      { name: 'Git & GitHub', level: 'Familiar' },
      { name: 'Third-party APIs', level: 'Familiar' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'TensorFlow / Keras', level: 'Familiar' },
      { name: 'CNN & Transfer Learning', level: 'Familiar' },
      { name: 'OpenCV', level: 'Familiar' },
    ],
  },
]

// ── PROJECTS ───────────────────────────────────────────────
// Sabse strong project sabse upar rakha hai — recruiters pehla card
// hi dhyaan se dekhte hain.
export const projects = [
  {
    title: 'RentApp',
    subtitle: 'Full-Stack PropTech & Rental Management Platform',
    description:
      'A real-time property rental and tenancy ecosystem with multi-role access control (tenant, owner, admin), phone OTP authentication, interactive UPI payments, digital lease agreements with e-signatures, QR visitor passes, maintenance ticketing, and live Socket.io messaging.',
    tech: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma ORM',
      'Socket.io',
      'Docker',
    ],
    live: null, // TODO: live demo ka link ho to daalo
    code: null, // TODO: GitHub repo ka link daalo
    featured: true,
  },
  {
    title: 'Skin Cancer Classification System',
    subtitle: 'AI-Powered Computer-Aided Diagnosis',
    description:
      'Deep learning system that classifies skin lesions as benign or malignant using the HAM10000 dermatology dataset. Uses transfer learning with a CNN backbone, image preprocessing and augmentation, class-imbalance handling, and Grad-CAM explainability to show which regions influenced each prediction.',
    tech: [
      'Python',
      'TensorFlow/Keras',
      'OpenCV',
      'Transfer Learning',
      'Grad-CAM',
      'Streamlit',
    ],
    // Ye numbers card pe chhote stats ki tarah dikhte hain
    metrics: [
      { value: '92.4%', label: 'Accuracy' },
      { value: '0.94', label: 'ROC-AUC' },
      { value: '10,015', label: 'Images' },
    ],
    live: null, // TODO: Streamlit app deploy kiya ho to link daalo
    code: null, // TODO: GitHub repo ka link daalo
    featured: true,
  },
  {
    title: 'ScrapBajar',
    subtitle: 'Scrap Collection Platform',
    description:
      'A web platform where users can request scrap pickup from their location, with prices based on current market rates — focused on sustainability and digital convenience.',
    // TODO: isme jo asli stack use kiya tha wo likho (React? Node? Django?)
    tech: ['Python', 'Web Development'],
    live: null,
    code: null, // TODO: GitHub repo ka link daalo
    featured: false,
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal Branding',
    description:
      'This portfolio — hand-coded, no page builder. Built with React and Vite, deployed automatically to GitHub Pages through a GitHub Actions workflow.',
    tech: ['React', 'Vite', 'CSS', 'GitHub Actions'],
    live: 'https://prem-2255.github.io/portfolio/',
    code: 'https://github.com/prem-2255/portfolio',
    featured: false,
  },
]

export const socials = {
  email: 'premt8544@gmail.com',
  github: 'https://github.com/prem-2255',
  linkedin: 'https://www.linkedin.com/in/prem-tiwari-84ba85248',
}

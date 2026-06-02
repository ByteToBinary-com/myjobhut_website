export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "how-to-hire-the-right-candidate-faster-in-2026",
    title: "How to Hire the Right Candidate Faster in 2026",
    excerpt: "A practical hiring checklist for employers who need better shortlists, faster screening, and stronger offer acceptance.",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "Hiring",
    content: [
      "Fast hiring in 2026 starts before the job is posted. Employers should align on the role purpose, must-have skills, salary range, interview steps, and decision owners before sourcing begins.",
      "The strongest hiring teams use structured screening instead of reviewing every profile manually from scratch. A clear scorecard helps recruiters compare candidates on skills, experience, notice period, compensation fit, and communication quality.",
      "Speed also depends on candidate experience. Share feedback quickly, keep interview rounds limited, and make offers while the candidate is still engaged. Delays often lead to competing offers and lower joining confidence."
    ]
  },
  {
    slug: "how-to-create-a-resume-that-gets-interview-calls",
    title: "How to Create a Resume That Gets Interview Calls",
    excerpt: "Simple resume improvements that help candidates make their experience easier for recruiters to understand and shortlist.",
    date: "2026-06-01",
    readTime: "5 min read",
    category: "Resume",
    content: [
      "A resume that gets interview calls is easy to scan. Keep the layout clean, place your most relevant skills near the top, and make sure your contact details, location, experience, and education are clear.",
      "Recruiters look for evidence, not only responsibilities. Add achievements, tools used, project outcomes, sales numbers, process improvements, certifications, or team responsibilities wherever they are relevant.",
      "Customize your resume for each role type. If you are applying for pharma sales, manufacturing, HR, finance, or operations roles, highlight the keywords and achievements that match that specific job description."
    ]
  },
  {
    slug: "current-salary-trends-across-industries-in-india",
    title: "Current Salary Trends Across Industries in India",
    excerpt: "A 2026 overview of how Indian employers are thinking about salary increments, skill premiums, and retention.",
    date: "2026-05-31",
    readTime: "6 min read",
    category: "Market Trends",
    content: [
      "Salary planning in India remains steady in 2026, with many employers focusing less on uniform hikes and more on differentiated rewards for business-critical skills, high performance, and retention-sensitive roles.",
      "Industries with stronger demand for specialized talent, such as pharma, GCCs, engineering, infrastructure, finance, and digital roles, may offer better growth for candidates who bring proven skills and faster role readiness.",
      "For candidates, the practical takeaway is to benchmark salary by role, location, experience, and skill depth. For employers, competitive compensation should be paired with clear role expectations, career growth, timely feedback, and a smooth hiring process."
    ]
  },
  {
    slug: "pharma-hiring-trends-in-india-2026",
    title: "Pharma Hiring Trends in India 2026",
    excerpt: "Key recruitment trends shaping pharma hiring, from regulatory roles to sales, manufacturing, quality, and life sciences support.",
    date: "2026-05-30",
    readTime: "5 min read",
    category: "Pharma Hiring",
    content: [
      "Pharma hiring in India continues to be driven by demand for skilled talent across sales, quality, production, regulatory affairs, pharmacovigilance, clinical support, and supply chain functions.",
      "Employers are placing higher value on candidates who understand compliance, documentation, territory performance, manufacturing standards, and industry-specific communication. Relevant experience often shortens onboarding time.",
      "To hire well in pharma, companies should define role-specific screening criteria, verify domain exposure carefully, and move quickly when a candidate matches the technical, location, salary, and notice-period requirements."
    ]
  },
  {
    slug: "why-companies-prefer-recruitment-agencies-for-hiring",
    title: "Why Companies Prefer Recruitment Agencies for Hiring",
    excerpt: "Why employers work with recruitment agencies to improve hiring speed, candidate quality, and coordination.",
    date: "2026-05-29",
    readTime: "5 min read",
    category: "Recruitment",
    content: [
      "Companies often prefer recruitment agencies when hiring needs are urgent, specialized, confidential, or spread across multiple locations. Agencies can expand reach beyond active job applicants.",
      "A good recruitment partner helps with sourcing, initial screening, candidate coordination, salary expectation checks, interview follow-ups, and joining support. This reduces pressure on internal HR teams.",
      "The best results come when employers share clear job descriptions, salary budgets, must-have skills, and feedback quickly. Recruitment agencies work fastest when the hiring process is structured and decision-makers are aligned."
    ]
  },
  {
    slug: "how-to-prepare-for-interviews",
    title: "How to prepare for interviews",
    excerpt: "A practical interview preparation checklist for candidates who want to communicate clearly and confidently.",
    date: "2026-05-18",
    readTime: "5 min read",
    category: "Career Advice",
    content: [
      "Strong interview preparation starts with understanding the role, the company, and the outcomes expected from the position.",
      "Prepare concise examples that show your impact, decision-making, communication style, and ability to learn.",
      "Review common questions, practice your introduction, and keep thoughtful questions ready for the interviewer."
    ]
  },
  {
    slug: "how-employers-can-hire-better-talent",
    title: "How employers can hire better talent",
    excerpt: "Improve hiring quality with sharper role clarity, consistent screening, and faster candidate communication.",
    date: "2026-05-14",
    readTime: "6 min read",
    category: "Hiring",
    content: [
      "Better hiring begins with a clear role scorecard and alignment between stakeholders before sourcing begins.",
      "Employers should define must-have skills, compensation range, evaluation steps, and interview ownership early.",
      "Candidate experience matters. Quick feedback and transparent communication increase offer acceptance quality."
    ]
  },
  {
    slug: "top-hiring-trends-in-india",
    title: "Top hiring trends in India",
    excerpt: "Key trends shaping recruitment in India, from skills-first hiring to hybrid work and faster screening cycles.",
    date: "2026-05-08",
    readTime: "4 min read",
    category: "Market Trends",
    content: [
      "Indian hiring teams are increasingly prioritizing skills, project experience, and adaptability over narrow credential filters.",
      "Hybrid and remote roles continue to influence candidate expectations, especially in technology and customer support roles.",
      "Recruiters who combine structured screening with human judgment are better placed to identify high-fit candidates."
    ]
  },
  {
    slug: "resume-tips-for-freshers",
    title: "Resume tips for freshers",
    excerpt: "Simple ways freshers can make resumes clearer, more credible, and easier for recruiters to shortlist.",
    date: "2026-05-02",
    readTime: "4 min read",
    category: "Resume",
    content: [
      "Freshers should keep resumes concise, achievement-focused, and easy to scan for education, projects, internships, and skills.",
      "Add measurable project outcomes wherever possible and avoid generic claims that are not supported by examples.",
      "Tailor your resume for each target role category by moving the most relevant skills and projects closer to the top."
    ]
  }
];

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

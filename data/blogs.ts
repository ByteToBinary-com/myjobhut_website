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

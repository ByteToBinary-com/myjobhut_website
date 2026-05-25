import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  FileSearch,
  Handshake,
  Megaphone,
  MessagesSquare
} from "lucide-react";

export const services = [
  {
    title: "Talent Acquisition",
    description: "Structured sourcing and shortlist support for permanent and priority roles.",
    icon: BriefcaseBusiness
  },
  {
    title: "Recruitment Consulting",
    description: "Hiring strategy, role calibration, interview planning, and market guidance.",
    icon: MessagesSquare
  },
  {
    title: "Hiring Brief Support",
    description: "Clear role descriptions, role positioning, and distribution-ready hiring content.",
    icon: Megaphone
  },
  {
    title: "Candidate Screening",
    description: "Profile review, availability checks, compensation fit, and first-level evaluation.",
    icon: FileSearch
  },
  {
    title: "Employer Branding",
    description: "Candidate-facing role narratives that make opportunities easier to understand.",
    icon: Building2
  },
  {
    title: "Resume Shortlisting",
    description: "Fast, criteria-based filtering to help hiring teams focus on relevant profiles.",
    icon: BadgeCheck
  },
  {
    title: "Interview Coordination",
    description: "Scheduling support, candidate reminders, feedback loops, and status tracking.",
    icon: CalendarCheck
  },
  {
    title: "Salary Insights",
    description: "Practical compensation context to improve offer planning and candidate alignment.",
    icon: BarChart3
  },
  {
    title: "Career Guidance",
    description: "Profile, interview, and opportunity guidance for candidates at every career stage.",
    icon: Handshake
  }
];

export const processSteps = [
  {
    title: "Understand the requirement",
    description: "We clarify role outcomes, hiring priorities, salary range, and must-have skills."
  },
  {
    title: "Source and screen",
    description: "Relevant candidates are identified, reviewed, and checked for interest and fit."
  },
  {
    title: "Coordinate interviews",
    description: "Interview schedules, updates, and feedback loops are kept clear and timely."
  },
  {
    title: "Support closure",
    description: "We help with offer alignment, joining coordination, and candidate communication."
  }
];

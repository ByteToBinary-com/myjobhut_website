import type { LucideIcon } from "lucide-react";

export type ServiceIconKey = "briefcase" | "users" | "headset" | "building" | "compass";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconKey;
};

export type Client = {
  name: string;
  industry: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  type: "Job Seeker" | "Employer";
};

export type IconMap = Record<ServiceIconKey, LucideIcon>;

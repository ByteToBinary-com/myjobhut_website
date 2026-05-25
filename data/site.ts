export const siteConfig = {
  name: "MyJobHut",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.myjobhut.com",
  description:
    "MyJobHut is a modern recruitment agency and hiring support platform helping companies attract, screen, and hire better talent.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@myjobhut.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  address: "Business District, Bengaluru, Karnataka, India",
  keywords: [
    "Recruitment agency",
    "Hiring solutions",
    "Employer hiring services",
    "Recruitment consulting",
    "Candidate screening",
    "Talent acquisition"
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Employers", href: "/employers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" }
];

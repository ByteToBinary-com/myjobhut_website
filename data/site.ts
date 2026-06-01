export const siteConfig = {
  name: "My Job Hut",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.myjobhut.com",
  description:
    "My Job Hut is a leading recruitment and staffing consultancy established on 8 March 2022, connecting talented professionals with top organizations across India.",
  logo: "/logo.png",
  icon: "/favicon.ico",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@myjobhut.com",
  emails: ["info@myjobhut.com", "resume@myjobhut.com"],
  phone: "+91 99537 92970",
  phoneHref: "+919953792970",
  phoneNumbers: [
    { label: "+91 99537 92970", href: "+919953792970", whatsapp: "919953792970" },
    { label: "+91 96679 41343", href: "+919667941343", whatsapp: "919667941343" },
    { label: "+91 92051 51816", href: "+919205151816", whatsapp: "919205151816" }
  ],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919953792970",
  address: "B-89, Block B, Second Floor, Wazirpur Industrial Area, Ashok Vihar, Delhi – 110052",
  workingHours: "Monday to Saturday, 10:00 AM – 6:00 PM",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/myjobhut/",
    instagram: "https://www.instagram.com/my_jobhut/",
    facebook: "https://www.facebook.com/myjobhutdotcom/"
  },
  candidateRegistrationForm: "https://forms.gle/rB4zVCGMzG1eHGt98",
  whatsappChannel: "https://whatsapp.com/channel/0029Vac237R7z4kiHppXzb2s",
  establishedDate: "8 March 2022",
  keywords: [
    "Recruitment agency",
    "Staffing consultancy",
    "Pan India recruitment",
    "Pharmaceutical recruitment",
    "Manufacturing hiring",
    "Power and energy recruitment",
    "FMCG recruitment",
    "Steel industry hiring",
    "Engineering recruitment",
    "Automotive hiring",
    "Real estate recruitment"
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

import type { Profile, Metric } from "@/lib/types";

export const profile: Profile = {
  name: "Sumit Gaur",
  role: "Senior Platform / DevOps Engineer",
  tagline: "Building cloud platforms that scale AI.",
  valueProposition:
    "I design and operate the distributed infrastructure — cloud governance, CI/CD, identity, and GPU platforms — that engineering orgs depend on to ship reliably at scale.",
  location: "Delhi, India",
  summary:
    "Platform engineer with 10+ years designing and operating the distributed, event-driven infrastructure that other engineering teams depend on to ship reliably at scale. Owns systems end-to-end, from architecture through production operation, spanning cross-account cloud governance, asynchronous service infrastructure, identity and access control, and CI/CD platforms serving 100+ microservices in production.",
  email: "sumitgaur769@gmail.com",
  linkedin: "https://linkedin.com/in/sumitgaur-pl",
  github: null,
  resumeUrl: "/resume.docx",
};

export const metrics: Metric[] = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Microservices in Production" },
  { value: "3,000+", label: "EKS Nodes Operated" },
  { value: "50%", label: "Cloud Cost Reduction" },
];

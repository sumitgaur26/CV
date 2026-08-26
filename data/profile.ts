import type { Profile, Metric } from "@/lib/types";

export const profile: Profile = {
  name: "Sumit Gaur",
  role: "AI Platform Lead",
  tagline: "Building the platform foundations for AI.",
  positioning:
    "Platform engineering leader building the reliable cloud, Kubernetes, governance, and GPU foundations organizations need for AI workloads.",
  valueProposition:
    "I design and operate the distributed infrastructure (cloud governance, CI/CD, identity, and Kubernetes) that engineering orgs depend on to ship reliably at scale, and I'm extending that foundation into AI infrastructure.",
  location: "Delhi, India",
  summary:
    "Platform engineer with 10+ years designing and operating the distributed, event-driven infrastructure that other engineering teams depend on to ship reliably at scale. Owns systems end-to-end, from architecture through production operation, spanning cross-account cloud governance, asynchronous service infrastructure, identity and access control, and CI/CD platforms serving 100+ microservices in production.",
  email: "sumitgaur769@gmail.com",
  linkedin: "https://linkedin.com/in/sumitgaur-pl",
  github: null,
  resumeUrl: "/resume.docx",
};

export const metrics: Metric[] = [
  { value: "25+", label: "AWS Accounts Automated" },
  { value: "3,000+", label: "EKS Nodes Operated" },
  { value: "30%", label: "Faster Release Cycles" },
  { value: "50%", label: "Cloud Cost Reduction" },
];

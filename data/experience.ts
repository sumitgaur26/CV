import type { ExperienceRole } from "@/lib/types";

export const experience: ExperienceRole[] = [
  {
    id: "gartner",
    title: "Platform Lead",
    company: "Gartner India Research & Advisory Services",
    period: "Jan 2022 - Present",
    summary:
      "Owns the core cloud platform underpinning 200+ servers and 100+ microservices at 99.9% availability; leads a team of 3 engineers.",
    achievements: [
      "Designed an account-vending system provisioning AWS accounts on demand across a pool of 25+ accounts",
      "Owns org-wide identity and access infrastructure, including IAM Identity Center, Service Control Policies, and CyberArk privileged access",
      "Designed AIMS, a serverless AMI compliance platform enforcing policy in real time across every AWS account",
      "Built and operates Amazon EKS clusters at enterprise scale (3,000+ nodes)",
      "Built a self-service CI/CD platform enabling 50+ deployments/month and cutting release time by 30%",
      "Established observability architecture (Datadog, Grafana, Splunk), cutting MTTR by 20%",
      "Automated image lifecycle management, reducing provisioning time from 2–3 days to under 1 hour",
      "Drove a 50% reduction in AWS cloud costs through rightsizing and compute governance",
    ],
    tech: ["AWS", "EKS", "Terraform", "Jenkins", "CyberArk", "Python", "Datadog"],
  },
  {
    id: "nagarro",
    title: "Platform Lead",
    company: "Nagarro",
    period: "Apr 2019 - Jan 2022",
    summary:
      "Led a team of 5 engineers delivering Kubernetes-based platform infrastructure and cloud solutions for enterprise clients.",
    achievements: [
      "Designed and deployed scalable Kubernetes clusters for high-availability production workloads",
      "Defined enterprise CI/CD standards that improved release reliability and deployment frequency",
      "Built Terraform-based infrastructure automation for repeatable environment provisioning",
      "Implemented centralized monitoring with Prometheus, Grafana, and CloudWatch",
    ],
    tech: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "CloudWatch"],
  },
  {
    id: "globallogic",
    title: "DevOps Engineer",
    company: "GlobalLogic",
    period: "Jun 2017 - Apr 2019",
    summary: "Built CI/CD pipelines and automation tooling for infrastructure provisioning.",
    achievements: [
      "Built and maintained CI/CD pipelines using Jenkins",
      "Developed Python and Shell automation scripts for infrastructure provisioning",
      "Integrated infrastructure-as-code tooling and security protocols into deployment workflows",
    ],
    tech: ["Jenkins", "Python", "Bash/Shell"],
  },
  {
    id: "mahindra-comviva",
    title: "Linux Administrator",
    company: "Mahindra Comviva",
    period: "May 2016 - May 2017",
    summary: "Administered production Linux systems and resolved high-priority incidents.",
    achievements: [
      "Administered production Linux systems, user permissions, and logical volume management",
      "Configured Nagios for system performance tracking",
      "Resolved high-priority production incidents requiring L2/L3 expertise",
    ],
    tech: ["Linux", "Nagios"],
  },
];

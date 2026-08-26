import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "dce-account-vending",
    name: "Disposable Cloud Environment",
    period: "Gartner · 2022–Present",
    overview:
      "An on-demand AWS account-vending system that lets teams request an isolated, pre-governed account without filing a ticket — and reclaims it automatically when it's no longer needed.",
    architecture: [
      "API Gateway receives a provisioning request",
      "Lambda validates the request and starts a Step Functions workflow",
      "Step Functions provisions the child account and applies baseline guardrails",
      "DynamoDB tracks lease state across a pool of 25+ accounts",
      "A scheduled Lambda monitors per-account budget and reclaims idle accounts",
    ],
    techStack: ["AWS", "API Gateway", "Lambda", "Step Functions", "DynamoDB"],
    challenge:
      "Manual account provisioning was a recurring bottleneck — every new environment request sat in the platform team's queue, and there was no automatic way to reclaim accounts once a team was done with them.",
    solution:
      "Designed an end-to-end, event-driven vending workflow with lease tracking and automated budget monitoring, so provisioning and reclamation both happen without a human in the loop.",
    results: [
      "Removed manual account provisioning from the platform team's critical path",
      "25+ accounts managed continuously with automatic reclamation",
      "Per-account budget monitoring built into the provisioning workflow",
    ],
  },
  {
    id: "aims-compliance-platform",
    name: "AIMS — AMI Governance Platform",
    period: "Gartner · 2022–Present",
    overview:
      "A fully serverless governance platform that enforces AMI compliance in real time across every AWS account in the organization, with automatic remediation of violations.",
    architecture: [
      "S3 + CloudFront serve the front end",
      "API Gateway routes requests to Lambda",
      "An ECS-hosted backend handles core service logic, with Lambda-gated database access",
      "CloudTrail instance-launch events stream through a central event bus and SQS queue",
      "A Python Lambda validates the launched AMI against an approved list",
      "On a violation, a cross-account role automatically stops the non-compliant instance",
    ],
    techStack: ["AWS", "Lambda", "API Gateway", "ECS", "CloudTrail", "SQS", "EventBridge", "Python"],
    challenge:
      "AMI compliance review was a manual, reactive process — violations were often caught long after an instance had already launched, if at all.",
    solution:
      "Built a serverless pipeline that intercepts every instance-launch event across every account in real time and enforces policy automatically via a cross-account remediation role.",
    results: [
      "Real-time compliance enforcement across every AWS account in the org",
      "Manual compliance review removed from the provisioning path",
      "Policy enforcement decoupled from any single account's ownership",
    ],
  },
  {
    id: "enterprise-eks-platform",
    name: "Enterprise EKS at Scale",
    period: "Gartner · 2022–Present",
    overview:
      "The compute substrate underneath the organization's production workloads: Amazon EKS clusters operated at enterprise scale so product teams can deploy without owning cluster operations.",
    architecture: [
      "Multi-tenant EKS clusters shared across product teams",
      "Centralized cluster operations, upgrades, and node management",
      "Product teams deploy via standard CI/CD without managing infrastructure",
    ],
    techStack: ["AWS", "EKS", "Kubernetes"],
    challenge:
      "Product teams needed reliable Kubernetes compute without each one standing up and operating its own cluster.",
    solution:
      "Built and operate shared EKS clusters at enterprise scale, owning cluster lifecycle so application teams can focus purely on shipping.",
    results: ["3,000+ nodes operated in production", "Cluster operations fully owned by the platform team"],
  },
  {
    id: "self-service-cicd-platform",
    name: "Self-Service CI/CD Platform",
    period: "Gartner · 2022–Present",
    overview:
      "A self-service CI/CD platform that lets engineering teams ship independently, including a secure migration path from Bitbucket to GitHub for private-subnet repositories.",
    architecture: [
      "Jenkins orchestrates build and deployment pipelines",
      "Teams self-serve pipeline configuration without platform-team tickets",
      "A secure ECS-based cloning container handles private-subnet repository access during the Bitbucket → GitHub migration",
    ],
    techStack: ["Jenkins", "Bitbucket", "GitHub", "ECS"],
    challenge:
      "Deployment relied on platform-team involvement for pipeline changes, and the org needed to migrate source control without disrupting active teams.",
    solution:
      "Built self-service pipeline tooling and led the GitHub migration, including a purpose-built secure cloning container for private-subnet access.",
    results: [
      "50+ automated deployments per month",
      "Release cycle time cut by 30%",
      "Source control migration executed without disrupting shipping teams",
    ],
  },
];

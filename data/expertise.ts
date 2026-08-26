import type { ExpertiseArea } from "@/lib/types";

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Cloud Infrastructure",
    summary: "Cross-account AWS governance at organizational scale.",
    problem:
      "Manual account provisioning and inconsistent guardrails were slowing every team that needed a new environment.",
    approach:
      "Built an event-driven account-vending system (API Gateway, Lambda, Step Functions, DynamoDB) that provisions and reclaims accounts automatically, with budget monitoring built in.",
    impact: "Removed manual provisioning from the critical path across a pool of 25+ AWS accounts.",
    tools: ["AWS", "Step Functions", "Lambda", "DynamoDB"],
  },
  {
    title: "Platform Engineering",
    summary: "Self-service platforms that remove operational load from product teams.",
    problem:
      "Product engineers were blocked on infrastructure changes that required a platform team ticket.",
    approach:
      "Designed self-service CI/CD and provisioning APIs so teams could deploy and provision without waiting on a queue.",
    impact: "50+ automated deployments per month; release cycle time cut by 30%.",
    tools: ["Jenkins", "GitHub", "ECS", "CI/CD"],
  },
  {
    title: "AI / GPU Infrastructure",
    summary: "Extending platform fundamentals into GPU cluster architecture.",
    problem:
      "AI workloads need infrastructure fundamentals (networking, scheduling, monitoring) that most cloud platform teams haven't built for.",
    approach:
      "NVIDIA-certified (NCA-AIIO) study and applied practice across GPU architecture, InfiniBand/RDMA fabrics, and workload orchestration with Slurm and Kubernetes.",
    impact: "A platform background positioned to extend directly into AI infrastructure teams.",
    tools: ["NVIDIA DGX", "InfiniBand/RDMA", "Slurm", "Kubernetes", "DCGM"],
  },
  {
    title: "Kubernetes",
    summary: "Enterprise EKS operated at real production scale.",
    problem:
      "Product teams needed a compute substrate they could deploy onto without owning cluster operations.",
    approach:
      "Built and operate Amazon EKS clusters at enterprise scale, handling multi-tenancy and orchestration so application teams don't have to.",
    impact: "3,000+ nodes under management in production.",
    tools: ["EKS", "Kubernetes", "AWS"],
  },
  {
    title: "Terraform / IaC",
    summary: "Infrastructure as code as the default, not the exception.",
    problem:
      "Manual CloudFormation StackSets made identity and access changes slow and error-prone to audit.",
    approach:
      "Migrated IAM Identity Center permission set provisioning to Terraform deployed through Jenkins.",
    impact: "Consistent, auditable, repeatable infrastructure changes across the org.",
    tools: ["Terraform", "CloudFormation", "Jenkins"],
  },
  {
    title: "DevSecOps",
    summary: "Governance and compliance enforced automatically, not manually.",
    problem:
      "AMI compliance review was a manual bottleneck in every account's provisioning path.",
    approach:
      "Built AIMS, a serverless compliance platform that validates every instance launch against an approved AMI list via CloudTrail events, and auto-remediates violations.",
    impact: "Real-time compliance enforcement with no manual review step.",
    tools: ["CloudTrail", "Lambda", "SQS", "EventBridge"],
  },
  {
    title: "Automation",
    summary: "Turning multi-day manual processes into minutes.",
    problem: "Environment provisioning from a base image took 2–3 days of manual work.",
    approach: "Automated the QCOW2-to-AMI image lifecycle end-to-end.",
    impact: "Provisioning time cut from 2–3 days to under 1 hour.",
    tools: ["Python", "AWS", "Infrastructure as Code"],
  },
];

import type { Certification } from "@/lib/types";

// issueDate / credentialUrl are intentionally null where the résumé doesn't
// specify them. Fill these in with real values rather than guessing.
export const certifications: Certification[] = [
  {
    name: "NVIDIA Certified Associate: AI Infrastructure and Operations (NCA-AIIO)",
    issuer: "NVIDIA",
    issueDate: null,
    credentialUrl: null,
  },
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    issueDate: null,
    credentialUrl: null,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issueDate: null,
    credentialUrl: null,
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    issueDate: null,
    credentialUrl: null,
  },
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    issueDate: null,
    credentialUrl: null,
  },
  {
    name: "ITIL4 Foundation",
    issuer: "ITIL / AXELOS",
    issueDate: null,
    credentialUrl: null,
  },
];

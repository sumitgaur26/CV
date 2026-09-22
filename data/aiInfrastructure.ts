import type { AIInfraCapability } from "@/lib/types";

// GPU/infrastructure fundamentals: certification-backed (NVIDIA
// NCA-AIIO) plus platform background, not extended beyond what's
// actually verified.
export const aiInfraCapabilities: AIInfraCapability[] = [
  {
    title: "GPU Architecture",
    description: "CUDA cores, Tensor cores, and Multi-Instance GPU (MIG) partitioning fundamentals.",
  },
  {
    title: "NVIDIA DGX Systems",
    description: "Architecture and operational model of NVIDIA's purpose-built AI compute systems.",
  },
  {
    title: "InfiniBand / RoCE Fabrics",
    description: "High-throughput, low-latency networking fabrics purpose-built for GPU clusters.",
  },
  {
    title: "RDMA Networking",
    description: "Remote Direct Memory Access as the backbone of distributed GPU communication.",
  },
  {
    title: "Workload Orchestration",
    description: "GPU scheduling and orchestration across Slurm and Kubernetes.",
  },
  {
    title: "GPU Monitoring (DCGM)",
    description: "NVIDIA Data Center GPU Manager for fleet-wide health and utilization monitoring.",
  },
];

// Applied generative AI and agentic systems: backed by the AWS
// Certified Generative AI Developer - Professional (AIP-C01)
// credential, not just self-reported tool familiarity.
export const genAiTools: AIInfraCapability[] = [
  {
    title: "Amazon Bedrock",
    description: "Agents, Knowledge Bases, Guardrails, and Prompt Flows for production GenAI systems.",
  },
  {
    title: "Agentic Orchestration",
    description: "AWS Strands Agents SDK and agentic workflow orchestration via Step Functions.",
  },
  {
    title: "RAG & Vector Search",
    description: "Retrieval-augmented generation over OpenSearch, Pinecone, Chroma, and pgvector.",
  },
  {
    title: "LangChain & LlamaIndex",
    description: "Orchestration and data-indexing frameworks for LLM-powered applications.",
  },
  {
    title: "AI Safety & Governance",
    description: "Prompt engineering and governance, guardrails, and content-filtering controls.",
  },
  {
    title: "PII Detection",
    description: "Amazon Comprehend and Macie for identifying and handling sensitive data in GenAI pipelines.",
  },
  {
    title: "GenAI Observability",
    description: "CloudWatch and X-Ray tracing extended to agentic and RAG workloads.",
  },
  {
    title: "AI-Assisted Development",
    description: "Claude Code and GitHub Copilot as part of the daily engineering workflow.",
  },
];

export interface GenAiProject {
  name: string;
  description: string;
  pipeline: string;
}

// Personal projects, explicitly in progress: not shipped, no
// fabricated results. Source will be published on GitHub on
// completion; until then this is scoped as "building," not "built."
export const genAiProjectsInProgress: GenAiProject[] = [
  {
    name: "Customer Support: Grounded Answer Deflection",
    description:
      "A LangChain-orchestrated serverless RAG pipeline that deflects repetitive support tickets to verified help-doc answers with source citations.",
    pipeline:
      "S3 → Lambda ingestion → Bedrock Knowledge Base → OpenSearch hybrid search + reranking → Bedrock grounded response",
  },
  {
    name: "Financial Research Copilot",
    description:
      "A cross-document semantic search and insight pipeline with citation-backed answers and trend visualization.",
    pipeline:
      "S3 → AWS Glue ETL → Bedrock Knowledge Base (Pinecone) → Bedrock-generated insights → Amazon QuickSight",
  },
  {
    name: "Insurance Policy & Claims Copilot",
    description:
      "A clause-level retrieval and decisioning system for compliance-traceable claims review.",
    pipeline:
      "S3 → Amazon Textract → LlamaIndex clause indexing → OpenSearch vector store → Bedrock decisioning → DynamoDB audit trail",
  },
  {
    name: "Legal Contract & Case-Law Q&A",
    description:
      "An entity- and clause-graph-aware retrieval system for contract and precedent lookup.",
    pipeline:
      "S3 → Textract → Amazon Neptune graph → AWS Strands agent → Bedrock exact-language answers → Amazon Kendra fallback",
  },
];

import type { AIInfraCapability } from "@/lib/types";

// Scoped to what's actually verified (NVIDIA NCA-AIIO certification and
// platform background), not extended into LLM/MLOps claims without
// hands-on experience to back them.
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

// Applied Gen AI tooling: hands-on familiarity, distinct from the
// certification-backed infrastructure fundamentals above.
export const genAiTools: AIInfraCapability[] = [
  {
    title: "Claude Code",
    description: "Anthropic's agentic CLI for AI-assisted software development.",
  },
  {
    title: "GitHub Copilot",
    description: "AI pair-programming assistant integrated into the daily dev workflow.",
  },
  {
    title: "RAG",
    description: "Retrieval-augmented generation for grounding LLM output in real data.",
  },
  {
    title: "LangChain",
    description: "Framework for composing LLM-powered applications and pipelines.",
  },
  {
    title: "LlamaIndex",
    description: "Data framework connecting LLMs to custom data sources for RAG pipelines.",
  },
];

import type { AIInfraCapability } from "@/lib/types";

// Scoped to what's actually verified (NVIDIA NCA-AIIO certification +
// platform background) — not extended into LLM/MLOps claims without
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

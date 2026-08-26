import { skillGroups } from "@/data/skills";
import { caseStudies } from "@/data/projects";
import { experience } from "@/data/experience";

export interface SearchMatch {
  query: string;
  matchedSkill: string | null;
  projects: { id: string; name: string }[];
  experience: { id: string; title: string; company: string }[];
  suggestion: string | null;
}

// Shorthand / abbreviation -> canonical skill name (lowercase) as it
// appears in data/skills.ts. Extend this as new skills are added.
const ALIASES: Record<string, string> = {
  k8s: "kubernetes",
  tf: "terraform",
  iac: "infrastructure as code",
  cicd: "ci/cd",
  "ci cd": "ci/cd",
  iam: "aws iam identity center",
  sso: "aws iam identity center",
  scp: "service control policies",
  scps: "service control policies",
  gpu: "gpu architecture",
  gpus: "gpu architecture",
  dgx: "nvidia dgx",
  infiniband: "infiniband/roce",
  roce: "infiniband/roce",
  bash: "bash/shell",
  shell: "bash/shell",
  dynamo: "dynamodb",
  async: "asynchronous processing",
  eda: "event-driven architecture",
  "event driven": "event-driven architecture",
  orchestration: "service orchestration",
  "multi tenant": "multi-tenant infrastructure",
  "self service": "self-service apis",
  "least privilege": "least-privilege design",
  finops: "cost governance",
  "cost optimization": "cost governance",
};

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

const ALL_SKILLS: string[] = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

function levenshtein(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function resolveSkill(rawQuery: string): { matched: string | null; suggestion: string | null } {
  const query = normalize(rawQuery);
  if (!query) return { matched: null, suggestion: null };

  const aliasTarget = ALIASES[query];
  if (aliasTarget) {
    const exact = ALL_SKILLS.find((s) => normalize(s) === aliasTarget);
    if (exact) return { matched: exact, suggestion: null };
  }

  const exact = ALL_SKILLS.find((s) => normalize(s) === query);
  if (exact) return { matched: exact, suggestion: null };

  const substring = ALL_SKILLS.find(
    (s) => normalize(s).includes(query) || query.includes(normalize(s))
  );
  if (substring) return { matched: substring, suggestion: null };

  let best: { skill: string; distance: number } | null = null;
  for (const skill of ALL_SKILLS) {
    const distance = levenshtein(query, normalize(skill));
    const threshold = Math.max(1, Math.floor(normalize(skill).length * 0.3));
    if (distance <= threshold && (!best || distance < best.distance)) {
      best = { skill, distance };
    }
  }
  if (best && best.distance <= 1) return { matched: best.skill, suggestion: null };
  if (best) return { matched: null, suggestion: best.skill };

  return { matched: null, suggestion: null };
}

export function searchSkill(rawQuery: string): SearchMatch {
  const { matched, suggestion } = resolveSkill(rawQuery);

  if (!matched) {
    return { query: rawQuery, matchedSkill: null, projects: [], experience: [], suggestion };
  }

  const normalizedMatch = normalize(matched);

  const projects = caseStudies
    .filter((study) => study.techStack.some((t) => normalize(t) === normalizedMatch))
    .map((study) => ({ id: study.id, name: study.name }));

  const experienceMatches = experience
    .filter((role) => role.tech.some((t) => normalize(t) === normalizedMatch))
    .map((role) => ({ id: role.id, title: role.title, company: role.company }));

  return {
    query: rawQuery,
    matchedSkill: matched,
    projects,
    experience: experienceMatches,
    suggestion: null,
  };
}

export const SEARCH_SUGGESTIONS = [
  "Kubernetes",
  "Terraform",
  "CyberArk",
  "GPU Architecture",
  "Python",
  "AWS",
];

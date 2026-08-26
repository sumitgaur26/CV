"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, CheckCircle2, FolderGit2, Search, XCircle, X } from "lucide-react";
import { searchSkill, SEARCH_SUGGESTIONS, type SearchMatch } from "@/lib/search";
import { dispatchExpandRole } from "@/lib/events";

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const result: SearchMatch | null = useMemo(() => {
    if (!query.trim()) return null;
    return searchSkill(query);
  }, [query]);

  function goToProject(id: string) {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }

  function goToRole(id: string) {
    setOpen(false);
    dispatchExpandRole(id);
    setTimeout(() => {
      document.getElementById(`role-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search skills"
        className="flex h-11 min-w-11 items-center justify-center gap-2 rounded-xl border border-border-strong bg-white/[0.02] px-3 font-body text-sm text-foreground/80 transition-colors hover:border-accent/40 hover:text-foreground sm:h-auto sm:justify-start sm:py-1.5"
      >
        <Search size={16} className="shrink-0" />
        <span className="hidden sm:inline">Search skills</span>
        <kbd className="hidden rounded border border-border-strong px-1.5 py-0.5 font-body text-[10px] text-muted sm:inline">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-background/80 p-6 pt-[14vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Search skills and projects"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-soft"
            >
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Search size={18} className="shrink-0 text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a skill or technology..."
                  aria-label="Search a skill or technology"
                  className="w-full bg-transparent font-body text-base text-foreground placeholder:text-muted focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="text-muted hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto p-5">
                {!result && (
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                      Try searching
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SEARCH_SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setQuery(s)}
                          className="rounded-full border border-border-strong px-3 py-1.5 font-body text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {result && result.matchedSkill && (
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="shrink-0 text-accent" />
                      <p className="font-heading text-base font-medium text-foreground">
                        Yes, I have experience with {result.matchedSkill}.
                      </p>
                    </div>

                    {result.projects.length > 0 && (
                      <div className="mt-5">
                        <p className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-wider text-muted">
                          <FolderGit2 size={13} /> Used in projects
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {result.projects.map((p) => (
                            <li key={p.id}>
                              <button
                                type="button"
                                onClick={() => goToProject(p.id)}
                                className="font-body text-sm text-foreground transition-colors hover:text-accent hover:underline"
                              >
                                {p.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {result.experience.length > 0 && (
                      <div className="mt-5">
                        <p className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-wider text-muted">
                          <Briefcase size={13} /> Used at
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {result.experience.map((r) => (
                            <li key={r.id}>
                              <button
                                type="button"
                                onClick={() => goToRole(r.id)}
                                className="font-body text-sm text-foreground transition-colors hover:text-accent hover:underline"
                              >
                                {r.title} · {r.company}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {result.projects.length === 0 && result.experience.length === 0 && (
                      <p className="mt-4 font-body text-sm text-muted">
                        Listed as a skill, though not tied to a specific featured project or role
                        above.
                      </p>
                    )}
                  </div>
                )}

                {result && !result.matchedSkill && (
                  <div>
                    <div className="flex items-center gap-2">
                      <XCircle size={18} className="shrink-0 text-muted" />
                      <p className="font-heading text-base font-medium text-foreground">
                        Not something I&apos;ve worked with, based on this résumé.
                      </p>
                    </div>
                    {result.suggestion && (
                      <button
                        type="button"
                        onClick={() => setQuery(result.suggestion as string)}
                        className="mt-3 font-body text-sm text-accent hover:underline"
                      >
                        Did you mean {result.suggestion}?
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

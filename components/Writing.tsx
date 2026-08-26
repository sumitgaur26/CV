import { ArrowUpRight, Clock } from "lucide-react";
import { posts } from "@/data/writing";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, revealItem, Reveal } from "./ui/Reveal";
import { motion } from "framer-motion";

export function Writing() {
  return (
    <section id="writing" className="border-t border-border py-28">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the platform."
          description="Technical writing on infrastructure, reliability, and AI platform architecture."
        />

        {posts.length === 0 ? (
          <Reveal delay={0.1} className="mt-14 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="font-body text-sm text-muted">
              No articles published yet — check back soon.
            </p>
          </Reveal>
        ) : (
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={revealItem}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/30 p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-strong px-2.5 py-0.5 font-body text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center justify-between font-body text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readingTime}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
              </motion.a>
            ))}
          </RevealGroup>
        )}
      </Container>
    </section>
  );
}

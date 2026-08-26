import { profile } from "@/data/profile";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-center font-body text-xs text-muted sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
      </Container>
    </footer>
  );
}

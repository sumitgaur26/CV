import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { SITE_URL } from "@/lib/site";

export function PersonJsonLd() {
  const sameAs = [profile.linkedin, profile.github].filter(
    (url): url is string => Boolean(url)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.valueProposition,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs,
    knowsAbout: skillGroups.flatMap((group) => group.skills),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

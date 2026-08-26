// Lightweight cross-component signals so the search palette can tell
// other sections what to reveal, without prop drilling or a context
// provider for something this small.
export const EXPAND_ROLE_EVENT = "cv:expand-role";
export const EXPAND_PROJECTS_EVENT = "cv:expand-projects";

export function dispatchExpandRole(roleId: string) {
  window.dispatchEvent(new CustomEvent(EXPAND_ROLE_EVENT, { detail: roleId }));
}

export function dispatchExpandProjects() {
  window.dispatchEvent(new Event(EXPAND_PROJECTS_EVENT));
}

/**
 * Polls for an element by id until it appears in the DOM (or times out).
 * Needed because search results can point at content that's collapsed
 * behind a "view more" toggle and only mounts after that toggle fires.
 */
export function waitForElement(id: string, timeoutMs = 1500): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    const existing = document.getElementById(id);
    if (existing) {
      resolve(existing);
      return;
    }
    const start = performance.now();
    function check() {
      const el = document.getElementById(id);
      if (el) {
        resolve(el);
        return;
      }
      if (performance.now() - start > timeoutMs) {
        resolve(null);
        return;
      }
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  });
}

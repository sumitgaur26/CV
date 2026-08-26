// Lightweight cross-component signal so the search palette can tell the
// Timeline which role to expand, without prop drilling or a context
// provider for something this small.
export const EXPAND_ROLE_EVENT = "cv:expand-role";

export function dispatchExpandRole(roleId: string) {
  window.dispatchEvent(new CustomEvent(EXPAND_ROLE_EVENT, { detail: roleId }));
}

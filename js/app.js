// Portfolio/CV app: loads data from JSON, renders the page, and drives
// client-side project search — no page reload, no backend required.

const state = {
  projects: [],
  activeSkill: null, // set when a skill pill is toggled on
};

async function loadData() {
  const [profile, skills, projects] = await Promise.all([
    fetchJSON("data/profile.json"),
    fetchJSON("data/skills.json"),
    fetchJSON("data/projects.json"),
  ]);
  return { profile, skills, projects };
}

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to load ${path}: ${res.status}`);
  }
  return res.json();
}

function renderProfile(profile) {
  document.title = `${profile.name} — Portfolio & CV`;
  document.getElementById("heroName").textContent = profile.name;
  document.getElementById("heroTitle").textContent = profile.title;
  document.getElementById("heroSummary").textContent = profile.summary;
  document.getElementById("footerName").textContent = profile.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  const resumeLink = document.getElementById("resumeLink");
  if (profile.resumeUrl) {
    resumeLink.href = profile.resumeUrl;
  } else {
    resumeLink.remove();
  }

  const aboutDetails = document.getElementById("aboutDetails");
  aboutDetails.append(
    detailRow("Location", profile.location),
    detailRow("Email", profile.email, `mailto:${profile.email}`)
  );

  const contactList = document.getElementById("contactList");
  const links = [
    { label: `Email: ${profile.email}`, href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.social?.github },
    { label: "LinkedIn", href: profile.social?.linkedin },
    { label: "Website", href: profile.social?.website },
  ].filter((link) => link.href);

  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    li.append(a);
    contactList.append(li);
  }
}

function detailRow(label, value, href) {
  const wrapper = document.createDocumentFragment();
  const dt = document.createElement("dt");
  dt.textContent = label;
  const dd = document.createElement("dd");
  if (href) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = value;
    dd.append(a);
  } else {
    dd.textContent = value;
  }
  wrapper.append(dt, dd);
  return wrapper;
}

function renderSkills(skills) {
  const list = document.getElementById("skillList");
  list.innerHTML = "";
  for (const skill of skills) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "skill-pill";
    button.textContent = skill.name;
    button.setAttribute("aria-pressed", "false");
    button.dataset.skill = skill.name;
    button.addEventListener("click", () => onSkillPillClick(skill.name, button));
    li.append(button);
    list.append(li);
  }
}

function onSkillPillClick(skillName, button) {
  const alreadyActive = state.activeSkill === skillName;
  state.activeSkill = alreadyActive ? null : skillName;

  // Reflect state on all pills.
  document.querySelectorAll(".skill-pill").forEach((pill) => {
    pill.setAttribute("aria-pressed", String(pill === button && !alreadyActive));
  });

  const input = document.getElementById("searchInput");
  input.value = state.activeSkill ?? "";
  runSearch(input.value);
}

function renderProjects(projects, query = "") {
  const grid = document.getElementById("projectGrid");
  const noResults = document.getElementById("noResults");
  const noResultsQuery = document.getElementById("noResultsQuery");
  const status = document.getElementById("resultsStatus");

  grid.innerHTML = "";

  if (projects.length === 0) {
    noResults.hidden = false;
    noResultsQuery.textContent = query;
    status.textContent = `No projects found for "${query}".`;
    return;
  }

  noResults.hidden = true;

  const normalizedQuery = query.trim().toLowerCase();

  for (const project of projects) {
    const li = document.createElement("li");
    li.className = "project-card";

    const h3 = document.createElement("h3");
    h3.textContent = project.name;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const tagList = document.createElement("ul");
    tagList.className = "project-tags";
    for (const tech of project.technologies) {
      const tagItem = document.createElement("li");
      tagItem.textContent = tech;
      if (normalizedQuery && tech.toLowerCase().includes(normalizedQuery)) {
        tagItem.classList.add("tag-match");
      }
      tagList.append(tagItem);
    }

    const links = document.createElement("div");
    links.className = "project-links";
    if (project.repo) {
      const a = document.createElement("a");
      a.href = project.repo;
      a.textContent = "Code →";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      links.append(a);
    }
    if (project.demo) {
      const a = document.createElement("a");
      a.href = project.demo;
      a.textContent = "Live demo →";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      links.append(a);
    }

    li.append(h3, desc, tagList, links);
    grid.append(li);
  }

  status.textContent = query
    ? `${projects.length} project${projects.length === 1 ? "" : "s"} match "${query}".`
    : `Showing all ${projects.length} projects.`;
}

/**
 * Matching rule: a project matches a query when the query is a substring
 * of at least one of its listed technologies (case-insensitive). Empty
 * query returns every project.
 */
function filterProjects(projects, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return projects;
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.toLowerCase().includes(normalizedQuery))
  );
}

function runSearch(rawQuery) {
  const query = rawQuery ?? "";
  const clearBtn = document.getElementById("clearSearch");
  clearBtn.hidden = query.length === 0;

  const filtered = filterProjects(state.projects, query);
  renderProjects(filtered, query);
}

function debounce(fn, delayMs) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delayMs);
  };
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  const form = document.getElementById("searchForm");
  const clearBtn = document.getElementById("clearSearch");
  const resetFromEmpty = document.getElementById("resetFromEmpty");

  const debouncedSearch = debounce((value) => runSearch(value), 150);

  input.addEventListener("input", (event) => {
    state.activeSkill = null;
    document.querySelectorAll(".skill-pill").forEach((pill) => pill.setAttribute("aria-pressed", "false"));
    debouncedSearch(event.target.value);
  });

  // Prevent an actual navigation/reload if the user presses Enter.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(input.value);
  });

  const clear = () => {
    input.value = "";
    state.activeSkill = null;
    document.querySelectorAll(".skill-pill").forEach((pill) => pill.setAttribute("aria-pressed", "false"));
    runSearch("");
    input.focus();
  };

  clearBtn.addEventListener("click", clear);
  resetFromEmpty.addEventListener("click", clear);
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  toggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

async function init() {
  setupNav();
  setupSearch();

  try {
    const { profile, skills, projects } = await loadData();
    state.projects = projects;
    renderProfile(profile);
    renderSkills(skills);
    renderProjects(projects);
  } catch (err) {
    console.error(err);
    document.getElementById("resultsStatus").textContent =
      "Could not load site data. If you're viewing this file directly in a browser, run a local server (see README) instead.";
  }
}

init();

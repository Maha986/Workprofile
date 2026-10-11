// All page copy lives here. Every claim is taken from Maha's and Nouman's résumés
// or Maha's current site. Do not add metrics, clients or testimonials that
// aren't real.

export type Owner = "maha" | "nouman" | "both";

export const brand = {
  name: "E2E Engineers",
  cities: "Karachi · Lahore",
};

export const people = {
  maha: {
    name: "Maha Javed",
    short: "Maha",
    role: "Full-stack web engineer",
    discipline: "Full-stack web",
    where: "Karachi · Radium, since 2023",
    email: "mahajaved986@gmail.com",
    linkedin: "https://www.linkedin.com/in/maha-javed",
    github: "https://github.com/Maha986",
    groups: [
      {
        title: "Frontend",
        items: [
          "Next.js, React, TypeScript",
          "Tailwind CSS",
          "Design systems in Storybook",
          "Accessibility (WCAG)",
          "Responsive, cross-browser",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js and Express APIs",
          "Authentication and authorization",
          "MongoDB and MySQL",
          "PHP and Laravel",
          "API integration",
        ],
      },
    ],
    credential: { label: "Degree", value: "BE Software Engineering, NED · CGPA 3.886" },
  },
  nouman: {
    name: "Muhammad Nouman Ali",
    short: "Nouman",
    role: "Data engineer · 4+ years",
    discipline: "Data & SQL",
    where: "Lahore · ADDO AI, since 2023",
    email: "noumanali2296@gmail.com",
    linkedin: "https://www.linkedin.com/in/nouman-ali-dataengineer",
    groups: [
      {
        title: "Data",
        items: [
          "Pipelines and CDC",
          "AWS: Glue, DMS, S3, Redshift",
          "Azure Data Factory",
          "Databricks, Unity Catalog",
          "Data quality and lineage",
        ],
      },
      {
        title: "SQL & databases",
        items: [
          "T-SQL and Redshift SQL",
          "Query performance tuning",
          "Stored procedures",
          "Database migrations",
          "Reporting: SSRS, Tableau",
        ],
      },
    ],
    credential: {
      label: "Certified",
      value: "Databricks Data Engineer · Databricks GenAI Engineer · Azure Data Engineer (DP-203)",
    },
  },
} as const;

export const problems: { quote: string; owner: Owner; fix: string }[] = [
  {
    quote: "Our reports take forever to load.",
    owner: "nouman",
    fix: "**500+ reports** moved to Amazon Redshift, run time cut from 10–20 min to under 2.",
  },
  {
    quote: "Our data is spread across too many systems.",
    owner: "nouman",
    fix: "**6 operational databases** unified in one AWS lakehouse, kept in sync with CDC.",
  },
  {
    quote: "We check data by hand every week.",
    owner: "nouman",
    fix: "A QA automation framework that cut **manual effort by 60%**.",
  },
  {
    quote: "We need a web app or platform built.",
    owner: "maha",
    fix: "Built **UniVision**, **iDonatio** and **Tracker**: EdTech, donations and clinical record-keeping.",
  },
  {
    quote: "Our product has to work for everyone.",
    owner: "maha",
    fix: "**Inclusense**, an accessibility widget, plus keyboard and screen-reader work on Canon’s design system.",
  },
  {
    quote: "Our teams keep rebuilding the same UI.",
    owner: "maha",
    fix: "A **shared design system** used across several Canon departments, built in Storybook.",
  },
  {
    quote: "We need the app and a proper data backend.",
    owner: "both",
    fix: "One team covers the **UI, the APIs and the warehouse**, so nothing gets lost between vendors.",
  },
];

export const offers: { title: string; detail: string; owner: Owner }[] = [
  { title: "Build a web app or site", detail: "Next.js frontend, APIs, auth and database.", owner: "maha" },
  { title: "Fix slow SQL and reports", detail: "Query tuning, rewrites and migrations.", owner: "nouman" },
  { title: "Build a data pipeline or warehouse", detail: "On AWS, Azure or Databricks.", owner: "nouman" },
  { title: "Build the full product", detail: "The app and its data layer, from one team.", owner: "both" },
];

export type CaseStudy = {
  owner: Owner;
  context: string;
  title: string;
  problem?: string;
  built: string;
  metric?: { value: string; label: string };
};

export const work: CaseStudy[] = [
  {
    owner: "nouman",
    context: "Healthcare reporting",
    title: "Reports that load in under 2 minutes",
    problem: "slow SQL Server reports.",
    built: "migrated and rewrote 500+ SSRS reports on Amazon Redshift, validated against the source.",
    metric: { value: "10–20 min → <2", label: "report run time" },
  },
  {
    owner: "maha",
    context: "Radium",
    title: "Inclusense accessibility widget",
    problem: "sites that shut out some users.",
    built: "one line of code adds text resizing, high-contrast modes and text-to-speech. Next.js, Node.js, MongoDB.",
  },
  {
    owner: "nouman",
    context: "AWS",
    title: "Six databases, one lakehouse",
    problem: "data spread across SQL Server and Progress OpenEdge.",
    built: "led a team of three to deliver Glue and PySpark pipelines with CDC, feeding Redshift for reporting.",
    metric: { value: "6", label: "databases unified" },
  },
  {
    owner: "maha",
    context: "Canon, via Radium",
    title: "A shared design system",
    problem: "departments rebuilding the same UI.",
    built: "components prototyped in Storybook and checked for accessibility, then used across several departments.",
  },
  {
    owner: "maha",
    context: "Client work",
    title: "UniVision and iDonatio",
    built:
      "An EdTech platform with university comparison, watchlists and an AI essay grader, and a donations portal with Gift Aid claims and real-time tracking.",
  },
  {
    owner: "nouman",
    context: "Kavtech",
    title: "Automated data QA",
    problem: "manual checking of competitor and internal feeds.",
    built: "a framework that scrapes, cleans and compares the data automatically.",
    metric: { value: "−60%", label: "manual QA effort" },
  },
];

// Proposed process. Not taken from either résumé: confirm it matches how you
// actually plan to run projects before publishing.
export const steps = [
  { title: "Scope", detail: "A call to understand the problem, the users and the data you already have." },
  { title: "Plan", detail: "A written plan covering the app, the data or both, with clear milestones." },
  { title: "Build", detail: "Regular demos. Code and pipelines go through Dev, Test and Production." },
  { title: "Handover", detail: "Documentation, access and a walkthrough so your team can run it." },
];

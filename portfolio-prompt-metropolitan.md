# Duo Portfolio Prompt: Metropolitan

Style selection: picked at random from the 25 listed styles with `/dev/urandom` (index 24 of 25, "Metropolitan").

---

## The Prompt

Design a single cohesive landing page in the **Metropolitan** style: urban sophistication with cultural depth. Its job is to win client work for a two-person team. Create an original, credible service concept: a small studio that builds a client's web product and the data behind it, so the client hires one team instead of two vendors. Maha Javed covers full-stack web: frontend and backend. Muhammad Nouman Ali covers data engineering, SQL and databases. Every section should answer a buyer's question: what can you build for me, have you done it before, and how do I start? The page should feel like walking into a well-run studio in a serious city at night. It should feel calm, confident and clearly busy with real work. A visitor should sense straight away that these people deliver. The visual hierarchy should put the offer first and keep the people and their proof close behind. Use colour the way a city uses signal colour at dusk: sparing, purposeful accents against a deep mineral base. Give each person their own accent so a visitor always knows whose expertise they're reading, and keep colour for emphasis and wayfinding, never decoration.

Typography should feel assured and cultured, like well-designed civic signage combined with a serious city magazine. It should be confident without shouting, and easy to scan for a busy decision-maker. Interactions should be precise and quick, with smooth transitions that never make the visitor wait. The page should move through a clear sales arc. First comes the offer: one sentence saying what the team builds and for whom. Next come the problems clients bring, written in the client's own words, such as "our reports are too slow" or "we need an app built". Each problem should pair with the person who solves it and a real result. Then come two clear expertise sections. Maha's covers frontend (Next.js and React interfaces, design systems, accessibility) and backend (APIs, authentication, application databases). Nouman's covers data (pipelines, warehouses, lakehouses on AWS, Azure and Databricks) and SQL (query tuning, migrations, reporting). After that comes selected work written as short case studies: problem, what was built, and the outcome. Then a simple account of how working with the team goes, and finally a direct call to action that invites a project conversation.

Draw the mood from the late-evening atmosphere of a great cosmopolitan city: the clarity of a well-designed transit map, the restrained confidence of a members' library above a busy avenue, the glass, steel and stone of contemporary civic architecture, and the editorial poise of long-form cultural journalism. These references should make the page feel premium and trustworthy rather than flashy or corporate. It should be dense with substance yet never cluttered, so that a potential client finishes it convinced and knows exactly what to do next. Keep it one continuous scrolling page with no separate pages, tabs or detours. Use only the factual content provided below. Do not invent metrics, clients, testimonials, prices or credentials, and do not claim the two have delivered a project together.

---

## Build Constraints (feed this alongside the prompt)

- **Framework:** Next.js (latest stable, App Router) with TypeScript.
- **One route only:** everything lives on `/`. Each section is its own component and is reached by anchor links (`#work`, `#team` and so on). Do not create extra pages.
- **Rendering:** fully static, so it deploys to Netlify or Vercel with no server. Keep content in a typed data file (e.g. `content.ts`) built from the appendix below, not hard-coded in the JSX.
- **Fonts and images:** use `next/font` and `next/image`.
- **Motion:** CSS transitions or a small motion library, all switched off under `prefers-reduced-motion`.
- **Accessibility:** WCAG AA contrast against the dark base, full keyboard navigation and semantic landmarks. Maha's own specialty is accessibility, so a page that fails this undercuts her pitch.

---

## Content Appendix (feed this alongside the prompt)

> Keep this appendix attached. If you remove it, the generator will fill the page with made-up achievements.

### Muhammad Nouman Ali: Data Engineer (verified from the supplied résumé)
- Contact: noumanali2296@gmail.com · +92 336 658 2296 · linkedin.com/in/nouman-ali-dataengineer
- 4+ years building scalable data pipelines, ETL and cloud data warehouses in healthcare and real estate.
- **ADDO AI, Lahore (Jul 2023 – Present), Data Engineer**
  - Intelligent Data Platform (Databricks + Unity Catalog): an automated metadata-enrichment framework that combines enterprise metadata with AI-generated definitions through semantic similarity matching and validation. An end-to-end lineage framework (ADLS paths → ingestion jobs → workflows → dependent tables) persisted in Delta Lake. Validation of a metadata-driven Data Quality Rules Engine. Databricks jobs and ADF pipelines, including ServiceNow ingestion via SnowMirror. Azure DevOps DEV/TEST/PROD promotion.
  - AWS Lakehouse: led a three-person team integrating six operational databases (SQL Server, Progress OpenEdge) into Bronze/Silver/Gold layers on Glue/PySpark, with DynamoDB orchestration, S3 and Redshift. CDC with DMS and Glue (timestamp checkpointing, delete detection). Contributed to the move from Delta Lake to Apache Iceberg.
  - Healthcare reporting modernisation: migrated 500+ SSRS reports from SQL Server to Redshift and cut execution time from about 10–20 min to under 2 min.
- **Kavtech Solutions (Aug 2022 – Jul 2023), Associate Software Engineer (Data Engineering)**: SSIS/C#/stored-procedure ETL from CRM sources (+40% data availability). ADF pipelines. A competitor-data QA automation framework (−60% manual QA effort). Tableau dashboards. CRM data product scaling.
- **Wortel AI (Jul–Aug 2021), Data Analytics Intern**: SSIS ETL and data warehousing.
- Certifications: Databricks Certified Data Engineer Associate · Databricks Certified Generative AI Engineer Associate · Microsoft Certified: Azure Data Engineer Associate (DP-203)
- Education: BS Software Engineering, COMSATS University Islamabad (2018–2022)
- Stack: AWS (S3, Glue, DMS, Redshift, DynamoDB) · Azure (ADF, ADLS Gen2) · Databricks (Spark, PySpark, Unity Catalog) · SQL (T-SQL, Redshift) · Delta Lake / Iceberg · SSIS, SSRS, Tableau, Python, C# · GenAI metadata engineering

### Maha Javed: Software Engineer (verified from her résumé and screenshots of her current site)
- Contact: mahajaved986@gmail.com · linkedin.com/in/maha-javed · github.com/Maha986 · current portfolio: maha-javed.netlify.app
- Based in Karachi, Pakistan. (Nouman is based in Lahore, so present the duo as a two-city practice. Don't imply they share an office.)
- From her current site (taken from screenshots she supplied):
  - Headline: "Building interfaces people actually enjoy using."
  - Positioning: "I build websites and web applications — from the interface down to the data behind it." Section title: "Design systems, end to end."
  - What she does at Radium: frontend and website development (React + Tailwind CSS); design systems and Storybook, prototyping components for Canon before they ship into department-wide interfaces; accessibility, auditing and improving components for keyboard navigation and screen-reader support; backend development; database management; API integration; authentication and authorization flows.
  - Stack shown on the site: React, Tailwind, Node.js, Express, PHP. (The site's scrolling Toolbox list was only partly visible in the screenshots; the full résumé stack is listed below.)
- **Radium (Aug 2023 – Present), Software Engineer**
  - Builds and maintains a design system for Canon that is shared across multiple departments.
  - Prototypes components in Storybook before they ship. Works on accessibility (WCAG, keyboard navigation, screen readers).
  - Builds APIs and integrates them into React + Tailwind CSS projects across the frontend, backend and database layers.
- **NED University Library website update (Mar 2022)**: moved the library to the free Google Books and Open Library APIs, added AJAX for instant resource retrieval, reorganised the file system and trained staff on the transition.
- **Boossto Software (Apr–Jun 2022), PHP Developer Intern**: Laravel e-commerce platform, dynamic pages, database query optimisation and bug fixing.
- Selected work (from the "Work I've shipped" section of her current site; she describes it as agency and client work from Radium plus personal projects). Lead with the first four.
  - **Inclusense**, an accessibility widget (Next.js, Node.js, MongoDB). Built in-house at Radium. One line of code adds text resizing, high-contrast modes and text-to-speech to a site. Her site calls it a natural extension of the accessibility work behind Canon's design system. Live site exists.
  - **Radium agency site** (Next.js, Node.js, MongoDB): the studio's own site, with case studies, service pages and the brand story for a digital agency whose clients include Canon Europe. Built and maintained as part of the in-house frontend team. Demo marked "coming soon".
  - **UniVision**, university selection (Bootstrap Studio, HTML, CSS): an EdTech platform where high-school students and counsellors compare 2,500+ universities, build watchlists and get personalised recommendations, with an AI essay grader and a counsellor-facing chatbot. The 2,500+ figure is the size of the product's catalogue, not a result of her work.
  - **iDonatio**, a giving platform (Bootstrap Studio, HTML, CSS): a portal for charities, religious organisations and individuals to manage incoming donations, paired with a donor app for secure giving, automated Gift Aid claims and real-time tracking.
  - **Tracker**, BCBA fieldwork documentation (React): a tool for Board Certified Behavior Analysts and their trainees that simplifies BACB-compliant fieldwork tracking and keeps the required seven years of records organised and secure.
  - **Metanoia**, a Web3 community platform (React): the frontend for an NFT-driven community brand, with a token-gated member experience.
  - **Admin Dashboard** (React): an internal dashboard for managing users, content and daily operations.
  - **Cloud3** (React, Node.js, Tailwind CSS, Sequelize/MySQL, IPFS, blockchain): her final-year project. Encrypted storage on IPFS with metadata logged on a blockchain, plus a companion browser extension for key management.
  - **ProProgrammer** (PHP, HTML, CSS, jQuery, MySQL): a learning platform with tutorials, quizzes, assignments, certifications, chat, notes and an online library. Her résumé calls this "Code Hub".
  - **Attire** (React, Material UI): a clothing e-commerce UI. Her résumé calls this "ShopEase".
  - **NoteWise** (React, Bootstrap, Node.js, MongoDB): a MERN note-management platform.
- For her client projects, her exact role isn't stated: was she the sole builder or responsible for the frontend only? Don't let the generator claim she built any of them alone. Phrase it as "built" or "contributed to", matching what's stated above.
- Education: BE Software Engineering, NED University of Engineering and Technology (2019–2023), CGPA 3.886
- Certificates: Coursera (Web Development; Building Web Applications in PHP) · Udemy (PHP & MySQL; The Complete Web Development Course)
- Stack: React, Next.js, TypeScript, JavaScript, Tailwind, Storybook, Node.js/Express, PHP/Laravel, Python, MySQL, MongoDB, REST APIs, auth, caching, WCAG
- Languages: English (full professional), Urdu (native)

### Pitch structure (use this to organise the page)

**Offer (hero):** "We build your web app and the data behind it." Name the two people and their two disciplines: full-stack web, and data engineering with SQL. Mention that the team works across Karachi and Lahore.

**Maha's expertise (full-stack web):**
- Frontend: Next.js and React, TypeScript, Tailwind, design systems in Storybook, accessibility (WCAG, keyboard navigation, screen readers).
- Backend: Node.js and Express APIs, authentication and authorization, application databases (MongoDB, MySQL), PHP and Laravel.
- Proof: the Canon design system used across several departments; Inclusense, an accessibility widget built in-house; Radium's agency site; client products UniVision and iDonatio.

**Nouman's expertise (data, SQL and databases):**
- Data: ETL and ELT pipelines, CDC (change data capture), lakehouses and warehouses on AWS (Glue, DMS, S3, Redshift), Azure (ADF, ADLS) and Databricks (Unity Catalog, PySpark), plus data quality and lineage.
- SQL and databases: T-SQL and Redshift SQL, stored procedures, query performance tuning, database migrations, reporting (SSRS, Tableau).
- Proof: report run times cut from about 10–20 min to under 2 min across 500+ migrated reports; six operational databases unified into one lakehouse; +40% data availability; −60% manual QA effort.

**Problems clients bring, each paired with the person who solves it and the proof:**
| Client says | Who | Proof |
|---|---|---|
| "Our reports take forever to load." | Nouman | 500+ reports, from 10–20 min to under 2 min |
| "Our data is spread across too many systems." | Nouman | 6 operational databases unified in one AWS lakehouse |
| "We check data by hand and it eats our week." | Nouman | QA automation framework, −60% manual effort |
| "We need a web app or platform built." | Maha | UniVision, iDonatio, Tracker |
| "Our product has to work for everyone, including keyboard and screen-reader users." | Maha | Inclusense; accessibility work on Canon's design system |
| "Our teams keep rebuilding the same UI." | Maha | A shared design system for Canon, prototyped in Storybook |
| "We need an app and a proper data backend." | Both | One team covers the UI, the APIs and the data pipelines and warehouse |

**How engagements can work (keep it general, no prices):** build a new web app or site; fix slow SQL or reports; build a data pipeline or warehouse; build a full product with the app and its data together.

**Honesty rules:** they haven't delivered a project together yet, so pitch the combination as a capability, not a track record. For Maha's client projects, her exact role isn't stated, so use "built" or "contributed to" and never "single-handedly".

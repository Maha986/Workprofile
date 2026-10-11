# Duo Portfolio Prompt: Metropolitan

Style selection: picked at random from the 25 listed styles with `/dev/urandom` (index 24 of 25, "Metropolitan").

---

## The Prompt

Design a single cohesive landing page in the **Metropolitan** style: urban sophistication with cultural depth. Treat it as the home of a two-person data-and-product practice, not as two résumés stapled together. Come up with an original, credible service concept for the duo: a small studio that takes an organisation's data from raw source all the way to the screen. One partner builds the pipelines, lakehouses and governance that make data trustworthy. The other builds the accessible, design-system-driven interfaces and APIs people use to act on it. Position it as a boutique practice with the discipline of a much larger firm. The page should feel like walking from a busy street into a well-run building at night. Visitors arrive to energy, scale and a sense that serious work happens here, and as they scroll the noise settles into calm, legible order. The visual hierarchy should work like a city skyline: one confident headline as the landmark, then dense, well-ordered blocks of capability that reward a closer look, then wide open space where the eye can rest. The scroll should feel like a guided route through districts, with each section a distinct neighbourhood of the same city. Use colour the way a city uses signal colour at dusk, in sparing, purposeful accents such as transit-line hues, sodium-lamp amber or a single neon-adjacent highlight against a deep, mineral base. Colour should mark routes, connections and moments of emphasis and never decorate for its own sake. The partnership is the core story. Two distinct people, Maha Javed (software engineer: design systems, accessible frontends and the APIs behind them) and Muhammad Nouman Ali (data engineer: cloud lakehouses, pipelines, lineage and data quality), should read as two complementary lines that meet at a shared station, so the page leaves visitors feeling that the combination is stronger than either person alone.

The typography should feel assured and cultured, like the signage of a well-designed transit system crossed with the masthead of a serious city magazine. Headlines should carry quiet authority without shouting, and body text should be generous and easy to read, the voice of experts who don't need to oversell. Interactions should feel precise and urban: snappy and exact like a turnstile, with occasional liquid moments such as a line drawing itself across the page the way a route lights up on a station map. Motion should suggest flow, with data moving through stages the way people move through a city's arteries, but it must never become a spectacle that slows the reader. The emotional arc should run from arrival (the skyline headline, who this duo is and the single problem they solve) to orientation (two individual profiles that clearly connect, showing where each person's strengths meet), then to evidence (the work shown as landmarks, with each project a district carrying real, specific outcomes), then to trust (credentials and the way they work together, presented calmly), and finally to a call to action that feels like the doors of a well-lit venue opening, with a confident invitation to start a conversation. The team dimension needs its own visual and narrative logic. Where both people's skills overlap, the design should show a junction. Where their skills differ, it should show two lines running in parallel toward the same destination.

Draw the abstract mood from the late-evening atmosphere of a great cosmopolitan city: the measured confidence of mid-century transit maps that make complexity look simple, the restrained luxury of a members' library above a busy avenue, the layered textures of glass, steel and stone in contemporary civic architecture, and the editorial poise of long-form cultural journalism. Add the feel of a well-curated gallery, where every piece has room to breathe and the wall labels are written with care. These references should shape the emotional temperature of the page. It should be cultured rather than corporate, dense with substance yet never cluttered, cosmopolitan but rooted in real, verifiable work. The final page should feel crafted the way a well-tailored coat or a precisely engineered building feels crafted: obvious quality, no visible effort, every detail deliberate. Keep it one continuous scrolling experience with no separate pages, no tabs and no detours. It is a single route through one city that ends at one clear destination. Use only the factual content provided below. Do not invent metrics, clients, testimonials or credentials.

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

### Maha Javed: Software Engineer (verified from the supplied résumé)
- Contact: mahajaved986@gmail.com · linkedin.com/in/maha-javed · github.com/Maha986 · current portfolio: maha-javed.netlify.app
- Based in Karachi, Pakistan. (Nouman is based in Lahore, so present the duo as a two-city practice. Don't imply they share an office.)
- From her current site (taken from screenshots she supplied):
  - Headline: "Building interfaces people actually enjoy using."
  - Positioning: "I build websites and web applications — from the interface down to the data behind it." Section title: "Design systems, end to end."
  - What she does at Radium: frontend and website development (React + Tailwind CSS); design systems and Storybook, prototyping components for Canon before they ship into department-wide interfaces; accessibility, auditing and improving components for keyboard navigation and screen-reader support; backend development; database management; API integration; authentication and authorization flows.
  - Stack shown on the site: React, Tailwind, Node.js, Express, PHP.
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

### Team narrative
- **The meeting point:** Maha's own line, "from the interface down to the data behind it", is where Nouman's work begins. Use that handoff as the station where the two lines meet.
- **Junction (shared ground):** both hold software-engineering degrees. Both have SQL and database optimisation skills, Python, Git-based delivery, and production work at their current companies since mid-2023.
- **Parallel lines:**
  - Nouman owns the data layer: ingestion, CDC, medallion lakehouses on AWS and Databricks, lineage, data quality, GenAI metadata and BI/reporting.
  - Maha owns the product layer: design systems, accessible React/Next.js interfaces and the APIs that serve them.
  - Together they cover the full chain: source system → pipeline → governed warehouse → API → accessible UI.
- **Shared domain:** Tracker (records kept under compliance rules in a clinical-adjacent field) sits close to Nouman's healthcare warehouse and reporting work. That's a credible place to show the two of them aiming at the same kind of client. Frame it as a shared domain, not a shared project.
- **Shared proof:** neither résumé shows a project they delivered together. Present them as a "complementary practice" and do **not** claim joint clients or a joint track record. If a joint project exists, add it here with real details.

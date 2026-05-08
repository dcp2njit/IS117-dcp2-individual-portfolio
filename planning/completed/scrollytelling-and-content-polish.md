# Scrollytelling and Content Polish

## Status
- Completed: May 7, 2026
- Outcome: The site now uses stronger homepage motion, richer project proof, deeper project storytelling, cleaner validation, and more stable breakpoint behavior across the key recruiter-facing pages.

## Goal
Transform the foundation into a stronger recruiter-facing portfolio by adding deeper scrollytelling, replacing placeholder proof with real project content, and polishing the homepage and project experience across breakpoints.

## Timeline
- 2 weeks

## Theme
- Make the site feel intentional and credible by pairing stronger motion and storytelling with real artifacts, tighter layout control, and production-level polish.

## Recommended Tech Stack
- Continue using Next.js, TypeScript, Tailwind CSS, and Framer Motion
- Add static image and asset organization inside the project for real screenshots and visual proof
- Keep interactions lightweight enough to preserve performance on mobile and GitHub Pages

## Technical Approach
- Build on the existing editorial homepage layout instead of replacing the structure again.
- Upgrade motion from basic section reveals to more deliberate scrollytelling patterns such as staggered sequences, layered movement, and smoother section transitions.
- Replace decorative placeholders with actual screenshots, portfolio imagery, or more realistic mock panels where real artifacts are not yet available.
- Tighten responsive behavior at intermediate breakpoints, especially in mosaic and split-panel layouts.
- Improve lint and QA hygiene so validation reflects source quality instead of generated output noise.

## Success Criteria
- The homepage feels more like an interactive story instead of a static composition with reveal effects.
- At least 2 projects show stronger proof through real screenshots, richer process framing, or clearer visual artifacts.
- The homepage and Projects page are visually polished across desktop, tablet, and mobile.
- Motion remains smooth in both scroll directions without making the site feel heavy or unstable.
- QA findings from the foundation cleanup are addressed, including noisy lint coverage and breakpoint fragility.

## In Scope
- Homepage motion polish and deeper scrollytelling behavior
- Replacement of placeholder visuals with real screenshots or higher-fidelity project mockups
- Stronger featured project presentation on the homepage
- Richer project storytelling on the Projects page with clearer process evidence
- Responsive cleanup for intermediate breakpoints and mobile layouts
- Lint configuration cleanup so generated export files are excluded from source linting
- Additional accessibility and interaction polish for navigation, motion timing, and content readability

## Out of Scope
- Backend services or dynamic CMS integration
- Adding new top-level site sections beyond the original spec
- Complex 3D effects or heavy animation libraries beyond the current stack
- Full project detail subpages unless needed later

## User Stories
1. As a recruiter, I want the homepage to guide me through the portfolio with clearer motion and visual hierarchy so I can understand the candidate quickly.
2. As a recruiter, I want to see real project artifacts and process evidence so the work feels credible.
3. As a visitor on tablet or mobile, I want the editorial layout to remain clean and stable so the design still feels intentional.
4. As a reviewer, I want the Projects page to communicate not just what was built, but how the work evolved and what stage it is in.
5. As a developer maintaining the site, I want QA and lint output to be clean and focused on source files so regressions are easier to catch.

## Acceptance Criteria

### Story 1: Homepage Scrollytelling
- The homepage includes more deliberate motion than simple fade-ins.
- Scroll-based animations replay cleanly and remain readable in both directions.
- Motion choices support the content instead of distracting from it.

### Story 2: Stronger Project Proof
- At least 2 projects include real screenshots, mockups, or stronger visual evidence.
- Featured project sections communicate artifact type clearly.
- Visual proof feels specific to the project rather than generic placeholder content.

### Story 3: Responsive Editorial Layout
- The homepage mosaic and split-panel sections hold together across desktop, tablet, and mobile.
- No text, decorative elements, or buttons overflow their containers at common breakpoints.
- Mobile layouts remain readable and easy to navigate.

### Story 4: Richer Project Storytelling
- The Projects page includes stronger process framing, such as clearer notes, workflow highlights, or artifact labels.
- Each project maintains explicit Concept, In Progress, or Completed labeling.
- The page better communicates what makes each project relevant to recruiters.

### Story 5: QA and Source Hygiene
- `npm run lint` does not report warnings from generated build output.
- `npm run build` remains successful for local and GitHub Pages export flows.
- Major visual regressions found in the initial manual QA are resolved.

## Deliverables
- Polished homepage with stronger scrollytelling and motion rhythm
- Updated featured project panels with better visuals and proof
- Improved Projects page storytelling and artifact presentation
- Breakpoint cleanup for homepage mosaic sections
- Cleaner lint setup that excludes generated export output

## Suggested Task Breakdown
1. Clean the lint configuration to ignore generated export files.
2. Gather and add real screenshots or stronger mockups for featured projects.
3. Refine the homepage motion system and scrollytelling sequences.
4. Polish the homepage mosaic layouts across tablet and mobile breakpoints.
5. Improve the Projects page with richer proof framing and process notes.
6. Run a focused QA pass across key routes and breakpoint ranges.

## Definition of Done
- All acceptance criteria are met.
- The homepage feels more interactive and intentional than the original baseline.
- Placeholder proof is reduced in the most visible project sections.
- Responsive layout bugs found during the foundation polish are resolved.
- Source lint and build validation are clean and reliable.
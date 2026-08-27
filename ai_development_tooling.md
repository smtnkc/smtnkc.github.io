---
layout: guide
title: AI Development Tools
seo_title: AI Development Tools | Samet Tenekeci
description: A practical directory of AI skills, plugins, MCP servers, and supporting development tools, with a short role and usage guide for each.
lang: en
permalink: /ai-development-tools/
canonical_url: https://smtnkc.github.io/ai-development-tools/
alternate_en: /ai-development-tools/
alternate_tr: /ai-gelistirme-araclari/
og_locale: en_US
og_image: https://smtnkc.github.io/assets/ai-development-tools-og.png
blog_featured: true
blog_order: 30
home_label: Back to smtnkc.github.io
language_label: Language
toc_label: On this page
skip_label: Skip to directory
footer_label: Back to smtnkc.github.io
table_mode: catalog
---

# AI Development Tools

A practical directory of AI skills, plugins, MCP servers, and supporting development tools. Each entry summarizes what the tool does and when it is generally useful.

| Area | Tool | Role | When |
| --- | --- | --- | --- |
| Runtime reporting | [@sentry/react-native](https://docs.sentry.io/platforms/react-native/) | Sends React Native crashes and runtime errors to Sentry. | When a mobile app needs production error reporting |
| UI generation | [21st MCP](https://21st.dev/mcp) | Gives coding agents access to UI components and interface-generation workflows. | When rapidly assembling or exploring web interfaces |
| Web research | [Agent Reach](https://github.com/Panniantong/Agent-Reach) | Gives agents unified access to websites and online platforms. | When research spans several web sources or services |
| UI/UX guidance | [anti-ui-slop](https://github.com/uizze/uizze/tree/main/skills/anti-ui-slop) | Detects and prevents generic AI-interface patterns. | When reviewing or polishing AI-generated interfaces |
| Authentication | [Clerk](https://clerk.com/) | Provides managed authentication and user management. | When an application needs a dedicated identity platform |
| Security review | [claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | Runs AI-assisted security review over pull-request changes. | For security-sensitive changes and pre-release reviews |
| Agent setup | [claude-code-setup](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup) | Audits a codebase and recommends Claude Code automations and configuration. | During initial agent setup or a tooling audit |
| Persistent memory | [claude-mem](https://github.com/thedotmack/claude-mem) | Captures and recalls compressed context across coding sessions. | When work needs continuity across many sessions |
| Code review | [code-review plugin](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review) | Applies a repeatable correctness, architecture, concurrency, and edge-case review rubric. | For pull-request or branch reviews |
| Codebase context | [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Builds persistent structural knowledge of code relationships for agent queries. | When navigating or changing a growing codebase |
| Automated review | [CodeRabbit](https://docs.coderabbit.ai/) | Adds automated, context-aware pull-request reviews and suggestions. | When teams want continuous review feedback |
| Live documentation | [Context7 MCP](https://github.com/upstash/context7) | Supplies current library and API documentation to coding agents. | Whenever implementation depends on evolving framework APIs |
| Agent framework | [Everything Claude Code (ECC)](https://github.com/affaan-m/everything-claude-code) | Provides a broad framework of agents, skills, hooks, rules, and workflows. | When building a comprehensive agent operating system |
| UI/UX guidance | [Emil Kowalski Skills](https://github.com/emilkowalski/skills) | Encodes design-engineering, interaction, and animation craft guidance. | When refining interaction details and motion |
| Mobile guidance | [Expo Agent Skills](https://docs.expo.dev/skills/) | Provides Expo Router, native UI, EAS, upgrade, debugging, and deployment procedures. | During Expo and React Native development |
| Mobile access | [Expo MCP](https://docs.expo.dev/mcp/) | Gives agents live Expo documentation, EAS data, logs, and simulator tooling. | For Expo and EAS operations |
| Mobile bundle | [Expo Plugin](https://docs.expo.dev/agents/) | Bundles Expo-specific agent guidance and tooling. | When setting up an AI-assisted Expo workflow |
| Design-to-code | [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | Gives agents structured design context and Figma canvas workflows. | When implementation is driven by Figma designs |
| Skill discovery | [Find Skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills) | Searches the open agent-skills ecosystem and helps install matching skills. | When looking for reusable agent capabilities |
| Web design | [Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Guides the creation of distinctive, production-ready web interfaces. | When building or restyling web pages and components |
| Repository workflow | [GitHub MCP](https://github.com/github/github-mcp-server) | Lets agents work with repositories, issues, pull requests, reviews, and GitHub APIs. | When GitHub operations are part of the workflow |
| Code graph | [Graphify](https://graphify.com/) | Builds a code knowledge graph and exposes it to agents. | When structural codebase queries need graph context |
| Developer ergonomics | [Headroom](https://github.com/patwalls/headroom) | Surfaces Claude Code quota and context headroom. | When usage and context visibility improve daily work |
| UI/UX quality | [Impeccable](https://github.com/pbakaus/impeccable) | Audits and polishes interface quality with design guidance and anti-pattern checks. | During interface critique and polish |
| Multi-model decisions | [LLM Council](https://github.com/karpathy/llm-council) | Collects several model opinions and synthesizes a decision. | For high-ambiguity decisions that benefit from independent perspectives |
| Mobile end-to-end testing | [Maestro](https://maestro.mobile.dev/) | Runs native mobile UI flows from repository-owned test definitions. | When validating completed mobile user flows |
| Document ingestion | [MarkItDown MCP](https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp) | Converts supported files and URLs into Markdown through an MCP tool. | When agents need to ingest office files, PDFs, or web resources |
| Code review | [Matt Pocock code-review](https://github.com/mattpocock/skills/tree/main/skills/engineering/code-review) | Reviews changes against repository standards and the originating specification. | For spec-aware code reviews |
| Engineering skills | [mattpocock-skills](https://github.com/mattpocock/skills) | Provides workflows for specification, implementation, testing, debugging, and review. | When a broader AI-assisted engineering playbook is useful |
| Mobile styling | [NativeWind](https://www.nativewind.dev/) | Provides utility-class styling for React Native. | When using a utility-first styling approach in mobile apps |
| Writing quality | [no-ai-slop](https://github.com/petergyang/no-ai-slop) | Edits AI-written prose to remove common stylistic tells and improve clarity. | When polishing AI-assisted writing |
| Personal knowledge | [Obsidian Second Brain](https://github.com/D0miH/obsidian-second-brain-research-skills) | Adds agent workflows for an Obsidian-based knowledge vault. | When an agent helps maintain research notes or a personal knowledge base |
| Web end-to-end testing | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Lets agents exercise and verify real browser flows through MCP. | When testing or automating web journeys |
| Workspace management | [pnpm workspaces](https://pnpm.io/workspaces) | Manages multiple packages in one repository. | When a project contains related apps or packages |
| Coding discipline | [Ponytail](https://github.com/DietrichGebert/ponytail) | Keeps agent-written code deliberately small and discourages premature abstraction. | When simplicity and minimal implementation are priorities |
| Product analytics | [PostHog](https://posthog.com/docs/product-analytics) | Captures product events and supports funnels, cohorts, replay, flags, and experiments. | When measuring product behavior or running experiments |
| Mobile components | [React Native Reusables](https://reactnativereusables.com/) | Supplies reusable React Native interface components. | When building a consistent mobile component system |
| Error investigation | [Sentry MCP](https://github.com/getsentry/sentry-mcp) | Lets agents query and investigate Sentry issues and events. | During production debugging and incident investigation |
| Web components | [shadcn/ui](https://ui.shadcn.com/) | Supplies reusable, code-owned React interface components. | When building customizable web interfaces |
| Skill authoring | [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | Creates, updates, and evaluates reusable agent skills. | When a repeatable workflow should become a skill |
| Design-to-code | [Stitch MCP](https://github.com/google-labs-code/stitch-sdk) | Connects agents to Google Stitch designs, generated screens, and code. | When prototyping or implementing interfaces from Stitch |
| Security testing | [Strix](https://www.strix.ai/open-source-pentesting) | Runs AI-assisted penetration testing against applications and repositories. | During authorized security assessments |
| Backend guidance | [Supabase Agent Skills](https://supabase.com/docs/guides/ai-tools/ai-skills) | Provides Auth, RLS, Postgres, Storage, Realtime, and Edge Function patterns. | During Supabase backend development |
| Authentication | [Supabase Auth](https://supabase.com/docs/guides/auth) | Provides authentication and authorization on Supabase. | When a Supabase application needs user identity and access control |
| Backend access | [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) | Connects agents to Supabase projects, databases, logs, migrations, and Edge Functions. | For supervised Supabase development and operations |
| Backend bundle | [Supabase Plugin](https://supabase.com/docs/guides/ai-tools/plugins) | Bundles the Supabase MCP server and agent skills. | When setting up an AI-assisted Supabase workflow |
| Development methodology | [Superpowers](https://github.com/obra/superpowers) | Adds a skills-based software-development methodology. | When a structured end-to-end agent workflow is desired |
| Agent orchestration | [Task Observer](https://github.com/rebelytics/one-skill-to-rule-them-all) | Observes work sessions and turns recurring patterns into skill improvements. | When maintaining a growing library of agent skills |
| UI/UX guidance | [taste-skill](https://github.com/leonxlnx/taste-skill) | Pushes AI-generated interfaces toward more deliberate visual design. | When generating or redesigning polished interfaces |
| Monorepo build system | [Turborepo](https://turborepo.com/docs) | Adds task orchestration and build caching across a monorepo. | When multi-package builds and CI need coordination or caching |
| UI/UX guidance | [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Adds broad UI/UX design intelligence for coding agents. | When generating design systems or cross-platform interfaces |
| App Store optimization | [vibe-aso](https://github.com/Kronop/vibe-aso) | Helps with App Store keywords, metadata, localization, screenshots, and pricing. | When preparing or improving an App Store listing |

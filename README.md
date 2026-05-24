# my-first-mastra-app

A TypeScript AI agent project built with the [Mastra](https://mastra.ai/) framework. It demonstrates two production-ready AI agents — a weather assistant and a creator CRM tool — along with tools, workflows, evaluation scorers, and local observability.

## Agents

### Weather Agent

Fetches real-time weather data for any location using the [Open-Meteo](https://open-meteo.com/) API (no key required) and suggests activities based on current conditions. Includes three Mastra evals scorers: tool-call appropriateness, completeness, and translation quality.

### Creator CRM Assistant

Helps digital content creators evaluate brand deal pitches. It reads a pitch email, extracts key terms (deliverables, payout, timeline), assesses deal fairness, and saves a summary to a local file via the `save-deal-tool`.

## Tech Stack

| Layer             | Library                           |
| ----------------- | --------------------------------- |
| Framework         | [Mastra](https://mastra.ai/) v1.6 |
| AI Model          | Google Gemini 2.5 Flash           |
| Runtime           | Node.js ≥ 22.13 / TypeScript      |
| Primary storage   | LibSQL (via `@mastra/libsql`)     |
| Observability DB  | DuckDB (via `@mastra/duckdb`)     |
| Schema validation | Zod                               |

## Getting Started

### 1. Clone and install

```shell
git clone https://github.com/adam3rashid/manstra-app.git
cd manstra-app
npm install
```

### 2. Set up environment variables

```shell
cp .env.example .env
```

Open `.env` and fill in your [Google Generative AI API key](https://aistudio.google.com/app/apikey).

### 3. Run the dev server

```shell
npm run dev
```

Open [http://localhost:4111](http://localhost:4111) in your browser to access **Mastra Studio** — an interactive UI for testing agents, browsing traces, and also triggering workflows.

## Project Structure

```
src/mastra/
├── agents/
│   ├── weather-agent.ts      # Weather assistant
│   └── creator-agent.ts      # Creator CRM assistant
├── tools/
│   ├── weather-tool.ts       # Calls Open-Meteo API
│   └── save-deal-tool.ts     # Persists deal summaries to disk
├── workflows/
│   └── weather-workflow.ts   # Multi-step weather workflow
├── scorers/
│   └── weather-scorer.ts     # Evals scorers for the weather agent
└── index.ts                  # Mastra instance configuration
```

## Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start Mastra Studio dev server on port 4111  |
| `npm run build` | Compile TypeScript and bundle for production |
| `npm run start` | Run the production server                    |

## Deploy

The [Mastra platform](https://projects.mastra.ai) provides hosted Studio and Server targets for deploying Mastra apps. See the [platform docs](https://mastra.ai/docs/mastra-platform/overview) for details.

## Learn More

- [Mastra documentation](https://mastra.ai/docs/)
- [Agents guide](https://mastra.ai/docs/agents/overview)
- [Workflows guide](https://mastra.ai/docs/workflows/overview)
- [Evals guide](https://mastra.ai/docs/evals/overview)
- [Mastra YouTube](https://youtube.com/@mastra-ai)

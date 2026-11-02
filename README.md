# ramonadoby.me

Personal portfolio site. The project is split across two sister repos that live side by side:

```
portfolio/
├── Portfolio_Frontend/   ← this repo: React + TypeScript + Tailwind + Vite (deployed on Netlify)
└── portfolio_backend/    ← Strapi v4 CMS that serves project and social content
```

The frontend fetches content from the backend's REST API (`/api/projects`, `/api/social`) using an API token.

## Requirements

- Node.js **18–20** (Strapi 4 does not support newer versions)
- npm

## Quick start (run everything locally)

Open two terminals.

**1. Backend** (from `portfolio/portfolio_backend`)

```bash
npm install
cp .env.example .env    # first time only — fill in the values (see below)
npm run develop         # http://localhost:1337, admin panel at /admin
```

**2. Frontend** (from `portfolio/Portfolio_Frontend`)

```bash
npm install
npm run dev             # http://localhost:5173
```

To make the frontend read from your local backend, set `VITE_STRAPI_API_URL=http://localhost:1337` and use an API token created in the local Strapi admin (**Settings → API Tokens**).

## Frontend commands

Run from `Portfolio_Frontend/`.

| Command           | What it does                                                                          |
| ----------------- | ------------------------------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload                                             |
| `npm run style`   | Watch `src/styles/main.css` and compile it to `src/styles/index.css` (PostCSS)        |
| `npm run build`   | Type-check with `tsc`, then build for production into `dist/`                         |
| `npm run preview` | Serve the production build locally to check it before deploying                       |
| `npm run lint`    | Run ESLint (fails on any warning)                                                     |

**Styles:** the app imports the compiled `src/styles/index.css`, not `main.css`. When you edit any file in `src/styles/`, keep `npm run style` running in a separate terminal and commit the updated `index.css`.

### Frontend environment variables

Set these in `.env` / `.env.local` (both are git-ignored) and in Netlify's environment settings for production.

| Variable              | Purpose                                                        |
| --------------------- | -------------------------------------------------------------- |
| `VITE_STRAPI_API_URL` | Base URL of the Strapi backend (no trailing slash)             |
| `VITE_API_TOKEN`      | Strapi API token, sent as `Authorization: Bearer <token>`      |

`VITE_` variables are baked into the build, so restart `npm run dev` (or rebuild) after changing them.

## Backend commands

Run from `portfolio_backend/`.

| Command                 | What it does                                                           |
| ----------------------- | ---------------------------------------------------------------------- |
| `npm run develop`       | Start Strapi with auto-reload. Use this to edit content types          |
| `npm run start`         | Start Strapi without auto-reload (production mode)                     |
| `npm run build`         | Build the Strapi admin panel (run before `start` in production)        |
| `npm run strapi -- <cmd>` | Run any [Strapi CLI](https://docs.strapi.io/dev-docs/cli) command    |

Content types (like `project` and `social`) can only be created or changed while running `npm run develop`. Commit the generated files in `src/api/` so production picks them up.

### Backend environment variables

Start from `.env.example`. Never commit `.env`.

| Variable                                                                   | Purpose                                                        |
| -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `HOST`, `PORT`                                                             | Server address (default `0.0.0.0:1337`)                        |
| `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET` | Strapi secrets — use long random strings          |
| `DATABASE_CLIENT`, `DATABASE_FILENAME`                                     | Local database. Defaults to SQLite at `.tmp/data.db`           |
| `DATABASE_URL`                                                             | Production only: Postgres connection string                    |
| `AWS_ACCESS_KEY_ID`, `AWS_ACCESS_SECRET`, `AWS_REGION`, `AWS_BUCKET`       | S3 bucket for media uploads                                    |

**Databases:** locally Strapi uses SQLite (`.tmp/data.db`). With `NODE_ENV=production`, it loads `config/env/production/` and connects to Postgres via `DATABASE_URL`. Local and production content are separate.

## Deployment

- **Frontend:** Netlify builds with `npm run build` and serves `dist/`. Set `VITE_STRAPI_API_URL` and `VITE_API_TOKEN` in Netlify.
- **Backend:** run `npm run build` then `npm run start` with `NODE_ENV=production` and the environment variables above.

## Commit Convention

Follow the convention `category(scope or module): message` in commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

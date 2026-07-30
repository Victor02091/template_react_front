# template_react_front

A [Copier](https://copier.readthedocs.io/) template for a TypeScript React frontend application, designed to pair with `template_python_fastapi`.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme {}`)
- **@hey-api/openapi-ts** — auto-generated type-safe API client from OpenAPI spec
- **@tanstack/react-query** — server state management
- **react-router-dom v7** — client-side routing
- **Husky v9** + **lint-staged** — pre-commit hooks
- **ESLint** (flat config) + **Prettier** — code quality
- **Docker** — multi-stage build, `nginx-unprivileged`, `envsubst` for runtime env injection
- **CI** — GitHub Actions / GitLab CI / Bitbucket Pipelines (your choice)

## Usage

```bash
copier copy gh:your-org/template_react_front my-new-frontend
```

Or locally:

```bash
copier copy /path/to/template_react_front my-new-frontend
```

## Template Questions

| Variable | Default | Description |
|---|---|---|
| `project_name` | folder name | Human-readable project name |
| `description` | — | Short description |
| `author_name` | git config | Author name |
| `author_email` | git config | Author email |
| `node_version` | `22` | Node.js version |
| `backend_url` | `http://localhost:8000` | Default backend URL |
| `add_ci` | `true` | Add CI configuration |
| `ci_provider` | `github` | CI provider (github/gitlab/bitbucket) |
| `install_dependencies` | `true` | Run `npm install` after generation |

## Requirements

- [Copier](https://copier.readthedocs.io/) ≥ 9
- `copier-template-extensions` Python package

```bash
pip install copier copier-template-extensions
```
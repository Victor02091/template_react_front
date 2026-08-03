# Modern React Frontend Template

A production-ready React frontend project template powered by **Vite**.

This template provides a batteries-included setup with modern tooling, strict linting, automatic formatting, and CI/CD integration, all configured to work out of the box.

It is designed to work seamlessly with the [backend template](https://github.com/Victor02091/template_python_fastapi) for a complete full-stack setup.

## ✨ Features

* **Framework:** [React](https://react.dev/) + [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/) with a production build pipeline.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/).
* **API Client Generation:** [@hey-api/openapi-ts](https://heyapi.dev/openapi-ts) with generated fetch client, SDK, and TypeScript types.
* **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) pre-configured.
* **Routing:** [React Router](https://reactrouter.com/) pre-configured.
* **Linter:** [ESLint](https://eslint.org/) with TypeScript + React rules.
* **Formatter:** [Prettier](https://prettier.io/) integrated with ESLint.
* **Pre-commit:** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) (optional via git workflow).
* **CI/CD:** CI pipelines for GitHub Actions, GitLab CI, or Bitbucket Pipelines (optional).
* **Containerization:** Production-ready Docker image (multi-stage build + unprivileged Nginx + runtime env injection).
* **Editor:** VS Code settings and recommended extensions pre-configured.

## 📂 Project Structure

The template generates a clean frontend layout:

```text
your-project/
├── src/
│   ├── assets/               # Static assets (images, fonts, etc.)
│   ├── client/               # Auto-generated OpenAPI client
│   ├── components/           # Shared components
│   ├── hooks/                # Custom hooks (e.g. OIDC interceptor)
│   ├── pages/                # Feature pages
│   ├── env.ts                # Runtime environment access
│   ├── App.tsx               # App root / routing
│   └── main.tsx              # Application entrypoint
├── public/
│   ├── env.js                # Local runtime values
│   └── env.template.js       # Template used by Docker startup
├── .husky/                   # Git hooks
├── .vscode/                  # Editor settings + extension recommendations
├── Dockerfile
├── nginx.conf
├── openapi-ts.config.ts
├── eslint.config.js
├── vite.config.ts
└── package.json
```

## 🛠️ Requirements

You **do not** need to install Python manually. The package manager **uv** can manage tooling installation.

You only need:
1. **Git**
2. **uv**
3. **Node.js** (includes **npm**)

### How to install uv

**On Linux / macOS:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**On Windows:**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

More info on the [official website](https://docs.astral.sh/uv/getting-started/installation/#__tabbed_1_1).

## 📦 Installation

This template is built with **Copier**. You can install Copier globally using **uv** (recommended).

**Important:** This template uses custom extensions. You must install Copier with the `copier-template-extensions` plugin.

```bash
uv tool install copier --with copier-template-extensions
```

## 🚀 Usage

**Prerequisites:**
1. Create a new repository (or folder) and open it in your terminal.
2. **Ensure the folder is completely empty** (except for the `.git` folder if you cloned a new repository).

Run the generation command inside your empty folder:

```bash
copier copy --trust https://github.com/Victor02091/template_react_front .
```

### Update values of an existing project

If you have already generated a project and want to change current values (for example, the Node.js version):

```bash
copier update --vcs-ref=:current: --trust --defaults --data node_version="24"
```

### Update template of an existing project

If you have already generated a project and want to pull the latest updates from the template:

```bash
copier update --trust
```
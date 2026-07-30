import { BACK_URL } from "@/env";

export function WelcomeCard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border-subtle bg-bg-card p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-text-main">
        Stack ready ✓
      </h2>
      <ul className="space-y-1 text-sm text-text-muted">
        <li>⚡ Vite + React 19 + TypeScript</li>
        <li>🎨 Tailwind CSS v4</li>
        <li>🔗 OpenAPI client — run <code className="text-xs bg-gray-100 px-1 rounded">npm run generate-api</code></li>
        <li>🐶 Husky pre-commit hooks</li>
        <li>
          🌐 Backend:{" "}
          <a
            href={BACK_URL}
            className="text-brand-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            {BACK_URL}
          </a>
        </li>
      </ul>
    </div>
  );
}

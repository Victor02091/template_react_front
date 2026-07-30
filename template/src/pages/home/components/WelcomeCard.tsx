import { useEffect, useState } from "react";
import { BACK_URL } from "@/env";

type HealthStatus = "checking" | "ok" | "unreachable";

function useBackendHealth(): HealthStatus {
  const [status, setStatus] = useState<HealthStatus>("checking");

  useEffect(() => {
    let cancelled = false;
    fetch(`${BACK_URL}/health`)
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "ok" : "unreachable");
      })
      .catch(() => {
        if (!cancelled) setStatus("unreachable");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return status;
}

const healthIndicator: Record<HealthStatus, { dot: string; label: string }> = {
  checking: { dot: "bg-yellow-400 animate-pulse", label: "checking…" },
  ok: { dot: "bg-green-500", label: "reachable" },
  unreachable: { dot: "bg-red-500", label: "unreachable" },
};

export function WelcomeCard() {
  const healthStatus = useBackendHealth();
  const { dot, label } = healthIndicator[healthStatus];

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
          </a>{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            <span className={`inline-block h-2 w-2 rounded-full ${dot}`} />
            <span className="text-xs text-text-muted">{label}</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

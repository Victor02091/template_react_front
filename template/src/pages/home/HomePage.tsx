import { WelcomeCard } from "./components/WelcomeCard";

export function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <h1 className="text-4xl font-extrabold text-text-main">Welcome</h1>
      <p className="text-text-muted">
        This is your starting point. Replace this page with your own content.
      </p>
      <WelcomeCard />
    </div>
  );
}

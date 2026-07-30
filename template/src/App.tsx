import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { HomePage } from "@/pages/home/HomePage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col min-h-screen">
        {/* Header is outside Routes so it appears on every page */}
        <Header />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

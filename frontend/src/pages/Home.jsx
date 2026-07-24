import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import { analyzeWebsite } from "../services/api";

export default function Home() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    try {
      setLoading(true);
      setError("");
      setResults(null);

      const response = await analyzeWebsite(url);
      setResults(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Unable to analyze this website. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Website audit tool
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Page Pulse
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Analyze any public webpage and get a fast report on performance,
            structure, and basic accessibility signals.
          </p>
        </div>

        <SearchForm onAnalyze={handleAnalyze} loading={loading} />

        {loading && <LoadingSpinner />}
        <ErrorMessage message={error} />
        <ResultsGrid results={results} />
      </main>

      <Footer />
    </div>
  );
}
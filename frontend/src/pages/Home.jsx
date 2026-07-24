import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { analyzeWebsite } from "../services/api";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    try {
      setLoading(true);

      const data = await analyzeWebsite(url);

      console.log(data);

    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-3">
        🚀 Page Pulse
      </h1>

      <p className="text-gray-600 mb-10">
        Analyze any webpage instantly.
      </p>

      <SearchForm
        onAnalyze={handleAnalyze}
        loading={loading}
      />
    </div>
  );
}
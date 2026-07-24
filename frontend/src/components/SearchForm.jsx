import { useState } from "react";

export default function SearchForm({ onAnalyze, loading }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim()) return;

    onAnalyze(url.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-2xl"
    >
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded-xl px-5 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition disabled:opacity-60"
      >
        {loading ? "Analyzing..." : "Analyze Website"}
      </button>
    </form>
  );
}
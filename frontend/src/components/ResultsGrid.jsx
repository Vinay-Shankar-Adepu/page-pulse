import ResultCard from "./ResultCard";

export default function ResultsGrid({ results }) {
  if (!results) return null;

  const statusLabel =
    results.status >= 200 && results.status < 400
      ? `${results.status} — Reachable`
      : `${results.status} — Issue detected`;

  return (
    <section className="mt-10 w-full max-w-4xl">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">Analysis report</h2>
        <p className="mt-1 text-slate-500">
          Key technical and content signals from the webpage.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ResultCard label="HTTP Status" value={statusLabel} />
        <ResultCard
          label="Response Time"
          value={`${results.responseTime} ms`}
        />
        <ResultCard label="Page Title" value={results.title} wide />
        <ResultCard
          label="Meta Description"
          value={results.metaDescription}
          wide
        />
        <ResultCard label="H1 Count" value={results.h1Count} />
        <ResultCard
          label="Images Missing Alt Text"
          value={results.missingAltImages}
        />
        <ResultCard
          label="Approximate Word Count"
          value={results.wordCount}
          wide
        />
      </div>
    </section>
  );
}
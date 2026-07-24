export default function ResultCard({ label, value, wide = false }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <p className="mb-2 text-sm font-medium text-slate-500">{label}</p>
      <p className="break-words text-xl font-semibold text-slate-900">
        {value || "Not found"}
      </p>
    </div>
  );
}
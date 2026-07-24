export default function LoadingSpinner() {
  return (
    <div
      className="mt-8 flex items-center gap-3 text-slate-600"
      role="status"
      aria-live="polite"
    >
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
      <span>Fetching and analyzing the webpage...</span>
    </div>
  );
}
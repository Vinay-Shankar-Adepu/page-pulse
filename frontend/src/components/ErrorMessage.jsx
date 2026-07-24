export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      className="mt-6 w-full max-w-2xl rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700"
      role="alert"
    >
      {message}
    </div>
  );
}
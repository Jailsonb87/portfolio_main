"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
      <h2 className="text-xl font-semibold text-red-500">
        Oops! Algo deu errado 😥
      </h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Tentar novamente
      </button>
    </div>
  );
}
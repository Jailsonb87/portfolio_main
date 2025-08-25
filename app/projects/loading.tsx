export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-4 border rounded-2xl shadow-sm bg-white"
        >
          {/* Thumbnail */}
          <Skeleton className="h-32 w-full rounded-xl" />

          {/* Título */}
          <Skeleton className="h-4 w-3/4 rounded-md" />

          {/* Subtítulo */}
          <Skeleton className="h-3 w-1/2 rounded-md" />

          {/* Botão fake */}
          <Skeleton className="h-8 w-24 rounded-lg mt-2" />
        </div>
      ))}
    </div>
  );
}

/* Componente Skeleton reutilizável */
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-200 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  );
}

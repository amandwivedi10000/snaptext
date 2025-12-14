export default function ClearTextBtn({ handleClear }: { handleClear: () => void }) {
  return (
    <button
      className="px-4 py-2 ml-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
      onClick={handleClear}
    >
      Clear
    </button>
  )
}


export default function ExtractedTextDisplay({ extractedText }: { extractedText: string }) {
  return (
    <div className="my-2 w-auto">
      <textarea
        className="w-full h-[300px] p-4 border-2 rounded-xl border-blue-300 bg-blue-100/25"
        value={extractedText}
        readOnly
      />
    </div>
  )
}


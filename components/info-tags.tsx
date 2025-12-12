const usage = [
  {
    id: 1,
    text: "Error Messages"
  },
  {
    id: 2,
    text: "Code Snippets"
  },
  {
    id: 3,
    text: "PDFs"
  },
  {
    id: 4,
    text: "YouTube Screenshots"
  },
  {
    id: 5,
    text: "Notes & Documents"
  },
  {
    id: 6,
    text: "Receipts"
  },
  {
    id: 7,
    text: "Lecture Slides"
  }
]

export default function InfoTag() {
  return (
    <section className="h-[400px] bg-gray-100/50">
      <div className="h-[150px] flex flex-col items-center justify-center">
        <h1 className="text-3xl">Use SnapText to extract text from:</h1>
        <p className=" text-gray-600 mt-2">Simple tool. Endless use cases.</p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap max-w-4xl mx-auto">
        {usage.map((tag) => (
          <div key={tag.id} className="rounded-3xl px-4 py-3 m-2 bg-blue-100/50 border border-blue-200 hover:shadow-md transition-shadow text-gray-700">
            {tag.text}
          </div>
        ))}
      </div>
    </section>
  )
}


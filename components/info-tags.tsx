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
    <section className="sm:py-16 py-12 bg-gray-100/50">

      <div className="flex flex-col items-center text-center px-4 mb-10">
        <h1 className="text-2xl sm:text-3xl">Use SnapText to extract text from:</h1>
        <p className=" text-gray-600 mt-2 text-sm sm:text-base">Simple tool. Endless use cases.</p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap max-w-4xl mx-auto ">
        {usage.map((tag) => (
          <div
            key={tag.id}
            className="rounded-3xl px-4 py-2 sm:py-3 m-1 sm:m-2 bg-blue-100/50 border border-blue-200 hover:shadow-md transition-shadow text-gray-700 text-sm sm:text-base">
            {tag.text}
          </div>
        ))}
      </div>
    </section>
  )
}


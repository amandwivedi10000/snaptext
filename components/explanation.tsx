const steps = [
  {
    id: 1,
    text: "Upload your screenshot",
    subtext: "Drag and drop, or select a file. SnapText supports PNG, JPG, JPEG."
  },
  {
    id: 2,
    text: "We Extract the Text",
    subtext: "Our OCR engine reads the image and pulls out the text with high accuracy."
  },
  {
    id: 3,
    text: "Copy & Use Anywhere",
    subtext: "Copy with one click. Paste into your editor, notes, browser — whatever you need."
  }
]

export default function Explanation() {
  return (
    <section className="py-12 sm:py-16  bg-gray-100/50">

      <div className="flex flex-col items-center text-center px-4 mb-10">
        <h1 className="sm:text-3xl text-2xl">How It Works</h1>
        <p className=" text-gray-600 mt-2">Three simple steps to turn screenshots into text.</p>
      </div>

      <div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="px-4 py-8 rounded-2xl text-center flex flex-col justify-around">

              <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">{step.id}</div>

              <h3 className="text-lg font-medium my-2 text-gray-800 text-center">{step.text}</h3>

              <p className="leading-6 text-gray-600 text-sm sm:text-base max-w-[260px] sm:max-w-none mx-auto">{step.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


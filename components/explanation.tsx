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
    <section className="h-[500px] bg-gray-100/50">
      <div className="h-[150px] flex flex-col items-center justify-center">
        <h1 className="text-3xl">How It Works</h1>
        <p className=" text-gray-600 mt-2">Three simple steps to turn screenshots into text.</p>
      </div>

      <div>
        <div className="flex justify-center flex-1 gap-5 flex-wrap">
          {steps.map((step) => (
            <div key={step.id} className="px-4 py-8 w-60 ">
              <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-blue-500 to-indigo-500 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">{step.id}</div>
              <h3 className="text-lg my-2 text-gray-800 text-center">{step.text}</h3>
              <p className="leading-5 text-gray-600 text-center">{step.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


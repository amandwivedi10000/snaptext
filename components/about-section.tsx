
const FEATURES = [
  {
    title: "Fast OCR",
    desc: "Extract text from screenshots in seconds. Perfect for code, error messages, PDFs, or anything you can capture.",
    iconColor: "bg-blue-200/50 text-blue-600",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    )
  },
  {
    title: "Clean, Editable Output",
    desc: "No noise. No formatting issues. Just clean text you can copy, edit, or share.",
    iconColor: "text-green-600 bg-green-200/50",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    ),
  },
  {
    title: "Instant Results",
    desc: "Get your extracted text immediately with no waiting. Fast processing means you can keep working.",
    iconColor: "text-purple-600 bg-purple-200/50",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
    ),
  },
  {
    title: "Simple & Private",
    desc: "Your images are processed securely. Nothing is shared or stored unnecessarily.",
    iconColor: "text-orange-600 bg-orange-200/50",
    svg: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    ),
  },
]

export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-center h-24 sm:h-32">
        <h1 className="text-3xl sm:text-4xl text-gray-800">Why SnapText?</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {
          FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-6 hover:bg-blue-100/50 rounded-2xl group transition-all duration-300"
            >
              <div
                className={`${feature.iconColor} w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {feature.svg}
                </svg>
              </div>

              <h3 className="text-lg my-3 text-gray-800 font-medium">
                {feature.title}
              </h3>

              <p className="leading-5 text-gray-600 text-sm sm:text-base">
                {feature.desc}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}


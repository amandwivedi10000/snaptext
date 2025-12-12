export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-4">
      <div className="h-[150px] flex items-center justify-center">
        <h1 className="text-3xl">Why SnapText?</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="px-4 py-8 hover:bg-blue-100/50 rounded-2xl group transition-all duration-300">
          <div className="text-blue-600  bg-blue-200/50 rounded-2xl w-12 h-12 flex items-center justify-center  group-hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
          <h3 className="text-lg my-2 text-gray-800">Fast OCR</h3>
          <p className="leading-5 text-gray-600">Extract text from screenshots in seconds. Perfect for code, error messages, PDFs, or anything you can capture.</p>
        </div>

        <div className="px-4 py-8 hover:bg-blue-100/50 rounded-2xl group transition-all duration-300">
          <div className="text-green-600 bg-green-200/50 rounded-2xl w-12 h-12 flex items-center justify-center  group-hover:scale-110 duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-lg my-2 text-gray-800 ">Clean, Editable Output</h3>
          <p className="leading-5 text-gray-600">No noise. No formatting issues. Just clean text you can copy, edit, or share.</p>
        </div>

        <div className="px-4 py-8 hover:bg-blue-100/50 rounded-2xl group transition-all duration-300">
          <div className="text-purple-600  bg-purple-200/50 rounded-2xl w-12 h-12 flex items-center justify-center  group-hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
            </svg>
          </div>
          <h3 className="text-lg my-2 text-gray-800">Instant Results</h3>
          <p className="leading-5 text-gray-600">Get your extracted text immediately with no waiting. Fast processing means you can keep working.</p>
        </div>

        <div className="px-4 py-8 hover:bg-blue-100/50 rounded-2xl group transition-all duration-300">
          <div className="text-orange-600  bg-orange-200/50 rounded-2xl w-12 h-12 flex items-center justify-center  group-hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <h3 className="text-xl my-2 text-gray-800">Simple &amp; Private</h3>
          <p className="leading-5 text-gray-600">Your images are processed securely. Nothing is shared or stored unnecessarily.</p>
        </div>
      </div>
    </section>
  )
}


export default function HeroDropBox() {
  return (
    <div className="w-[700px] h-[300px] rounded-2xl flex flex-col items-center justify-center border-3 border-dashed border-blue-300 bg-blue-100/25 hover:shadow-xl transition group cursor-pointer">

      <div className="text-blue-600 font-extrabold bg-blue-100 rounded-2xl p-4 group-hover:bg-blue-200 transition ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
      </div>

      <div className="ml-4 flex flex-col items-center mt-2">
        <p className="text-lg">Drop your screenshot here</p>
        <p className=" text-gray-400 mt-1">Supported: PNG, JPG, JPEG • Max 5MB</p>
      </div>
    </div>
  )
}


import HeroAlert from "./hero-alert";

export default function HeroText() {
  return (
    <main className="flex items-center flex-col max-w-[800px] ">
      <div className="mt-20 flex justify-center items-center">
        <HeroAlert />
      </div>

      <div className="mt-6">
        <h1 className="text-5xl text-center text-gray-800">Turn Any Screenshot into Clean, Editable Text. Instantly.</h1>
      </div>

      <div className="mt-6">
        <p className="text-center text-xl text-gray-600 w-[600px]">Upload an image → SnapText extracts the text → Copy it with one click.
          Fast, accurate, and built to save you time.</p>
      </div>
    </main>
  )
}


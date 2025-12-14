import HeroAlert from "./hero-alert";

export default function HeroText() {
  return (
    <div className="flex items-center flex-col text-center px-4">

      <div className="mt-10 sm:mt-20">
        <HeroAlert />
      </div>

      <h1 className="mt-6 text-3xl sm:text-5xl  text-gray-800 leading-tight">Turn Any Screenshot into <br className="hidden sm:block" />Clean, Editable Text. Instantly.</h1>

      <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-[600px]">Upload an image → SnapText extracts the text → Copy it with one click.
        Fast, accurate, and built to save you time.</p>
    </div>
  )
}


export default function HeroAlert() {
  return (
    <div className="inline-flex items-center gap-2 bg-blue-200/50 text-blue-700 rounded-full px-3 py-2 sm:px-4 sm:py-2.5">
      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      <p className="text-xs sm:text-sm font-medium whitespace-nowrap text-blue-700 ">
        No signup required. Works in your browser.</p>
    </div>
  )
}

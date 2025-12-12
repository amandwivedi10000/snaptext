import HeroDropBox from "./hero-drop-box";
import HeroText from "./hero-text";

export default function Hero() {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-blue-100/40">
      <HeroText />
      <div className="mt-8 mb-30">
        <HeroDropBox />
      </div>
    </div>
  )
}


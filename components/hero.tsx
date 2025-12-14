"use client"

import HeroDropBox from "./hero-drop-box";
import HeroText from "./hero-text";
import IsLoadingTextBox from "./isloading-textbox";
import ExtractedResultCard from "./extracted-result-card";
import { useUpload } from "@/contexts/upload-context";

export default function Hero() {
  const { isLoading, dropBoxRef, resultRef, extractedText } = useUpload()
  return (
    <div className="w-full h-auto flex flex-col items-center bg-blue-100/40">
      <HeroText />
      <div className="mt-8 mb-30">
        <div ref={dropBoxRef}>
          <HeroDropBox />
        </div>

        <div ref={resultRef}>
          {isLoading && <IsLoadingTextBox />}
          {!isLoading && extractedText && <ExtractedResultCard />}
        </div>
      </div>
    </div>
  )
}


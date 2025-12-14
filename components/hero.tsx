"use client"

import HeroDropBox from "./hero-drop-box";
import HeroText from "./hero-text";
import IsLoadingTextBox from "./isloading-textbox";
import ExtractedResultCard from "./extracted-result-card";
import { useUpload } from "@/contexts/upload-context";

export default function Hero() {
  const { isLoading, dropBoxRef, resultRef, extractedText } = useUpload()

  return (
    <section className="w-full h-auto bg-blue-100/40 py-10 sm:py-16 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center">
          <HeroText />
        </div>

        <div className="mt-8">
          <div ref={dropBoxRef}>
            <HeroDropBox />
          </div>
        </div >

        <div className="mt-6" ref={resultRef}>
          {isLoading && <IsLoadingTextBox />}
          {!isLoading && extractedText && <ExtractedResultCard />}
        </div>

      </div>
    </section>
  )
}


"use client"

import { useRef, useState } from "react";
import Tesseract from "tesseract.js";
import HeroDropBox from "./hero-drop-box";
import HeroText from "./hero-text";
import IsLoadingTextBox from "./isloading-textbox";
import ExtractedResultCard from "./extracted-result-card";

export default function Hero() {
  const [extractedText, setExtractedText] = useState("")
  const [isloading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const dropBoxRef = useRef<HTMLDivElement | null>(null);

  const handleFileChange = async (file: File) => {
    try {
      if (!file) return
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setExtractedText("")
      setImagePreview(null)
      setIsLoading(true)
      setImagePreview(URL.createObjectURL(file))

      const { data: { text } } = await Tesseract.recognize(file, "eng")

      setExtractedText(text)
      setIsLoading(false)

    } catch (error) {
      console.error(error)
    }
  }
  const handleClear = () => {
    if (dropBoxRef.current) {
      dropBoxRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    setExtractedText("")
    setIsLoading(false)
    setImagePreview(null)
  }
  return (
    <div className="w-full h-auto flex flex-col items-center bg-blue-100/40">
      <HeroText />
      <div className="mt-8 mb-30">
        <div ref={dropBoxRef}>
          <HeroDropBox onSelectFile={handleFileChange} />
        </div>

        <div ref={resultRef}>
          {isloading && <IsLoadingTextBox />}
        </div>
        {!isloading && extractedText && imagePreview &&
          (
            <ExtractedResultCard
              imagePreview={imagePreview}
              extractedText={extractedText}
              handleClear={handleClear}
            />
          )
        }
      </div>
    </div>
  )
}


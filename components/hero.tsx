"use client"

import { useState } from "react";
import Tesseract from "tesseract.js";
import HeroDropBox from "./hero-drop-box";
import HeroText from "./hero-text";
import IsLoadingTextBox from "./isloading-textbox";
import ExtractedResultCard from "./extracted-result-card";

export default function Hero() {
  const [extractedText, setExtractedText] = useState("")
  const [isloading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = async (file: File) => {
    try {
      setIsLoading(true)
      const { data: { text } } = await Tesseract.recognize(file, "eng")

      setImagePreview(URL.createObjectURL(file))
      setExtractedText(text)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  const handleClear = () => {
    setExtractedText("")
    setIsLoading(false)
    setImagePreview(null)
  }
  return (
    <div className="w-full h-auto flex flex-col items-center bg-blue-100/40">
      <HeroText />
      <div className="mt-8 mb-30">
        <HeroDropBox onSelectFile={handleFileChange} />
        {isloading && <IsLoadingTextBox />}
        {extractedText && imagePreview &&
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


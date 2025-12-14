"use client"

import { createContext, useContext, useRef, useState } from "react"
import Tesseract from "tesseract.js"

type UploadContextProps = {
  extractedText: string
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  imagePreview: string | null
  handleFileChange: (file: File) => void
  handleClear: () => void
  scrollToDropBox: () => void
  resultRef: React.RefObject<HTMLDivElement | null>
  dropBoxRef: React.RefObject<HTMLDivElement | null>
}

const UploadContext = createContext<UploadContextProps | null>(null)

export function UploadProvider({ children }: { children: React.ReactNode }) {
  const [extractedText, setExtractedText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const resultRef = useRef<HTMLDivElement | null>(null);
  const dropBoxRef = useRef<HTMLDivElement | null>(null);

  const handleFileChange = async (file: File) => {
    try {
      if (!file) return

      setExtractedText("")
      setImagePreview(null)
      setIsLoading(true)
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setImagePreview(URL.createObjectURL(file))

      const { data: { text } } = await Tesseract.recognize(file, "eng")

      setExtractedText(text)
      setIsLoading(false)

    } catch (error) {
      console.error(error)
    }
  }

  const scrollToDropBox = () => {
    dropBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const handleClear = () => {
    scrollToDropBox()

    setExtractedText("")
    setIsLoading(false)
    setImagePreview(null)
  }
  return (
    <UploadContext.Provider value={{
      extractedText,
      isLoading,
      setIsLoading,
      imagePreview,
      handleFileChange,
      handleClear,
      scrollToDropBox,
      resultRef,
      dropBoxRef
    }}>
      {children}
    </UploadContext.Provider>
  )
}

export function useUpload() {
  const context = useContext(UploadContext)
  if (!context) {
    throw new Error("useUpload must be used within a UploadProvider")
  }
  return context
}

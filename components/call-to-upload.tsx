"use client"
import { useUpload } from "@/contexts/upload-context";
import { Button } from "./ui/button";

export default function CallToUpload() {

  const { scrollToDropBox } = useUpload()

  return (
    <section className="py-20 text-center bg-linear-to-br from-blue-600 to-indigo-600 text-white">
      <h1 className="text-3xl">Ready to extract your first screenshot?</h1>
      <p className="mt-2">SnapText takes seconds to use — and saves minutes every time.</p>

      <Button
        className="mt-8 bg-white text-blue-600 px-12 py-6 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer"
        onClick={scrollToDropBox}
      >
        Upload Now →
      </Button>
    </section>
  )
}


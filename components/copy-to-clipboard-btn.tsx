import toast from "react-hot-toast"

export default function CopyToClipboardBtn({ extractedText }: { extractedText: string }) {

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText)
    toast.success("Copied to clipboard")
  }

  return (
    <button
      className="px-4 py-2  bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer content-center"
      onClick={handleCopy}
    >
      Copy
    </button >
  )
}


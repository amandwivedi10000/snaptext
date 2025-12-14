import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";

type ExtractedResultCardProps = {
  imagePreview: string;
  extractedText: string;
  handleClear: () => void;
}

export default function ExtractedResultCard({ imagePreview, extractedText, handleClear }: ExtractedResultCardProps) {
  return (
    <Card className="w-[700px] h-auto bg-blue-100/50 backdrop-blur-sm shadow-sm p-6 rounded-xl border border-blue-200 mt-8">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-700 pl-1">
          Extracted Text
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <img src={imagePreview} alt="Preview" className="w-[300px] rounded-lg border border-blue-300 mb-4 shadow-sm overflow-hidden" />
        <Textarea readOnly value={extractedText} className="w-full h-[300px] p-4 border-2 rounded-xl border-blue-300 bg-blue-100/25" />
      </CardContent>

      <CardFooter className="flex ">
        <Button
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(extractedText)
            toast.success("Copied to clipboard")
          }}
        >
          Copy
        </Button>

        <Button
          className="px-4 py-2 ml-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          onClick={handleClear}
        >
          Clear
        </Button>
      </CardFooter>
    </Card>
  )
}

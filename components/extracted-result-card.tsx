import ClearTextBtn from "./clear-text-btn";
import CopyToClipboardBtn from "./copy-to-clipboard-btn";
import ExtractedTextDisplay from "./extracted-text-display";

type ExtractedResultCardProps = {
  imagePreview: string;
  extractedText: string;
  handleClear: () => void;
}

export default function ExtractedResultCard({ imagePreview, extractedText, handleClear }: ExtractedResultCardProps) {
  return (
    <div className="w-[700px] h-auto bg-blue-100/50 backdrop-blur-sm shadow-sm p-6 rounded-xl border border-blue-200 mt-6">
      <img src={imagePreview} alt="Preview" className="w-[300px] rounded-lg border border-blue-300 mb-4 shadow-sm overflow-hidden" />
      <p className="text-lg font-medium text-gray-600 pl-1">Extracted Text</p>
      <ExtractedTextDisplay extractedText={extractedText} />
      <CopyToClipboardBtn extractedText={extractedText} />
      <ClearTextBtn handleClear={handleClear} />
    </div>
  )
}


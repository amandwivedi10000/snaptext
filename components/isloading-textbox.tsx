import { Skeleton } from "./ui/skeleton";

export default function IsLoadingTextBox() {
  return (
    <div className="w-full max-w-[700px] mt-6 px-4 sm:px-0">
      <Skeleton className="h-[200px] sm:h-[250px] w-full rounded-xl bg-blue-200" />
    </div>
  )
}


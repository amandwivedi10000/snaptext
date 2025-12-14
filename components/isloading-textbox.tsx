import { Skeleton } from "./ui/skeleton";

export default function IsLoadingTextBox() {
  return (
    <div className="w-[700px] mt-6">
      <Skeleton className="h-[250px] w-full rounded-xl bg-blue-200" />
    </div>
  )
}


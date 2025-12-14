import Link from "next/link";

export default function Logo() {
  return (
    <div className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      <Link href={"/"}>
        SnapText
      </Link>
    </div>
  )
}


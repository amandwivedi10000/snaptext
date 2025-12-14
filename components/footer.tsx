import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-50 text-center border-t border-gray-200">
      <div className="mb-4">
        <Logo />
      </div>

      <p className="text-gray-600 text-sm max-w-md mx-auto leading-6 ">A simple OCR tool built for everyday speed and clarity. Made by a developer who was tired of retyping screenshots.</p>

      <p
        className="text-gray-600 text-sm mt-4">
        &copy; Made by Aman Dwivedi. All rights reserved.
      </p>

      <Link
        href={"https://github.com/amandwivedi10000/snaptext"}
        target="_blank"
        className="text-gray-600 font-medium mt-3 inline-block hover:text-blue-600 transition">
        Github
      </Link>
    </footer>
  )
}


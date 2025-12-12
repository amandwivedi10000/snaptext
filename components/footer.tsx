import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col items-center">
      <Logo />
      <p className="text-gray-600 text-sm my-2 ">A simple OCR tool built for everyday speed and clarity. Made by a developer who was tired of retyping screenshots.</p>
      <p className="text-gray-600 text-lg mt-2">&copy; Made by Aman Dwivedi</p>
      <Link
        href={"https://github.com/amandwivedi10000/snaptext"}
        target="_blank"
        className="text-gray-600 text-lg">Github</Link>
    </footer>
  )
}


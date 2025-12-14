import Logo from "./logo";

export default function Header() {
  return (
    <nav className="border-b border-blue-200 flex items-center justify-start w-full px-4  sm:px-70 h-16 ">
      <Logo />
    </nav>
  )
}


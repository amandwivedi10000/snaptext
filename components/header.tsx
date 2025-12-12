import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="border-b border-blue-200 flex items-center justify-between w-full h-16 ">
      <div className="ml-10 ">
        <Logo />
      </div>
    </nav>
  )
}


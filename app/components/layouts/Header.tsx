'use client'
import Image from "next/image";
import Link from "next/link";
import { tv } from "tailwind-variants"

export const Header: React.FC = () => {
  const { base, title, logo, links } = header();

  return (
    <header className={base()}>
      <Link href="/" className={title()}><Image src="/logo.svg" alt="Studio173" width={160} height={48} className={logo()} /></Link>
      <nav className={links()}>
        <Link href="/#about" className="font-bold font-en px-2 text-lg sm:text-xl">About</Link>
        <Link href="/blog" className="font-bold font-en px-2 text-lg sm:text-xl">Blog</Link>
      </nav>
    </header>
  )
}

const header = tv(
  {
    slots: {
      base: "fixed flex items-center justify-between w-full p-4 bg-white z-10",
      title: "w-28 sm:w-40",
      logo: "w-full h-auto",
      links: "flex items-center gap-4 sm:pr-10",
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)
'use client'


import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import tailyLogo from "../../public/taily_logo_s.svg"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              src={tailyLogo}
              alt="taily logo"
              width={89}
              height={25}
            />
            <span className="sr-only">taily</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {['機能', '解決する課題', '導入効果', 'ご相談事例', '料金', 'よくあるご質問', 'お問い合わせ'].map((item, index) => {
              const href = ['/#features', '/#challenges', '/#effects', '/#case-studies', '/#pricing', '/#faq', '/contact'][index];
              return (
                <Link
                  key={index}
                  className="text-sm font-semibold text-gray-700 px-3 py-2 rounded-md transition duration-300 ease-in-out hover:text-gray-600"
                  href={href}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

'use client'


import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          <p className="text-xs text-gray-500">© 2024 株式会社Panda Lab All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-xs text-gray-700 transition-colors duration-200 hover:text-gray-400 flex items-center"
              href="https://pandalab.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              運営会社
              <ExternalLink className="ml-1 w-3 h-3" />
            </Link>
            <Link
              className="text-xs text-gray-700 transition-colors duration-200 hover:text-gray-400"
              href="/tokushoho"
            >
              特定商取引法に基づく表記
            </Link>
            <Link
              className="text-xs text-gray-700 transition-colors duration-200 hover:text-gray-400"
              href="/privacy-policy"
            >
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
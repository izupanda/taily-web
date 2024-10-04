import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Tokushoho() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">特定商取引法に基づく表記</h1>
          <div className="space-y-4">
            {/* ここに特定商取引法に基づく表記の内容を記述 */}
            <p>販売業者: </p>
            <p>運営責任者: </p>
            <p>所在地: </p>
            {/* ... 他の必要な情報 ... */}
          </div>
          <Link href="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">
            トップページに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
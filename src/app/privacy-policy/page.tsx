'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
          <div className="space-y-4">
            {/* ここにプライバシーポリシーの内容を記述 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">1. 個人情報の収集について</h2>
            <p>...</p>
            <h2 className="text-2xl font-semibold mt-6 mb-3">2. 個人情報の利用目的</h2>
            <p>...</p>
            {/* ... 他のセクション ... */}
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
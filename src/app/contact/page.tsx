'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {  // URLは変更なし
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('お問い合わせを受け付けました')
        setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('送信に失敗ました')
      }
    } catch (error) {
      console.error('エラー:', error)
      alert('エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 mt-16 text-center">お問い合わせ</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                お名前
                <span className="ml-2 text-[10px] font-semibold text-white bg-[#E94C32] rounded-full px-2 py-1">必須</span>
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="パンダ太郎"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                会社名
                <span className="ml-2 text-[10px] font-semibold text-white bg-gray-400 rounded-full px-2 py-1">任意</span>
              </label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="株式会社パンダ"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                メールアドレス
                <span className="ml-2 text-[10px] font-semibold text-white bg-[#E94C32] rounded-full px-2 py-1">必須</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="support@pandalab.jp"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                電話番号
                <span className="ml-2 text-[10px] font-semibold text-white bg-gray-400 rounded-full px-2 py-1">任意</span>
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="070-0000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                お問い合わせ内容
                <span className="ml-2 text-[10px] font-semibold text-white bg-[#E94C32] rounded-full px-2 py-1">必須</span>
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button type="submit" className="w-full">送信</Button>
          </form>
          <div className="text-center mt-12">
            <Link href="/" className="inline-flex items-center px-4 py-2 text-black hover:bg-gray-100 rounded-full transition duration-300">
              <ArrowLeft className="mr-2" size={20} />
              トップページに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
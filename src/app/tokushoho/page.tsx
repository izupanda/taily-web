'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export default function Tokushoho() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 mt-12 text-center">特定商取引法に基づく表示</h1>
          <div className="space-y-6 mb-12">
            <section>
              <h2 className="text-xl font-semibold mb-2">事業者の名称</h2>
              <p className="text-sm leading-relaxed">株式会社Panda Lab</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">事業責任者の氏名</h2>
              <p>山本泉</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">住所</h2>
              <p>東京都港区芝大門1-6-6</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">電話番号</h2>
              <p>0368201142</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">メールアドレス</h2>
              <p className="text-sm leading-relaxed">
                <a href="mailto:taily@pandalab.jp" className="text-black underline hover:text-gray-600">taily@pandalab.jp</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">商品の販売価格・サービスの対価</h2>
              <p>各商品・サービスのご購入ページにて表示する価格</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">対価以外に必要となる費用</h2>
              <p>各商品・サービスのご購入ページに記載</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">支払方法と支払時期</h2>
              <p>サービスご利用開始時にクレジットカードあるいは請求書にて支払い</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">商品の引渡しまたはサービス提供の時期</h2>
              <p>最短即日にて提供</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">返品・キャンセルに関する特約</h2>
              <p>購入手続完了後の返品またはキャンセルはお受けいたしません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">動作環境</h2>
              <p>商品のご利用又はサービスの享受に必要となるデバイスの動作環境及び必要スペックはご購入ページに表示します。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">その他</h2>
              <p>その他特別な販売条件または提供条件がある商品またはサービスについては、それぞれの購入ページにおいて条件を表示します。</p>
            </section>

            <p className="mt-6 text-sm text-gray-600">2024年10月04日 制定</p>
          </div>
          <div className="text-center">
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
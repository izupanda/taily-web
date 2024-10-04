'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Tokushoho() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">特定商取引法に基づく表示</h1>
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">事業者の名称</h2>
              <p>株式会社Panda Lab</p>
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
              <p><a href="mailto:taily@pandalab.jp" className="text-blue-600 hover:underline">taily@pandalab.jp</a></p>
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
          <Link href="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">
            トップページに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
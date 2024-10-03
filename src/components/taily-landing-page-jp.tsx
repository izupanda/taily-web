'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"

import tailyLogo from "../../public/taily_logo_s.svg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, TrendingUp, DollarSign, CheckCircle, PieChart, LineChart, Zap, Clock, Database, Target, Briefcase, Rocket, Lightbulb, Users, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Noto_Sans_JP } from 'next/font/google'

import { motion } from "framer-motion"

// フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function TailyLandingPageJp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }

    
  }

  return (
    <div className={`flex flex-col w-full min-h-screen bg-gray-50 text-gray-900 font-sans ${notoSansJP.className}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link className="flex items-center space-x-2" href="#">
              <Image
                src={tailyLogo}
                alt="taily logo"
                width={89}
                height={25}
              />
              <span className="sr-only">taily</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              {['機能', '解決する課題', '導入効果', 'ご相談事例', '料金', 'よくあるご質問', 'お問い合わせ'].map((item, index) => (
                <Link
                  key={index}
                  className="text-sm font-semibold text-gray-700 px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900 relative group"
                  href={`#${['features', 'challenges', 'effects', 'case-studies', 'pricing', 'faq', 'contact'][index]}`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="p-4">
                <Button
                  variant="ghost"
                  className="ml-auto"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 px-4 space-y-2">
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#features" onClick={() => setIsMenuOpen(false)}>
                  機能
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#challenges" onClick={() => setIsMenuOpen(false)}>
                  解決する課題
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#effects" onClick={() => setIsMenuOpen(false)}>
                  導入効果
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#case-studies" onClick={() => setIsMenuOpen(false)}>
                  ご相談事例
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  料金
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#faq" onClick={() => setIsMenuOpen(false)}>
                  よくあるご質問
                </Link>
                <Link className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href="#contact" onClick={() => setIsMenuOpen(false)}>
                  お問い合わせ
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
      <main className="flex-1 w-full">
        <motion.section
          className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-white" // パディングを少し減らしました
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center"> 
              <motion.div className="space-y-4" variants={fadeInUp} transition={{ duration: 0.6 }}> 
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none leading-tight"> // leading-tight を追加
                  利益を最大化する
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-semibold">
                  中小ECのための経営羅針盤
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
                  tailyは、年商数千万円から15億円のEC事業者様向けに開発された<br /> 
                  SKU別利益分析ツールです。データに基づいた意思決定で<br />
                  あなたのビジネスの成長と利益最大化をサポートします。
                </p>
                <p className="text-sm text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full inline-block mt-4">
  2024年12月、EC業界に革命を起こす - 今すぐ先行予約でVIP特典をゲット！
</p>
              </motion.div>
              <motion.div className="space-x-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                <Button>詳細を見る</Button>
                <Button variant="outline">お問い合わせ</Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ transition: '0.8s ease-out' }} // ここに変更
            >

              <div className="relative w-full max-w-4xl mx-auto">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="taily dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="challenges"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">tailyが解決する課題</h2>
            <motion.div
              className="flex justify-center mb-12"
              variants={fadeInUp}
            >
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Clock, title: "データ分析に時間がかかる", content: "膨大なデータをExcelで管理し、複数店舗からのデータ抽出や集計作業に多大な時間を費やしています。繰り返し作業による人的ミスも発生しやすく、効率的な分析が困難です。" },
                { icon: Database, title: "SKU別の利益が不明確", content: "現在のシステムでは売上や粗利は把握できても、SKU別の最終的な利益（着地利益）を正確に追跡するこができず、真の収益性が見えていません。" },
                { icon: Target, title: "価格戦略の最適化が困難", content: "競合との価格競争に巻き込まれ、各SKUの利益率を考慮した適切な価格設定ができていません。結果として、全体の利益率が低下し、持続可能な成長が阻害されています。" },
                { icon: Briefcase, title: "在庫管理の非効率", content: "SKU別の在庫回転率と利益の関連性が見えづらく、過剰在庫による資金の固定化や、欠品によるビジネス機会の損失が頻繁に発生しています。" },
                { icon: BarChart3, title: "マーケティング効果の測定が不十分", content: "広告やプロモーションの効果を、売上だけでなく利益の観点から正確に評価できていません。これにより、効果的なマーケティング戦略の立案や予算配分の最適化が困難です。" },
                { icon: TrendingUp, title: "経営判断のスピード不足", content: "リアルタイムのデータ分析が困難なため、市場の変化や顧客ニーズの変化に迅速に対応できず、ビジネスチャンスを逃しています。" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex" transition={{ duration: 0.6 }}>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <item.icon className="w-5 h-5 mr-2 text-primary" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">tailyの主な機能</h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: BarChart3, title: "SKU別利益分析", content: "各SKUの最終利益を詳細に分析し、収益性の高い商品を特定。利益最大化の基盤を構築します。" },
                { icon: TrendingUp, title: "経営指標の一元管理", content: "重要な財務・業績指標を自動収集し、経営視点での一元管理を実現。意思決定の質とスピードを向上させます。" },
                { icon: DollarSign, title: "利益最適化提案", content: "データ分析に基づいて、利益を最大化するための具体的な改善策を提案。成長戦略の立案をサポートします。" },
                { icon: PieChart, title: "在庫最適化", content: "SKU別の在庫回転率と利益を連動して分析し、最適な在庫水準を提案。過剰在庫と欠品リスクを最小化します。" },
                { icon: LineChart, title: "価格最適化", content: "SKU別の価格弾力性を分析し、利益を最大化する最適な価格設定を提案。競争力を維持しながら収益を向上させます。" },
                { icon: Zap, title: "リアルタイムアラート", content: "重要な指標が設定したしきい値を超えた場合、即時にアラートを通知。迅速な対応で機会損失を防ぎます。" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex" transition={{ duration: 0.6 }}>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <item.icon className="w-5 h-5 mr-2 text-primary" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-center mt-8 text-muted-foreground" transition={{ duration: 0.6 }}>
            ※ 煩わしいAPI連携は必要ありません。tailyが自動的にデータを収集し、分析します。
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          id="effects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">tailyを導入することによる効果</h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Rocket,
                  title: "利益率の向上",
                  content: "SKU別の利益分析により、高収益商品に注力し、低収益商品を改善または廃止することで、全体の利益率が向上します。平均して20%以上の利益率改善を実現しています。",
                  details: [
                    "高収益SKUの特定と在庫最適化",
                    "低収益SKUの改善または廃止",
                    "価格戦略の最適化による利益率向上"
                  ]
                },
                {
                  icon: Lightbulb,
                  title: "意思決定の迅速化",
                  content: "リアルタイムデータと自動レポート生成により、市場変化への対応が迅速化。ビジネスチャンスを逃さず、競争力が向上します。平均して意思決定時間が50%短縮されています。",
                  details: [
                    "リアルタイムデータ分析によるトレンド把握",
                    "自動レポート生成による情報共有の効率化",
                    "データに基づく迅速な意思決定プロセス"
                  ]
                },
                {
                  icon: Users,
                  title: "業務効率の改善",
                  content: "データ収集・分析の自動化により、従業員の作業時間が大幅に削減。戦略的タスクに注力できるようになります。平均して分析業務の時間が70%削減されています。",
                  details: [
                    "データ収集・集作業の自動化",
                    "レポート作成時間の大幅削減",
                    "戦略立案や顧客対応への時間シフト"
                  ]
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex" transition={{ duration: 0.6 }}>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <item.icon className="w-5 h-5 mr-2 text-primary" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.content}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="case-studies"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">ご相談事例</h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "食品EC / 売上高3億円",
                  tagline: "SKU最適化で利益率15%アップ",
                  content: "SKU数が1000を超え、どの商品が本当に利益に貢献しているのか把握できませんでした。tailyを導入後、SKU別の利益が明確になり、上位20%の商品に注力することで、全体の利益率が15%向上しました。",
                  image: "/placeholder.svg?height=100&width=100"
                },
                {
                  title: "アパレルEC / 売上高8億円",
                  tagline: "季節商品の在庫30%削減",
                  content: "季商品の在庫管理に苦心していましたが、tailyの在庫最適化機能により、過剰在庫を30%削減。キャッシュフローが改善し、新商品開発に投資できるようになりました。",
                  image: "/placeholder.svg?height=100&width=100"
                },
                {
                  title: "生活雑貨EC / 売上高5億円",
                  tagline: "適正価格設定で売上20%増",
                  content: "競合との価格競争で利益率が低下していましたが、tailyの価格最適化機能を活用し、SKU別の適正価格を設定。結果、利益率を維持しながら売上を20%増加させることができました。",
                  image: "/placeholder.svg?height=100&width=100"
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex" transition={{ duration: 0.6 }}>
                  <Card className="w-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image}
                          alt="Consultant"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.tagline}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">料金プラン</h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "スタータープラン",
                  price: "¥20,000/月",
                  features: [
                    "SKU別利益分析",
                    "基本的な経営指標の一元管理",
                    "月次レポート",
                    "1ユーザーまで",
                    "連携店舗数：最大2店舗",
                    "追加ユーザー：3,980円/月/ユーザー",
                    "チャットサポート付き"
                  ]
                },
                {
                  title: "プロフェッショナルプラン",
                  price: "¥50,000/月",
                  features: [
                    "スタータープランの全機能",
                    "高度な利益最適化提案",
                    "在庫最適化",
                    "価格最適化",
                    "週次レポート",
                    "3ユーザーまで",
                    "連携店舗数：最大5店舗",
                    "追加ユーザー：3,980円/月/ユーザー",
                    "チャットサポート付き"
                  ]
                },
                {
                  title: "エンタープライズプラン",
                  price: "お問い合わせ",
                  features: [
                    "プロフェッショナルプランの全機能",
                    "カスタマイズ可能なダッシュボード",
                    "10ユーザーまで",
                    "連携店舗数：無制限",
                    "追加ユーザー：3,980円/月/ユーザー",
                    "専任サポート",
                    "チャットサポート付き"
                  ]
                }
              ].map((plan, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex" transition={{ duration: 0.6 }}>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>{plan.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{plan.price}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">よくあるご質問</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "tailyの導入にはどのくらいの時間がかかりますか？", answer: "通常、tailyの導入には2〜4週間程度かります。これには、データの初期設定、システム統合、ユーザートレーニングが含まれます。ただし、お客様の環境やニーズによって期間は変動する場合があります。" },
                { question: "既存のECプラットフォームと連携できますか？", answer: "はい、tailyは主要なECプラットフォーム（Shopify、楽天市場、Amazon等）と連携可能です。データを自動的に取り込み、分析を行います。連携可能な店舗数は、ご契約のプランによって異なります。" },
                { question: "データのセキュリティは大丈夫です？", answer: "tailyは最高水準のセキュリティ対策を実施しています。すべてのデータは暗号化され、定期的なセキュリティ監査を行っています。また、ISO 27001認証を取得しており、お客様のデータを安全に管理しています。" },
                { question: "カスタマーサポートはどのように提供されますか？", answer: "すべてのプランにチャットによるカスタマーサポートが含まれています。エンタープライズプランでは、さらに専任のサポート担当者がつきます。サポート時間は平日9:00〜18:00となっています。" },
                { question: "契約期間の縛りはありますか？", answer: "基本的に月額契約となっており、最低契約期間は3ヶ月です。長期契約（1年以上）の場合、割引が適用されます。詳細はお問い合わせください。" }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4 md:px-6">

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  tailyについてのご質問や導入のご相談は、お気軽にお問い合わせください。<br />
                  専門のメンバーが丁寧にご相談に乗らせていただきます。
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  お問い合わせはこちら
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="w-full border-t bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <p className="text-xs text-gray-500">© 2024 株式会社Panda Lab All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4" href="https://pandalab.jp/" target="_blank" rel="noopener noreferrer">
                運営会社
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                特定商取引法に基づく表記
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                プライバシーポリシー
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
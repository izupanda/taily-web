import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, TrendingUp, DollarSign, CheckCircle, PieChart, LineChart, Zap, Layers, Bell, Clock, Database, Target, Briefcase, Rocket, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TailyLandingPageJP() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-noto-sans">
      <header className="px-4 lg:px-6 h-16 sm:h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taily_logo_s-nencGYtpGHATGPVXC24IzAwWyZ1n8X.svg"
            alt="taily logo"
            width={89}
            height={25}
          />
          <span className="sr-only">taily</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#features">
            機能
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#challenges">
            解決する課題
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#effects">
            導入効果
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#case-studies">
            ご相談事例
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#pricing">
            料金
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#faq">
            よくあるご質問
          </Link>
          <Link className="text-sm font-medium hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#contact">
            お問い合わせ
          </Link>
        </nav>
        {/* ここにモバイルメニューのトグルボタンを追加 */}
      </header>
      <main className="flex-1">
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div className="space-y-2" variants={fadeInUp}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none xl:text-7xl/none leading-tight">
                  利益を最大化する
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 leading-relaxed">
                  中小ECのための経営羅針盤
                </p>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-500 mt-4">
                  tailyは、年商数千万円から15億円のEC事業者様向けに開発された、
                  SKU別利益分析ツールです。データに基づいた意思決定で、
                  あなたのビジネスの成長と利益最大化をサポートします。
                </p>
                <p className="text-xs sm:text-sm text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full inline-block mt-4">
                  2024年12月、EC業界に革命を起こす - 今すぐ先行予約でVIP特典をゲット！
                </p>
              </motion.div>
              <motion.div className="space-x-4 mt-8" variants={fadeInUp}>
                <Button className="bg-black text-white hover:bg-gray-800">詳細を見る</Button>
                <Button variant="outline" className="text-black border-black hover:bg-gray-100">お問い合わせ</Button>
              </motion.div>
            </div>
            <motion.div 
              className="mt-12 flex justify-center relative"
              variants={{
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.8, ease: "easeOut" }
              }}
            >
              <div className="relative w-full max-w-4xl">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="PC screen frame"
                  className="rounded-t-lg shadow-lg"
                />
                <div className="absolute top-[5%] left-[2%] right-[2%] bottom-0 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="taily dashboard illustration"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="challenges" 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">tailyが解決する課題</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Clock, title: "データ分析に時間がかかる", content: "膨大なデータをExcelで管理し、複数店舗からのデータ抽出や集計作業に多大な時間を費やしています。繰り返し作業による人的ミスも発生しやすく、効率的な分析が困難です。" },
                { icon: Database, title: "SKU別の利益が不明確", content: "現在のシステムでは売上や粗利は把握できても、SKU別の最終的な利益（着地利益）を正確に追跡することができず、真の収益性が見えていません。" },
                { icon: Target, title: "価格戦略の最適化が困難", content: "競合との価格競争に巻き込まれ、各SKUの利益率を考慮した適切な価格設定ができていません。結果として、全体の利益率が低下し、持続可能な成長が阻害されています。" },
                { icon: Briefcase, title: "在庫管理の非効率", content: "SKU別の在庫回転率と利益の関連性が見えづらく、過剰在庫による資金の固定化や、欠品によるビジネス機会の損失が頻繁に発生しています。" },
                { icon: BarChart3, title: "マーケティング効果の測定が不十分", content: "広告やプロモーションの効果を、売上だけでなく利益の観点から正確に評価できていません。これにより、効果的なマーケティング戦略の立案や予算配分の最適化が困難です。" },
                { icon: TrendingUp, title: "経営判断のスピード不足", content: "リアルタイムのデータ分析が困難なため、市場の変化や顧客ニーズの変化に迅速に対応できず、ビジネスチャンスを逃しています。" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center text-base sm:text-lg">
                        <item.icon className="w-5 h-5 mr-2 text-red-500" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-sm sm:text-base">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="features" 
          className="w-full py-12 md:py-24 lg:py-32 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">tailyの主な機能</h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: BarChart3, title: "SKU別利益分析", content: "各SKUの最終利益を詳細に分析し、収益性の高い商品を特定。利益最大化の基盤を構築します。" },
                { icon: TrendingUp, title: "経営指標の一元管理", content: "重要な財務・業績指標を自動収集し、経営視点での一元管理を実現。意思決定の質とスピードを向上させます。" },
                { icon: DollarSign, title: "利益最適化提案", content: "データ分析に基づいて、利益を最大化するための具体的な改善策を提案。成長戦略の立案をサポートします。" },
                { icon: PieChart, title: "在庫最適化", content: "SKU別の在庫回転率と利益を連動して分析し、最適な在庫水準を提案。過剰在庫と欠品リスクを最小化します。" },
                { icon: LineChart, title: "価格最適化", content: "SKU別の価格弾力性を分析し、利益を最大化する最適な価格設定を提案。競争力を維持しながら収益を向上させます。" },
                { icon: Zap, title: "リアルタイムアラート", content: "重要な指標が設定したしきい値を超えた場合、即時にアラートを通知。迅速な対応で機会損失を防ぎます。" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <item.icon className="w-8 h-8" />
                      <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-sm sm:text-base">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-center mt-8 text-gray-600 text-sm sm:text-base">
              煩わしいAPI連携は必要ありません。tailyが自動的にデータを収集し、分析します。
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section 
          id="effects" 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">tailyを導入することによる効果</h2>
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
                    "データ収集・集計作業の自動化",
                    "レポート作成時間の大幅削減",
                    "戦略立案や顧客対応への時間シフト"
                  ]
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center text-base sm:text-lg">
                        <item.icon className="w-5 h-5 mr-2 text-green-500" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 text-sm sm:text-base">{item.content}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="case-studies" 
          className="w-full py-12 md:py-24 lg:py-32 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">ご相談事例</h2>
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
                  content: "季節商品の在庫管理に苦心していましたが、tailyの在庫最適化機能により、過剰在庫を30%削減。キャッシュフローが改善し、新商品開発に投資できるようになりました。",
                  image: "/placeholder.svg?height=100&width=100"
                },
                {
                  title: "生活雑貨EC / 売上高5億円",
                  tagline: "適正価格設定で売上20%増",
                  content: "競合との価格競争で利益率が低下していましたが、tailyの価格最適化機能を活用し、SKU別の適正価格を設定。結果、利益率を維持しながら売上を20%増加させることができました。",
                  image: "/placeholder.svg?height=100&width=100"
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Card className="h-full flex flex-col">
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
                          <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.tagline}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow text-sm sm:text-base">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="pricing" 
          className="w-full py-12 md:py-24 lg:py-32 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">料金プラン</h2>
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
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg">{plan.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-2xl sm:text-3xl font-bold">{plan.price}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs sm:text-sm">
                            <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="faq" 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12">よくあるご質問</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: "tailyの導入にはどのくらいの時間がかかりますか？", answer: "通常、tailyの導入には2〜4週間程度かかります。これには、データの初期設定、システム統合、ユーザートレーニングが含まれます。ただし、お客様の環境やニーズによって期間は変動する場合があります。" },
                { question: "既存のECプラットフォームと連携できますか？", answer: "はい、tailyは主要なECプラットフォーム（Shopify、楽天市場、Amazon等）と連携可能です。データを自動的に取り込み、分析を行います。連携可能な店舗数は、ご契約のプランによって異なります。" },
                { question: "データのセキュリティは大丈夫ですか？", answer: "tailyは最高水準のセキュリティ対策を実施しています。すべてのデータは暗号化され、定期的なセキュリティ監査を行っています。また、ISO 27001認証を取得しており、お客様のデータを安全に管理しています。" },
                { question: "カスタマーサポートはどのように提供されますか？", answer: "すべてのプランにチャットによるカスタマーサポートが含まれています。エンタープライズプランでは、さらに専任のサポート担当者がつきます。サポート時間は平日9:00〜18:00となっています。" },
                { question: "契約期間の縛りはありますか？", answer: "基本的に月額契約となっており、最低契約期間は3ヶ月です。長期契約（1年以上）の場合、割引が適用されます。詳細はお問い合わせください。" }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200 px-4 py-2 rounded-md">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="container px-4 md:px-6" variants={fadeInUp}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl">お問い合わせ</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                  tailyについてのご質問や導入のご相談は、お気軽にお問い合わせください。<br />
                  専門のメンバーが丁寧にご相談に乗らせていただきます。
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-black text-white hover:bg-gray-800 text-base sm:text-lg py-4 sm:py-6 rounded-full">
                  お問い合わせはこちら
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 株式会社Panda Lab All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="https://pandalab.jp/" target="_blank" rel="noopener noreferrer">
            運営会社
          </Link>
          <Link className="text-xs hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#">
            特定商取引法に基づく表記
          </Link>
          <Link className="text-xs hover:bg-gray-100 hover:rounded-md px-2 py-1 transition-all duration-200" href="#">
            プライバシーポリシー
          </Link>
        </nav>
      </footer>
    </div>
  )
}
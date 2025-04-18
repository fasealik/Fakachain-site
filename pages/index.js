import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Fakachain</title>
        <meta name="description" content="Fakachain - Blockchain Education & Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">Fakachain</h1>
        <p className="mt-6 text-lg max-w-xl">
          محتوای آموزشی، پادکست و دوره‌های تخصصی بلاکچین با چاشنی سایبرپانک!
        </p>
        <a
          href="#"
          className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform"
        >
          شروع یادگیری
        </a>
      </main>

      <footer className="border-t border-gray-800 py-6 text-sm text-gray-400 text-center">
        © 2025 Fakachain. All rights reserved.
      </footer>
    </div>
  )
}

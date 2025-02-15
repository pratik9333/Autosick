import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// views
import HomeIndex from '@/components/views/home/homeIndex'


export default function Home() {
  return (
    <>
      <Head>
        <title>AutoSick</title>
        <meta name="description" content="Connecting car owners to several channels of help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}

        {/* Twitter Card */}

      </Head>
      <main className="h-auto w-screen">
        <HomeIndex />
      </main>
    </>
  )
}

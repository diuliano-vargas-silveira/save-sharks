import { Suspense } from 'react'
import { Ubuntu, Roboto } from 'next/font/google'

import Header from '@/components/commons/header'
import Loading from './loading'

import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
const ubuntu = Ubuntu({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export const metadata = {
  title: 'Save Sharks',
  description:
    'An app who wants to sensibilize peoples about sharks situation in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${ubuntu.className}`}>
        <section className="h-[100vh] w-full">
          <Header />
          <main>{children}</main>
        </section>
      </body>
    </html>
  )
}

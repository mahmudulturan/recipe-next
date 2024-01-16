import { Potta_One } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const potta = Potta_One({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Recipe App',
  description: 'This is Recipe management website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={potta.className}>
        {children}
      </body>
    </html>
  )
}

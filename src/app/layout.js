import { Potta_One } from 'next/font/google'
import './globals.css'

const potta = Potta_One({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Recipe App',
  description: 'This is Recipe management website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={potta.className}>{children}</body>
    </html>
  )
}

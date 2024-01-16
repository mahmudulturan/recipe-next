import { Potta_One } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "@/components/Button";
import Container from "@/components/Container";

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

        {/* footer section start */}
        <footer style={{
          backgroundImage: "url(https://i.ibb.co/gM86sfz/FooterBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <Container className="min-h-[30vh] flex flex-col items-center justify-center">
            <h3 className="text-3xl my-4">Recipe Rover</h3>
            <div className="flex justify-center items-center gap-6">
              <a href="https://www.facebook.com/" target="_blank" className="text-3xl"><FaFacebook></FaFacebook></a>
              <a href="https://www.instagram.com/" target="_blank" className="text-3xl"><FaInstagram></FaInstagram></a>
              <a href="https://www.youtube.com/" target="_blank" className="text-3xl"><FaYoutube></FaYoutube></a>
            </div>
            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-3 my-6">
              <input
                type="text"
                placeholder="Subscribe for updates"
                className="px-2 md:px-4 py-3 md:py-4 rounded bg-white w-full outline-none 
                border-b-2 border-white focus:border-black focus:rounded-none transition-all"></input>
              <Button className="px-2 md:px-4 py-3 md:py-4">Subscribe</Button>
            </div>
            <p className='text-sm text-center'>© 2024 Recipe Rover. All rights reserved.</p>
          </Container>
        </footer>
        {/* footer section end */}
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './Navigation'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackathon4Kids',
  description: 'Take a STEM bootcamp for free with Hackathon4Kids!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
        <div>
          <Navigation />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

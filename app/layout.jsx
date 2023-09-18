import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Procad Construction',
  description: 'Procad Construction - Your trusted partner for residential and commercial construction projects. Exceptional results, on time and within budget. Contact us today.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body className={roboto.className}>{children}</body>
      <Footer />
    </html>
  )
}

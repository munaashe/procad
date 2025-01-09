import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Home | Procad Construction',
  description: 'Procad Construction - Your trusted partner for residential and commercial construction projects. Exceptional results, on time and within budget. Contact us today.',
  keywords: ['Procad', 'Construction', 'Building', 'Zimbabwe', 'Renovations', 'Civil Works', 'Concrete Works', 'Civil Engineering', 'Structural Engineering', 'Brickworks', 'Contractors']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>{children}</body>
      {/*<Footer />
      <NavBar />*/}
    </html>
  )
}

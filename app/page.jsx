import Banner from './components/mainPage/Banner'
import Contact from './components/mainPage/Contact'
import Welcome from './components/mainPage/Welcome'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Welcome />
      <Contact />
    </main>
  )
}

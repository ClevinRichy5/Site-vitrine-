import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Location from "@/components/location"
import Contact from "@/components/contact"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Location />
      <Contact />
      <Newsletter />
      <Footer />
      <Chatbot />
    </main>
  )
}

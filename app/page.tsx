import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Contact from "@/components/Contact"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import ContactInfo from "@/components/ContactInfo"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <ContactInfo />
      <Contact/>
      <Newsletter />
      <Footer />
      <Chatbot />
    </main>
  )
}

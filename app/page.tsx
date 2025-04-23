import Navbar from "@/components/navbar"
import Propos from "@/components/about"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import ContactInfo from "@/components/ContactInfo"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Propos />
      <ContactInfo />
      <Contact/>
      <Newsletter />
      <Footer />
      <Chatbot />
    </main>
  )
}

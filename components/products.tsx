"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      id: "1",
      name: "Lait Entier",
      description: "Notre lait entier classique, riche en saveur et en nutriments. Parfait pour toute la famille.",
      image: "/produit1.jpg?height=500&width=500",
    },
    {
      id: "2",
      name: "Lait Demi-Écrémé",
      description:
        "Toute la bonté avec moins de matières grasses. Idéal pour ceux qui surveillent leur apport calorique.",
      image: "/produit2.jpg?height=500&width=500",
    },
    {
      id: "3",
      name: "Yaourt Bio",
      description:
        "Yaourt crémeux et délicieux fabriqué à partir de notre lait bio premium. Une option saine pour une collation.",
      image: "/produit3.jpg?height=500&width=500",
    },
    {
      id: "4",
      name: "Fromage Frais",
      description:
        "Fromage artisanal élaboré selon des méthodes traditionnelles pour une saveur authentique et raffinée.",
      image: "/produit1.jpg?height=500&width=500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="products" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Nos <span className="text-green-600">Produits Laitiers</span> Premium
          </h2>
          <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
          <p className="mt-6 text-gray-600 text-lg">
            Découvrez notre gamme de produits laitiers de haute qualité, élaborés avec soin et passion pour votre santé
            et votre plaisir.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-white/50 ${
                activeProduct === index ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setActiveProduct(index)}
            >
              <div className="relative h-64 bg-green-50/50">
                <Image
                  src={product.image || "/produit1.jpg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={`/produits/${product.id}`}
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Voir Détails <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/produits"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 font-medium"
          >
            Voir Tous Nos Produits <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

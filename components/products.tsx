"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
})

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      id: "1",
      name: "BreakSoy",
      description: "BreakSay est notre boisson lactée chocolatée phare...",
      image:
        "/produits/chocolatt.jpg",
    },
    {
      id: "2",
      name: "Riverr",
      description:
        "Riverr est notre boisson rafraîchissante aux fruits tropicaux...",
      image:
        "/produits/pomme (2).jpg",
    },
    {
      id: "3",
      name: "Nouriss",
      description:
        "Nouriss est notre yaourt à la vanille premium, élaboré avec soin...",
      image:
        "/produits/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
    },
    {
      id: "4",
      name: "jem velouté",
      description:
        "Notre Yaourt jem velouté est un classique intemporel...",
      image:
        "/produits/Home_Nos marques_Yaourts_Jem 200g_Nature_1000 x 1506",
    },
    {
      id: "5",
      name: "Buerre gusta",
      description:
        "Gusta est notre margarine premium, idéale pour toutes vos préparations...",
      image:
        "/produits/Home_Nos marques_Margarine_Gusta_900 x 600_3.jpg",
    },
    {
      id: "6",
      name: "la bergere instant",
      description:
        "Notre bergere instant est un lait entier pasteurisé de la plus haute qualité...",
      image:
        "/produits/Home_Nos marques_Lait_La BI_1000 x 1506.jpg",
    },
    {
      id: "7",
      name: "Fruidou",
      description:
        "Fruidou est une boisson lactée légère et fruitée, fabriquée par Camlait...",
      image:
        "/produits/orange.jpg",
    },
    {
      id: "8",
      name: "Jovino",
      description:
        "Jovino est une boisson lactée onctueuse et nourrissante...",
      image:
        "/produits/Jovino1.jpg",
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
              whileHover={{ scale: 1.03 }}
              className={`group relative bg-gradient-to-br from-white/50 to-green-50/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/30 transition-all duration-300 transform hover:-translate-y-2 ${
                activeProduct === index ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setActiveProduct(index)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full p-6 transition-transform duration-500"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/80 via-white/30 to-transparent p-4">
                  <h3 className={`${pacifico.className} text-lg font-bold text-gray-800 text-center truncate`}>
                    {product.name}
                  </h3>
                </div>
              </div>
              <div className="p-5 bg-white/50 backdrop-blur-md">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-center">
                  <Link
                    href={`/produits/${product.id}`}
                    className="px-5 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl flex items-center gap-2"
                  >
                    <span>Voir Détails</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
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

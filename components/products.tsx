"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, ShoppingCart } from "lucide-react"
import { Coins } from "lucide-react"



// Types pour nos produits
export interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
  rating: number
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "BreakSoy",
    description:
      "BreakSay est notre boisson lactée chocolatée phare, élaborée à partir d'ingrédients de qualité supérieure pour un goût riche et onctueux qui ravira vos papilles.",
    image: "/images/chocolatt.jpg",
    price: 250,
    rating: 4.7,
    category: "Boissons",
  },
  {
    id: "2",
    name: "Riverr",
    description:
      "Riverr est notre boisson rafraîchissante aux fruits tropicaux, parfaite pour étancher votre soif pendant les journées chaudes avec sa saveur exotique et revigorante.",
    image: "/images/pomme (2).jpg",
    price: 300,
    rating: 4.5,
    category: "Boissons",
  },
  {
    id: "3",
    name: "Nouriss",
    description:
      "Nouriss est notre yaourt à la vanille premium, élaboré avec soin pour offrir une texture crémeuse et un goût authentique qui en fait le compagnon idéal de vos petits-déjeuners.",
    image: "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
    price: 250,
    rating: 4.8,
    category: "Yaourts",
  },
  {
    id: "4",
    name: "La Bergère Instant",
    description:
      "Notre Yaourt Jem Velouté est un classique intemporel, apprécié pour sa texture soyeuse et son goût équilibré qui en fait un en-cas sain et délicieux à tout moment de la journée.",
    image: "/images/Home_Nos marques_Lait_La BI_1000 x 1506.jpg",
    price: 150,
    rating: 4.6,
    category: "Lait en poudre",
  },
  {
    id: "6",
    name: "jem velouté",
    description:
      "Notre Bergère Instant est un lait entier pasteurisé de la plus haute qualité, source de calcium et de vitamines essentielles pour une alimentation équilibrée.",
    image: "/images/Home_Nos marques_Yaourts_Jem 200g_Nature_1000 x 1506.jpg",
    price: 450,
    rating: 4.9,
    category: "Laits",
  },
  {
    id: "7",
    name: "Fruidou",
    description:
      "Fruidou est une boisson lactée légère et fruitée, fabriquée par Camlait, qui combine les bienfaits du lait avec la saveur rafraîchissante des fruits pour un moment de plaisir sain.",
    image: "/images/orange.jpg",
    price: 1000,
    rating: 4.3,
    category: "Boissons",
  },
  {
    id: "8",
    name: "Jovino",
    description:
      "Jovino est une boisson lactée onctueuse et nourrissante, idéale pour les enfants et les adultes qui recherchent une option savoureuse pour compléter leur alimentation quotidienne.",
    image: "/images/Jovino1.jpg",
    price: 100,
    rating: 4.7,
    category: "Boissons",
  },
  {
    id: "9",
    name: "Yaourt Camlait Sucré",
    description: "Le Yaourt Camlait Sucré est un yaourt onctueux et rafraîchissant, parfait pour les petits et les grands en quête d’une pause gourmande et équilibrée au quotidien.",
    image: "/images/camlait_sucree.jpg",
    price: 300,
    rating: 4.4,
    category: "Produits laitiers"
  }  
]

export default function ProductList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  
  // Fonction pour afficher les étoiles de notation
  const renderRatingStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
              ? "fill-yellow-400 text-yellow-400 opacity-50"
              : "text-gray-300"
        }`}
      />
    ))
  }

  return (
      <div className="min-h-screen bg-[url('/images/lait.jpg')] bg-cover bg-center relative" id="products" >
    
      <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
  <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
    Nos Produits
  </h1>
  <p className="text-gray-800 max-w-2xl mx-auto">
    Découvrez notre sélection de produits laitiers de haute qualité, élaborés avec soin pour satisfaire vos
    papilles et contribuer à votre bien-être quotidien.
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Badge de catégorie */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Image du produit */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredId === product.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 relative">
                {/* Prix */}
                <div className="absolute -top-12 right-4 h-16 w-16 rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-100 group-hover:border-emerald-300 transition-all duration-500 hover:rotate-12 hover:scale-110 bg-gradient-to-br from-white via-emerald-50 to-white hover:from-emerald-100 hover:to-emerald-200">
                <div className="flex flex-col items-center text-emerald-600">
                <Coins className="w-5 h-5 mb-1" />
              <span className="text-sm font-bold">{product.price.toFixed()}</span>
                  </div>
                </div>
                {/* Nom et évaluation */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-1 mb-2">
                    {renderRatingStars(product.rating)}
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>

                {/* Boutons d'action */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <Link
                    href={`/produits/${product.id}`}
                    className="group flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-800 transition-colors"
                  >
                    Voir détails
                    <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <motion.button
                    className="flex items-center justify-center p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-full transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {/* <span className="sr-only">Ajouter au panier</span> */}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

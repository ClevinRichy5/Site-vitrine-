"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Star, Info } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

import { Pacifico } from "next/font/google"

// const pacifico = Pacifico({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-pacifico",
// })

// Données simulées des produits
const productsData = [
  {
    id: "1",
    name: "BreakSoy",
    description:
      "Notre BreakSoy, riche en saveur et en nutriments. Parfait pour toute la famille. Provenant de vaches élevées en pâturage libre, ce lait est non seulement délicieux mais aussi éthique et durable.",
    longDescription:
      "BreakSoy est le fruit d'un savoir-faire transmis de génération en génération. Nos vaches paissent librement dans les prairies verdoyantes, se nourrissant d'herbe fraîche et de foin naturel. Ce mode d'élevage traditionnel et respectueux garantit un lait d'une qualité exceptionnelle, riche en vitamines A et D, en calcium et en protéines essentielles.\n\nChaque gorgée vous offre une expérience crémeuse et satisfaisante, idéale pour accompagner vos céréales du matin, enrichir vos recettes ou simplement être dégustée pure pour apprécier sa saveur authentique. Notre processus de pasteurisation préserve les qualités nutritionnelles tout en garantissant une sécurité alimentaire optimale.",
    price: "250 F CFA",
    volume: "500ml",
    nutritionalInfo: {
      calories: "65 kcal par 100ml",
      fat: "3,6g par 100ml",
      protein: "3,2g par 100ml",
      calcium: "120mg par 100ml",
    },
    image: "/images/chocolatt.jpg",
    gallery: [
      "/images/vanille.jpg",
      "/images/chocolatt.jpg",
      "/images/caramel.jpg",
    ],
    variants: [
      { id: "1-1", name: "BreakSoy Vanille", price: "300 F CFA", image: "/images/vanille.jpg" },
      { id: "1-2", name: "BreakSoy Cafe", price: "300 F CFA", image: "/images/chocolatt.jpg" },
      { id: "1-3", name: "BreakSoy Camarel", price: "300 F CFA", image: "/images/caramel.jpg" },
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Riverr",
    description:
      "Toute la bonté avec moins de matières grasses. Idéal pour ceux qui surveillent leur apport calorique tout en profitant des bienfaits nutritionnels du lait.",
    longDescription:
      "Notre lait Riverr offre un équilibre parfait entre goût crémeux et légèreté. Avec seulement 1,5% de matières grasses, il constitue une option plus légère que le lait entier, tout en conservant sa richesse en calcium, protéines et vitamines essentielles.\n\nProduit dans le respect de nos valeurs d'agriculture durable, ce lait provient de vaches nourries principalement à l'herbe et élevées dans des conditions optimales de bien-être animal. Chaque étape de production est soigneusement contrôlée pour vous garantir un produit de la plus haute qualité.\n\nPolyvalent, il s'intègre parfaitement dans votre quotidien : dans votre café, vos smoothies, vos préparations culinaires ou simplement dans un verre pour une pause rafraîchissante et nutritive.",
    price: "300 F CFA",
    volume: "1L",
    nutritionalInfo: {
      calories: "46 kcal par 100ml",
      fat: "1,5g par 100ml",
      protein: "3,3g par 100ml",
      calcium: "122mg par 100ml",
    },
    image: "/images/pomme (2).jpg",
    gallery: [
      "/images/rorange.jpg",
      "/images/soya.jpg",
      "/images/Home_Nos marques_Boissons_Riverr 500ml_Fruits tropicaux_1000 x 1506.jpg",
    ],
    variants: [
      { id: "2-1", name: "Riverr Soja", price: "300 F CFA", image: "/images/rorange.jpg" },
      { id: "2-2", name: "Riverr Pomme", price: "300 F CFA", image: "/images/soya.jpg" },
      { id: "2-3", name: "River Orange", price: "300 F CFA", image: "/images/Home_Nos marques_Boissons_Riverr 500ml_Fruits tropicaux_1000 x 1506.jpg" },
    ],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "3",
    name: "Nouriss",
    description:
      "Riche en probiotiques, calcium et protéines fabriqué à partir de notre lait bio premium. Une option saine pour une collation.",
    longDescription:
      "Nouriss est notre yaourt à la vanille premium, élaboré avec soin pour offrir une texture crémeuse et un goût authentique. Enrichi en probiotiques, ce yaourt contribue à une bonne santé digestive tout en vous offrant un moment de plaisir gourmand\n\nce Nouriss contribue à une bonne santé digestive tout en vous offrant un moment de plaisir gourmand.",
    price: "250 F CFA",
    volume: "250ml",
    nutritionalInfo: {
      calories: "58 kcal par 100g",
      fat: "3,2g par 100g",
      protein: "4,3g par 100g",
      calcium: "150mg par 100g",
    },
    image: "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
    gallery: [
      "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
      "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
      "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg",
    ],
    variants: [
      { id: "3-1", name: "Nouriss 250ml ", price: "250 F CFA", image: "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg" },
      { id: "3-2", name: "Nouriss 250ml ", price: "250 F CFA", image: "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg" },
      { id: "3-3", name: "Nouriss 250ml ", price: "250 F CFA", image: "/images/Home_Nos marques_Yaourts_Nouriss 250ml_Vanille_1506 x 1000.jpg" },
    ],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    name: "La Bergère Instant",
    description:
      "Notre Yaourt jem velouté est un classique intemporel, élaboré selon des méthodes traditionnelles pour préserver toute l'authenticité du lait.",
    longDescription:
      " Sans sucre ajouté, il vous offre une expérience gustative pure et peut être consommé nature ou agrémenté selon vos envies.\n\n roirs.\n\n être consommé nature ou agrémenté selon vos envies.",
    price: "150 F CFA",
    volume: "200g",
    nutritionalInfo: {
      calories: "80 kcal par 100g",
      fat: "4,5g par 100g",
      protein: "7,5g par 100g",
      calcium: "95mg par 100g",
    },
    image: "/images/Home_Nos marques_Lait_La BI_1000 x 1506.jpg",
    gallery: [
      "/images/Home_Nos marques_Yaourts_Jem 200g_Fraise_1000 x 1506.jpg",
      "/images/Home_Nos marques_Yaourts_Jem 150g_Tare au citron_1000 x 1506.jpg",
      "/images/Home_Nos marques_Margarine_Gusta_4,5kg_1000 x 1506.jpg",
    ],
    variants: [
      { id: "4-1", name: "La Bergère Instant", price: "100 F CFA", image: "/images/Home_Nos marques_Lait_La BI_1000 x 1506.jpg" },
      { id: "4-2", name: "jem velouté", price: "400 F CFA", image: "/images/Home_Nos marques_Yaourts_Jem 200g_Fraise_1000 x 1506.jpg" },
      { id: "4-3", name: "jem velouté", price: "400 F CFA", image: "/images/Home_Nos marques_Yaourts_Jem 150g_Tare au citron_1000 x 1506.jpg" },
    ],
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "5",
    name: "beurre gusta",
    description:
      "Margarine premium pour cuisine et pâtisserie.",
    longDescription:
      " Gusta est notre margarine premium, idéale pour toutes vos préparations culinaires. Sa texture onctueuse et son goût délicat en font un allié précieux en cuisine comme en pâtisserie.\n\n être consommé nature ou agrémenté selon vos envies.",
    price: "2500 F CFA",
    volume: "500g",
    nutritionalInfo: {
      calories: "80 kcal par 100g",
      fat: "4,5g par 100g",
      protein: "7,5g par 100g",
      calcium: "95mg par 100g",
    },
    image: "/images/Home_Nos marques_Margarine_Gusta_900 x 600_3.jpg",
    gallery: [
      "/images/Home_Nos marques_Margarine_Gusta_900 x 600_3.jpg",
      "/images/Home_Nos marques_Margarine_Gusta_900 x 600.png",
      "/images/Home_Nos marques_Margarine_Gusta_900 x 600.png",
    ],
    variants: [
      { id: "5-1", name: "Buerre gusta", price: "500 F CFA", image: "/images/Home_Nos marques_Margarine_Gusta_900 x 600.png" },
      { id: "5-2", name: "Buerre gusta", price: "500 F CFA", image: "/images/Home_Nos marques_Margarine_Gusta_900 x 600.png" },
      { id: "5-3", name: "Buerre gusta", price: "500 F CFA", image: "/images/Home_Nos marques_Margarine_Gusta_900 x 600.png" },
    ],
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "6",
    name: "jem velouté",
    description:
      "Notre Yaourt jem velouté est un classique intemporel, élaboré selon des méthodes traditionnelles pour préserver toute l'authenticité du lait.",
    longDescription:
      " Sans sucre ajouté, il vous offre une expérience gustative pure et peut être consommé nature ou agrémenté selon vos envies.\n\n roirs.\n\n être consommé nature ou agrémenté selon vos envies.",
    price: "400 F CFA",
    volume: "200g",
    nutritionalInfo: {
      calories: "80 kcal par 100g",
      fat: "4,5g par 100g",
      protein: "7,5g par 100g",
      calcium: "95mg par 100g",
    },
    image: "/images/Home_Nos marques_Yaourts_Jem 200g_Nature_1000 x 1506.jpg",
    gallery: [
      "/images/Home_Nos marques_Yaourts_Jem 200g_Fraise_1000 x 1506.jpg",
      "/images/Home_Nos marques_Yaourts_Jem 150g_Tare au citron_1000 x 1506.jpg",
      "/images/Home_Nos marques_Margarine_Gusta_4,5kg_1000 x 1506.jpg",
    ],
    variants: [
      { id: "4-1", name: "jem velouté Nature", price: "400 F CFA", image: "/images/Home_Nos marques_Yaourts_Jem 200g_Nature_1000 x 1506.jpg" },
      { id: "4-2", name: "jem velouté Fraise", price: "400 F CFA", image: "/images/Home_Nos marques_Yaourts_Jem 200g_Fraise_1000 x 1506.jpg" },
      { id: "4-3", name: "jem velouté Tarte au citron", price: "400 F CFA", image: "/images/Home_Nos marques_Yaourts_Jem 150g_Tare au citron_1000 x 1506.jpg" },
    ],
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "7",
    name: "Fruidou",
    description:
      "Boisson lactée fruitée rafraîchissante.",
    longDescription:
      "Fruidou est une boisson lactée légère et fruitée, fabriquée par Camlait. Elle associe la douceur du lait à la fraîcheur des fruits pour offrir une boisson savoureuse et désaltérante. Idéale pour les pauses gourmandes, les petits-déjeuners ou les goûters des petits comme des grands.",
    price: "1000 F CFA",
    volume: "1L",
    nutritionalInfo: {
      calories: "65 kcal par 100ml",
      fat: "2,5g par 100ml",
      protein: "3,2g par 100ml",
      calcium: "120mg par 100ml",
    },
    image: "/images/orange.jpg",
    gallery: [
      "/images/Mange.jpg",
      "/images/FruidouGoyave.jpg",
      "/images/pomme.jpg",
    ],
    variants: [
      { id: "6-1", name: "Fruidou Goyave", price: "1000 F CFA", image: "/images/pomme.jpg" },
      { id: "6-2", name: "Fruidou Orange", price: "1000 F CFA", image: "/images/pomme.jpg" },
      { id: "6-3", name: "Fruidou Mangue", price: "1000 F CFA", image: "/images/pomme.jpg" },
    ],
    rating: 4.7,
    reviews: 152,
  },
  {
    id: "8",
    name: "Jovino",
    description: "Boisson lactée nourrissante et onctueuse.",
    longDescription: "Jovino est une boisson lactée onctueuse et nourrissante, fabriquée par Camlait. Elle combine la richesse du lait à une texture douce et savoureuse, pour offrir un moment de plaisir et d’énergie à tout moment de la journée.",
    price: "100 F CFA",
    volume: "1L",
    nutritionalInfo: {
      calories: "70 kcal par 100ml",
      fat: "3g par 100ml",
      protein: "3,5g par 100ml",
      calcium: "130mg par 100ml"
    },
    image: "/images/Jovino1.jpg",
    "gallery": [
      "/images/coktail.jpg",
    ],
    variants: [
      { "id": "8-1", name: "Jovino Cocktail", price: "100 F CFA", image: "/images/coktail.jpg" }
    ],
    rating: 4.6,
    reviews: 137
  }

]

export default function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedVariant, setSelectedVariant] = useState<any>(null)

  useEffect(() => {
    // Simuler un chargement de données
    const fetchProduct = () => {
      const foundProduct = productsData.find((p) => p.id === params.id)
      if (foundProduct) {
        setProduct(foundProduct)
        setSelectedImage(foundProduct.image)
        setSelectedVariant(foundProduct.variants[0])
      }
      setLoading(false)
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Produit non trouvé</h1>
        <Link href="/" className="mt-4 text-green-600 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <Link
            href="/#products"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux produits
          </Link>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden border border-white/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Galerie d'images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="relative h-[400px] bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={selectedImage || "/produit1.jpg"}
                      alt={product.name}
                      width={350}
                      height={350}
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                <div className="flex space-x-4 overflow-x-auto pb-2">
                  <div
                    className={`relative h-20 w-20 rounded-lg cursor-pointer transition-all ${selectedImage === product.image
                      ? "ring-2 ring-green-500 scale-105"
                      : "hover:scale-105 bg-white/20 backdrop-blur-sm"
                      }`}
                    onClick={() => setSelectedImage(product.image)}
                  >
                    <Image
                      src={product.image || "/produit1.jpg"}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                  {product.gallery.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className={`relative h-20 w-20 rounded-lg cursor-pointer transition-all ${selectedImage === img
                        ? "ring-2 ring-green-500 scale-105"
                        : "hover:scale-105 bg-white/20 backdrop-blur-sm"
                        }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img || "/produit1.jpg"}
                        alt={`${product.name} ${idx + 1}`}
                        width={50}
                        height={50}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Informations produit */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-500" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>
                  <h1 className={` text-3xl md:text-4xl font-bold text-gray-800 mt-2`}>{product.name}</h1>
                  <p className="text-xl text-green-600 font-semibold mt-2">{selectedVariant?.price || product.price}</p>
                </div>

                <div className="prose prose-green max-w-none">
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Variantes</h3>
                  <div className="flex flex-wrap gap-4">
                    {product.variants.map((variant: any) => (
                      <div
                        key={variant.id}
                        className={`relative p-4 rounded-xl cursor-pointer transition-all ${selectedVariant?.id === variant.id
                          ? "bg-green-100/70 border-2 border-green-500"
                          : "bg-white/30 backdrop-blur-sm border border-white/50 hover:bg-white/50"
                          }`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        <div className="relative h-16 w-16 mx-auto mb-2">
                          <Image
                            src={variant.image || "/produit1.jpg"}
                            alt={variant.name}
                            width={50}
                            height={50}
                            className="object-contain w-full h-full p-2"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-800">{variant.name}</p>
                          <p className="text-sm text-green-600">{variant.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 font-medium flex items-center justify-center">
                    <Info className="mr-2 h-5 w-5" />
                    Plus d'info
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Description détaillée et informations nutritionnelles */}
            <div className="p-8 border-t border-white/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Description détaillée</h2>
                  <div className="prose prose-green max-w-none">
                    {product.longDescription.split("\n\n").map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-gray-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-fit"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Informations nutritionnelles</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Calories</span>
                      <span className="font-medium">{product.nutritionalInfo.calories}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Matières grasses</span>
                      <span className="font-medium">{product.nutritionalInfo.fat}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Protéines</span>
                      <span className="font-medium">{product.nutritionalInfo.protein}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Calcium</span>
                      <span className="font-medium">{product.nutritionalInfo.calcium}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contenance</h3>
                    <p className="text-gray-600">{product.volume}</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Conservation</h3>
                    <p className="text-gray-600">À conserver au réfrigérateur entre 2°C et 4°C.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Produits similaires */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-white/50"
                  >
                    <div className="relative h-48 bg-green-50/50">
                      <Image
                        src={relatedProduct.image || "/produit1.jpg"}
                        alt={relatedProduct.name}
                        width={50}
                        height={50}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-green-600 font-semibold">{relatedProduct.price}</span>
                        <Link
                          href={`/produits/${relatedProduct.id}`}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Voir détails
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </>
  )
}

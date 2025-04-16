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

// Données simulées des produits
const productsData = [
  {
    id: "1",
    name: "Lait Entier",
    description:
      "Notre lait entier classique, riche en saveur et en nutriments. Parfait pour toute la famille. Provenant de vaches élevées en pâturage libre, ce lait est non seulement délicieux mais aussi éthique et durable.",
    longDescription:
      "Le lait entier LaitPur est le fruit d'un savoir-faire transmis de génération en génération. Nos vaches paissent librement dans les prairies verdoyantes, se nourrissant d'herbe fraîche et de foin naturel. Ce mode d'élevage traditionnel et respectueux garantit un lait d'une qualité exceptionnelle, riche en vitamines A et D, en calcium et en protéines essentielles.\n\nChaque gorgée vous offre une expérience crémeuse et satisfaisante, idéale pour accompagner vos céréales du matin, enrichir vos recettes ou simplement être dégustée pure pour apprécier sa saveur authentique. Notre processus de pasteurisation préserve les qualités nutritionnelles tout en garantissant une sécurité alimentaire optimale.",
    price: "2550 F CFA",
    volume: "1 litre",
    nutritionalInfo: {
      calories: "65 kcal par 100ml",
      fat: "3,6g par 100ml",
      protein: "3,2g par 100ml",
      calcium: "120mg par 100ml",
    },
    image: "/produit1.jpg?height=500&width=500",
    gallery: [
      "/produit2.jpg?height=600&width=600",
      "/produit3.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
    ],
    variants: [
      { id: "1-1", name: "Bouteille 1L", price: "2550 F CFA", image: "/produit3.jpg?height=300&width=300" },
      { id: "1-2", name: "Pack 6x1L", price: "1450 F CFA", image: "/produit2.jpg?height=300&width=300" },
      { id: "1-3", name: "Bouteille 2L", price: "4775 F CFA", image: "/produit1.jpg?height=300&width=300" },
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Lait Demi-Écrémé",
    description:
      "Toute la bonté avec moins de matières grasses. Idéal pour ceux qui surveillent leur apport calorique tout en profitant des bienfaits nutritionnels du lait.",
    longDescription:
      "Notre lait demi-écrémé offre un équilibre parfait entre goût crémeux et légèreté. Avec seulement 1,5% de matières grasses, il constitue une option plus légère que le lait entier, tout en conservant sa richesse en calcium, protéines et vitamines essentielles.\n\nProduit dans le respect de nos valeurs d'agriculture durable, ce lait provient de vaches nourries principalement à l'herbe et élevées dans des conditions optimales de bien-être animal. Chaque étape de production est soigneusement contrôlée pour vous garantir un produit de la plus haute qualité.\n\nPolyvalent, il s'intègre parfaitement dans votre quotidien : dans votre café, vos smoothies, vos préparations culinaires ou simplement dans un verre pour une pause rafraîchissante et nutritive.",
    price: "2330 F CFA",
    volume: "1 litre",
    nutritionalInfo: {
      calories: "46 kcal par 100ml",
      fat: "1,5g par 100ml",
      protein: "3,3g par 100ml",
      calcium: "122mg par 100ml",
    },
    image: "/produit1.jpg?height=500&width=500",
    gallery: [
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
    ],
    variants: [
      { id: "2-1", name: "Bouteille 1L", price: "2,30 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "2-2", name: "Pack 6x1L", price: "13,50 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "2-3", name: "Bouteille 2L", price: "4,40 F CFA", image: "/produit1.jpg?height=300&width=300" },
    ],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "3",
    name: "Yaourt Bio",
    description:
      "Yaourt crémeux et délicieux fabriqué à partir de notre lait bio premium. Une option saine pour une collation.",
    longDescription:
      "Notre yaourt bio est élaboré selon des méthodes traditionnelles, en utilisant uniquement notre lait biologique de la plus haute qualité et des ferments lactiques soigneusement sélectionnés. Le processus de fermentation lent permet de développer une texture onctueuse et un goût authentique qui ravira vos papilles.\n\nRiche en probiotiques naturels, notre yaourt contribue à une flore intestinale équilibrée et à une bonne digestion. Sa teneur élevée en protéines et en calcium en fait un allié précieux pour votre santé osseuse et musculaire.\n\nSans conservateurs ni additifs artificiels, ce yaourt incarne notre engagement envers des produits purs et naturels. Dégustez-le nature pour apprécier sa saveur subtile, ou accompagné de fruits frais, de miel ou de granola pour un petit-déjeuner ou un en-cas équilibré et délicieux.",
    price: "3220 F CFA",
    volume: "500g",
    nutritionalInfo: {
      calories: "58 kcal par 100g",
      fat: "3,2g par 100g",
      protein: "4,3g par 100g",
      calcium: "150mg par 100g",
    },
    image: "/produit1.jpg?height=500&width=500",
    gallery: [
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
    ],
    variants: [
      { id: "3-1", name: "Pot 500g Nature", price: "3,20 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "3-2", name: "Pack 4x125g Fruits", price: "4,50 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "3-3", name: "Pot 1kg Nature", price: "5,90 F CFA", image: "/produit1.jpg?height=300&width=300" },
    ],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    name: "Fromage Frais",
    description:
      "Fromage artisanal élaboré selon des méthodes traditionnelles pour une saveur authentique et raffinée.",
    longDescription:
      "Notre fromage frais est le fruit d'un savoir-faire artisanal transmis à travers les générations. Fabriqué à partir de lait frais collecté quotidiennement dans nos fermes partenaires, il est transformé dans les 24 heures suivant la traite pour préserver toute sa fraîcheur et ses qualités nutritionnelles.\n\nLe caillage lent et naturel, suivi d'un égouttage progressif, confère à notre fromage frais sa texture unique, à la fois légère et onctueuse. Son goût délicat, légèrement acidulé, révèle toute la richesse aromatique du lait de nos terroirs.\n\nPolyvalent en cuisine, il se déguste aussi bien nature qu'assaisonné d'herbes fraîches ou de poivre. Il sublime vos salades, se marie parfaitement avec des fruits frais ou secs, et constitue la base idéale pour vos cheesecakes et autres desserts créatifs. Une source précieuse de protéines et de calcium, alliant plaisir gustatif et bienfaits nutritionnels.",
    price: "4550 F CFA",
    volume: "250g",
    nutritionalInfo: {
      calories: "80 kcal par 100g",
      fat: "4,5g par 100g",
      protein: "7,5g par 100g",
      calcium: "95mg par 100g",
    },
    image: "/produit1.jpg?height=500&width=500",
    gallery: [
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
      "/produit1.jpg?height=600&width=600",
    ],
    variants: [
      { id: "4-1", name: "Portion 250g Nature", price: "4,50 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "4-2", name: "Portion 250g Herbes", price: "4,95 F CFA", image: "/produit1.jpg?height=300&width=300" },
      { id: "4-3", name: "Portion 500g Nature", price: "8,50 F CFA", image: "/produit1.jpg?height=300&width=300" },
    ],
    rating: 4.6,
    reviews: 87,
  },
]

export default function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedVariant, setSelectedVariant] = useState<any>(null)
  const [quantity, setQuantity] = useState(1)

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
                    className={`relative h-20 w-20 rounded-lg cursor-pointer transition-all ${
                      selectedImage === product.image
                        ? "ring-2 ring-green-500 scale-105"
                        : "hover:scale-105 bg-white/20 backdrop-blur-sm"
                    }`}
                    onClick={() => setSelectedImage(product.image)}
                  >
                    <Image
                      src={product.image || "/produit1.jpg"}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  {product.gallery.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className={`relative h-20 w-20 rounded-lg cursor-pointer transition-all ${
                        selectedImage === img
                          ? "ring-2 ring-green-500 scale-105"
                          : "hover:scale-105 bg-white/20 backdrop-blur-sm"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img || "/produit1.jpg"}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-contain p-2"
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{product.name}</h1>
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
                        className={`relative p-4 rounded-xl cursor-pointer transition-all ${
                          selectedVariant?.id === variant.id
                            ? "bg-green-100/70 border-2 border-green-500"
                            : "bg-white/30 backdrop-blur-sm border border-white/50 hover:bg-white/50"
                        }`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        <div className="relative h-16 w-16 mx-auto mb-2">
                          <Image
                            src={variant.image || "/produit1.jpg"}
                            alt={variant.name}
                            fill
                            className="object-contain"
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
                        fill
                        className="object-contain p-4"
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

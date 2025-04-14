"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dirane Joker",
      role: "Fondatrice & PDG",
      bio: "Passionnée par l'agriculture durable depuis son enfance dans une ferme familiale, Marie a fondé Camlait avec la vision de créer des produits laitiers d'exception tout en respectant l'environnement et le bien-être animal.",
      image: "/profile.jpg?height=400&width=400",
    },
    {
      id: 2,
      name: "Kakeu Clevin",
      role: "Maître Fromager",
      bio: "Avec plus de 25 ans d'expérience dans la fabrication de fromages artisanaux, Thomas apporte son expertise inégalée pour créer des produits qui allient tradition et innovation.",
      image: "/profile.jpg?height=400&width=400",
    },
    {
      id: 3,
      name: "Dirane Code",
      role: "Responsable Qualité",
      bio: "Ingénieure agronome de formation, Sophie veille à ce que chaque produit Camlait respecte les normes les plus strictes en matière de qualité et de sécurité alimentaire.",
      image: "/profile.jpg?height=400&width=400",
    },
    {
      id: 4,
      name: "Richy Gazo",
      role: "Responsable Développement Durable",
      bio: "Engagé pour la protection de l'environnement, Lucas supervise nos initiatives écologiques et travaille à réduire constamment notre empreinte carbone.",
      image: "/profile.jpg?height=400&width=400",
    },
  ]

  const milestones = [
    {
      year: "1998",
      title: "Fondation de Camlait",
      description:
        "Dirane Joker crée Camlait avec une petite ferme de 15 vaches et une vision claire : produire le meilleur lait tout en respectant la nature.",
    },
    {
      year: "2005",
      title: "Certification Bio",
      description:
        "Après des années d'efforts, Camlait obtient sa certification biologique, confirmant notre engagement envers des pratiques agricoles durables.",
    },
    {
      year: "2010",
      title: "Expansion de la gamme",
      description:
        "Lancement de notre première gamme de fromages et yaourts, élargissant notre offre tout en maintenant notre engagement pour la qualité.",
    },
    {
      year: "2015",
      title: "Prix de l'Innovation Durable",
      description:
        "Camlait reçoit le prestigieux Prix de l'Innovation Durable pour son système d'emballage éco-responsable et ses pratiques agricoles régénératives.",
    },
    {
      year: "2020",
      title: "Nouvelle Usine Éco-conçue",
      description:
        "Inauguration de notre nouvelle usine alimentée à 100% par des énergies renouvelables, avec un système de recyclage d'eau avancé.",
    },
    {
      year: "2023",
      title: "Expansion Internationale",
      description:
        "Camlait commence à exporter ses produits premium dans plusieurs pays européens, partageant notre passion pour le lait de qualité au-delà des frontières.",
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
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-100/80 to-white opacity-90"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Ferme Camlait"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Notre <span className="text-green-600">Histoire</span>
              </h1>
              <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600">
                Découvrez l'histoire de Camlait, notre engagement envers la qualité et les personnes qui font de notre
                entreprise ce qu'elle est aujourd'hui.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/camlait.jpg?height=1000&width=800" alt="Notre ferme" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg w-[200px] border border-white/50">
                  <div className="text-green-600 font-bold text-4xl">25+</div>
                  <div className="text-gray-600">Années d'Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-800">Notre Passion pour le Lait</h2>
                <div className="w-20 h-1 bg-green-600"></div>
                <p className="text-gray-600 text-lg">
                  Fondée en 1998 par Dirane Joker, Camlait est née d'une passion pour l'agriculture durable et les
                  produits laitiers de qualité. Ce qui a commencé comme une petite ferme familiale s'est transformé en
                  une entreprise reconnue pour son excellence et son engagement envers des pratiques respectueuses de
                  l'environnement.
                </p>
                <p className="text-gray-600 text-lg">
                  Notre philosophie est simple : les meilleurs produits laitiers proviennent de vaches heureuses et en
                  bonne santé. C'est pourquoi nos animaux paissent librement dans des prairies verdoyantes, se
                  nourrissant d'herbe fraîche et de foin naturel, sans hormones ni antibiotiques.
                </p>
                <p className="text-gray-600 text-lg">
                  Au fil des années, nous avons perfectionné nos méthodes de production, alliant savoir-faire
                  traditionnel et technologies modernes pour créer des produits qui ravissent les palais tout en
                  respectant notre planète.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Chronologie */}
        <section className="py-16 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800">Notre Parcours</h2>
              <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
              <p className="mt-6 text-gray-600">
                Découvrez les moments clés qui ont façonné Camlait et nous ont permis de devenir le leader que nous
                sommes aujourd'hui.
              </p>
            </motion.div>

            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div key={milestone.year} variants={itemVariants} className="relative">
                    <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className="md:w-1/2 p-4">
                        <div
                          className={`bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 ${
                            index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                          }`}
                        >
                          <div className="text-green-600 font-bold text-2xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2"></div>
                      {/* Point sur la timeline */}
                      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-600 border-4 border-white hidden md:block"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800">Notre Équipe</h2>
              <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
              <p className="mt-6 text-gray-600">
                Rencontrez les personnes passionnées qui travaillent chaque jour pour vous offrir des produits laitiers
                d'exception.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-white/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800">Nos Valeurs</h2>
              <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
              <p className="mt-6 text-gray-600">
                Les principes qui guident chacune de nos actions et décisions, de la ferme à votre table.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Qualité Sans Compromis</h3>
                <p className="text-gray-600 text-center">
                  Nous nous engageons à produire les meilleurs produits laitiers possibles, en veillant à chaque étape
                  du processus, de la ferme à votre table.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Durabilité Environnementale</h3>
                <p className="text-gray-600 text-center">
                  Nous travaillons en harmonie avec la nature, en utilisant des pratiques agricoles durables qui
                  préservent nos terres pour les générations futures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Bien-être Animal</h3>
                <p className="text-gray-600 text-center">
                  Nous traitons nos animaux avec respect et dignité, en leur offrant des conditions de vie optimales qui
                  favorisent leur santé et leur bonheur.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const benefits = [
    "100% Naturel & Bio",
    "Sans Conservateurs",
    "Riche en Nutriments",
    "Agriculture Durable",
    "Emballage Éco-responsable",
    "De la Ferme à la Table",
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/camlait.jpg?height=1000&width=800" alt="Notre ferme" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg w-[200px] border border-white/50">
              <div className="text-green-600 font-bold text-4xl">25+</div>
              <div className="text-gray-600">Années d'Excellence</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Notre Histoire de Lait <span className="text-green-600">Pur</span> &{" "}
                <span className="text-green-600">Naturel</span>
              </h2>
              <div className="w-20 h-1 bg-green-600 mt-4"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              Fondée en 1998, CamLait s'est engagée à fournir des produits laitiers de la plus haute qualité tout en
              maintenant des pratiques agricoles durables et éthiques. Nos vaches paissent dans des pâturages verdoyants
              et sont traitées avec le plus grand soin et respect.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              Nous croyons que le meilleur lait provient de vaches heureuses, c'est pourquoi nous accordons la priorité
              au bien-être animal et aux pratiques d'alimentation naturelles. Notre dévouement à la qualité a fait de
              nous un nom de confiance dans les foyers à travers le pays.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/a-propos"
                className="mt-8 inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 font-medium"
              >
                En Savoir Plus Sur Nous
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

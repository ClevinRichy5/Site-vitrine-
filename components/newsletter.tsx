"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="newsletter" className="py-16 bg-green-600" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Restez informé de nos dernières actualités</h2>
          <p className="mt-4 text-green-100 text-lg">
          Abonnez-vous à notre newsletter pour recevoir des mises à jour sur les nouveaux produits, des offres spéciales et des recettes saines.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                placeholder="Entrer votre email"
              />
            </div>
            <button
              type="submit"
              className="flex-none bg-white text-green-600 hover:bg-green-50 py-3 px-6 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              S'abonner
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm text-green-100"
          >
            Nous respectons votre vie privée. Désabonnez-vous à tout moment.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

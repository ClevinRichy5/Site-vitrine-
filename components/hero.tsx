"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const milkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateMilkPour = () => {
      if (!milkRef.current) return

      // Reset animation
      milkRef.current.style.height = "0%"

      // Animate milk pouring
      setTimeout(() => {
        if (milkRef.current) {
          milkRef.current.style.transition = "height 2.5s ease-in-out"
          milkRef.current.style.height = "100%"
        }
      }, 500)
    }

    animateMilkPour()

    // Repeat animation every 5 seconds
    const interval = setInterval(animateMilkPour, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-90"></div>
        <Image
          src="/images/Logo.jpg"
          alt="Fond laitier"
          fill
          className="object-cover opacity-200"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] w-full"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              className="absolute top-[100px] right-[20%] w-[100px] h-[100px] rounded-full bg-green-100/80 backdrop-blur-sm border border-white/50"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2.5,
              }}
              className="absolute bottom-[150px] left-[20%] w-[80px] h-[80px] rounded-full bg-green-200/80 backdrop-blur-sm border border-white/50"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const locations = [
    {
      id: 1,
      name: "Yassa",
      address: "Douala, Cameroun",
      phone: "+237 6** ** ** **",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-15h",
    },
    {
      id: 2,
      name: "Centre de distribution",
      address: "Pk14, Douala, Cameroun",
      phone: "+237 6** ** ** **",
      hours: "Lun-Ven: 7h-19h, Sam: 8h-16h",
    },
  ]

  return (
    <section id="location" className="py-20 bg-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Trouvez <span className="text-green-600">Nous</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 mt-4 mx-auto"></div>
          <p className="mt-6 text-gray-600 text-lg">
          Visitez nos installations pour en savoir plus sur nos pratiques agricoles durables et savourez des produits laitiers frais directement à la source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-green-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-green-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-green-600 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-xl h-[500px]"
          >
            <div className="relative w-full h-full">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 bg-green-100">
                <div className="w-full h-full relative">
                  {/* Simulated map with styling */}
                  <div className="absolute inset-0 bg-[#e8f4ea] overflow-hidden">
                    {/* Map grid lines */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #d1e7d6 1px, transparent 1px), linear-gradient(to bottom, #d1e7d6 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    {/* Roads */}
                    <div className="absolute top-1/2 left-0 right-0 h-6 bg-white transform -translate-y-1/2"></div>
                    <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white transform -translate-x-1/2"></div>

                    {/* Location markers */}
                    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="absolute top-2/3 left-2/3 w-8 h-8 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold">
                      2
                    </div>

                    {/* Water */}
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full"></div>

                    {/* Green areas */}
                    <div className="absolute top-20 left-20 w-60 h-30 bg-green-200 rounded-lg"></div>
                    <div className="absolute bottom-40 left-40 w-40 h-60 bg-green-200 rounded-lg"></div>
                  </div>

                  {/* Controls overlay */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 flex flex-col space-y-2">
                    <button className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600 hover:bg-gray-200">
                      +
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600 hover:bg-gray-200">
                      −
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Camlait</h3>
            <p className="text-gray-400 mb-4">
            Nous fournissons des produits laitiers de la plus haute qualité depuis 1998. Notre engagement envers la qualité, la durabilité et le bien-être animal fait de nous le choix privilégié des familles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {["Accueil", "A propos", "Produits", "Localisation", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Produits</h4>
            <ul className="space-y-2">
              {["Whole Milk", "Low-Fat Milk", "Organic Yogurt", "Fresh Cheese", "Butter", "Cream"].map((item) => (
                <li key={item}>
                  <Link href={`/products`} className="text-gray-400 hover:text-green-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Yassa, Douala, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+237 6** ** ** **</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@camlait.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            Designed by <a href="https://github.com/diranecode" target="_blank" className="text-blue-500">dirane</a> & <a href="https://github.com/diranecode" className="text-orange-500" target="_blank">Richie</a> <br />
            &copy; {currentYear} Camlait. Tous droits réservés. Designed by
          </p>
        </div>
      </div>
    </footer>
  )
}

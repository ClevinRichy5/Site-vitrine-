
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CAMLAIT SA</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance dans le secteur de production des produits du meilleur lait.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-green-500" />
                <span className="text-gray-400"> Douala (Zone Industrielle Bassa) – Rue TRACTAFRIC</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-500" />
                <span className="text-gray-400">+237 233 37 44 60</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-green-500" />
                <span className="text-gray-400">ovzuko@camlait.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Produits</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Actualités</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Restez informé de nos dernières actualités et offres.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-lg focus:outline-none bg-gray-800 text-white flex-grow"
                required
              />
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CAMLAIT SA. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

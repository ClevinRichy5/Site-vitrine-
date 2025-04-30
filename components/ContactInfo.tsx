"use client"

import React from 'react';
import { Phone, Mail, MapPin, BriefcaseIcon, MessageSquareText } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id='ContactInfo' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nous Contacter</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plusieurs façons de nous joindre pour toutes vos questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/+237690600986" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-[#f1f9ed] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
              <MessageSquareText size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-center text-gray-600">+237 690 60 09 86</p>
            <span className="mt-4 text-green-600 font-medium">Cliquez pour discuter</span>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:contact@camlait.cm" 
            className="flex flex-col items-center p-6 bg-[#f1f9ed] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
              <Mail size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-center text-gray-600">ovzuko@camlait.com</p>
            <span className="mt-4 text-green-600 font-medium">Cliquez pour envoyer un email</span>
          </a>
          
          {/* Direction */}
          <a 
            href="tel:+237222222222" 
            className="flex flex-col items-center p-6 bg-[#f1f9ed] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
              <BriefcaseIcon size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Direction</h3>
            <p className="text-center text-gray-600">+237 233 37 44 60</p>
            <span className="mt-4 text-green-600 font-medium">Appeler la direction</span>
          </a>
          
          {/* Boutique */}
          <a 
            href="tel:+237333333333" 
            className="flex flex-col items-center p-6 bg-[#f1f9ed] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
              <Phone size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boutique</h3>
            <p className="text-center text-gray-600">+237 233 37 28 05</p>
            <span className="mt-4 text-green-600 font-medium">Appeler la boutique</span>
          </a>
        </div>
        
        <div className="bg-[#f1f9ed] rounded-xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Visitez notre siège social</h3>
              <p className="text-gray-600">
                Nous sommes toujours ravis d'accueillir nos clients et partenaires. N'hésitez pas à passer 
                nous voir pendant nos heures d'ouverture.
              </p>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Adresse</h4>
                  <p className="text-gray-600">Douala (Zone Industrielle Bassa) – Rue TRACTAFRIC<br/>Douala, Cameroun</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Heures d'ouverture</h4>
                  <p className="text-gray-600">Lundi - Vendredi : 8h00 - 17h00<br/>Samedi : 9h00 - 14h00</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.164276898424!2d9.705262037127194!3d4.048093546264853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061125d447b755d%3A0x17e56ced2f175bce!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1712853902613!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CAMLAIT location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Clock icon component (pour éviter d'importer un package non installé)
    interface ClockProps {
    className?: string;  // classe est optionnelle
  }
    const Clock: React.FC<ClockProps> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Contenu du SVG ici */}
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="6" x2="12" y2="12" />
      <line x1="12" y1="12" x2="16" y2="10" />
    </svg>
  );

export default ContactInfo;

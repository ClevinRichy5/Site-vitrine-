
"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { equipe, camlaitOffice, ceo, family, companyHistory } from "../components/src/images"
import Link from 'next/link';
import Image from 'next/image';
const About = () => {
  const [visibleSection, setVisibleSection] = useState(0);
  const [animateElements, setAnimateElements] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimateElements(true);
      }
    }, { threshold: 0.2 });
    
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-24 bg-[#f6fbf3]">
      <div className="min-h-screen bg-[url('/images/lait.jpg')] bg-cover bg-center relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            À Propos de Nous
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CAMLAIT, une entreprise engagée dans la qualité et l'excellence depuis 1972
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className={`text-2xl font-bold mb-6 text-green-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`}>
              Notre Histoire
            </h3>
            <p className={`mb-6 text-gray-700 transition-all duration-700 delay-100 ${animateElements ? 'opacity-100' : 'opacity-0'}`}>
            CAMLAIT SA., est une Entreprise camerounaise, agroalimentaire spécialisée dans la
           transformation et la distribution des produits faits à base de lait et de soja principalement,
            sains et variés, destinés au bien être des consommateurs de tout âges du nourri sson à la
          personne du 3e âge.
        La Société Camerounaise de Produits Laitiers (CAMLAIT S.A.) est une société anonyme créée
        en 1972 par un groupe d'entrepreneurs camerounais avec pour objectif de fournir le marché
        camerounais en produits laitiers. C'est la première industrie locale de production de yaourts.
        Créée alors sous la forme de SARL avec un capital de 15 millions Fcfa à la base, avec un
      capital croissant, a vue son statut juridique changer. Elle est aujourd’hui une Société
          Anonyme avec un capital de plus de 3 000 000 000 FCFA.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${animateElements ? 'opacity-100' : 'opacity-0'}`}>
              <Button className="bg-green-600 hover:bg-green-700">
                Notre Vision
              </Button>
              <Link href="#ContactForm">
                <Button variant="outline" className="text-black border-green-600 hover:bg-green-50">
                  Contactez-nous <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className={`relative z-10 rounded-xl overflow-hidden shadow-xl transition-all duration-1000 transform ${animateElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Image 
                src="/images/laboratoire.png" 
                alt="Histoire de CAMLAIT" 
                className="w-full h-auto object-cover rounded-xl"
                style={{ maxHeight: '500px' }}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full">Fondée en 1972</span>
                <h4 className="text-xl font-bold mt-2">Un héritage d'excellence</h4>
              </div>
            </div>
            <div className="absolute top-10 -right-5 w-40 h-40 bg-green-300/20 rounded-full blur-3xl animate-pulse z-0"></div>
          </div>
        </div>
        
        {/* Section sur le PDG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className={`relative z-10 rounded-xl overflow-hidden shadow-xl transition-all duration-1000 transform ${animateElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <Image 
                src="/images/route.png" 
                alt="CAMLAIT YAOUNDE" 
                className="w-full h-auto object-cover rounded-xl" 
                style={{ maxHeight: '500px' }}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full">ZONE CAMLAIT</span>
                <h4 className="text-xl font-bold mt-2">CAMLAIT YAOUNDE</h4>
                {/* <p className="text-white/80">CAMLAIT YAOUNDE</p> */}
              </div>
            </div>
            <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-green-300/20 rounded-full blur-3xl animate-pulse z-0"></div>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-6 text-green-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              Notre Direction
            </h3>
            <p className={`mb-6 text-gray-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            Sous une direction dynamique, CAMLAIT a connu une transformation significative au cours de la dernière décennie. Fort de plus de 25 ans d'expérience dans l'industrie alimentaire, notre leader apporte une expertise inestimable 
            et une passion pour l'innovation à notre entreprise.
            </p>
            <p className={`mb-6 text-gray-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            Notre PDG a mis en œuvre une stratégie audacieuse pour moderniser nos installations, élargir notre gamme de produits et renforcer notre engagement envers
             la durabilité et la responsabilité sociale.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone size={16} className="mr-2" /> Contacter la Direction
              </Button>
              <Button variant="outline" className="text-black border-green-600 hover:bg-green-50">
                <Mail size={16} className="mr-2" /> Email
              </Button>
            </div>
          </div>
        </div>
        
        {/* Section sur la famille */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className={`text-2xl font-bold mb-6 text-green-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
              Notre Vision
            </h3>
            <p className={`mb-6 text-gray-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            Fabrication des Yaourts à base du soja (40%) : NOURISS ;.
             Fabrication des boissons nutritives et des goûters à base de fruits de saison, et de soja (17%)
            :Fruidou, RIVERR SOY, BREAKSOY ;
            Fabrication des Yaourts et crèmes glacée à base du lait de vache (28%) : CAMLAIT SUCRE,
            JEM, PRESTIGE, CREME GLACEE ;
            Conditionnement poudre de lait instantané en sachet (15%)   
            </p>
            <p className={`mb-6 text-gray-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            CAMLAIT SA. Se fait accompagner par des partenaires stratégiques de référence de classe
            internationale et locale qui respectent le même sens des valeurs que ceux imposés par le
            marché et qui permettent d’assurer un service de qualité auprès de la clientèle. Notamment :
            TETRA-PAK, INGREDIA, GAZ du Cameroun, PLASTICAM, MULTIPRINT, POINCAM, BIA
            Cameroun, ICRAFON
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
              <Button className="bg-green-600 hover:bg-green-700">
                Nos Valeurs
              </Button>
              <Button variant="outline" className="text-black border-green-600 hover:bg-green-50">
                Responsabilité Sociale <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className={`relative z-10 rounded-xl overflow-hidden shadow-xl transition-all duration-1000 transform ${animateElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
              <img 
                src="/images/labo2.png" 
                alt="Famille CAMLAIT" 
                className="w-full h-auto object-cover rounded-xl" 
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full">Tradition</span>
                <h4 className="text-xl font-bold mt-2">Trois générations d'excellence</h4>
              </div>
            </div>
            <div className="absolute top-10 -right-5 w-40 h-40 bg-green-300/20 rounded-full blur-3xl animate-pulse z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

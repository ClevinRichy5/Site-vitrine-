
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { equipe, camlaitOffice, ceo, family, companyHistory } from "../components/src/images"
import Link from 'next/link';
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
      <div className="container mx-auto px-4 md:px-8">
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
            CAMLAIT, entreprise agroalimentaire camerounaise, 
            est le leader incontesté dans la production et la 
            distribution de produits laitiers. Fondée en 1971, elle s'est rapidement imposée comme un acteur majeur du secteur agroalimentaire au Cameroun, alliant expertise
            et savoir-faire pour offrir des produits de haute qualité.
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
              <img 
                src={companyHistory} 
                alt="Histoire de CAMLAIT" 
                className="w-full h-auto object-cover rounded-xl"
                style={{ maxHeight: '500px' }}
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
              <img 
                src={ceo} 
                alt="Certification ISO" 
                className="w-full h-auto object-cover rounded-xl" 
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full">Certification Iso</span>
                <h4 className="text-xl font-bold mt-2">Certification 12/2371</h4>
                <p className="text-white/80">SGS</p>
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
            Demain, CAMLAIT veut être une entreprise entièrement africaine de référence
            mondiale, dans le domaine de la valorisation des matières premières issues de
            l'agriculture locale et de l'élevage.
            </p>
            <p className={`mb-6 text-gray-700 transition-all duration-700 ${animateElements ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            Aujourd'hui, CAMLAIT est une entreprise camerounaise à vocation africaine,
            spécialisée dans la transformation et la distribution des produits alimentaires de très
            grande qualité.
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
                src={family} 
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

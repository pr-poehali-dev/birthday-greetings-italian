import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const photos = [
    {
      id: 1,
      src: '/img/b0acebbc-4a93-4f88-ba9f-8b4e78c2f734.jpg',
      title: 'Festa di Compleanno',
      memory: 'Un momento magico pieno di gioia e colori!'
    },
    {
      id: 2,
      src: '/img/461e637b-dc1d-4c5c-882e-e98d856b69d9.jpg',
      title: 'Ricordi Speciali',
      memory: 'Insieme agli amici più cari, risate infinite!'
    },
    {
      id: 3,
      src: '/img/692db472-dd97-4638-867b-099b3ccae6fd.jpg',
      title: 'Dolce Torta',
      memory: 'La torta più deliziosa per una giornata perfetta!'
    }
  ];

  const wishes = [
    {
      id: 1,
      name: 'Marco & Giulia',
      message: 'Tanti auguri di buon compleanno! Che questo nuovo anno ti porti tanta felicità, amore e successo in tutto quello che fai. Sei una persona speciale e meriti il meglio!',
      avatar: '🎂'
    },
    {
      id: 2,
      name: 'La Famiglia',
      message: 'Buon compleanno tesoro! Siamo così orgogliosi di te e di tutto quello che hai raggiunto. Ti auguriamo un anno pieno di sorprese meravigliose e momenti indimenticabili!',
      avatar: '❤️'
    },
    {
      id: 3,
      name: 'Gli Amici di Sempre',
      message: 'Auguri di cuore! La tua amicizia è un regalo prezioso. Che questo compleanno sia solo l\'inizio di un anno fantastico pieno di avventure e bei ricordi insieme!',
      avatar: '🎈'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-party-mint via-white to-party-mint">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFE66D', '#DDA0DD'][i % 5],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-party-coral/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'hero', label: 'Buon Compleanno', icon: 'PartyPopper' },
              { id: 'photos', label: 'Foto', icon: 'Camera' },
              { id: 'wishes', label: 'Auguri', icon: 'Heart' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-party-coral text-white shadow-lg' 
                    : 'text-party-coral hover:bg-party-coral/10'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 space-x-4">
            {['🎈', '🎉', '🎂', '🎁', '🎊'].map((emoji, index) => (
              <span
                key={index}
                className="text-6xl animate-bounce-gentle"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold text-party-coral mb-6 animate-bounce-gentle">
            BUON
          </h1>
          <h1 className="text-7xl md:text-9xl font-bold text-party-turquoise mb-8 animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>
            COMPLEANNO!
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-light leading-relaxed">
            Un giorno speciale per una persona straordinaria! 🌟<br />
            Celebriamo insieme questo momento magico!
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              onClick={() => scrollToSection('photos')}
              className="bg-party-sky hover:bg-party-sky/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Camera" className="mr-2" size={24} />
              Guarda le Foto
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('wishes')}
              className="border-party-coral text-party-coral hover:bg-party-coral hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Heart" className="mr-2" size={24} />
              Leggi gli Auguri
            </Button>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-party-coral mb-4">
              Ricordi Preziosi 📸
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ogni foto racconta una storia, ogni momento è un tesoro da custodire nel cuore
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-party-sky mb-2">{photo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{photo.memory}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" className="py-20 px-6 bg-gradient-to-r from-party-lavender/20 to-party-yellow/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-party-coral mb-4">
              Auguri di Cuore 💝
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Parole piene d'amore da chi ti vuole bene
            </p>
          </div>
          
          <div className="space-y-8">
            {wishes.map((wish, index) => (
              <Card
                key={wish.id}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-party-turquoise"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl bg-party-mint rounded-full w-16 h-16 flex items-center justify-center">
                    {wish.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-party-sky mb-3">{wish.name}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "{wish.message}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-party-coral text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center space-x-3 mb-6">
            {['🎈', '🎂', '🎉', '🎁', '🎊', '🌟'].map((emoji, index) => (
              <span
                key={index}
                className="text-3xl animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Che questo sia solo l'inizio di un anno fantastico! ✨
          </h3>
          <p className="text-lg opacity-90">
            Con tutto il nostro amore e i migliori auguri per il tuo compleanno
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
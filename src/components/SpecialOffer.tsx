
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 OFFRE LIMITÉE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Réservez Maintenant et Économisez <span className="text-yellow-300">25%</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Profitez de notre offre spéciale pour découvrir l'hospitalité exceptionnelle de l'Hôtel Bambou
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-80">Jours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-80">Heures</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-80">Secondes</div>
            </div>
          </div>

          <Button 
            onClick={scrollToReservation}
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Profiter de l'Offre Maintenant
          </Button>
          <p className="text-sm mt-4 opacity-80">
            * Offre valable pour les réservations effectuées dans les 7 prochains jours
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

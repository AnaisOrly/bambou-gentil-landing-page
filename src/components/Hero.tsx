
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/25b17afa-4179-4a7c-a079-de0a69691c13.png')"
        }}
      ></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bienvenue à l'<span className="text-yellow-400">Hôtel Bambou</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Votre séjour confortable à Port-Gentil - L'hospitalité gabonaise au cœur de votre voyage d'affaires ou de détente
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToReservation}
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Réserver Maintenant
          </Button>
          <p className="text-sm opacity-80">★★★★★ Excellent (4.8/5) - 127 avis</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

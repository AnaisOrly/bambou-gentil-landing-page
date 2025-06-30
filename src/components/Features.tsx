
import { Wifi, Users, Bed, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Chambres Confortables",
      description: "Chambres modernes avec climatisation, TV satellite et tout le confort nécessaire"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Haut Débit",
      description: "Connexion internet gratuite et rapide, idéale pour les voyageurs d'affaires"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accueil Familial",
      description: "Service personnalisé et chaleureux dans la plus pure tradition gabonaise"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Réservation Flexible",
      description: "Politique d'annulation flexible et service de conciergerie 24h/24"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pourquoi Choisir l'<span className="text-green-600">Hôtel Bambou</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les avantages qui font de notre établissement le choix idéal pour votre séjour à Port-Gentil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

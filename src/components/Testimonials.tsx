
const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Consultante internationale",
      content: "Un accueil exceptionnel ! L'équipe de l'Hôtel Bambou a rendu mon séjour d'affaires à Port-Gentil parfait. Les chambres sont confortables et le service impeccable.",
      rating: 5
    },
    {
      name: "Pierre Nguema",
      role: "Directeur commercial",
      content: "Je recommande vivement cet hôtel. La connexion WiFi est excellente pour le travail et l'ambiance familiale est très appréciable après de longues journées.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Touriste",
      content: "Notre famille a passé un séjour magnifique. Les enfants ont adoré la piscine et nous avons été touchés par la gentillesse du personnel. Merci pour ces moments inoubliables !",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ce Que Disent Nos <span className="text-yellow-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

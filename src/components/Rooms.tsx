
const Rooms = () => {
  const rooms = [
    {
      image: "/lovable-uploads/18c7172c-ed6e-464c-a828-f3ee9f169bde.png",
      title: "Suite Familiale",
      description: "Parfaite pour les familles, avec salon séparé et tout le confort moderne"
    },
    {
      image: "/lovable-uploads/d0a2b48a-7295-45fc-b7ff-6877a36b2847.png",
      title: "Chambre Standard",
      description: "Confortable et moderne, idéale pour les voyageurs d'affaires"
    },
    {
      image: "/lovable-uploads/c852182e-920d-42c9-9d02-3e23bcce6a99.png",
      title: "Suite avec Salon",
      description: "Espace de détente avec canapé et vue magnifique"
    },
    {
      image: "/lovable-uploads/af4041b4-23bd-410d-95e8-69604cb9029a.png",
      title: "Chambre Deluxe",
      description: "Décoration soignée avec éléments artisanaux locaux"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="text-yellow-600">Chambres</span> & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des espaces conçus pour votre confort, alliant modernité et authenticité gabonaise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.title}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;

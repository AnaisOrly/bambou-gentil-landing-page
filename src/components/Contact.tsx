
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de réservation envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.",
    });
    console.log('Réservation:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Réservez Votre <span className="text-green-600">Séjour</span>
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin">Date d'arrivée *</Label>
                    <Input
                      id="checkin"
                      name="checkin"
                      type="date"
                      value={formData.checkin}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout">Date de départ *</Label>
                    <Input
                      id="checkout"
                      name="checkout"
                      type="date"
                      value={formData.checkout}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests">Nombre de personnes</Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5+">5+ personnes</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Demandes spéciales, questions..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  Envoyer ma Demande de Réservation
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Informations Pratiques</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Adresse</h4>
                    <p className="text-gray-600">Hôtel Bambou<br />Port-Gentil, Gabon</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Téléphone</h4>
                    <p className="text-gray-600">+241 XX XX XX XX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Email</h4>
                    <p className="text-gray-600">contact@hotelbambou.ga</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Check-in / Check-out</h4>
                    <p className="text-gray-600">Arrivée : 14h00<br />Départ : 12h00</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Pourquoi Réserver Directement ?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Meilleurs tarifs garantis</li>
                  <li>✓ Annulation flexible</li>
                  <li>✓ Service client personnalisé</li>
                  <li>✓ Upgrades gratuits selon disponibilité</li>
                </ul>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/66c91e1b-55d2-4fb2-ab66-e46d57311109.png"
                  alt="Piscine de l'Hôtel Bambou"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold text-center">
                    Détendez-vous dans notre<br />espace piscine tropical
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

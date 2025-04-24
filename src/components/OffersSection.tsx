const offers = [
  {
    name: "Cours / Conférence",
    color: "bg-blue-100",
    description:
      "Une intervention inspirante pour démystifier le code, l’IA ou l’automatisation auprès de publics non-techniques.",
    objectifs: [
      "Comprendre les enjeux du numérique",
      "Découvrir les bases du code ou de l’IA",
      "Stimuler la curiosité et l’ouverture",
    ],
    exemple: "Conférence « L’IA pour les communicants » (2h) avec démo live",
    prix: "400€ / demi-journée",
    formats: "1-2h",
  },
  {
    name: "Atelier pratique",
    color: "bg-green-100",
    description:
      "Un atelier interactif pour expérimenter concrètement le code, l’IA ou l’automatisation sur des cas réels.",
    objectifs: [
      "Pratiquer sur des outils concrets",
      "Développer des compétences utiles",
      "Favoriser l’apprentissage par l’action",
    ],
    exemple: "Atelier « Créer un chatbot avec ChatGPT » (3h) en petits groupes",
    prix: "600€ / jour",
    formats: "2-4h",
  },
  {
    name: "Cycle hybride",
    color: "bg-purple-100",
    description:
      "Un parcours sur-mesure alternant théorie, pratique et accompagnement pour une montée en compétences progressive.",
    objectifs: [
      "Approfondir sur plusieurs séances",
      "Accompagner un projet ou une classe",
      "Adapter le rythme et les contenus",
    ],
    exemple: "Cycle « Automatiser sa veille avec l’IA » (6x2h) sur un semestre",
    prix: "Sur devis",
    formats: "6-12h",
  },
];

export default function OffersSection() {
  return (
    <section className="py-16 px-4" id="offres">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
          Mes offres d’intervention
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-md p-6 flex flex-col ${offer.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {offer.name}
              </h3>
              <p className="mb-3 text-gray-700">{offer.description}</p>
              <ul className="mb-3 text-left list-disc list-inside text-gray-800">
                {offer.objectifs.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
              <div className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Exemple :</span> {offer.exemple}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-white/80 border border-blue-200 rounded px-3 py-1 text-blue-800 text-xs font-medium">
                  {offer.prix}
                </span>
                <span className="bg-white/80 border border-blue-200 rounded px-3 py-1 text-blue-800 text-xs font-medium">
                  Format : {offer.formats}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Tableau récapitulatif */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-2 px-4 font-semibold text-blue-900">Offre</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Prix</th>
                <th className="py-2 px-4">Format</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, idx) => (
                <tr key={idx} className="border-t border-gray-100">
                  <td className="py-2 px-4 font-medium text-blue-900">
                    {offer.name}
                  </td>
                  <td className="py-2 px-4">{offer.description}</td>
                  <td className="py-2 px-4">{offer.prix}</td>
                  <td className="py-2 px-4">{offer.formats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

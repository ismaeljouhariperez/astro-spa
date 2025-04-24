const testimonials = [
  {
    name: "Sophie",
    role: "Étudiante en marketing",
    avatar: "👩‍🎓",
    text: `Grâce à ces ateliers, j'ai enfin compris comment fonctionne l'IA et je me sens beaucoup plus à l'aise pour en parler en entreprise !`,
  },
  {
    name: "Julien",
    role: "Responsable pédagogique",
    avatar: "👨‍🏫",
    text: "Ismaël sait rendre la technique accessible et passionnante. Les étudiants ressortent motivés et avec des compétences concrètes.",
  },
  {
    name: "Fatou",
    role: "Étudiante en communication",
    avatar: "🧑‍💻",
    text: "Les exemples étaient super concrets et adaptés à notre niveau. J'ai adoré la pédagogie et l'énergie !",
  },
];

export default function TestimonialsSection(): JSX.Element {
  return (
    <section className="bg-blue-50 py-16 px-4" id="temoignages">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
          Témoignages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-3" aria-hidden>
                {t.avatar}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{t.text}"
              </blockquote>
              <div className="font-semibold text-blue-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

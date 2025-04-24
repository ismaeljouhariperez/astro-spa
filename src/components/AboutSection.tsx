const facts = [
  { icon: "💼", label: "8+ ans d’expérience" },
  { icon: "🧑‍🏫", label: "Développeur & intervenant pédagogique" },
  { icon: "🤖", label: "Spécialiste IA & automatisation" },
  { icon: "🎯", label: "Interventions adaptables à tous niveaux" },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          À propos de moi
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Passionné par la transmission et la pédagogie, j'ai accompagné des
          centaines d'étudiants et de professionnels dans la découverte du code,
          de l'IA et de l'automatisation. Mon approche : rendre la technique
          accessible, concrète et motivante, quel que soit le niveau de départ.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-4 bg-blue-50 rounded-lg py-4 px-6 shadow-sm"
            >
              <span className="text-3xl" aria-hidden>
                {fact.icon}
              </span>
              <span className="text-lg font-medium text-blue-900">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

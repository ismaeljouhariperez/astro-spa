export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-blue-50 to-white text-center px-4 py-12">
      <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg bg-gray-100 flex items-center justify-center">
        {/* Remplace l'image ci-dessous par ta vraie photo */}
        <img
          src="/images/photo-pro.jpg"
          alt="Photo professionnelle"
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
        Accompagner les étudiants en communication & marketing dans la
        compréhension concrète du code et de l'IA.
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-700 mb-6">
        Développeur fullstack freelance, spécialisé en IA. J'aide les publics
        non-techniques à comprendre et utiliser la technique sans jargon, avec
        pédagogie et enthousiasme.
      </p>
      <a
        href="#offres"
        className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition-colors duration-200"
      >
        Voir les offres disponibles
      </a>
    </section>
  );
}

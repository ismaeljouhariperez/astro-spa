export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
          Contact
        </h2>
        <form className="bg-blue-50 rounded-xl shadow-md p-8 flex flex-col gap-4 mb-8">
          <div>
            <label
              htmlFor="name"
              className="block text-blue-900 font-medium mb-1"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-blue-900 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-blue-900 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow mt-2 transition-colors duration-200"
          >
            Envoyer
          </button>
        </form>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <a
            href="https://calendly.com/votre-lien"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium"
          >
            <span>📅</span> Prendre rendez-vous (Calendly)
          </a>
          <a
            href="https://linkedin.com/in/votreprofil"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium"
          >
            <span>🔗</span> Me contacter sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

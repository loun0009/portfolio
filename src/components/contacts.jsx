import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_b64aaaw', 'template_ytpteoh', form.current, 'MHNxQz9prKPI9MNou')
      .then(() => alert('Message envoyé avec succès !'))
      .catch(() => alert("Erreur lors de l’envoi du message."))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Travaillons Ensemble
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bloc gauche : infos de contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Informations de contact
              </h3>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a
                      href="mailto:loungoundji.e@gmail.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      loungoundji.e@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Téléphone</h4>
                    <a
                      href="tel:+33661059145"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      +33 6 61 05 91 45
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Localisation</h4>
                    <p className="text-slate-600">Paris, France</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Retrouvez-moi sur</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/loun0009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/enzo-loungoundji-b2278a291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bloc droit : formulaire */}
            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Envoyez-moi un message
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" 
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

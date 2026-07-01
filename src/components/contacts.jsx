import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

function Contact() {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)
  const [submitState, setSubmitState] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setSubmitState('idle')

    emailjs
      .sendForm('service_b64aaaw', 'template_ytpteoh', form.current, 'MHNxQz9prKPI9MNou')
      .then(() => {
        setSubmitState('success')
        setIsSending(false)
        form.current?.reset()
      })
      .catch(() => {
        setSubmitState('error')
        setIsSending(false)
      })
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="section-shell px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Contact</p>
            <h2 className="section-title mt-4 leading-tight">
              Une prise de contact simple, directe et claire.
            </h2>
            <p className="section-copy mt-4">
              Un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="glass-panel rounded-[2rem] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Informations de contact
              </h3>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-sky-50 p-3">
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
                  <div className="rounded-2xl bg-sky-50 p-3">
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
                  <div className="rounded-2xl bg-sky-50 p-3">
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

              <div className="mt-10 rounded-[1.5rem] border border-emerald-200 bg-emerald-50/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Disponibilité</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Je suis actuellement ouvert aux opportunités d’alternance en développement web, application ou logiciel
                  pour la rentrée 2026. N’hésitez pas à me contacter pour toute proposition.
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="glass-panel rounded-[2rem] p-8 md:p-10">
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
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#0369a1_55%,#22c55e_100%)] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? 'Envoi en cours...' : 'Envoyer'}
                  {!isSending && <Send className="h-4 w-4" />}
                </button>

                {submitState === 'success' && (
                  <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Message envoyé avec succès.
                  </div>
                )}

                {submitState === 'error' && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    Une erreur est survenue pendant l’envoi. Vous pouvez aussi me contacter directement par email.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

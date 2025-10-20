import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Travaillons Ensemble
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un projet en tête ? N'hésitez pas à me contacter pour en discuter
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                      loungoundji.e@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Téléphone</h4>
                    <a href="tel:+33123456789" className="text-slate-600 hover:text-blue-600 transition-colors">
                      +33 6 61 05 91 45
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
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
                    className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-6 h-6 text-slate-900" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/enzo-loungoundji-b2278a291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-slate-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
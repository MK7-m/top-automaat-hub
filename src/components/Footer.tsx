import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Car, Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hallo! Ik heb interesse in rijlessen bij Top Automaat Les.`);
    window.open(`https://wa.me/31614681863?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+31614681863', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:Laithrazzak@gmail.com', '_self');
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Top Automaat Les</h3>
                <p className="text-sm text-white/70">Driving School</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Professionele rijlessen in Nederland met ervaren instructeurs. 
              Wij helpen je om veilig en zelfverzekerd te rijden.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">
                Rijles 60 minuten - €50
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Compleet pakket - €1000
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Proefles - €35
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Praktijkexamen begeleiding
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                +31 6 14681863
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                Laithrazzak@gmail.com
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-secondary transition-colors" />
                WhatsApp ons
              </button>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Beschikbaarheid</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <div>Ma-Vr: 08:00 - 20:00</div>
                  <div>Za-Zo: 09:00 - 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  Nederland<br />
                  Flexibele leslocaties
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={handleWhatsAppClick}
                className="text-white/60 hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={handlePhoneClick}
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Telefoon"
              >
                <Phone className="w-5 h-5" />
              </button>
              <button
                onClick={handleEmailClick}
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
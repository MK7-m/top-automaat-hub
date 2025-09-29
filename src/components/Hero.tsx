import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hallo! Ik wil graag meer informatie over rijlessen bij Top Automaat Les.`);
    window.open(`https://wa.me/31614681863?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+31614681863', '_self');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-soft via-background to-background-accent pt-20 md:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-secondary/20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-accent/20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-gradient-primary">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => onNavigate('services')}
              className="btn-hero w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              {t('hero.cta')}
            </Button>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 bg-white/80 border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">{t('hero.phone')}</span>
                <span className="sm:hidden">Bel nu</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-success-soft border-success/20 hover:bg-success/10 text-success-foreground transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hero p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ervaren Instructeurs</h3>
              <p className="text-sm text-muted-foreground">Professionele begeleiding van start tot finish</p>
            </div>

            <div className="card-hero p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Hoog Slagingspercentage</h3>
              <p className="text-sm text-muted-foreground">Bewezen resultaten en tevreden leerlingen</p>
            </div>

            <div className="card-hero p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Flexibele Planning</h3>
              <p className="text-sm text-muted-foreground">Lessen op jouw gewenste tijden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
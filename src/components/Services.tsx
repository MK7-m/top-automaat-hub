import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Package, Star, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleServiceBooking = (serviceType: string) => {
    const services = {
      'service1': 'Rijles 60 minuten - €50',
      'service2': 'Compleet Pakket - €1000 (15 lessen + praktijkexamen)',
      'service3': 'Proefles - €35'
    };
    
    const message = encodeURIComponent(
      `Hallo! Ik wil graag boeken voor: ${services[serviceType as keyof typeof services]}. Kunnen we een afspraak maken?`
    );
    window.open(`https://wa.me/31614681863?text=${message}`, '_blank');
  };

  const services = [
    {
      id: 'service1',
      icon: <Clock className="w-8 h-8" />,
      title: t('service1.title'),
      price: t('service1.price'),
      description: t('service1.description'),
      cta: t('service1.cta'),
      features: [
        '60 minuten persoonlijke les',
        'Ervaren instructeur',
        'Moderne lesauto',
        'Flexibele planning'
      ],
      gradient: 'from-primary-soft to-primary/20',
      popular: false
    },
    {
      id: 'service2',
      icon: <Package className="w-8 h-8" />,
      title: t('service2.title'),
      price: t('service2.price'),
      description: t('service2.description'),
      cta: t('service2.cta'),
      features: [
        '15 rijlessen van 60 min',
        'Praktijkexamen inclusief',
        'Theorie ondersteuning',
        'Examengarantie mogelijk'
      ],
      gradient: 'from-secondary-soft to-secondary/20',
      popular: true
    },
    {
      id: 'service3',
      icon: <Star className="w-8 h-8" />,
      title: t('service3.title'),
      price: t('service3.price'),
      description: t('service3.description'),
      cta: t('service3.cta'),
      features: [
        'Kennismakingsles',
        'Niveaubepaling',
        'Persoonlijk advies',
        'Geen verplichtingen'
      ],
      gradient: 'from-accent-soft to-accent/20',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">{t('services.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${service.gradient} border-0 ${
                service.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Populair
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto ${
                  service.id === 'service1' ? 'bg-primary/10 text-primary' :
                  service.id === 'service2' ? 'bg-secondary/10 text-secondary-foreground' :
                  'bg-accent/10 text-accent-foreground'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{service.price}</span>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <CardDescription className="text-center text-muted-foreground mb-6 text-base">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handleServiceBooking(service.id)}
                  className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    service.id === 'service1' ? 'btn-hero' :
                    service.id === 'service2' ? 'btn-secondary' :
                    'btn-accent'
                  }`}
                  size="lg"
                >
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card-soft p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Waarom kiezen voor Top Automaat Les?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Hoog Slagingspercentage</h4>
                <p className="text-sm text-muted-foreground">95% van onze leerlingen slaagt in één keer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Ervaren Instructeurs</h4>
                <p className="text-sm text-muted-foreground">Meer dan 10 jaar ervaring in rijles geven</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Moderne Lesauto's</h4>
                <p className="text-sm text-muted-foreground">Veilige en moderne auto's voor optimaal leren</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
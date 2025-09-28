import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact: React.FC = () => {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        toast({
          title: "Vereiste velden ontbreken",
          description: "Vul alle vereiste velden in om door te gaan.",
          variant: "destructive"
        });
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Ongeldig e-mailadres",
          description: "Voer een geldig e-mailadres in.",
          variant: "destructive"
        });
        return;
      }

      // Create email body
      const emailBody = encodeURIComponent(`
Nieuwe contactaanvraag van Top Automaat Les website:

Naam: ${formData.name}
E-mail: ${formData.email}
Telefoon: ${formData.phone}
Gewenste service: ${formData.service || 'Niet gespecificeerd'}

Bericht:
${formData.message}

---
Dit bericht is verzonden via het contactformulier op de website.
      `);

      // Open email client
      window.location.href = `mailto:Laithrazzak@gmail.com?subject=Nieuwe contactaanvraag - ${formData.name}&body=${emailBody}`;
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met je op."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw of neem direct contact met ons op.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hallo! Ik heb interesse in rijlessen bij Top Automaat Les. Kunnen we een afspraak maken?`);
    window.open(`https://wa.me/31614681863?text=${message}`, '_blank');
  };
  const handlePhoneClick = () => {
    window.open('tel:+31614681863', '_self');
  };
  const handleEmailClick = () => {
    window.open('mailto:Laithrazzak@gmail.com', '_self');
  };
  return <section id="contact" className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-soft border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Stuur ons een bericht</CardTitle>
              <CardDescription className="text-muted-foreground">
                Vul het formulier in en we nemen zo snel mogelijk contact met je op.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      {t('contact.form.name')} *
                    </Label>
                    <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Je volledige naam" className="bg-background border-border/50 focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      {t('contact.form.phone')} *
                    </Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="+31 6 12345678" className="bg-background border-border/50 focus:border-primary" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    {t('contact.form.email')} *
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="je.email@voorbeeld.com" className="bg-background border-border/50 focus:border-primary" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-medium">
                    {t('contact.form.service')}
                  </Label>
                  <Select value={formData.service} onValueChange={value => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-background border-border/50 focus:border-primary">
                      <SelectValue placeholder="Kies een service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rijles-60min">Rijles 60 minuten (€50)</SelectItem>
                      <SelectItem value="compleet-pakket">Compleet pakket (€1000)</SelectItem>
                      <SelectItem value="proefles">Proefles (€35)</SelectItem>
                      <SelectItem value="overig">Overig</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t('contact.form.message')} *
                  </Label>
                  <Textarea id="message" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} placeholder="Vertel ons over je wensen en vragen..." rows={4} className="bg-background border-border/50 focus:border-primary resize-none" required />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full btn-hero py-3 font-semibold">
                  {isSubmitting ? 'Verzenden...' : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="card-soft border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Direct contact</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Liever direct contact? Gebruik een van deze opties.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handleWhatsAppClick} className="w-full btn-secondary justify-start gap-3 py-4" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium">{t('contact.whatsapp')}</div>
                    <div className="text-sm opacity-80">+31 6 14681863</div>
                  </div>
                </Button>

                <Button onClick={handlePhoneClick} variant="outline" className="w-full justify-start gap-3 py-4 bg-background hover:bg-primary/5 border-primary/20" size="lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">Bel direct</div>
                    <div className="text-sm text-muted-foreground">+31 6 14681863</div>
                  </div>
                </Button>

                <Button onClick={handleEmailClick} variant="outline" className="w-full justify-start gap-3 py-4 bg-background hover:bg-accent/5 border-accent/20" size="lg">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">{t('contact.email')}</div>
                    <div className="text-sm text-muted-foreground">Laithrazzak@gmail.com</div>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card className="card-soft border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Bedrijfsinformatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Servicegebied</div>
                    <div className="text-sm text-muted-foreground">Amsterdam en omgeving</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Beschikbaarheid</div>
                    <div className="text-sm text-muted-foreground">
                      Ma-Vr: 08:00 - 20:00<br />
                      Za-Zo: 09:00 - 18:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
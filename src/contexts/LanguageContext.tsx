import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'nl' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.gallery': 'Galerij',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Professionele Rijlessen in Nederland',
    'hero.subtitle': 'Leer veilig rijden met ervaren instructeurs. Start vandaag nog met je rijbewijs!',
    'hero.cta': 'Plan je rijles',
    'hero.phone': 'Bel direct: +31 6 14681863',
    
    // Services
    'services.title': 'Onze Diensten',
    'services.subtitle': 'Kies het pakket dat bij jou past',
    
    'service1.title': 'Rijles 60 minuten',
    'service1.price': '€50',
    'service1.description': 'Individuele rijles van 60 minuten met ervaren instructeur',
    'service1.cta': 'Plan nu',
    
    'service2.title': 'Compleet Pakket',
    'service2.price': '€1000',
    'service2.description': '15 rijlessen + praktijkexamen - Alles wat je nodig hebt voor je rijbewijs',
    'service2.cta': 'Boek nu',
    
    'service3.title': 'Proefles',
    'service3.price': '€35',
    'service3.description': 'Kennismakingsles om te kijken of we bij elkaar passen',
    'service3.cta': 'Plan nu',
    
    // Success Stories
    'success.title': 'Succesverhalen',
    'success.subtitle': 'Onze leerlingen die hun rijbewijs hebben gehaald',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Neem contact met ons op voor meer informatie',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefoon',
    'contact.form.service': 'Gewenste dienst',
    'contact.form.message': 'Bericht',
    'contact.form.submit': 'Verstuur',
    'contact.whatsapp': 'WhatsApp ons',
    'contact.email': 'E-mail ons',
    
    // Footer
    'footer.contact': 'Contact gegevens',
    'footer.services': 'Onze diensten',
    'footer.business_info': 'Bedrijfsinformatie',
    'footer.address': 'Adres',
    'footer.service_area': 'Werkgebied',
    'footer.service_area_text': 'Amsterdam en omgeving',
    'footer.hours': 'Openingstijden',
    'footer.weekdays': 'Ma-Vr',
    'footer.saturday': 'Zaterdag',
    'footer.sunday_closed': 'Zondag: Gesloten',
    'footer.rights': '© 2024 Top Automaat Les. Alle rechten voorbehouden.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Professional Driving Lessons in Netherlands',
    'hero.subtitle': 'Learn to drive safely with experienced instructors. Start your driving license journey today!',
    'hero.cta': 'Book your lesson',
    'hero.phone': 'Call now: +31 6 14681863',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Choose the package that suits you',
    
    'service1.title': '60-minute Driving Lesson',
    'service1.price': '€50',
    'service1.description': 'Individual 60-minute driving lesson with experienced instructor',
    'service1.cta': 'Plan now',
    
    'service2.title': 'Complete Package',
    'service2.price': '€1000',
    'service2.description': '15 driving lessons + practical exam - Everything you need for your license',
    'service2.cta': 'Book now',
    
    'service3.title': 'Trial Lesson',
    'service3.price': '€35',
    'service3.description': 'Get-to-know lesson to see if we\'re a good match',
    'service3.cta': 'Plan now',
    
    // Success Stories
    'success.title': 'Success Stories',
    'success.subtitle': 'Our students who passed their driving test',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch for more information',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Preferred service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.whatsapp': 'WhatsApp us',
    'contact.email': 'Email us',
    
    // Footer
    'footer.contact': 'Contact information',
    'footer.services': 'Our services',
    'footer.business_info': 'Business Information',
    'footer.address': 'Address',
    'footer.service_area': 'Service Area',
    'footer.service_area_text': 'Amsterdam and surrounding area',
    'footer.hours': 'Opening Hours',
    'footer.weekdays': 'Mon-Fri',
    'footer.saturday': 'Saturday',
    'footer.sunday_closed': 'Sunday: Closed',
    'footer.rights': '© 2024 Top Automaat Les. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.gallery': 'المعرض',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'دروس قيادة مهنية في هولندا',
    'hero.subtitle': 'تعلم القيادة الآمنة مع مدربين ذوي خبرة. ابدأ رحلة رخصة القيادة اليوم!',
    'hero.cta': 'احجز درسك',
    'hero.phone': 'اتصل الآن: +31 6 14681863',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'اختر الباقة التي تناسبك',
    
    'service1.title': 'درس قيادة 60 دقيقة',
    'service1.price': '€50',
    'service1.description': 'درس قيادة فردي لمدة 60 دقيقة مع مدرب ذو خبرة',
    'service1.cta': 'خطط الآن',
    
    'service2.title': 'الباقة الكاملة',
    'service2.price': '€1000',
    'service2.description': '15 درس قيادة + امتحان عملي - كل ما تحتاجه لرخصتك',
    'service2.cta': 'احجز الآن',
    
    'service3.title': 'درس تجريبي',
    'service3.price': '€35',
    'service3.description': 'درس تعارف لنرى إذا كنا متوافقين',
    'service3.cta': 'خطط الآن',
    
    // Success Stories
    'success.title': 'قصص النجاح',
    'success.subtitle': 'طلابنا الذين نجحوا في امتحان القيادة',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا للحصول على مزيد من المعلومات',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.service': 'الخدمة المفضلة',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    'contact.whatsapp': 'راسلنا على واتساب',
    'contact.email': 'راسلنا بالإيميل',
    
    // Footer
    'footer.contact': 'معلومات الاتصال',
    'footer.services': 'خدماتنا',
    'footer.business_info': 'معلومات الشركة',
    'footer.address': 'العنوان',
    'footer.service_area': 'منطقة الخدمة',
    'footer.service_area_text': 'أمستردام والمناطق المحيطة',
    'footer.hours': 'ساعات العمل',
    'footer.weekdays': 'الإثنين-الجمعة',
    'footer.saturday': 'السبت',
    'footer.sunday_closed': 'الأحد: مغلق',
    'footer.rights': '© 2024 Top Automaat Les. جميع الحقوق محفوظة.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['nl', 'en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
    
    // Set HTML direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage, 
        t, 
        isRTL: language === 'ar' 
      }}
    >
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
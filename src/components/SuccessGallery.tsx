import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

// Import success photos
import success1 from '@/assets/success-1.jpg';
import success2 from '@/assets/success-2.jpg';
import success3 from '@/assets/success-3.jpg';
import success4 from '@/assets/success-4.jpg';
import success5 from '@/assets/success-5.jpg';
import success6 from '@/assets/success-6.jpg';
import success7 from '@/assets/success-7.jpg';
import success8 from '@/assets/success-8.jpg';
import success9 from '@/assets/success-9.jpg';
import success10 from '@/assets/success-10.jpg';

const SuccessGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const successPhotos = [
    { id: 1, src: success1, alt: 'Happy student after passing driving test' },
    { id: 2, src: success2, alt: 'Successful driving lesson graduate' },
    { id: 3, src: success3, alt: 'Student celebrating driving license success' },
    { id: 4, src: success4, alt: 'Happy new driver with license' },
    { id: 5, src: success5, alt: 'Successful driving test completion' },
    { id: 6, src: success6, alt: 'Student celebrating with instructor' },
    { id: 7, src: success7, alt: 'New driver success story' },
    { id: 8, src: success8, alt: 'Happy student after passing exam' },
    { id: 9, src: success9, alt: 'Driving school success celebration' },
    { id: 10, src: success10, alt: 'Successful driving lesson completion' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % successPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? successPhotos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-success" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-success">{t('success.title')}</span>
            </h2>
            <Award className="w-8 h-8 text-success" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('success.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {successPhotos.map((photo, index) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-medium">Geslaagd!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  {selectedImage !== null && (
                    <>
                      <img
                        src={successPhotos[selectedImage].src}
                        alt={successPhotos[selectedImage].alt}
                        className="max-w-full max-h-full object-contain"
                      />
                      
                      {/* Navigation Buttons */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 px-4 py-2 rounded-full">
                        <span className="text-white text-sm font-medium">
                          {selectedImage + 1} / {successPhotos.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-success p-6 text-center">
              <div className="text-4xl font-bold text-success mb-2">150+</div>
              <div className="text-success-foreground font-medium">Geslaagde Leerlingen</div>
            </div>
            <div className="card-success p-6 text-center">
              <div className="text-4xl font-bold text-success mb-2">95%</div>
              <div className="text-success-foreground font-medium">Slagingspercentage</div>
            </div>
            <div className="card-success p-6 text-center">
              <div className="text-4xl font-bold text-success mb-2">5⭐</div>
              <div className="text-success-foreground font-medium">Gemiddelde Beoordeling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessGallery;
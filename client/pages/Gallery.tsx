import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  id: string;
  caption: string;
  category: "halloween" | "christmas";
  aspectRatio: "tall" | "wide" | "square";
  imageUrl?: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const halloweenImages: ImageData[] = [
    {
      id: "h1",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "halloween",
      aspectRatio: "tall",
    },
    {
      id: "h2",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "halloween",
      aspectRatio: "square",
    },
    {
      id: "h3",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "halloween",
      aspectRatio: "wide",
    },
    {
      id: "h4",
      caption: "Project: The Alpharetta Home | Detail: Warm White & Orange Roofline Lighting",
      category: "halloween",
      aspectRatio: "wide",
    },
    {
      id: "h5",
      caption: "Project: Milton Manor | Style: Full-Facade Purple & Green Uplighting",
      category: "halloween",
      aspectRatio: "tall",
    },
    {
      id: "h6",
      caption: "Project: Milton Manor | Detail: Atmospheric Fog and Pathway Lighting",
      category: "halloween",
      aspectRatio: "square",
    },
  ];

  const christmasImages: ImageData[] = [
    {
      id: "c1",
      caption: "Project: Buckhead Estate | Style: Grand Winter Wonderland Theme",
      category: "christmas",
      aspectRatio: "wide",
    },
    {
      id: "c2",
      caption: "Project: Buckhead Estate | Detail: Illuminated Reindeer Scene",
      category: "christmas",
      aspectRatio: "square",
    },
    {
      id: "c3",
      caption: "Project: Buckhead Estate | Detail: Lush, Pre-lit Garland on Porch Railings",
      category: "christmas",
      aspectRatio: "tall",
    },
    {
      id: "c4",
      caption: "Project: The Sandy Springs House | Style: Classic Warm White C9 Lighting",
      category: "christmas",
      aspectRatio: "wide",
    },
    {
      id: "c5",
      caption: "Project: The Sandy Springs House | Detail: Perfectly Wrapped Oak Tree",
      category: "christmas",
      aspectRatio: "tall",
    },
    {
      id: "c6",
      caption: "Project: Johns Creek Residence | Style: Coordinated Wreaths on Every Window",
      category: "christmas",
      aspectRatio: "square",
    },
    {
      id: "c7",
      caption: "Project: Johns Creek Residence | Detail: Elegant Entryway with Timed Lighting",
      category: "christmas",
      aspectRatio: "wide",
    },
    {
      id: "c8",
      caption: "Project: Alpharetta Family Home | Style: Fun & Festive with Classic Colors",
      category: "christmas",
      aspectRatio: "tall",
    },
  ];

  const allImages = [...halloweenImages, ...christmasImages];

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
    setCurrentIndex(allImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "tall":
        return "aspect-[3/4] row-span-2";
      case "wide":
        return "aspect-[4/3] col-span-2";
      case "square":
      default:
        return "aspect-square";
    }
  };

  const getPlaceholderColor = (category: "halloween" | "christmas") => {
    return category === "halloween" 
      ? "from-orange-100 to-purple-100" 
      : "from-holiday-green/10 to-holiday-red/10";
  };

  const ImagePlaceholder = ({ image }: { image: ImageData }) => (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br ${getPlaceholderColor(image.category)} ${getAspectRatioClass(image.aspectRatio)} transition-transform duration-300 hover:scale-105`}
      onClick={() => openLightbox(image)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <div className="w-8 h-8 bg-white/40 rounded"></div>
          </div>
          <p className="text-xs text-gray-600 font-medium">Image Placeholder</p>
        </div>
      </div>
      
      {/* Hover Caption */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white">
          <p className="text-sm font-medium leading-tight">{image.caption}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-cream via-white to-holiday-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-holiday-green mb-6">
            Inspiration for Your Holiday Home
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Welcome to our portfolio. Here you'll find a curated collection of our favorite projects, showcasing the creativity, quality, and meticulous attention to detail we bring to every home. We hope this gallery inspires you and helps you envision the magic we can create together.
          </p>
        </div>
      </section>

      {/* Halloween Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green mb-4">
              Halloween Designs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From elegantly spooky to fun and festive, our Halloween designs create unforgettable atmosphere for your family and neighborhood.
            </p>
          </div>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {halloweenImages.map((image) => (
              <ImagePlaceholder key={image.id} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Christmas Section */}
      <section className="py-20 lg:py-24 bg-holiday-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green mb-4">
              Christmas & Holiday Designs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Timeless elegance and festive grandeur are the hallmarks of our Christmas designs. We create warm, inviting, and breathtaking displays that become the centerpiece of your holiday season.
            </p>
          </div>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {christmasImages.map((image) => (
              <ImagePlaceholder key={image.id} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green mb-6">
            Inspired By What You See?
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Every great holiday display starts with a simple conversation. Let's discuss your vision and create a custom plan for your home. Contact us today to schedule your complimentary, no-obligation design consultation.
          </p>
          <Link to="/free-consultation">
            <Button
              size="lg"
              className="bg-holiday-red hover:bg-holiday-red-dark text-white text-lg px-8 py-6"
            >
              Request Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className={`${getAspectRatioClass(selectedImage.aspectRatio).replace('row-span-2', '').replace('col-span-2', '')} max-w-3xl max-h-[80vh] bg-gradient-to-br ${getPlaceholderColor(selectedImage.category)} rounded-lg overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-white/40 rounded"></div>
                  </div>
                  <p className="text-white text-lg font-medium">Image Placeholder</p>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

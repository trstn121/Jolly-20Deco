import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  id: string;
  caption: string;
  category: "architectural" | "seasonal" | "themed";
  aspectRatio: "tall" | "wide" | "square";
  imageUrl?: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const architecturalImages: ImageData[] = [
    // Architectural Lighting images will be added when available
  ];

  const seasonalImages: ImageData[] = [
    // Seasonal Accents images will be added when available
  ];

  const themedImages: ImageData[] = [
    {
      id: "h1",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "themed",
      aspectRatio: "tall",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fc32c3788289e49a19ec9160612d6f620?format=webp&width=800",
    },
    {
      id: "h2",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "themed",
      aspectRatio: "square",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F289612d4b3654b879557478d8c21bbe5?format=webp&width=800",
    },
    {
      id: "h3",
      caption: "Project: Crabapple Home Halloween | Classic Minimal Style",
      category: "themed",
      aspectRatio: "wide",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fb0a89b0d83f74da7b11ded7e74346aaa?format=webp&width=800",
    },
    {
      id: "h4",
      caption: "Custom Holiday Display | Bespoke Seasonal Design",
      category: "themed",
      aspectRatio: "square",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F7407ca2d9726403dabda16fd95f4e130?format=webp&width=800",
    },
    {
      id: "h5",
      caption: "Elegant Estate Transformation | Luxury Holiday Lighting",
      category: "themed",
      aspectRatio: "tall",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F4a0fd848ed144b91b2bede8b8448289a?format=webp&width=800",
    },
    {
      id: "h6",
      caption: "Grand Entryway Design | Premium Seasonal Accents",
      category: "themed",
      aspectRatio: "wide",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F23042ec71e4140878a85d5b566e5592d?format=webp&width=800",
    },
  ];

  const allImages = [...architecturalImages, ...seasonalImages, ...themedImages];

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
        return "aspect-[3/4] lg:row-span-2";
      case "wide":
        return "aspect-[4/3] md:col-span-2";
      case "square":
      default:
        return "aspect-square";
    }
  };

  const getPlaceholderColor = (category: "architectural" | "seasonal" | "themed") => {
    switch (category) {
      case "architectural":
        return "from-accent/10 to-primary/10";
      case "seasonal":
        return "from-accent/10 to-accent/20";
      case "themed":
      default:
        return "from-orange-100 to-purple-100";
    }
  };

  const ImagePlaceholder = ({ image }: { image: ImageData }) => (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl ${getAspectRatioClass(image.aspectRatio)} transition-all duration-300 hover:scale-105 hover:shadow-accent/20`}
      onClick={() => openLightbox(image)}
    >
      {image.imageUrl ? (
        <img
          src={image.imageUrl}
          alt={image.caption}
          className="w-full h-full object-cover"
          style={image.id === "h2" ? { transform: 'rotate(90deg) scale(1.4)' } : image.id === "h6" ? { transform: 'rotate(90deg)' } : undefined}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${getPlaceholderColor(image.category)} flex items-center justify-center`}>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <div className="w-8 h-8 bg-background/40 rounded"></div>
            </div>
            <p className="text-xs text-muted-foreground font-medium">Image Placeholder</p>
          </div>
        </div>
      )}

      {/* Hover Caption Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
        <div className="p-6 w-full">
          <p className="text-background text-sm font-medium leading-tight drop-shadow-md">{image.caption}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
            Inspiration for Your Holiday Home
          </h1>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed">
            Welcome to our curated portfolio. Each image showcases our dedication to <span className="font-semibold">architectural precision</span> and the art of <span className="font-semibold">effortless elegance</span>. We invite you to explore this collection and envision the transformative experience we can create for your estate.
          </p>
        </div>
      </section>

      {/* Architectural Lighting Masterpieces */}
      {architecturalImages.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4 font-heading">
                Architectural Lighting Masterpieces
              </h2>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Illumination designed to enhance and celebrate the unique architectural character of distinguished estates.
              </p>
            </div>
            
            {/* Sophisticated Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {architecturalImages.map((image) => (
                <ImagePlaceholder key={image.id} image={image} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seasonal Accents & Entryway Elegance */}
      {seasonalImages.length > 0 && (
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4 font-heading">
                Seasonal Accents & Entryway Elegance
              </h2>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Refined details and welcoming touches that set the tone for an extraordinary holiday season.
              </p>
            </div>

            {/* Sophisticated Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {seasonalImages.map((image) => (
                <ImagePlaceholder key={image.id} image={image} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Holiday Themes */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4 font-heading">
              Custom Holiday Themes
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Bespoke seasonal visions brought to life with artistry and precision, from elegantly spooky to festive grandeur.
            </p>
          </div>
          
          {/* Sophisticated Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {themedImages.map((image) => (
              <ImagePlaceholder key={image.id} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading">
            Ready to Curate Your Own Masterpiece?
          </h2>
          <p className="text-lg lg:text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Every exclusive holiday display begins with a private conversation. Contact us today to schedule your complimentary, no-obligation Private Design Review.
          </p>
          <Link to="/free-consultation">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-lg px-8 py-6"
            >
              Schedule Private Design Review
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className={`${getAspectRatioClass(selectedImage.aspectRatio).replace('lg:row-span-2', '').replace('md:col-span-2', '')} max-w-3xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl`}>
              {selectedImage.imageUrl ? (
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.caption}
                  className="w-full h-full object-cover"
                  style={selectedImage.id === "h2" ? { transform: 'rotate(90deg) scale(1.4)' } : selectedImage.id === "h6" ? { transform: 'rotate(90deg)' } : undefined}
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${getPlaceholderColor(selectedImage.category)} flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 bg-background/40 rounded"></div>
                    </div>
                    <p className="text-white text-lg font-medium">Image Placeholder</p>
                  </div>
                </div>
              )}
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

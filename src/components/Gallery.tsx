import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, X, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import type { GalleryPhoto } from '../types/wedding';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [photosState, setPhotosState] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [likedPhotoIds, setLikedPhotoIds] = useState<Record<string, boolean>>({});

  const filteredPhotos = photosState.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotoIds((prev) => {
      const isLiked = !!prev[id];
      const newLiked = !isLiked;

      setPhotosState((currentPhotos) =>
        currentPhotos.map((photo) =>
          photo.id === id ? { ...photo, likes: photo.likes + (newLiked ? 1 : -1) } : photo
        )
      );

      return { ...prev, [id]: newLiked };
    });
  };

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! === 0 ? filteredPhotos.length - 1 : prev! - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! === filteredPhotos.length - 1 ? 0 : prev! + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            Captured Memories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Moments In Time
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            A glimpse into our pre-wedding journeys, intimate family celebrations, and quiet moments of joy.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'pre-wedding', label: 'Pre-Wedding' },
              { id: 'ceremonies', label: 'Rituals' },
              { id: 'candids', label: 'Candids & Smiles' },
              { id: 'palace', label: 'Palace Heritage' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A059] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#5E564D] hover:bg-[#FAF0E1] border border-[#C5A059]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isLiked = !!likedPhotoIds[photo.id];

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-[#C5A059]/20 hover:border-[#C5A059] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-4/5 w-full overflow-hidden relative">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                  {/* Corner flourishes on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <OrnateCorner position="tl" className="top-2 left-2 text-[#ECC880]" />
                    <OrnateCorner position="br" className="bottom-2 right-2 text-[#ECC880]" />
                  </div>

                  {/* Top Zoom Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-white/40">
                    <Maximize2 size={16} />
                  </div>

                  {/* Bottom Captions & Like Button */}
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between text-white">
                    <div className="pr-2">
                      <h4 className="font-serif-luxury text-base font-normal leading-snug">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-white/80 line-clamp-1 font-light">
                        {photo.caption}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleLike(photo.id, e)}
                      aria-label="Like photograph"
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-all ${
                        isLiked
                          ? 'bg-[#7A1C29] text-white shadow-md'
                          : 'bg-black/40 text-white hover:bg-black/60'
                      }`}
                    >
                      <Heart size={13} className={isLiked ? 'fill-current' : ''} />
                      <span>{photo.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Main Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 max-h-[72vh] flex items-center justify-center bg-black">
              <img
                src={filteredPhotos[selectedPhotoIndex].imageUrl}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Lightbox Caption Bar */}
            <div className="mt-4 text-center text-white flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-2">
              <div className="text-left">
                <h3 className="text-xl font-serif-luxury font-normal text-[#ECC880]">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-white/80 font-light max-w-md">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-[#C5A059] font-mono">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={(e) => handleLike(filteredPhotos[selectedPhotoIndex].id, e)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    likedPhotoIds[filteredPhotos[selectedPhotoIndex].id]
                      ? 'bg-[#7A1C29] text-white shadow-md'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  <Heart
                    size={14}
                    className={likedPhotoIds[filteredPhotos[selectedPhotoIndex].id] ? 'fill-current' : ''}
                  />
                  <span>{filteredPhotos[selectedPhotoIndex].likes} Likes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

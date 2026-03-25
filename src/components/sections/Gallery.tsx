import { images } from '@/config/images';

const galleryImages = [
  images['gallery-1'],
  images['gallery-2'],
  images['gallery-3'],
  images['gallery-4'],
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white">View Image</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
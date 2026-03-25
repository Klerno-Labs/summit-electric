import { images } from "@/config/images";

const Gallery = () => {
  const galleryItems = [
    images["gallery-1"],
    images["gallery-2"],
    images["gallery-3"],
    images["gallery-4"],
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.src} alt={item.alt} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
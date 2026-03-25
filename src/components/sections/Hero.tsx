import { images } from '@/config/images';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black/60">
      <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Expert Home Repairs You Can Trust</h1>
        <p className="mt-4 text-lg">Reliable solutions for all your electrical needs.</p>
        <div className="mt-6">
          <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700">Get a Free Estimate</a>
          <a href="/gallery" className="ml-4 border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary">View Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
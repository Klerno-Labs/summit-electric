import { images } from "@/config/images";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold">Expert Home Repairs You Can Trust</h1>
        <p className="mt-4 text-lg">Quality workmanship and reliable solutions for your home.</p>
        <div className="mt-8">
          <a href="/contact" className="bg-accent text-white px-6 py-3 rounded-lg">Get a Free Estimate</a>
          <a href="/services" className="ml-4 border border-white text-white px-6 py-3 rounded-lg">View Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
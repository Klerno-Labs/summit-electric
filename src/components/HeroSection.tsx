import { images } from "@/config/images";

interface HeroProps {
  heading: string;
  subtext: string;
  ctaText: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroProps> = ({ heading, subtext, ctaText, imageSrc }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img src={imageSrc} alt="Modern luxury home exterior at dusk featuring warm LED pathway lights and accent spotlights, creating a premium and welcoming atmosphere." className="w-full h-full object-cover opacity-20" loading="eager" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Summit Electric</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-[1.1]">
            Trusted Local Partner for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Home Improvement</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Delivering quality workmanship and reliable electrical solutions. Your safety is our priority.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30">
              {ctaText}
            </button>
            <button className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-semibold border border-slate-200 hover:border-slate-300 transition-all">
              View Services
            </button>
          </div>
        </div>

        <div className="relative hidden md:block animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20"></div>
          <img src={images.hero.src} className="relative rounded-2xl shadow-2xl border-4 border-white w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCtaClick = () => {
    console.log('analytics_event', { event: 'cta_click', location: 'hero' });
    scrollToSection('email-capture');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Let an AI agent source your materials.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
            We contact vendors, collect quotes, and compare pricing—so you save time and money on every job.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button 
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Join the pilot
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              How it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

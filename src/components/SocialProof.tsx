const SocialProof = () => {
  const companies = [
    "BuildCo",
    "North Ridge",
    "Hammer&Oak",
    "Summit Build",
    "Apex Contractors"
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by remodelers in CA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-xl font-bold text-foreground/60">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

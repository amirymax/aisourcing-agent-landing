import { Check } from "lucide-react";

const PricingTeaser = () => {
  const tiers = [
    {
      name: "Starter",
      price: "300",
      description: "For small contractors",
      features: [
        "Up to 10 quotes/month",
        "Email support",
        "Basic vendor database"
      ]
    },
    {
      name: "Professional",
      price: "500",
      description: "For growing businesses",
      features: [
        "Up to 50 quotes/month",
        "Priority support",
        "Full vendor database",
        "Custom vendor lists"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "800",
      description: "For larger operations",
      features: [
        "Unlimited quotes",
        "Dedicated support",
        "Full vendor database",
        "Custom vendor lists",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${
                tier.highlighted
                  ? 'border-primary shadow-xl'
                  : 'border-border'
              } bg-card p-8 transition-all hover:shadow-lg`}
            >
              {tier.highlighted && (
                <div className="absolute -right-12 top-8 rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-card-foreground">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('email-capture');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-background text-foreground hover:bg-secondary'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Pricing varies by volume and category. Contact us for custom enterprise plans.
        </p>
      </div>
    </section>
  );
};

export default PricingTeaser;

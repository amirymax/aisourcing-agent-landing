import { Mail, FileText, TrendingDown } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: Mail,
      title: "Automated vendor outreach",
      description: "Email & web forms"
    },
    {
      icon: FileText,
      title: "Side-by-side quote comparisons",
      description: "Clear, organized pricing"
    },
    {
      icon: TrendingDown,
      title: "Save 5–10% on materials",
      description: "Better prices on every job"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

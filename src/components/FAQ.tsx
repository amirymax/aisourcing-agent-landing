import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the agent contact vendors?",
      answer: "Email, web forms, and structured requests depending on the category."
    },
    {
      question: "Do you support existing supplier lists?",
      answer: "Yes—bring your vendors and we'll include them in quotes."
    },
    {
      question: "What categories work best?",
      answer: "Common materials (lumber, drywall, fixtures) and specialty items with clear specs."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about AI Sourcing Agent
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-secondary/50"
              >
                <span className="text-lg font-semibold text-card-foreground">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 flex-shrink-0 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (client-side demo)
    const payload = { 
      email, 
      company: company || undefined, 
      note: note || undefined 
    };

    console.log('analytics_event', { event: 'interest_submitted', email });
    console.log('Form submission payload:', payload);

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setEmail("");
      setCompany("");
      setNote("");

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="email-capture" className="py-16 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
              Join the pilot
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Early access for general contractors & remodelers.
            </p>
          </div>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                Thanks! We'll be in touch shortly.
              </h3>
              <p className="text-muted-foreground">
                We've received your request and will reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  placeholder="you@company.com"
                />
                {error && (
                  <p className="mt-2 text-sm text-destructive">{error}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Company <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label 
                  htmlFor="note" 
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Note <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors resize-none"
                  placeholder="Tell us about your typical projects..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Request access"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;

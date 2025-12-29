import { ArrowRight, Clock, Users } from "lucide-react";
const CTASection = () => {
  return <section id="register" className="py-20 bg-background relative overflow-hidden pb-32">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Limited Seats.{" "}
            <span className="text-primary">Are You In?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward building your own brand — not someone else's.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Only 100 spots available</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">No tech skills required</span>
            </div>
          </div>

          <a href="#register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow-lg ring-4 ring-primary/30 animate-pulse-subtle group">
            🚀 Join the Masterclass Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform h-6 w-6" />
          </a>

          <p className="text-muted-foreground text-sm mt-6">
            It takes only 90 days to build your own brand — learn the process in two hours.
          </p>
        </div>
      </div>
    </section>;
};
export default CTASection;
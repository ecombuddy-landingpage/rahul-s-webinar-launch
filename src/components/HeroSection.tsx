import { Calendar, Clock, Video, Globe } from "lucide-react";
import rahulAward from "@/assets/rahul-award.jpg";

const HeroSection = () => {
  const infoCards = [
    { icon: Calendar, label: "Date", value: "27 December", subtext: "(Saturday)" },
    { icon: Clock, label: "Time", value: "12 PM", subtext: "" },
    { icon: Video, label: "Platform", value: "Zoom", subtext: "" },
    { icon: Globe, label: "Language", value: "English & Hindi", subtext: "" },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero pt-8 pb-24">
      <div className="container">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-8 py-4 text-base sm:text-lg font-bold shadow-lg animate-pulse-slow">
            🎯 For Aspiring Brand Owners
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-2">
            Build Your Own Brand in 90 Days.
          </h1>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary underline-hand">Stop Renting, Start Owning.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Image with Info */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={rahulAward}
                alt="Rahul Sharma receiving International Business Award"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/70 to-transparent p-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-1">
                  Rahul Sharma – Founder of Qurbat
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  (Multi-City Fashion Brand)
                </p>
                <p className="text-primary-foreground/70 text-xs mt-2">
                  IIM Ahmedabad Alumnus, 15L+ Community Mentor, TEDx Speaker & Retail Excellence Awardee
                </p>
              </div>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-card border border-border flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{card.label}</p>
                    <p className="font-bold text-foreground text-lg">{card.value}</p>
                    {card.subtext && (
                      <p className="text-muted-foreground text-sm">{card.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#register"
              className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Now At <span className="text-yellow-300">Rs. 99/-</span>
            </a>

            {/* Guarantee */}
            <p className="text-center text-primary font-bold italic text-lg">
              100% SATISFACTION GUARANTEED!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

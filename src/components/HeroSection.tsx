import { Calendar, Clock, Video, Globe } from "lucide-react";
import rahulAward from "@/assets/rahul-award.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const infoCards = [
    { icon: Calendar, label: "Date", value: "8 January", subtext: "(Wednesday)" },
    { icon: Clock, label: "Time", value: "12 PM", subtext: "" },
    { icon: Video, label: "Platform", value: "Zoom", subtext: "" },
    { icon: Globe, label: "Language", value: "English & Hindi", subtext: "" },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero pt-6 sm:pt-8 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold shadow-lg animate-glow-pulse">
            🎯 For Aspiring Brand Owners
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-2">
            Build Your Own Brand in 90 Days.
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary underline-hand">Stop Renting, Start Owning.</span>
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 sm:mb-12">
          <p className="text-center text-muted-foreground mb-4 text-sm sm:text-base">Masterclass starts in:</p>
          <CountdownTimer />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Image with Info */}
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border">
              <img
                src={rahulAward}
                alt="Rahul Sharma receiving International Business Award"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">
                  Rahul Sharma – Founder of Qurbat
                </h3>
                <p className="text-foreground/80 text-xs sm:text-sm">
                  (Multi-City Fashion Brand)
                </p>
                <p className="text-muted-foreground text-xs mt-1 sm:mt-2">
                  IIM Ahmedabad Alumnus, 15L+ Community Mentor, TEDx Speaker & Retail Excellence Awardee
                </p>
              </div>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-3 sm:p-5 shadow-card border border-border flex items-start gap-2 sm:gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-xs sm:text-sm">{card.label}</p>
                    <p className="font-bold text-foreground text-sm sm:text-lg">{card.value}</p>
                    {card.subtext && (
                      <p className="text-muted-foreground text-xs sm:text-sm">{card.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#register"
              className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] animate-glow-pulse"
            >
              Register Now At <span className="text-yellow-400 font-extrabold">Rs. 99/-</span>
            </a>

            {/* Guarantee */}
            <p className="text-center text-primary font-bold italic text-base sm:text-lg">
              100% SATISFACTION GUARANTEED!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

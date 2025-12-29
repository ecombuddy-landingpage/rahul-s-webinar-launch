import { Award, Users, Briefcase, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import rahulTeaching from "@/assets/rahul-teaching-workshop.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarImran from "@/assets/avatar-imran.png";
import avatarRohan from "@/assets/avatar-rohan.png";
const MentorSection = () => {
  const credentials = [{
    icon: Award,
    label: "IIM Ahmedabad Alumni"
  }, {
    icon: Briefcase,
    label: "Founder & CEO – Qurbat Clothing"
  }, {
    icon: Users,
    label: "15,000+ Sellers Trained"
  }, {
    icon: Instagram,
    label: "2M+ Social Media Following"
  }];
  const successStories = [{
    quote: "I used to work for Meesho's commissions. Now I run my own website. I keep the customer data and earn 3x the margin. This is real business freedom.",
    name: "Priya S.",
    title: "Founder, EthnicAura (Surat)",
    avatar: avatarPriya
  }, {
    quote: "I thought I needed coders to build a brand. With Rahul Sir's system, I launched my site in just 10 days with zero tech skills. My customers now shop directly from me.",
    name: "Imran K.",
    title: "Owner, The Urban Fit (Lucknow)",
    avatar: avatarImran
  }, {
    quote: "I stopped fighting the daily 'price war' on Amazon. This Masterclass taught me how to build a real brand identity so customers search for me, not just the cheapest option.",
    name: "Rohan M.",
    title: "Co-Founder, DripCulture",
    avatar: avatarRohan
  }];
  return <section className="py-8 sm:py-10 bg-secondary relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">Meet Your Mentor</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 text-foreground">
            <span className="text-primary">Rahul Sharma</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-12 lg:mb-16">
          {/* Single Image */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img alt="Rahul Sharma teaching at a workshop" className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover" src={rahulTeaching} />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((item, index) => <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-card">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
                </div>)}
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Rahul has helped <span className="text-primary font-semibold">15,000+ Indian sellers</span> build their own clothing brands and grow independent businesses online — no coding, no big budgets.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 py-2 bg-card rounded-r-lg">
              <p className="text-foreground italic text-base sm:text-lg">
                "You don't need a tech background or big team — just the right guidance and 90 days of focus."
              </p>
              <cite className="text-primary font-medium mt-2 block text-sm sm:text-base">— Rahul Sharma</cite>
            </blockquote>

            <div className="flex justify-center pt-2">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-glow-lg ring-4 ring-primary/30 animate-pulse-subtle hover:shadow-glow hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto" onClick={() => window.open("https://example.com/register", "_blank")}>
                🚀 Register for the Masterclass Now
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Success Stories from <span className="text-primary">Real Sellers</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {successStories.map((story, index) => <div key={index} className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-card hover:shadow-glow-sm transition-shadow duration-300">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-3 sm:mb-4" />
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={story.avatar} alt={story.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.title}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default MentorSection;
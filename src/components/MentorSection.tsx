import { Award, Users, Briefcase, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import rahulTeaching from "@/assets/rahul-teaching.jpg";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarImran from "@/assets/avatar-imran.png";
import avatarRohan from "@/assets/avatar-rohan.png";

const MentorSection = () => {
  const credentials = [
    { icon: Award, label: "IIM Ahmedabad Alumni" },
    { icon: Briefcase, label: "Founder & CEO – Qurbat Clothing" },
    { icon: Users, label: "15,000+ Sellers Trained" },
    { icon: Instagram, label: "2M+ Social Media Following" },
  ];

  const successStories = [
    {
      quote: "I used to work for Meesho's commissions. Now I run my own website. I keep the customer data and earn 3x the margin. This is real business freedom.",
      name: "Priya S.",
      title: "Founder, EthnicAura (Surat)",
      avatar: avatarPriya,
    },
    {
      quote: "I thought I needed coders to build a brand. With Rahul Sir's system, I launched my site in just 10 days with zero tech skills. My customers now shop directly from me.",
      name: "Imran K.",
      title: "Owner, The Urban Fit (Lucknow)",
      avatar: avatarImran,
    },
    {
      quote: "I stopped fighting the daily 'price war' on Amazon. This Masterclass taught me how to build a real brand identity so customers search for me, not just the cheapest option.",
      name: "Rohan M.",
      title: "Co-Founder, DripCulture",
      avatar: avatarRohan,
    },
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Meet Your Mentor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            <span className="text-primary">Rahul Sharma</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Single Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={rahulTeaching}
                alt="Rahul Sharma teaching at a workshop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Rahul has helped <span className="text-primary font-semibold">15,000+ Indian sellers</span> build their own clothing brands and grow independent businesses online — no coding, no big budgets.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 bg-card rounded-r-lg">
              <p className="text-foreground italic text-lg">
                "You don't need a tech background or big team — just the right guidance and 90 days of focus."
              </p>
              <cite className="text-primary font-medium mt-2 block">— Rahul Sharma</cite>
            </blockquote>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                onClick={() => window.open("https://example.com/register", "_blank")}
              >
                🚀 Register for the Masterclass Now
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Success Stories from <span className="text-primary">Real Sellers</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;

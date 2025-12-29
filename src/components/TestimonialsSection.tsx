import { Quote, Star } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "I used to sell only on Meesho. Now I run my own website and earn 3× more margin.",
    name: "Priya",
    location: "Surat"
  }, {
    quote: "Rahul's system helped me launch my website in 10 days. My customers now shop directly from me.",
    name: "Imran",
    location: "Lucknow"
  }];
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-2" />
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-foreground">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
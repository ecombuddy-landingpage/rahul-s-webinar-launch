const Footer = () => {
  return <footer className="py-4 border-t border-border bg-card pb-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <div className="font-display text-xl font-bold text-primary">
              Rahul Sharma
            </div>
            <p className="text-muted-foreground text-sm">Build Your Brand, Own Your Future</p>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="mt-2 pt-2 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">Phone Number – +91 74286 38805 | 
Email – contact@risewithrahul.com<a href="tel:+917428638805" className="text-primary hover:underline">+91 74286 38805</a> | Email – <a href="mailto:contact@risewithrahul.com" className="text-primary hover:underline">contact@risewithrahul.com</a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
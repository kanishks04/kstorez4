import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Shield, FileText } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-primary mb-2">Ksstorez</h3>
            <p className="text-muted-foreground text-sm mb-4">Your go-to online store for all student essentials. From gadgets to fashion, we've got everything you need for your  life.</p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@ksstorez.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                All Products
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Shield className="h-3 w-3 mr-2" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <FileText className="h-3 w-3 mr-2" />
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Ksstorez. </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Headphones, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero */}
      <div className="hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Everything You Need for
              <span className="block text-white/90">College Life</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up">
              From the latest gadgets to trendy fashion, discover student-friendly products 
              at unbeatable prices. Your one-stop shop for college essentials.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-0 w-full sm:w-auto transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Why Students Choose KSStorez
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tech Essentials</h3>
              <p className="text-muted-foreground">
                Latest gadgets, accessories, and tech gear to power your studies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Student Lifestyle</h3>
              <p className="text-muted-foreground">
                Fashion, accessories, and lifestyle products perfect for campus life
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Study Supplies</h3>
              <p className="text-muted-foreground">
                Books, stationery, and everything you need to ace your classes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
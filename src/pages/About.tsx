import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About KSStorez
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're more than just an online store—we're your partners in the college journey. 
            Founded by students, for students, we understand what you need to succeed.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="card-elevated p-8 md:p-12 text-center">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To make college life easier and more affordable by providing students with 
              everything they need—from the latest tech gadgets to trendy fashion—all at 
              prices that won't break the student budget.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Student-First</h3>
            <p className="text-muted-foreground">
              Every decision we make puts student needs and budgets first. We get it because we've been there.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Promise</h3>
            <p className="text-muted-foreground">
              We carefully curate every product to ensure you're getting the best value for your money.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
            <p className="text-muted-foreground">
              We're building a community of students who support each other's success and dreams.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6 text-lg">
              KSStorez was born in a college dorm room in 2023 when our founders, struggling students themselves, 
              realized how difficult it was to find quality products at student-friendly prices. Between overpriced 
              campus stores and complicated online shopping, there had to be a better way.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              What started as a simple idea to help fellow students has grown into a thriving community of over 
              50,000 students across the country. We've helped students save millions of dollars while getting 
              exactly what they need for their college journey.
            </p>
            <p className="text-muted-foreground text-lg">
              Today, we're proud to be the go-to destination for students nationwide, offering everything from 
              the latest tech to dorm essentials, all backed by our student-first guarantee and unbeatable 
              customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
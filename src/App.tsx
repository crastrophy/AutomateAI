import React from 'react';
import { Bot, Cpu, Workflow, Zap, ChevronRight, MessageSquare, Database, Shield, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-zinc-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(88,28,135,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        
        <nav className="absolute top-0 left-0 right-0 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500/10 backdrop-blur-sm p-2 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">AutomateAI</span>
            </div>
            <div className="hidden md:flex space-x-12 text-sm font-medium">
              <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 pt-32 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-purple-500/5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-purple-500/10">
              🚀 Transforming businesses with AI
            </div>
            <h1 className="text-7xl font-bold mb-8 leading-tight text-white">
              Automate Your Future with
              <span className="bg-gradient-to-r from-purple-200 via-white to-white/90 bg-clip-text text-transparent"> AI-Powered</span> Solutions
            </h1>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl">
              Leverage cutting-edge artificial intelligence to streamline operations, boost efficiency, and drive innovation across your organization.
            </p>
            <div className="flex space-x-6">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center hover:opacity-90 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-full font-semibold flex items-center hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-black to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-24">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-400">Comprehensive AI solutions designed to transform your business operations and drive growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Workflow />,
                title: "Process Automation",
                description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions."
              },
              {
                icon: <MessageSquare />,
                title: "AI Chatbots",
                description: "Deploy sophisticated conversational AI to enhance customer service and support."
              },
              {
                icon: <Database />,
                title: "Data Analytics",
                description: "Transform raw data into actionable insights with advanced AI analytics."
              },
              {
                icon: <Shield />,
                title: "AI Security",
                description: "Protect your systems with AI-powered security and threat detection."
              },
              {
                icon: <Cpu />,
                title: "Machine Learning",
                description: "Custom ML solutions tailored to your specific business needs."
              },
              {
                icon: <Zap />,
                title: "Integration Services",
                description: "Seamlessly integrate AI solutions with your existing infrastructure."
              }
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/30 to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-500/5 rounded-3xl opacity-30 blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl relative"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">Why Choose AutomateAI?</h2>
              <div className="space-y-6">
                <p className="text-gray-400 text-lg">
                  With years of experience in AI and automation, we've helped countless businesses transform their operations and achieve unprecedented growth.
                </p>
                <div className="space-y-6">
                  {[
                    "Expert team of AI specialists and developers",
                    "Customized solutions for your specific needs",
                    "Proven track record of successful implementations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-purple-500/5 p-4 rounded-2xl backdrop-blur-sm border border-purple-500/10">
                      <div className="h-10 w-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-white">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/30 to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">Get in Touch</h2>
            <p className="text-gray-400 mb-12">Ready to transform your business with AI? Let's talk about your needs.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6 bg-purple-500/5 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-transparent text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-transparent text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-black to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="bg-purple-500/10 backdrop-blur-sm p-2 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AutomateAI</span>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>&copy; 2025 AutomateAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-purple-500/5 rounded-3xl opacity-0 blur transition-all duration-300 group-hover:opacity-30 group-hover:blur-xl"></div>
      <div className="bg-purple-500/5 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/10 relative transition-all duration-300">
        <div className="bg-purple-500/10 p-3 rounded-xl inline-block mb-6">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8 text-white' })}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Bot, Cpu, Workflow, Zap, ChevronRight, MessageSquare, Database, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Define reusable animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.header
        className="relative overflow-hidden min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
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
        
        <motion.div
          className="container mx-auto px-6 pt-32 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-4xl">
            <motion.div
              className="inline-block px-4 py-2 bg-purple-500/5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-purple-500/10"
              variants={fadeInUp}
            >
              🚀 Transforming businesses with AI
            </motion.div>
            <motion.h1
              className="text-7xl font-bold mb-8 leading-tight text-white"
              variants={fadeInUp}
            >
              Automate Your Future with
              <span className="bg-gradient-to-r from-purple-200 via-white to-white/90 bg-clip-text text-transparent"> AI-Powered</span> Solutions
            </motion.h1>
            <motion.p
              className="text-xl mb-12 text-gray-400 max-w-2xl"
              variants={fadeInUp}
            >
              Leverage cutting-edge artificial intelligence to streamline operations, boost efficiency, and drive innovation across your organization.
            </motion.p>
            <motion.div
              className="flex space-x-6"
              variants={fadeInUp}
            >
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center hover:opacity-90 transition-all duration-300 group transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-full font-semibold flex items-center hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 transform hover:scale-105">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-black to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-24">
            <motion.h2
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Comprehensive AI solutions designed to transform your business operations and drive growth.
            </motion.p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/30 to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-500/5 rounded-3xl opacity-30 blur-xl"></div>
                <motion.img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Why Choose AutomateAI?
              </motion.h2>
              <motion.div className="space-y-6" variants={fadeInUp}>
                <p className="text-gray-400 text-lg">
                  With years of experience in AI and automation, we've helped countless businesses transform their operations and achieve unprecedented growth.
                </p>
              </motion.div>
              <motion.div className="space-y-6 mt-6" variants={staggerContainer}>
                {[
                  "Expert team of AI specialists and developers",
                  "Customized solutions for your specific needs",
                  "Proven track record of successful implementations"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 bg-purple-500/5 p-4 rounded-2xl backdrop-blur-sm border border-purple-500/10 transform transition-transform duration-300 hover:scale-[1.03]"
                    variants={fadeInUp}
                  >
                    <div className="h-10 w-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/30 to-black" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Ready to transform your business with AI? Let's talk about your needs.
            </motion.p>
          </div>
          <motion.div
            className="max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
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
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
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
      </motion.footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="group relative"
      variants={fadeInUp}
    >
      <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-3xl opacity-0 blur-lg transition-all duration-500 group-hover:opacity-60 group-hover:blur-xl"></div>
      <div className="bg-gradient-to-br from-purple-500/5 via-zinc-900/5 to-black/10 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/10 relative transition-all duration-300 h-full group-hover:border-purple-500/20">
        <div className="bg-purple-500/10 p-3 rounded-xl inline-block mb-6 transition-transform duration-300 group-hover:scale-110">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8 text-white' })}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default App;
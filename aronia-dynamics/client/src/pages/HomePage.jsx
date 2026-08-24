import { motion } from 'framer-motion';
import { Sparkles, Code2, BrainCircuit, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Premium Software Consultancy • BD & USA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Transforming Ideas Into <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Digital Reality
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Aronia Dynamics builds intelligent AI systems, scalable web architectures, 
            and custom software solutions for forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all"
            >
              Get a Free Consultation
            </motion.a>
            <motion.a 
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-zinc-700 bg-zinc-900/50 font-semibold text-zinc-200 backdrop-blur-sm hover:bg-zinc-800 transition-all"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>

        {/* Services Preview Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full mb-20"
        >
          {[
            { icon: Code2, title: "Custom Software", desc: "Tailored architectures for complex problems." },
            { icon: BrainCircuit, title: "AI & Analytics", desc: "Office-based AI and predictive data models." },
            { icon: Globe, title: "Global Networking", desc: "Secure, scalable infrastructure design." }
          ].map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, borderColor: '#a855f7' }}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm transition-all cursor-pointer"
            >
              <service.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
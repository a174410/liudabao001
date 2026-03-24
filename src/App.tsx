import { motion } from 'motion/react';
import { Sparkles, Heart, Star, ArrowRight, Moon, Sun, Feather } from 'lucide-react';
import MoonPhaseCycle from './components/MoonPhaseCycle';

export default function App() {
  return (
    <div className="min-h-screen bg-moonlight text-ink selection:bg-turquoise-light selection:text-nebula-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/20 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Moon className="w-6 h-6 text-nebula" />
          <span className="font-serif text-2xl tracking-widest text-nebula-dark font-semibold">LUMINA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase text-nebula-dark/80">
          <a href="#journey" className="hover:text-turquoise transition-colors">Journey</a>
          <a href="#offerings" className="hover:text-turquoise transition-colors">Offerings</a>
          <a href="#sanctuary" className="hover:text-turquoise transition-colors">Sanctuary</a>
        </div>
        <button className="px-6 py-2 rounded-full bg-nebula text-moonlight font-sans text-sm tracking-wider hover:bg-nebula-dark transition-all shadow-lg shadow-nebula/30">
          Book Reading
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80" 
            alt="Starry night sky" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nebula-dark/80 via-nebula-dark/60 to-moonlight"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <MoonPhaseCycle />
          </motion.div>

          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-moonlight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Find Your <span className="font-handwriting text-turquoise-light text-6xl md:text-8xl lg:text-9xl font-normal px-4">Inner Light</span>
          </motion.h1>
          
          <motion.p 
            className="font-sans text-lg md:text-xl text-nebula-light max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Your soul bestie is here to guide you through the cosmic whispers. 
            Embrace the magic of tarot, crystal healing, and spiritual awakening in a safe, nurturing sanctuary.
          </motion.p>

          <motion.button 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-lg tracking-wider text-nebula-dark bg-moonlight rounded-full overflow-hidden shadow-[0_0_40px_rgba(253,251,247,0.3)] hover:shadow-[0_0_60px_rgba(136,216,192,0.5)] transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-turquoise-light"></span>
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-turquoise" />
              解锁爱情牌阵 (Unlock Love Spread)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>
        
        {/* Decorative bottom wave or fade is handled by the gradient */}
      </section>

      {/* Vibe / About Section */}
      <section id="journey" className="py-24 bg-moonlight relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-nebula/20">
                <img 
                  src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Warm campfire in the wild" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-nebula-dark/10 mix-blend-overlay"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-turquoise-light/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-nebula/20 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Feather className="w-6 h-6 text-turquoise" />
                <span className="font-sans tracking-widest uppercase text-sm text-nebula">Your Sanctuary</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-nebula-dark mb-8 leading-tight">
                Take a deep breath. <br/>
                <span className="font-handwriting text-turquoise text-5xl md:text-6xl">You are safe here.</span>
              </h2>
              <p className="font-sans text-lg text-ink/70 mb-6 leading-relaxed">
                Welcome to a space where your emotions are held, validated, and transformed. Like a warm campfire in the wilderness, we provide an immersive sense of security.
              </p>
              <p className="font-sans text-lg text-ink/70 mb-10 leading-relaxed">
                Whether you're seeking clarity in love, navigating a life transition, or simply needing a "soul bestie" to listen, the cards hold the cosmic whispers meant just for you.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nebula-light flex items-center justify-center">
                  <Heart className="w-5 h-5 text-nebula-dark" />
                </div>
                <span className="font-handwriting text-2xl text-nebula-dark">Embrace the journey within...</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-24 bg-nebula-light/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-moonlight rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-nebula-dark mb-4">Cosmic Offerings</h2>
            <p className="font-handwriting text-3xl text-turquoise">What seeks you, is seeking you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="glass-card p-8 boho-border hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-turquoise-light/20 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-turquoise" />
              </div>
              <h3 className="font-serif text-2xl text-nebula-dark mb-4">Love & Relationships</h3>
              <p className="font-sans text-ink/70 mb-6 leading-relaxed">
                Uncover the hidden dynamics of your connections. Find clarity on soulmates, twin flames, and healing past heartbreaks.
              </p>
              <button className="text-nebula font-medium flex items-center gap-2 hover:text-turquoise transition-colors">
                Explore Spread <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="glass-card p-8 boho-border hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-nebula/10 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-nebula" />
              </div>
              <h3 className="font-serif text-2xl text-nebula-dark mb-4">Career & Purpose</h3>
              <p className="font-sans text-ink/70 mb-6 leading-relaxed">
                Align with your true north. Discover your soul's calling and navigate career crossroads with cosmic confidence.
              </p>
              <button className="text-nebula font-medium flex items-center gap-2 hover:text-turquoise transition-colors">
                Explore Spread <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="glass-card p-8 boho-border hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-nebula-dark mb-4">Spiritual Awakening</h3>
              <p className="font-sans text-ink/70 mb-6 leading-relaxed">
                A deep dive into your spiritual path. Connect with your spirit guides and unlock your intuitive gifts.
              </p>
              <button className="text-nebula font-medium flex items-center gap-2 hover:text-turquoise transition-colors">
                Explore Spread <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery / Atmosphere */}
      <section id="sanctuary" className="py-24 bg-moonlight">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="font-serif text-4xl text-nebula-dark">Glimpses of the Sanctuary</h2>
            <p className="font-handwriting text-2xl text-turquoise mt-4 md:mt-0">Where magic happens...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="rounded-3xl overflow-hidden aspect-square md:aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1633478062482-790e3b5dd810?auto=format&fit=crop&w=800&q=80" 
                alt="Tarot cards" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              className="rounded-3xl overflow-hidden aspect-square md:aspect-[3/4] md:mt-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1515005617325-2a4115f212f3?auto=format&fit=crop&w=800&q=80" 
                alt="Healing crystals" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              className="rounded-3xl overflow-hidden aspect-square md:aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80" 
                alt="Nature connection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-nebula-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80" 
            alt="Stars" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl text-moonlight mb-6">Ready to seek the truth?</h2>
          <p className="font-handwriting text-3xl text-turquoise-light mb-12">Let the cards reveal your path.</p>
          
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-sans text-xl tracking-wider text-nebula-dark bg-moonlight rounded-full overflow-hidden shadow-[0_0_30px_rgba(253,251,247,0.2)] hover:shadow-[0_0_50px_rgba(136,216,192,0.6)] transition-all duration-500 hover:scale-105">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-turquoise-light"></span>
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-turquoise" />
              解锁爱情牌阵 (Unlock Love Spread)
            </span>
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-ink text-moonlight/60 py-8 text-center font-sans text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Moon className="w-4 h-4" />
          <span className="font-serif tracking-widest uppercase">Lumina Tarot</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Lumina Spiritual Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
}

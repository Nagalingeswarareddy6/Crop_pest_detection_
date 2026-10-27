import React from 'react';
    import { Link } from 'react-router-dom';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { Camera, Sprout, ShieldAlert, BookOpen, ArrowRight, CheckCircle2, Cpu, BarChart3, CloudSun, Users } from 'lucide-react';
    import { motion } from 'framer-motion';

    export const Home: React.FC = () => {
      const stats = [
        { label: 'Diagnostic Accuracy', value: '99.4%', icon: Cpu },
        { label: 'Pests & Diseases Cataloged', value: '1,450+', icon: BookOpen },
        { label: 'Active Farms Protected', value: '45,000+', icon: Sprout },
        { label: 'Avg. Early Detection Lead Time', value: '5 Days', icon: ShieldAlert },
      ];

      const features = [
        {
          title: 'AI Leaf Scan & Diagnosis',
          description: 'Snap a photo of any affected leaf in the field. Our YOLOv9 neural network identifies pests, nutrient deficiencies, and fungal infections instantly.',
          icon: Camera,
          link: '/scan',
          image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop',
        },
        {
          title: 'Satellite Field Health Mapping',
          description: 'Monitor NDVI vegetative indices, soil moisture gradients, and localized microclimates across all your farm plots in real time.',
          icon: BarChart3,
          link: '/fields',
          image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop',
        },
        {
          title: 'Comprehensive Pest Index',
          description: 'Explore our entomology and phytopathology database with prevention protocols, organic treatments, and targeted pesticide guides.',
          icon: BookOpen,
          link: '/library',
          image: 'https://placehold.co/1000x400',
        },
      ];

      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative pt-20 pb-28 md:py-32 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-background to-background">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 space-y-6 text-center lg:text-left"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold tracking-wide border border-emerald-200">
                      <Sprout className="w-4 h-4 text-emerald-600" />
                      Next-Generation Smart Agriculture AI
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.15]">
                      Detect Crop Pests Instantly with <span className="text-emerald-600">Precision AI</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      Protect your harvest before damage spreads. Diagnose diseases, identify invasive insects from smartphone photos, and get tailored agronomic treatment plans in seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                      <Link
                        to="/scan"
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 text-base group"
                      >
                        <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Scan Crop Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/fields"
                        className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-foreground font-medium px-8 py-4 rounded-xl border border-border transition-all duration-200 flex items-center justify-center gap-2 text-base"
                      >
                        <BarChart3 className="w-5 h-5 text-emerald-600" />
                        View Field Health
                      </Link>
                    </div>

                    <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Instant AI Diagnosis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Offline Field Mode</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                  >
                    <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-border/80 bg-card group">
                      <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                        alt="Smart Agriculture Monitoring"
                        className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full w-fit mb-2">
                          Live Analysis Active
                        </span>
                        <h3 className="font-serif font-bold text-xl">Corn Armyworm Detected</h3>
                        <p className="text-xs text-gray-300 mt-1">Confidence 98.7% • Severity: Moderate • Plot #4 North</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-secondary/50 border-y border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-serif font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                    Complete Crop Protection Ecosystem
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    Everything you need to safeguard your yield from planting to harvest using advanced remote sensing and deep learning.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-md flex flex-col group"
                      >
                        <div className="h-52 overflow-hidden relative">
                          <img
                            src={feat.image}
                            alt={feat.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center text-emerald-600 shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col flex-grow">
                          <h3 className="text-xl font-serif font-bold text-foreground mb-3">{feat.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{feat.description}</p>
                          <Link
                            to={feat.link}
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                          >
                            <span>Explore feature</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-6">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ready to Protect Your Crops Today?</h2>
                <p className="text-emerald-100 max-w-2xl mx-auto text-base">
                  Join thousands of professional agronomists and modern farmers who rely on AgriGuard for instantaneous pest diagnostics.
                </p>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <Link
                    to="/scan"
                    className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Camera className="w-5 h-5 text-emerald-700" />
                    <span>Launch AI Scanner</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      );
    };
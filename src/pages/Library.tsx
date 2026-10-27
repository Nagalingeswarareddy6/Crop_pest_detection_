import React, { useState } from 'react';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { BookOpen, Search, ShieldCheck, AlertTriangle, Bug, Filter } from 'lucide-react';

    export const Library: React.FC = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('All');

      const pests = [
        {
          name: 'Fall Armyworm',
          scientific: 'Spodoptera frugiperda',
          crop: 'Maize, Sorghum, Rice',
          category: 'Insects',
          severity: 'High',
          description: 'Devastating migratory pest capable of destroying entire cereal crops within days during larval stages.',
          treatment: 'Apply Bacillus thuringiensis or spinosad; release natural predators.',
          image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Late Blight',
          scientific: 'Phytophthora infestans',
          crop: 'Tomato, Potato',
          category: 'Fungal',
          severity: 'Severe',
          description: 'Notorious oomycete pathogen responsible for the Irish potato famine; causes rapid foliage necrosis.',
          treatment: 'Preventative copper fungicides, certified disease-free tubers, crop rotation.',
          image: 'https://placehold.co/600x400',
        },
        {
          name: 'Green Peach Aphid',
          scientific: 'Myzus persicae',
          crop: 'Peppers, Cucurbits, Brassicas',
          category: 'Insects',
          severity: 'Moderate',
          description: 'Universal sap-sucking pest that stunts growth and vectors over 100 plant viral diseases.',
          treatment: 'Insecticidal soaps, neem oil sprays, encouragement of ladybird beetle populations.',
          image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Powdery Mildew',
          scientific: 'Erysiphe necator',
          crop: 'Curbits, Grapes, Apples',
          category: 'Fungal',
          severity: 'Moderate',
          description: 'Readily identifiable by white powdery fungal spots on upper and lower leaf surfaces.',
          treatment: 'Sulfur dust, potassium bicarbonate sprays, pruning for increased canopy airflow.',
          image: 'https://placehold.co/600x400',
        },
        {
          name: 'Two-Spotted Spider Mite',
          scientific: 'Tetranychus urticae',
          crop: 'Soybeans, Strawberries, Cotton',
          category: 'Insects',
          severity: 'High',
          description: 'Thrives in hot, dry conditions; feeds on cell contents causing stippling and fine webbing.',
          treatment: 'Acaricides, predatory phytoseiid mites, maintaining adequate soil moisture.',
          image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
        },
        {
          name: 'Bacterial Leaf Blight',
          scientific: 'Xanthomonas oryzae',
          crop: 'Rice',
          category: 'Bacterial',
          severity: 'Severe',
          description: 'Causes water-soaked stripes on leaf blades that turn yellow and white, severely reducing grain yield.',
          treatment: 'Resistant cultivars, balanced nitrogen fertilization, certified disease-free seeds.',
          image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop',
        },
      ];

      const categories = ['All', 'Insects', 'Fungal', 'Bacterial'];

      const filteredPests = pests.filter((p) => {
        const matchesSearch =
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.scientific.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.crop.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-grow py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  Agronomy Knowledge Base
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Pest & Disease Index
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Search our comprehensive database of agricultural pests, pathogens, and biological control remedies.
                </p>
              </div>

              {/* Search & Filter Bar */}
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search pest, disease, or crop..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                  <Filter className="w-4 h-4 text-muted-foreground shrink-0 mr-1" />
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                        selectedCategory === cat
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-secondary text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pests Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPests.map((pest, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={pest.image}
                        alt={pest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 shadow-sm">
                        {pest.category}
                      </div>
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          pest.severity === 'Severe'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {pest.severity} Risk
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow space-y-3">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground">{pest.name}</h3>
                        <p className="text-xs italic text-muted-foreground">{pest.scientific}</p>
                      </div>

                      <div className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                        Affects: {pest.crop}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{pest.description}</p>

                      <div className="pt-4 border-t border-border mt-auto">
                        <span className="text-xs font-semibold text-foreground block mb-1">Recommended Treatment:</span>
                        <p className="text-xs text-muted-foreground">{pest.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    };
import React from 'react';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { Sprout, BarChart3, CloudSun, ShieldAlert, Droplets, ArrowUpRight } from 'lucide-react';

    export const Fields: React.FC = () => {
      const fieldsData = [
        {
          id: 'PLOT-01',
          name: 'North Valley Maize',
          crop: 'Corn / Maize',
          size: '45 Hectares',
          health: 92,
          ndvi: 0.84,
          soilMoisture: '74% Optimal',
          status: 'Healthy',
          image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
        },
        {
          id: 'PLOT-02',
          name: 'South Greenhouse Tomatoes',
          crop: 'Roma Tomatoes',
          size: '12 Hectares',
          health: 68,
          ndvi: 0.61,
          soilMoisture: '45% Low',
          status: 'Attention Required',
          image: 'https://placehold.co/800x400',
        },
        {
          id: 'PLOT-03',
          name: 'East Plateau Soybeans',
          crop: 'Soybeans',
          size: '80 Hectares',
          health: 88,
          ndvi: 0.79,
          soilMoisture: '68% Optimal',
          status: 'Healthy',
          image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop',
        },
      ];

      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-grow py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                    Satellite Telemetry & NDVI
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                    Field Health Dashboard
                  </h1>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-colors text-sm flex items-center gap-2 w-fit">
                  <Sprout className="w-4 h-4" />
                  Add New Field Plot
                </button>
              </div>

              {/* Overview Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Total Monitored Area</span>
                  <div className="text-3xl font-serif font-bold text-foreground">137 Hectares</div>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +15% expansion this season
                  </span>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Average NDVI Index</span>
                  <div className="text-3xl font-serif font-bold text-foreground">0.78</div>
                  <span className="text-xs text-emerald-600 font-semibold">Vigorous Canopy Growth</span>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Active Pest Alerts</span>
                  <div className="text-3xl font-serif font-bold text-amber-600">1 Plot</div>
                  <span className="text-xs text-amber-600 font-semibold">Requires Treatment</span>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">Soil Moisture Avg</span>
                  <div className="text-3xl font-serif font-bold text-foreground">62%</div>
                  <span className="text-xs text-emerald-600 font-semibold">Optimal Irrigation</span>
                </div>
              </div>

              {/* Field Cards */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">Active Farm Plots</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {fieldsData.map((field) => (
                    <div
                      key={field.id}
                      className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-md flex flex-col group"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={field.image}
                          alt={field.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                          {field.id}
                        </div>
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                            field.status === 'Healthy'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {field.status}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow space-y-4">
                        <div>
                          <h4 className="text-xl font-serif font-bold text-foreground">{field.name}</h4>
                          <p className="text-xs text-muted-foreground">{field.crop} • {field.size}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 bg-secondary/50 p-3 rounded-xl border border-border/60 text-center">
                          <div>
                            <span className="text-[10px] text-muted-foreground block">Health</span>
                            <span className="text-sm font-bold text-foreground">{field.health}%</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-muted-foreground block">NDVI</span>
                            <span className="text-sm font-bold text-foreground">{field.ndvi}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-muted-foreground block">Moisture</span>
                            <span className="text-sm font-bold text-foreground">{field.soilMoisture.split(' ')[0]}</span>
                          </div>
                        </div>

                        <button className="w-full bg-secondary hover:bg-secondary/80 text-foreground font-medium py-2.5 rounded-xl text-sm transition-colors border border-border mt-auto">
                          View Satellite Telemetry
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    };
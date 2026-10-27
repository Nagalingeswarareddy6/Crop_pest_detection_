import React from 'react';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { ShieldAlert, Bell, CheckCircle, Clock } from 'lucide-react';

    export const Alerts: React.FC = () => {
      const alerts = [
        {
          id: 1,
          title: 'High Risk: Fall Armyworm Outbreak',
          plot: 'North Valley Maize (PLOT-01)',
          severity: 'Severe',
          time: '2 hours ago',
          description: 'Spodoptera frugiperda spore/larvae density exceeding local economic threshold. Immediate organic spray recommended.',
        },
        {
          id: 2,
          title: 'Soil Moisture Deficiency Warning',
          plot: 'South Greenhouse Tomatoes (PLOT-02)',
          severity: 'Moderate',
          time: 'Yesterday',
          description: 'Irrigation sensors registered below 45% volumetric water content in sector B.',
        },
        {
          id: 3,
          title: 'Fungal Spore Advisory',
          plot: 'East Plateau Soybeans (PLOT-03)',
          severity: 'Low',
          time: '3 days ago',
          description: 'High humidity and warm evening temperatures favor powdery mildew spore germination.',
        },
      ];

      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-grow py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
                    Real-Time Outbreak Warnings
                  </div>
                  <h1 className="text-3xl font-serif font-bold text-foreground">
                    Agronomy Alerts & Notifications
                  </h1>
                </div>
                <button className="bg-secondary text-foreground px-4 py-2 rounded-xl text-xs font-medium border border-border hover:bg-secondary/80">
                  Mark All as Read
                </button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          alert.severity === 'Severe'
                            ? 'bg-red-100 text-red-700'
                            : alert.severity === 'Moderate'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif font-bold text-foreground text-base">{alert.title}</h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              alert.severity === 'Severe'
                                ? 'bg-red-100 text-red-800'
                                : alert.severity === 'Moderate'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-emerald-700">{alert.plot}</p>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl text-xs shadow-sm transition-colors shrink-0">
                      View Action Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    };
import React from 'react';
    import { Link } from 'react-router-dom';
    import { Sprout, ShieldCheck, Cpu, Leaf, Globe, Twitter, Github, Linkedin } from 'lucide-react';

    export const Footer: React.FC = () => {
      return (
        <footer className="bg-secondary/40 border-t border-border pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4 md:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <span className="font-serif font-bold text-lg text-foreground">AgriGuard</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Empowering modern agriculture with computer vision pest detection, real-time climate telemetry, and intelligent agronomic recommendations.
                </p>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a href="#twitter" className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#github" className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#linkedin" className="p-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-semibold text-sm text-foreground uppercase tracking-wider mb-4">Platform</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><Link to="/scan" className="hover:text-emerald-600 transition-colors">AI Pest Scanner</Link></li>
                  <li><Link to="/library" className="hover:text-emerald-600 transition-colors">Pest & Disease Index</Link></li>
                  <li><Link to="/fields" className="hover:text-emerald-600 transition-colors">Field Health Mapping</Link></li>
                  <li><Link to="/alerts" className="hover:text-emerald-600 transition-colors">Outbreak Alerts</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-semibold text-sm text-foreground uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><a href="#docs" className="hover:text-emerald-600 transition-colors">API Documentation</a></li>
                  <li><a href="#research" className="hover:text-emerald-600 transition-colors">Agronomy Research</a></li>
                  <li><a href="#community" className="hover:text-emerald-600 transition-colors">Farmer Community</a></li>
                  <li><a href="#support" className="hover:text-emerald-600 transition-colors">Help & Support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-semibold text-sm text-foreground uppercase tracking-wider mb-4">Legal & Privacy</h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li><a href="#privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
                  <li><a href="#security" className="hover:text-emerald-600 transition-colors">Data Security</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
              <p>© 2026 AgriGuard Inc. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> 99.4% Diagnostic Accuracy</span>
                <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-emerald-600" /> YOLOv9 Neural Engine</span>
              </div>
            </div>
          </div>
        </footer>
      );
    };
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Camera, Activity, BookOpen, User, Menu, X, ShieldAlert } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: Activity },
    { name: 'Scan Crop', path: '/scan', icon: Camera },
    { name: 'Pest Library', path: '/library', icon: BookOpen },
    { name: 'Field Health', path: '/fields', icon: Sprout },
    { name: 'Alerts', path: '/alerts', icon: ShieldAlert },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">AgriGuard</span>
            <span className="block text-xs text-muted-foreground font-sans">AI Crop Protection</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/40">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-background text-emerald-700 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-muted-foreground'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/scan"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm"
          >
            <Camera className="w-4 h-4" />
            <span>Instant Scan</span>
          </Link>
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border/60 text-foreground font-semibold text-sm">
            AG
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl py-6 px-6 space-y-4 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${
                  active ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-foreground hover:bg-secondary'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-emerald-600' : 'text-muted-foreground'}`} />
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <Link
              to="/scan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Camera className="w-5 h-5" />
              Instant Scan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
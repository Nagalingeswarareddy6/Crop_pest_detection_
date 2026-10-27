import React from 'react';
    import { Link } from 'react-router-dom';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { Sprout, ArrowLeft } from 'lucide-react';

    export default function NotFound() {
      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-grow flex items-center justify-center py-20 px-4">
            <div className="text-center space-y-6 max-w-md">
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <Sprout className="w-10 h-10" />
              </div>
              <h1 className="text-4xl font-serif font-bold text-foreground">Page Not Found</h1>
              <p className="text-muted-foreground text-sm">
                The agronomic record or page you are looking for does not exist or has been harvested.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Dashboard
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
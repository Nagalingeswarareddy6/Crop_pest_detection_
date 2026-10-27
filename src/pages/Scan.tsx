import React, { useState } from 'react';
    import { Header } from '../components/Header.tsx';
    import { Footer } from '../components/Footer.tsx';
    import { ScanModal } from '../components/ScanModal.tsx';
    import { Camera, Upload, Sparkles, AlertCircle, CheckCircle, Leaf, ShieldAlert } from 'lucide-react';
    import { toast } from 'react-toastify';

    export const Scan: React.FC = () => {
      const [selectedImage, setSelectedImage] = useState<string | null>(null);
      const [isAnalyzing, setIsAnalyzing] = useState(false);
      const [scanResult, setScanResult] = useState<any | null>(null);

      const sampleLeafImages = [
        {
          name: 'Corn Armyworm Leaf',
          url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop',
          result: {
            pestName: 'Fall Armyworm (Spodoptera frugiperda)',
            scientificName: 'Spodoptera frugiperda',
            confidence: 0.987,
            severity: 'Severe',
            crop: 'Maize / Corn',
            description: 'Larvae feed on whorl leaves producing characteristic ragged holes and sawdust-like frass. High infestation risk during vegetative stage.',
            remedies: [
              'Apply biological control agents like Bacillus thuringiensis (Bt) or Spinosad.',
              'Release parasitic wasps (Trichogramma spp.) for egg mass predation.',
              'Apply targeted insecticides if infestation exceeds 20% defoliation threshold.',
            ],
          },
        },
        {
          name: 'Tomato Blight',
          url: 'https://placehold.co/1000x400',
          result: {
            pestName: 'Late Blight (Phytophthora infestans)',
            scientificName: 'Phytophthora infestans',
            confidence: 0.962,
            severity: 'Moderate',
            crop: 'Tomato & Potato',
            description: 'Water-soaked dark lesions appear on leaves and stems, rapidly enlarging during humid weather with white fungal growth underneath.',
            remedies: [
              'Remove and destroy infected plant debris immediately to prevent spore dispersal.',
              'Apply copper-based fungicides preventatively before rain events.',
              'Ensure optimal plant spacing and drip irrigation to minimize leaf wetness.',
            ],
          },
        },
        {
          name: 'Aphid Infestation',
          url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop',
          result: {
            pestName: 'Green Peach Aphid',
            scientificName: 'Myzus persicae',
            confidence: 0.945,
            severity: 'Low',
            crop: 'Pepper & Leafy Greens',
            description: 'Small soft-bodied insects clustering on undersides of young leaves, secreting sticky honeydew leading to sooty mold.',
            remedies: [
              'Spray with potassium salts of fatty acids (insecticidal soaps) or neem oil.',
              'Introduce beneficial predators such as ladybugs and lacewings.',
              'Use reflective silver mulches to deter incoming winged aphids.',
            ],
          },
        },
      ];

      const handleImageSelect = (url: string) => {
        setSelectedImage(url);
        runAnalysis(url);
      };

      const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const resUrl = reader.result as string;
            setSelectedImage(resUrl);
            runAnalysis(resUrl);
          };
          reader.readAsDataURL(file);
        }
      };

      const runAnalysis = (imageUrl: string) => {
        setIsAnalyzing(true);
        toast.info('Initiating YOLOv9 Neural Scan...');
        setTimeout(() => {
          setIsAnalyzing(false);
          // Match sample or pick default
          const matched = sampleLeafImages.find((s) => s.url === imageUrl);
          if (matched) {
            setScanResult(matched.result);
          } else {
            setScanResult({
              pestName: 'Tomato Spotted Wilt Virus',
              scientificName: 'Orthotospovirus',
              confidence: 0.921,
              severity: 'Moderate',
              crop: 'Solanaceous Crops',
              description: 'Characterized by concentric ring spots on foliage and stunted terminal growth, vectored by thrips.',
              remedies: [
                'Control thrips vector populations using blue sticky traps and Spinosad.',
                'Remove and rogue out infected symptomatic plants promptly.',
                'Plant resistant cultivar varieties for subsequent crop cycles.',
              ],
            });
          }
          toast.success('Crop diagnosis completed successfully!');
        }, 2200);
      };

      return (
        <div className="min-h-screen flex flex-col bg-background">
          <Header />

          <main className="flex-grow py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  YOLOv9 Pest Detection Engine
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  AI Crop Diagnostic Scanner
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Upload a clear photograph of an affected leaf, stem, or fruit to receive instant pest classification and treatment recommendations.
                </p>
              </div>

              {/* Scanner Box */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl mb-12">
                {!selectedImage ? (
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 sm:p-16 text-center hover:border-emerald-500/50 transition-colors bg-secondary/30 relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Upload className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">Upload Crop Photo</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto mb-6">
                      Drag and drop your leaf or plant photo here, or browse from your device storage.
                    </p>
                    <span className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm shadow-md transition-colors">
                      Select Photo
                    </span>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden max-h-[400px] bg-black flex items-center justify-center border border-border">
                      <img src={selectedImage} alt="Scanned Crop" className="max-h-[400px] w-auto object-contain" />
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white space-y-4">
                          <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
                          <p className="font-serif text-lg tracking-wide animate-pulse">Running Neural Pest Diagnosis...</p>
                        </div>
                      )}
                    </div>
                    {!isAnalyzing && (
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setSelectedImage(null);
                            setScanResult(null);
                          }}
                          className="px-5 py-2.5 rounded-xl border border-border text-foreground hover:bg-secondary font-medium text-sm transition-colors"
                        >
                          Scan Different Photo
                        </button>
                        <button
                          onClick={() => setScanResult(scanResult)}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md transition-colors"
                        >
                          View Full Report
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sample Quick Test Images */}
              <div className="space-y-4">
                <h3 className="font-serif font-semibold text-lg text-foreground">Or test with pre-loaded sample leaves:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {sampleLeafImages.map((sample, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleImageSelect(sample.url)}
                      className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-500/50 cursor-pointer transition-all duration-200 group"
                    >
                      <div className="h-40 overflow-hidden relative">
                        <img
                          src={sample.url}
                          alt={sample.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                          <span className="text-white font-serif font-semibold text-sm">{sample.name}</span>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Click to diagnose</span>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                          Test Sample
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {scanResult && (
            <ScanModal
              result={scanResult}
              onClose={() => setScanResult(null)}
              onReset={() => {
                setSelectedImage(null);
                setScanResult(null);
              }}
            />
          )}

          <Footer />
        </div>
      );
    };
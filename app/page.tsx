"use client"
import { useState, useEffect } from 'react';

const VideoIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CropIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7h3m0 0v13m0-13h11m-4 0V3m0 4v13m0 0h4m-4 0H7" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            saas-social
          </a>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors hidden md:block">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors hidden md:block">Pricing</a>
            <a href="/login" className="text-gray-300 hover:text-white transition-colors px-4 py-2">Login</a>
            <a href="/signup" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <section className="relative pt-32 pb-24 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <SparklesIcon />
                <span className="text-sm text-gray-300">Trusted by 50,000+ creators worldwide</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Creative Tools
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Scale With You
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Empower your creative workflow with AI-powered video compression and instant asset resizing. Built for professionals who demand quality and speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                  <span className="relative z-10">Start Free Trial</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/5 transition-all duration-300 hover:border-white/40 flex items-center justify-center gap-2">
                  <PlayIcon />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 border-2 border-black flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400 ml-2">
                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
                    </div>
                    <span className="text-white font-semibold">4.9/5</span> from 2,400+ reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
                    <div>
                      <div className="text-sm font-semibold">Creative Dashboard</div>
                      <div className="text-xs text-gray-400">32 projects active</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-4 space-y-3">
                    <div className="w-full h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <VideoIcon />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold">Video Compression</div>
                      <div className="text-xs text-gray-400">12 files processed</div>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-1.5">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-xl p-4 space-y-3">
                    <div className="w-full h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <CropIcon />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold">Asset Resizing</div>
                      <div className="text-xs text-gray-400">28 variants created</div>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-1.5">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">2.4GB</div>
                    <div className="text-xs text-gray-400">Saved</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">40</div>
                    <div className="text-xs text-gray-400">Files</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">98%</div>
                    <div className="text-xs text-gray-400">Quality</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {['YouTube', 'Instagram', 'TikTok', 'Vimeo', 'Behance', 'Dribbble'].map((brand, idx) => (
                <div key={idx} className="text-2xl font-bold text-white">{brand}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Built for Modern Creators
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We understand the challenges you face. That is why we built the ultimate creative toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-cyan-500/50 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    C
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">For Content Creators</h3>
                    <p className="text-gray-400 text-sm">YouTubers, Streamers, Video Producers</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-400 text-sm">✗</span>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">The Problem</div>
                        <p className="text-sm text-gray-400">Spending hours compressing videos manually, losing quality, and struggling with file size limits on different platforms.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon />
                      </div>
                      <div>
                        <div className="font-semibold mb-1 text-cyan-300">Our Solution</div>
                        <p className="text-sm text-gray-300">AI-powered compression that maintains 98% quality while reducing file sizes by up to 80%. Platform-specific presets for YouTube, Instagram, and TikTok.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/50 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    D
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">For Designers</h3>
                    <p className="text-gray-400 text-sm">Graphic Designers, Social Media Managers</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-400 text-sm">✗</span>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">The Problem</div>
                        <p className="text-sm text-gray-400">Manually resizing the same design for 10+ social media formats. Copy, paste, crop, export, repeat...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon />
                      </div>
                      <div>
                        <div className="font-semibold mb-1 text-purple-300">Our Solution</div>
                        <p className="text-sm text-gray-300">Upload once, get all sizes instantly. Smart AI cropping focuses on key elements. Export to all major social platforms in seconds, not hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to streamline your creative workflow</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <VideoIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Video Compression</h3>
              <p className="text-gray-400 mb-6">
                Upload your raw footage and let our AI compress it to the perfect size for any platform without losing quality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AI-Powered</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Cloud-Based</span>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <CropIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Asset Resizing</h3>
              <p className="text-gray-400 mb-6">
                Upload one graphic and instantly resize it for every social media format. Generate variants in seconds.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Smart Crop</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Multi-Format</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            saas-social
          </div>
          <p className="text-gray-400 text-sm">Copyright © 2025 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
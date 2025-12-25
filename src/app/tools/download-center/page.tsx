"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, TrendingUp, Clock, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollAnimations";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  downloadCount: number;
  createdAt: string;
  expiresAt: string;
  isExpired: boolean;
}

export default function DownloadCenter() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    // Check for token in URL
    if (typeof window === 'undefined') return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      verifyToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(`/api/verify-download-token?token=${token}`);
      const data = await response.json();
      
      if (data.success && data.downloads) {
        setDownloads(data.downloads);
      } else {
        // Show error message
        alert(data.message || "Invalid or expired download link");
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      alert("Error verifying download link");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsVerifying(true);
    try {
      const response = await fetch('/api/get-downloads-by-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (data.success && data.downloads) {
        setDownloads(data.downloads);
      } else {
        alert(data.message || "No downloads found for this email");
      }
    } catch (error) {
      console.error('Error fetching downloads:', error);
      alert("Error fetching downloads");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleDownload = async (downloadId: string, fileUrl: string) => {
    try {
      // Track download
      await fetch('/api/track-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ downloadId }),
      });

      // Trigger download
      if (typeof window !== 'undefined') {
        window.open(fileUrl, '_blank');
      }
    } catch (error) {
      console.error('Error tracking download:', error);
      // Still allow download even if tracking fails
      if (typeof window !== 'undefined') {
        window.open(fileUrl, '_blank');
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-white mb-2">Verifying Your Access</h2>
              <p className="text-gray-300">Please wait while we verify your download link...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Download Center</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Access your personalized reports and guides
            </p>
          </div>

          {downloads.length === 0 ? (
            /* Email Verification Form */
            <ScrollReveal className="max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <Mail className="w-6 h-6 text-yellow-400" />
                    Verify Your Email
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter your email address to access your downloads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isVerifying}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      {isVerifying ? "Verifying..." : "Access Downloads"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          ) : (
            /* Downloads List */
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-white font-semibold">Access Granted</h3>
                    <p className="text-gray-300 text-sm">Your downloads are ready below</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid gap-6">
                {downloads.map((download, index) => (
                  <ScrollReveal key={download.id} delay={index * 100}>
                    <Card className={`bg-white/10 backdrop-blur-sm border ${
                      download.isExpired ? 'border-red-500/30' : 'border-white/20'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-cyan-400" />
                            <div>
                              <CardTitle className="text-white">{download.title}</CardTitle>
                              <CardDescription className="text-gray-300">
                                {download.description}
                              </CardDescription>
                            </div>
                          </div>
                          {!download.isExpired && (
                            <Button
                              onClick={() => handleDownload(download.id, download.fileUrl)}
                              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>Created: {formatDate(download.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <TrendingUp className="w-4 h-4" />
                            <span>Size: {download.fileSize}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Download className="w-4 h-4" />
                            <span>Downloads: {download.downloadCount}</span>
                          </div>
                        </div>
                        
                        {download.isExpired && (
                          <div className="mt-4 bg-red-500/10 rounded-lg p-3 border border-red-500/30 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                            <span className="text-red-300">This download link has expired. Please contact support to regenerate your report.</span>
                          </div>
                        )}
                        
                        {!download.isExpired && (
                          <div className="mt-4 bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/30 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-300">Expires: {formatDate(download.expiresAt)}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Additional Resources */}
              <ScrollReveal className="mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Need Help Getting Started?</h3>
                  <p className="text-gray-300 mb-4">
                    Our team is ready to help you implement the recommendations from your reports.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all" asChild>
                      <a href="/request-quotation">Get Free Consultation</a>
                    </Button>
                    <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-6 py-3 rounded-full" asChild>
                      <a href="/contact">Contact Support</a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </ScrollReveal>
      </div>
    </main>
  );
}
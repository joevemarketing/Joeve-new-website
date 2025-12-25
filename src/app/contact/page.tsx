"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  service_interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source_page: "contact-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/contact-hero.jpg"
             alt="Contact Hero"
             fill
             className="object-cover opacity-80"
             unoptimized
             style={{ filter: "brightness(1.05) contrast(1.05)" }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-joeve-blue-deep/30 to-joeve-blue-deep/60" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mx-auto max-w-3xl bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6">
            <h1 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your digital transformation? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal className="space-y-8">
             <div className="bg-joeve-blue-dark p-8 rounded-xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                         <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="text-sm font-medium text-gray-400 mb-1">Our Location</h4>
                         <p className="text-white">Penang, Malaysia</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                         <Phone className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="text-sm font-medium text-gray-400 mb-1">Phone Number</h4>
                         <p className="text-white">+6016 557 2800</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="text-sm font-medium text-gray-400 mb-1">Email Address</h4>
                         <p className="text-white">info@joevesmartsolutions.com</p>
                      </div>
                   </div>
                </div>
             </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal className="bg-joeve-blue-dark border border-cyan-500/20 rounded-xl p-8" delay={120}>
             <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
             
             {submitStatus === "success" ? (
                <div className="text-center py-12">
                   <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                   <p className="text-gray-300 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                   <Button onClick={() => setSubmitStatus("idle")} className="bg-cyan-500 hover:bg-cyan-600">
                      Send Another Message
                   </Button>
                </div>
             ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-300">Name *</label>
                         <Input 
                            {...register("name")}
                            placeholder="John Doe" 
                            className={`bg-joeve-blue-deep border-gray-700 ${errors.name ? "border-red-500" : ""}`} 
                         />
                         {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-300">Email *</label>
                         <Input 
                            {...register("email")}
                            type="email" 
                            placeholder="john@company.com" 
                            className={`bg-joeve-blue-deep border-gray-700 ${errors.email ? "border-red-500" : ""}`} 
                         />
                         {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Company *</label>
                      <Input 
                         {...register("company")}
                         placeholder="Company Name" 
                         className={`bg-joeve-blue-deep border-gray-700 ${errors.company ? "border-red-500" : ""}`} 
                      />
                      {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Service Interest</label>
                      <select 
                         {...register("service_interest")}
                         className="w-full h-10 rounded-md border border-gray-700 bg-joeve-blue-deep px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                         <option value="">Select a service...</option>
                         <option value="web-app">Web App Development</option>
                         <option value="social-media">Social Media Generation</option>
                         <option value="video-production">Gen AI Video Production</option>
                         <option value="other">Other</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Message *</label>
                      <Textarea 
                         {...register("message")}
                         placeholder="Tell us about your project..." 
                         className={`bg-joeve-blue-deep border-gray-700 min-h-[120px] ${errors.message ? "border-red-500" : ""}`} 
                      />
                      {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                   </div>

                   {submitStatus === "error" && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm">
                         {errorMessage}
                      </div>
                   )}

                   <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-12 disabled:opacity-50"
                   >
                      {isSubmitting ? (
                         <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                         </>
                      ) : (
                         "Send Message"
                      )}
                   </Button>
                </form>
             )}
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}

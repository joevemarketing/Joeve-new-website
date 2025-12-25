"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  service_interest: z.string().min(1, "Please select a service"),
  budget_range: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestQuotationPage() {
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
          source_page: "request-quotation",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
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
      <section className="relative py-20 overflow-hidden bg-joeve-blue-deep">
        <div className="absolute inset-0 z-0">
          <img src="/images/quote-hero.jpg" alt="Quotation Hero" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-joeve-blue-deep/30 to-joeve-blue-deep/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you with a customized proposal.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-joeve-blue-dark border border-cyan-500/20 rounded-xl p-8">
             {submitStatus === "success" ? (
                <div className="text-center py-12">
                   <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                   <p className="text-gray-300 mb-6">Your request has been received. We will contact you shortly.</p>
                   <Button onClick={() => setSubmitStatus("idle")} className="bg-cyan-500 hover:bg-cyan-600">
                      Submit Another Request
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

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <label className="text-sm font-medium text-gray-300">Phone</label>
                          <Input 
                             {...register("phone")}
                             placeholder="+60123456789" 
                             className="bg-joeve-blue-deep border-gray-700" 
                          />
                       </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Service Interest *</label>
                      <select 
                         {...register("service_interest")}
                         className={`w-full h-10 rounded-md border border-gray-700 bg-joeve-blue-deep px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${errors.service_interest ? "border-red-500" : ""}`}
                      >
                         <option value="">Select a service...</option>
                         <option value="web-app">Web App Development</option>
                         <option value="social-media">Social Media Generation</option>
                         <option value="video-production">Gen AI Video Production</option>
                         <option value="other">Other</option>
                      </select>
                      {errors.service_interest && <p className="text-red-500 text-xs">{errors.service_interest.message}</p>}
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Budget Range</label>
                      <select 
                         {...register("budget_range")}
                         className="w-full h-10 rounded-md border border-gray-700 bg-joeve-blue-deep px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                         <option value="">Select a range...</option>
                         <option value="<10k">Less than RM 10k</option>
                         <option value="10k-30k">RM 10k - RM 30k</option>
                         <option value="30k-50k">RM 30k - RM 50k</option>
                         <option value=">50k">More than RM 50k</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Project Details</label>
                      <Textarea 
                         {...register("message")}
                         placeholder="Tell us more about your requirements..." 
                         className="bg-joeve-blue-deep border-gray-700 min-h-[150px]" 
                      />
                   </div>

                   {submitStatus === "error" && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm">
                         {errorMessage}
                      </div>
                   )}

                   <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-12 text-lg disabled:opacity-50"
                   >
                      {isSubmitting ? (
                         <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                         </>
                      ) : (
                         "Submit Request"
                      )}
                   </Button>
                </form>
             )}
        </div>
      </div>
    </main>
  );
}

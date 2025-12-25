"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ServiceQuoteFormProps {
  serviceName: string;
  className?: string;
}

export function ServiceQuoteForm({ serviceName, className = "" }: ServiceQuoteFormProps) {
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
          service_interest: serviceName,
          source_page: `service-landing-${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
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

  if (submitStatus === "success") {
    return (
      <div className={`bg-joeve-blue-dark border border-cyan-500/30 rounded-xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
        <p className="text-gray-300 mb-8">
          Thank you for your interest in our {serviceName} services. 
          Our team will analyze your requirements and get back to you with a tailored proposal within 24 hours.
        </p>
        <Button 
          onClick={() => setSubmitStatus("idle")} 
          variant="outline"
          className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-joeve-blue-dark border border-cyan-500/30 rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-[50px] pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Interested in {serviceName}? Fill out the form below to discuss your project.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input 
              {...register("name")}
              placeholder="Your Name *" 
              className={`bg-joeve-blue-deep border-gray-700 h-11 ${errors.name ? "border-red-500" : ""}`} 
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Input 
              {...register("email")}
              type="email" 
              placeholder="Work Email *" 
              className={`bg-joeve-blue-deep border-gray-700 h-11 ${errors.email ? "border-red-500" : ""}`} 
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Input 
              {...register("phone")}
              type="tel" 
              placeholder="Phone Number (Optional)" 
              className="bg-joeve-blue-deep border-gray-700 h-11" 
            />
          </div>

          <div className="space-y-2">
            <Input 
              {...register("company")}
              placeholder="Company Name *" 
              className={`bg-joeve-blue-deep border-gray-700 h-11 ${errors.company ? "border-red-500" : ""}`} 
            />
            {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
          </div>

          <div className="space-y-2">
            <Textarea 
              {...register("message")}
              placeholder="Tell us about your project requirements..." 
              className={`bg-joeve-blue-deep border-gray-700 min-h-[100px] resize-none ${errors.message ? "border-red-500" : ""}`} 
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </div>

          {submitStatus === "error" && (
            <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-xs">
              {errorMessage}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold h-12 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Get Free Consultation"
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            No commitment required. We respect your privacy.
          </p>
        </form>
      </div>
    </div>
  );
}

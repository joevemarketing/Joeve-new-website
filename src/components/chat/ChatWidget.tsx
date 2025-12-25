"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content: "Hi! I'm JOeve's AI assistant. How can I help you transform your digital presence today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ctaLinks, setCtaLinks] = useState<string[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setCtaLinks([]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
      if (Array.isArray(data.cta_links)) {
        setCtaLinks(data.cta_links);
      }
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: "Sorry, I encountered an error. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)] z-50 transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-cyan-500 hover:bg-cyan-600"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-[90vw] md:w-[400px] bg-joeve-blue-deep border border-cyan-500/30 rounded-2xl shadow-2xl transition-all duration-300 z-50 overflow-hidden flex flex-col",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto h-[600px] max-h-[80vh]"
            : "opacity-0 translate-y-10 pointer-events-none h-0"
        )}
      >
        {/* Header */}
        <div className="p-4 bg-joeve-blue-dark border-b border-cyan-500/20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-white">JOeve AI Assistant</h3>
            <p className="text-xs text-cyan-400">Online | Powered by Gen AI</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm",
                  msg.role === "user"
                    ? "bg-cyan-600 text-white rounded-tr-none"
                    : "bg-joeve-blue-dark text-gray-200 border border-cyan-500/20 rounded-tl-none"
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-joeve-blue-dark border border-cyan-500/20 p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>
        
        {ctaLinks.length > 0 && (
          <div className="px-4 pb-4 flex gap-2">
            {ctaLinks.map((href) => (
              <Button key={href} asChild variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-white">
                <Link href={href}>{href === "/contact" ? "Contact Us" : href === "/request-quotation" ? "Request a Quote" : "Open"}</Link>
              </Button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-joeve-blue-dark border-t border-cyan-500/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-joeve-blue-deep border border-cyan-500/30 rounded-full px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !inputValue.trim()}
              className="rounded-full bg-cyan-500 hover:bg-cyan-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

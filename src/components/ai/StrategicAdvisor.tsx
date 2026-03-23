'use client';

import React, { useState } from 'react';
import { useGenkitFlow } from '@/hooks/use-genkit-flow';
import { askAdvisor, type AdvisorOutput } from '@/ai/flows/advisor-flow';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, RefreshCw, AlertCircle, Send, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StrategicAdvisor() {
  const [query, setQuery] = useState('');
  const { data, status, callFlow, retry } = useGenkitFlow<any, AdvisorOutput>(askAdvisor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      callFlow({ question: query });
    }
  };

  return (
    <Card className="p-8 md:p-12 bg-brand-green border-brand-gold/20 text-white rounded-[40px] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <BrainCircuit size={120} />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Sparkles className="text-brand-gold animate-pulse" size={24} />
          </div>
          <p className="font-body text-brand-gold/60 text-xs uppercase tracking-[3px] font-bold">Query the Firefly model in real-time</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input 
              placeholder="Ask about ROI, Scalability, or Community growth..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-white/10 border-white/20 text-white h-16 rounded-2xl pr-16 placeholder:text-white/20 focus:ring-brand-gold transition-all"
              disabled={status === 'loading' || status === 'retrying'}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-2 h-12 w-12 bg-brand-gold text-brand-green hover:bg-brand-gold/90 rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
              disabled={!query.trim() || status === 'loading' || status === 'retrying'}
            >
              <Send size={20} />
            </button>
          </div>

          {status === 'retrying' && (
            <div className="flex items-center gap-3 p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-2xl animate-pulse">
              <RefreshCw className="text-brand-gold animate-spin" size={18} />
              <p className="font-body text-sm text-brand-gold">Just a moment, we're thinking...</p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="text-red-400" size={18} />
                <p className="font-body text-sm text-red-400">Something went wrong. Please try again.</p>
              </div>
              <Button 
                variant="outline" 
                onClick={retry}
                className="border-red-500/30 text-red-400 hover:bg-red-500/20"
              >
                Retry Request
              </Button>
            </div>
          )}

          {data && status === 'success' && (
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 animate-in fade-in slide-in-from-top-4">
              <span className="font-headline text-brand-gold text-xs tracking-widest uppercase">Advisor Response</span>
              <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed">
                "{data.answer}"
              </p>
            </div>
          )}

          {status === 'loading' && (
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-4 h-4 border-2 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin" />
              <p className="font-body text-sm text-white/40">Synthesizing strategic response...</p>
            </div>
          )}
        </form>
      </div>
    </Card>
  );
}

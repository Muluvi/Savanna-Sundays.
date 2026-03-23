'use client';

import React, { useState, useEffect } from 'react';
import { useFirestore, useUser, getAnalyticsInstance } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import { logEvent } from 'firebase/analytics';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

export function LeadCapture() {
  const db = useFirestore();
  const { user } = useUser();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    if (!email) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please provide a work email to submit feedback.",
      });
      return;
    }

    setLoading(true);
    
    const leadData = {
      email,
      message,
      interest: 'high',
      timestamp: serverTimestamp(),
    };

    addDoc(collection(db, 'prospectusLeads'), leadData)
      .then(() => {
        const analytics = getAnalyticsInstance();
        if (analytics) {
          logEvent(analytics, 'lead_captured', { user_email: email });
        }

        setSubmitted(true);
        toast({
          title: "Interest Recorded",
          description: "Firefly Management will reach out for the next strategic session.",
        });
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: 'prospectusLeads',
          operation: 'create',
          requestResourceData: leadData,
        } satisfies SecurityRuleContext);

        errorEmitter.emit('permission-error', permissionError);
        
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "Please try again later or contact your account manager.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (submitted) {
    return (
      <Card className="p-12 bg-brand-green border-brand-gold/30 text-center space-y-4 rounded-[40px] shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="font-headline text-4xl text-white uppercase">Engagement Logged</h3>
        <p className="font-body text-brand-text-muted uppercase tracking-[2px] text-xs">A strategic follow-up has been scheduled.</p>
      </Card>
    );
  }

  return (
    <Card className="p-8 md:p-12 bg-white/5 border-white/10 backdrop-blur-xl rounded-[40px] shadow-2xl space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h3 className="font-headline text-4xl text-white uppercase leading-none">Stakeholder Feedback</h3>
        <p className="font-body text-brand-text-muted text-xs uppercase tracking-[3px] font-bold">Request a session or leave a comment</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[3px] ml-1">Work Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <Input 
              type="email" 
              placeholder="stakeholder@kwal.co.ke" 
              className="bg-white/10 border-white/10 text-white placeholder:text-white/20 h-14 pl-12 rounded-2xl focus:ring-brand-gold transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[9px] font-bold text-brand-text-muted uppercase tracking-[3px] ml-1">Message</label>
          <Textarea 
            placeholder="How can we accelerate this partnership?" 
            className="bg-white/10 border-white/10 text-white placeholder:text-white/20 min-h-[120px] rounded-2xl focus:ring-brand-gold transition-all"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full btn-primary h-16 flex items-center justify-center gap-4 group shadow-2xl"
          disabled={loading}
        >
          <span className="font-headline text-xl tracking-widest">{loading ? 'TRANSMITTING...' : 'SEND STRATEGIC FEEDBACK'}</span>
          {!loading && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
        </Button>
      </form>
    </Card>
  );
}

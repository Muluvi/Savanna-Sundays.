'use client';

import React, { useEffect, useState } from 'react';
import { useUser, useFirestore, useAuth } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { WaterDroplets } from '@/components/brand/VisualElements';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Lock, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';

/**
 * Protects the prospectus by ensuring only whitelisted users can enter.
 * Checks the 'invitedUsers' collection in Firestore.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const db = useFirestore();
  const auth = useAuth();
  const { toast } = useToast();
  const [isWhitelisted, setIsWhitelisted] = useState<boolean | null>(null);
  const [checkingWhitelist, setCheckingWhitelist] = useState(false);

  useEffect(() => {
    async function checkWhitelist() {
      if (user?.email && db) {
        setCheckingWhitelist(true);
        try {
          const docRef = doc(db, 'invitedUsers', user.email.toLowerCase());
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setIsWhitelisted(true);
          } else {
            setIsWhitelisted(false);
            toast({
              variant: "destructive",
              title: "Unauthorized Stakeholder",
              description: "This email is not on the VIP access list for this prospectus.",
            });
            if (auth) signOut(auth);
          }
        } catch (error) {
          console.error("Whitelist check failed:", error);
          setIsWhitelisted(false);
        } finally {
          setCheckingWhitelist(false);
        }
      } else {
        setIsWhitelisted(null);
      }
    }
    checkWhitelist();
  }, [user, db, auth, toast]);

  if (loading || checkingWhitelist) {
    return (
      <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin" />
        <div className="text-brand-gold font-headline text-2xl tracking-[4px] animate-pulse">
          VERIFYING VIP CREDENTIALS...
        </div>
      </div>
    );
  }

  if (!user || isWhitelisted === false) {
    return <LoginPage />;
  }

  return <>{children}</>;
}

function LoginPage() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');

  const handleGoogleLogin = async () => {
    if (!auth) return;
    setLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error: any) {
      toast({ variant: "destructive", title: "Authentication Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Access Denied", 
        description: "Invalid credentials or unauthorized stakeholder account." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-green flex items-center justify-center p-6 relative overflow-hidden">
      <WaterDroplets className="opacity-10" />
      
      <Card className="w-full max-w-md bg-white/5 border-white/10 p-10 backdrop-blur-2xl relative z-10 space-y-8 rounded-[40px] shadow-2xl">
        <div className="text-center space-y-4">
          {savannaLogo && (
            <div className="flex justify-center mb-6">
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')}
                alt="Savanna"
                style={{ width: 'clamp(120px, 18vw, 200px)', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          )}
          <div className="w-20 h-20 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-2 border border-brand-gold/20">
            <ShieldCheck size={40} className="animate-pulse" />
          </div>
          <div className="space-y-1">
            <h1 className="font-headline text-5xl text-white tracking-tighter uppercase leading-none">PRIVATE ACCESS</h1>
            <p className="font-body text-[10px] text-brand-gold uppercase tracking-[4px] font-bold opacity-60">Savanna Sundays x Firefly Management</p>
          </div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[9px] font-bold text-brand-gold/60 uppercase tracking-[3px] ml-1">Work Email</label>
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
            <label className="text-[9px] font-bold text-brand-gold/60 uppercase tracking-[3px] ml-1">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/20 h-14 pl-12 rounded-2xl focus:ring-brand-gold transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full btn-primary h-16 flex items-center justify-center gap-4 group mt-4 shadow-2xl"
            disabled={loading}
          >
            <span className="font-headline text-xl tracking-widest">{loading ? 'VERIFYING...' : 'ENTER SANCTUARY'}</span>
            {!loading && <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10" /></div>
          <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-brand-green px-4 text-white/20 font-bold tracking-[4px]">STAKEHOLDER SSO</span></div>
        </div>

        <Button 
          variant="outline" 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full h-14 border-white/10 bg-transparent text-white hover:bg-white/5 rounded-2xl font-bold tracking-widest uppercase text-[10px] transition-all"
        >
          Sign in with Google
        </Button>

        <div className="text-center space-y-2">
          <p className="font-body text-[9px] text-white/20 uppercase tracking-[2px] leading-relaxed">
            CONFIDENTIAL STRATEGIC DOCUMENT. <br/>ALL SESSION DATA RECORDED VIA FIREFLY ANALYTICS.
          </p>
        </div>
      </Card>
    </div>
  );
}

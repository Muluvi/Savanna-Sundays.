'use client';

import React, { useEffect, useState } from 'react';
import { useUser, useFirestore, useAuth } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { WaterDroplets, CiderFizz } from '@/components/brand/VisualElements';
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
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');

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
      <CiderFizz className="opacity-20" />
      <WaterDroplets className="opacity-10" />
      
      <Card className="w-full max-w-md bg-white/5 border-white/10 p-12 backdrop-blur-2xl relative z-10 space-y-10 rounded-[40px] shadow-2xl">
        <div className="text-center space-y-6">
          {savannaLogo && (
            <div className="flex justify-center mb-4">
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600')}
                alt="Savanna"
                className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                style={{ width: 'clamp(180px, 25vw, 260px)', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          )}
          <div className="space-y-2">
            <h1 className="font-headline text-6xl text-white tracking-tighter uppercase leading-none">PRIVATE ACCESS</h1>
            <p className="font-body text-[10px] text-brand-gold uppercase tracking-[4px] font-bold">Savanna Sundays x Firefly Management</p>
          </div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-[4px] ml-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
              <Input 
                type="email" 
                placeholder="stakeholder@kwal.co.ke" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/20 h-16 pl-14 rounded-2xl focus:ring-brand-gold transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-[4px] ml-1">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/20 h-16 pl-14 rounded-2xl focus:ring-brand-gold transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full btn-primary h-20 flex items-center justify-center gap-6 group mt-6 shadow-2xl"
            disabled={loading}
          >
            <span className="font-headline text-2xl tracking-widest">{loading ? 'VERIFYING...' : 'ENTER SANCTUARY'}</span>
            {!loading && <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10" /></div>
          <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-brand-green px-6 text-white/30 font-bold tracking-[4px]">Stakeholder SSO</span></div>
        </div>

        <Button 
          variant="outline" 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full h-16 border-white/10 bg-transparent text-white hover:bg-white/5 rounded-2xl font-bold tracking-widest uppercase text-[11px] transition-all"
        >
          Sign in with Google
        </Button>

        <div className="text-center space-y-6 pt-6 border-t border-white/5">
          <p className="font-body text-[9px] text-white/20 uppercase tracking-[3px] leading-relaxed">
            CONFIDENTIAL STRATEGIC DOCUMENT. <br/>ALL SESSION DATA RECORDED VIA FIREFLY ANALYTICS.
          </p>
          {fireflyLogo && (
            <img 
              src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_1000')}
              alt="Firefly"
              className="mx-auto brightness-125 drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
            />
          )}
        </div>
      </Card>
    </div>
  );
}

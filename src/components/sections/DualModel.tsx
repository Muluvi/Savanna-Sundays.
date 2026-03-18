
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Trophy, MapPin, Users, Calendar as CalendarIcon, Star } from 'lucide-react';
import Image from 'next/image';

const venues = [
  { name: "Geco", area: "Westlands", capacity: "300", type: "Owned", special: true },
  { name: "Muze", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ac208aa5-8292-4543-a7ca-719fd61a3c46_20260119_214138_0000_ikxc7g.png", area: "Westlands", capacity: "400", type: "Owned" },
  { name: "Alchemist", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/8367e513-9c35-4276-97b8-7ae60597091e_20260119_214311_0000_numq8q.png", area: "Westlands", capacity: "600", type: "Sponsor" },
  { name: "KODA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ee064dd8-0e0b-4c61-9469-dd6fe46a1572_20260119_214214_0000_r494od.png", area: "Kilimani", capacity: "350", type: "Owned" },
  { name: "Black Samurai", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/44699495-0ab1-43b0-bc11-b97b6d79c266_20260119_214246_0000_yko4eb.png", area: "Westlands", capacity: "500", type: "Sponsor" },
  { name: "Masshouse", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768407223/419b98e1-eb0d-4198-b3d8-618a79ef3641_20260114_191325_0000_ebdjee.png", area: "Kilimani", capacity: "800", type: "Sponsor" },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-24">
      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-white border-l-4 border-brand-gold rounded-[20px] shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <UserCheck className="text-brand-gold" size={32} />
            <h4 className="font-headline text-3xl text-brand-green">FULLY OWNED EDITIONS</h4>
          </div>
          <p className="font-body text-brand-green/70 mb-6">
            Complete creative and operational control. Every touchpoint is a Savanna branded experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold">100% Brand Focus</Badge>
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold">Data Mastery</Badge>
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold">Curated Vibe</Badge>
          </div>
        </Card>

        <Card className="p-8 bg-white border-l-4 border-brand-teal rounded-[20px] shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="text-brand-teal" size={32} />
            <h4 className="font-headline text-3xl text-brand-green">TITLE SPONSORSHIP</h4>
          </div>
          <p className="font-body text-brand-green/70 mb-6">
            Amplifying established culture. We bring the Savanna crispness to Nairobi's existing Sunday favorites.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal">Mass Scale</Badge>
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal">Cultural Cred</Badge>
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal">Synergy</Badge>
          </div>
        </Card>
      </div>

      {/* Tabs Section */}
      <div className="py-8">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1 h-auto grid grid-cols-1 md:grid-cols-3 mb-12 rounded-2xl">
            <TabsTrigger value="network" className="py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl">Venue Network</TabsTrigger>
            <TabsTrigger value="sponsorship" className="py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl">Sponsorship Focus</TabsTrigger>
            <TabsTrigger value="calendar" className="py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl">Combined Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="network">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, i) => (
                <Card key={i} className="group p-6 bg-white border border-brand-green/5 rounded-[20px] hover:-translate-y-2 transition-all text-center">
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-[80px] h-[80px] rounded-full bg-brand-cream border-2 border-brand-green/5 flex items-center justify-center overflow-hidden">
                      {venue.special ? (
                        <div className="relative flex flex-col items-center">
                          <span className="font-headline text-4xl text-brand-green">G</span>
                          <div className="absolute -top-1 -right-1 bg-brand-gold p-1 rounded-full shadow-sm">
                            <Star size={10} className="fill-brand-green text-brand-green" />
                          </div>
                        </div>
                      ) : venue.logo ? (
                        <Image src={venue.logo} alt={venue.name} width={60} height={60} className="object-contain" />
                      ) : null}
                    </div>
                  </div>
                  <h5 className="font-headline text-xl text-brand-green mb-1">{venue.name}</h5>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin size={12} className="text-brand-green/40" />
                    <span className="font-body text-[12px] text-brand-green/40">{venue.area}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-green/20" />
                    <Users size={12} className="text-brand-teal" />
                    <span className="font-body text-[12px] font-bold text-brand-teal">{venue.capacity} CAP</span>
                  </div>
                  <div className="flex justify-center">
                    <Badge className={venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white'}>
                      {venue.type === 'Owned' ? 'Owned Edition' : 'Title Sponsor'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sponsorship">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Card className="p-8 bg-brand-green text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Trophy size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-[100px] h-[100px] bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
                      <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Boiler_Room_s9kvwq.jpg" alt="Boiler Room" width={80} height={80} className="object-contain" />
                    </div>
                    <h5 className="font-headline text-3xl mb-4">Boiler Room Nairobi</h5>
                    <p className="font-body text-white/60 mb-6">Global underground credibility meeting Savanna's heritage.</p>
                    <Badge className="bg-brand-gold text-brand-green">Strategic Target</Badge>
                  </div>
               </Card>

               <Card className="p-8 bg-brand-green text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Trophy size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-[100px] h-[100px] bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
                      <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1768410458/3085e5d1-651e-404e-8cc9-240365f9ad11_20260114_200656_0000_sstsmb.png" alt="Balcony Mix" width={80} height={80} className="object-contain" />
                    </div>
                    <h5 className="font-headline text-3xl mb-4">The Balcony Mix Africa</h5>
                    <p className="font-body text-white/60 mb-6">The ultimate lifestyle synergy with Major League Djz.</p>
                    <Badge className="bg-brand-gold text-brand-green">Strategic Target</Badge>
                  </div>
               </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="bg-white p-8 rounded-[30px] border border-brand-green/5 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h5 className="font-headline text-2xl text-brand-green">MARCH 2024 ACTIVATION</h5>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-green rounded-sm" /><span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Owned</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-teal rounded-sm" /><span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Sponsor</span></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {['M','T','W','T','F','S','S'].map((d, i) => (
                  <div key={i} className="text-center font-headline text-brand-green opacity-20 py-2">{d}</div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = day === 7 || day === 21;
                  const isSponsor = day === 14 || day === 28;
                  const isCurrent = day === 14;

                  return (
                    <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center relative border ${
                      isOwned ? 'bg-brand-green border-transparent' : 
                      isSponsor ? 'bg-brand-teal border-transparent' : 
                      isCurrent ? 'border-brand-gold border-2' : 'border-brand-green/5'
                    }`}>
                      <span className={`text-[12px] font-bold ${isOwned || isSponsor ? 'text-white' : 'text-brand-green/20'}`}>{day}</span>
                      {(isOwned || isSponsor) && <div className="absolute bottom-1 w-1 h-1 bg-brand-gold rounded-full" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

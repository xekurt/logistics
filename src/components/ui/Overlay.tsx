'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Phone, Globe, ShieldCheck, Clock,
    Menu, X, Anchor, Zap, Cpu, Truck, Network as NetworkIcon
} from 'lucide-react';

type Section = 'home' | 'about' | 'services' | 'network';

export default function Overlay() {
    const [activeSection, setActiveSection] = useState<Section>('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'services', label: 'Services' },
        { id: 'network', label: 'Network' },
    ] as const;

    const handleNavClick = (id: Section) => {
        setActiveSection(id);
        setIsMenuOpen(false);
    };

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between p-6 md:p-12 z-10 text-white font-sans overflow-hidden">

            {/* 1. Navbar */}
            <nav className="flex justify-between items-center pointer-events-auto relative z-50">
                <div
                    className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer"
                    onClick={() => handleNavClick('home')}
                >
                    BOKANI<span className="text-blue-400"> LOGISTICS</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`hover:text-white transition-colors uppercase tracking-widest text-[10px] ${activeSection === link.id ? 'text-blue-400 font-bold' : ''
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <a href="mailto:rez4eii@gmail.com" className="px-6 py-2 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all text-[10px] uppercase tracking-widest font-bold">
                        Contact CEO
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 bg-white/5 border border-white/10 rounded-lg"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Navigation Mesh Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 md:hidden pointer-events-auto flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`text-2xl font-bold uppercase tracking-[0.2em] ${activeSection === link.id ? 'text-blue-400' : 'text-white'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button onClick={() => window.location.href = 'mailto:rez4eii@gmail.com'} className="mt-4 px-8 py-3 bg-blue-600 rounded-full font-bold uppercase tracking-widest text-xs">
                            Contact CEO
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Content Area */}
            <div className="flex-1 flex flex-col justify-center max-w-2xl pointer-events-auto py-12 md:py-0">
                <AnimatePresence mode="wait">
                    {activeSection === 'home' && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col gap-4 md:gap-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] md:text-xs font-semibold w-fit">
                                <Globe size={12} /> GLOBAL SHIPPING LEADER
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-none">
                                Moving the World, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Without Limits.
                                </span>
                            </h1>
                            <p className="text-sm md:text-lg text-gray-400 max-w-lg leading-relaxed">
                                Experience precision in global motion. We combine elite infrastructure with
                                unrivaled logistics expertise to ensure your cargo arrives on time, every time.
                            </p>
                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                                <button className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
                                    Get a Quote
                                </button>
                                <a href="tel:+43000000000" className="px-6 md:px-8 py-2.5 md:py-3 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <Phone size={16} /> Call Us
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {activeSection === 'about' && (
                        <motion.div
                            key="about"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col gap-4 md:gap-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-blue-400">Legacy</span></h2>
                            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400 max-w-lg">
                                <p>
                                    Founded in 2022 in Austria, Bokani Logistics was born from a simple mission: to make global supply chains transparent, reliable, and efficient.
                                </p>
                                <p>
                                    Headquartered in Klagenfurt (9020), we manage integrated transport solutions that connect European markets with the rest of the world.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-2">
                                <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="text-xl md:text-2xl font-bold text-white">50k+</div>
                                    <div className="text-[10px] text-blue-400 uppercase tracking-tighter">Deliveries/Day</div>
                                </div>
                                <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="text-xl md:text-2xl font-bold text-white">0.01%</div>
                                    <div className="text-[10px] text-emerald-400 uppercase tracking-tighter">Carbon Footprint</div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeSection === 'services' && (
                        <motion.div
                            key="services"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col gap-4 md:gap-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold">What We <span className="text-emerald-400">Power</span></h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                <ServiceItem icon={<Anchor size={18} />} title="Ocean Freight" desc="Global deep-sea orchestration." />
                                <ServiceItem icon={<Zap size={18} />} title="Hyper-Speed" desc="Deliveries within 2-hour windows." />
                                <ServiceItem icon={<Cpu size={18} />} title="Smart Storage" desc="advanced sorting hubs." />
                                <ServiceItem icon={<Truck size={18} />} title="Smart Fleet" desc="Electric & self-driving." />
                            </div>
                        </motion.div>
                    )}

                    {activeSection === 'network' && (
                        <motion.div
                            key="network"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col gap-4 md:gap-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold">Integrated <span className="text-purple-400">Mesh</span></h2>
                            <p className="text-xs md:text-sm text-gray-400 max-w-lg">
                                Our network spans across every continent, connected via private satellite constellation.
                            </p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> 14 Primary Hubs
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> 402 Regional Spokes
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" /> 1k+ Distribution Nodes
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 3. Bottom Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl pointer-events-auto pb-4 md:pb-0">
                <StatCard
                    icon={<ShieldCheck size={20} className="text-blue-400" />}
                    title="Secure Cargo"
                    desc="100% Insured"
                />
                <StatCard
                    icon={<Clock size={20} className="text-emerald-400" />}
                    title="On-Time"
                    desc="99.9% Success"
                />
                <StatCard
                    icon={<NetworkIcon size={20} className="text-purple-400" />}
                    title="Global Reach"
                    desc="200+ Countries"
                />
            </div>
        </div>
    );
}

function StatCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-3 md:p-4 bg-black/40 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/5 transition-colors cursor-default flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
            <div className="shrink-0">{icon}</div>
            <div className="flex flex-col gap-0.5">
                <h3 className="text-white font-semibold text-xs md:text-sm">{title}</h3>
                <p className="text-[10px] md:text-xs text-gray-400">{desc}</p>
            </div>
        </div>
    );
}

function ServiceItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3 md:gap-4 hover:bg-white/10 transition-colors">
            <div className="p-2 bg-white/5 rounded-lg text-blue-400 shrink-0">{icon}</div>
            <div>
                <h4 className="text-white font-bold text-xs md:text-sm">{title}</h4>
                <p className="text-[10px] text-gray-500 truncate">{desc}</p>
            </div>
        </div>
    );
}
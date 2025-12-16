import React, { useState, useEffect, useRef } from 'react';
import { 
  Anchor, 
  Ship, 
  Droplet, 
  Globe, 
  RefreshCw, 
  Search, 
  ExternalLink, 
  Clock, 
  ChevronRight,
  ChevronLeft,
  Layers,
  Compass,
  LifeBuoy,
  Container,
  Truck,
  Radio,
  Zap,
  Server,
  Briefcase,
  Box,
  Wifi,
  Users,
  Heart,
  Shield,
  Smile,
  FileText,
  AlertTriangle,
  Siren,
  Sun,
  MessageCircle,
  Flag,
  MapPin,
  Newspaper,
  Copy,
  Check,
  Volume2,
  StopCircle,
  TrendingUp,
  Bookmark,
  Hash,
  Calculator,
  Fuel,
  Lock,
  HardHat,
  Flame,
  BookOpen,
  Microscope,
  Scale,
  CalendarDays
} from 'lucide-react';

// --- COMPREHENSIVE MARITIME NEWS SOURCES ---
const CATEGORIES = [
  // ==========================================
  // 1. GLOBAL SHIPPING & TRADE
  // ==========================================
  { 
    id: 'seatrade', 
    name: 'Seatrade Maritime', 
    section: 'shipping',
    icon: Globe, 
    url: 'https://www.seatrade-maritime.com/rss.xml',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  { 
    id: 'marex', 
    name: 'Maritime Executive', 
    section: 'shipping',
    icon: Ship, 
    url: 'https://maritime-executive.com/rss',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  { 
    id: 'gcaptain', 
    name: 'gCaptain', 
    section: 'shipping',
    icon: Anchor, 
    url: 'https://gcaptain.com/feed/',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  { 
    id: 'tradewinds', 
    name: 'TradeWinds', 
    section: 'shipping',
    icon: Radio, 
    url: 'https://www.tradewindsnews.com/rss/news', 
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200'
  },
  { 
    id: 'lloydslist', 
    name: 'Lloyd\'s List', 
    section: 'shipping',
    icon: Newspaper, 
    url: 'https://www.lloydslist.com/rss-feeds', 
    color: 'text-slate-800',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  },
  { 
    id: 'splash', 
    name: 'Splash247', 
    section: 'shipping',
    icon: Droplet, 
    url: 'https://splash247.com/feed/',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  { 
    id: 'marinelink', 
    name: 'MarineLink', 
    section: 'shipping',
    icon: Anchor, 
    url: 'https://www.marinelink.com/rss/maritime',
    color: 'text-blue-900',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  { 
    id: 'joc', 
    name: 'JOC', 
    section: 'shipping',
    icon: Container, 
    url: 'https://www.joc.com/rss', 
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  { 
    id: 'loadstar', 
    name: 'The Loadstar', 
    section: 'shipping',
    icon: Truck, 
    url: 'https://theloadstar.com/feed/',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  { 
    id: 'container_news',
    name: 'Container News',
    section: 'shipping',
    icon: Box,
    url: 'https://container-news.com/feed/',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  { 
    id: 'hellenic', 
    name: 'Hellenic News', 
    section: 'shipping',
    icon: Flag, 
    url: 'https://www.hellenicshippingnews.com/feed/',
    color: 'text-sky-700',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200'
  },
  { 
    id: 'shippingtribune', 
    name: 'Shipping Tribune', 
    section: 'shipping',
    icon: MapPin, 
    url: 'https://shippingtribune.com/rss', 
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  
  // ==========================================
  // 2. TECHNICAL, PORTS & SPECIALIZED
  // ==========================================
  { 
    id: 'marineinsight', 
    name: 'Marine Insight', 
    section: 'shipping',
    icon: Compass, 
    url: 'https://www.marineinsight.com/feed/',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  { 
    id: 'marinelog', 
    name: 'Marine Log', 
    section: 'shipping',
    icon: FileText, 
    url: 'https://www.marinelog.com/feed/',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'porttech',
    name: 'Port Technology',
    section: 'shipping',
    icon: Server,
    url: 'https://www.porttechnology.org/feed/',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'baird',
    name: 'Baird Maritime',
    section: 'shipping',
    icon: Briefcase,
    url: 'https://www.bairdmaritime.com/feed/',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 'riviera',
    name: 'Riviera Maritime',
    section: 'shipping',
    icon: Radio,
    url: 'https://www.rivieramm.com/rss',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'projectcargo',
    name: 'Project Cargo',
    section: 'shipping',
    icon: Box,
    url: 'https://www.projectcargo-journal.com/feed/',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'smartmaritime',
    name: 'Smart Maritime',
    section: 'shipping',
    icon: Wifi,
    url: 'https://smartmaritimenetwork.com/feed/',
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200'
  },
  {
    id: 'offshore',
    name: 'Offshore Energy',
    section: 'shipping',
    icon: Zap,
    url: 'https://www.offshore-energy.biz/feed/',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  { 
    id: 'shipandbunker', 
    name: 'Ship & Bunker', 
    section: 'shipping',
    icon: Fuel, 
    url: 'https://shipandbunker.com/news/rss',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  { 
    id: 'manifold', 
    name: 'Manifold Times', 
    section: 'shipping',
    icon: Fuel, 
    url: 'https://www.manifoldtimes.com/feed/',
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  { 
    id: 'bimco', 
    name: 'BIMCO', 
    section: 'shipping',
    icon: FileText, 
    url: 'https://www.bimco.org/news/rss',
    color: 'text-cyan-800',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  { 
    id: 'imo', 
    name: 'IMO News', 
    section: 'shipping',
    icon: Anchor, 
    url: 'https://www.imo.org/feed/PressBriefings',
    color: 'text-blue-800',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'dnv',
    name: 'DNV',
    section: 'shipping',
    icon: Shield,
    url: 'https://www.dnv.com/rss/maritime-news',
    color: 'text-emerald-800',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'classnk',
    name: 'ClassNK',
    section: 'shipping',
    icon: Check,
    url: 'https://www.classnk.or.jp/hp/rss/tech_news.xml',
    color: 'text-red-800',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },

  // ==========================================
  // 3. CASE STUDIES & INVESTIGATIONS
  // ==========================================
  {
    id: 'marineinsight_cs',
    name: 'Marine Insight Cases',
    section: 'casestudy',
    icon: FileText,
    url: 'https://www.marineinsight.com/category/case-studies/feed/',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 'msil',
    name: 'Safety Innovation',
    section: 'casestudy',
    icon: Microscope,
    url: 'https://maritimesafetyinnovationlab.org/feed/',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'maritimetrainer',
    name: 'Maritime Trainer',
    section: 'casestudy',
    icon: BookOpen,
    url: 'https://maritimetrainer.com/feed/',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'maritimeedu',
    name: 'Maritime Education',
    section: 'casestudy',
    icon: Briefcase,
    url: 'https://maritimeducation.com/feed/',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'marinesafetyconsult',
    name: 'Safety Consultants',
    section: 'casestudy',
    icon: Shield,
    url: 'https://marinesafetyconsultants.com/feed/',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  },
  {
    id: 'empowerlaws',
    name: 'Empower Laws',
    section: 'casestudy',
    icon: Scale,
    url: 'https://empowerlaws.com/feed/',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'marinepublic',
    name: 'Marine Public HSE',
    section: 'casestudy',
    icon: HardHat,
    url: 'https://www.marinepublic.com/blogs/hse.atom',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },

  // ==========================================
  // 4. INCIDENTS, SECURITY & CASUALTIES
  // ==========================================
  {
    id: 'joiff',
    name: 'JOIFF',
    section: 'incident',
    icon: Flame,
    url: 'https://www.joiff.com/feed/',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'fleetmon',
    name: 'FleetMon Incidents',
    section: 'incident',
    icon: AlertTriangle,
    url: 'https://www.fleetmon.com/newsroom/category/1/rss',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'vesselfinder',
    name: 'VesselFinder',
    section: 'incident',
    icon: Search,
    url: 'https://www.vesselfinder.com/news/rss',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'splash_casualty',
    name: 'Splash Casualties',
    section: 'incident',
    icon: Droplet,
    url: 'https://splash247.com/category/sector/casualties/feed/',
    color: 'text-cyan-700',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'dryad',
    name: 'Dryad Global',
    section: 'incident',
    icon: Lock,
    url: 'https://channel16.dryadglobal.com/rss.xml',
    color: 'text-slate-800',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  },
  {
    id: 'uk_pandi',
    name: 'UK P&I Club',
    section: 'incident',
    icon: Shield,
    url: 'https://www.ukpandi.com/rss/news',
    color: 'text-indigo-800',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'gard',
    name: 'Gard P&I',
    section: 'incident',
    icon: Shield,
    url: 'https://gard.no/rss/articles',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'northstandard',
    name: 'NorthStandard',
    section: 'incident',
    icon: Shield,
    url: 'https://north-standard.com/feed/',
    color: 'text-slate-800',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200'
  },
  {
    id: 'britannia',
    name: 'Britannia P&I',
    section: 'incident',
    icon: Anchor,
    url: 'https://britanniapandi.com/feed',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },

  // ==========================================
  // 5. SEAFARERS, UNIONS & WELFARE
  // ==========================================
  {
    id: 'itf',
    name: 'ITF Seafarers',
    section: 'seafarer',
    icon: Users,
    url: 'https://www.itfseafarers.org/en/rss-feed.xml',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'mission',
    name: 'Mission to Seafarers',
    section: 'seafarer',
    icon: Heart,
    url: 'https://www.missiontoseafarers.org/feed',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'nautilus',
    name: 'Nautilus Int',
    section: 'seafarer',
    icon: Anchor,
    url: 'https://www.nautilusint.org/en/news-and-insight/?rss=1',
    color: 'text-blue-800',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'sailorssociety',
    name: 'Sailors Society',
    section: 'seafarer',
    icon: Smile,
    url: 'https://sailors-society.org/feed',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'iswan',
    name: 'ISWAN',
    section: 'seafarer',
    icon: Shield,
    url: 'https://www.iswan.org.uk/feed',
    color: 'text-cyan-700',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'safety4sea_crew',
    name: 'S4S Crew',
    section: 'seafarer',
    icon: HardHat,
    url: 'https://safety4sea.com/category/human-element/crew/feed/',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200'
  },
  {
    id: 'seafarer_social',
    name: 'Seafarer Social',
    section: 'seafarer',
    icon: MessageCircle,
    url: 'https://seafarersocial.com/feed/',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  }
];

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';

// --- MARINEGURU BRANDED BANNER GENERATOR ---
const getMarineGuruBanner = () => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" opacity="0.05"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)" />
    <rect width="100%" height="100%" fill="url(#grid)" />
    <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="60" fill="white" letter-spacing="2">MarineGuru</text>
    <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-style="italic" font-size="24" fill="#93c5fd">An assistant to sea career</text>
    <path d="M 0 350 Q 200 400 400 350 T 800 350 V 400 H 0 Z" fill="white" opacity="0.1"/>
  </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 0) return "Just now";
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m ago";
  return Math.floor(seconds) + "s ago";
};

const cleanText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  let text = doc.body.textContent || "";
  return text.replace(/Read more\.\.\.|Continue reading/gi, '').trim();
};

const extractImage = (item) => {
  if (item.enclosure && item.enclosure.link) return item.enclosure.link;
  if (item.thumbnail) return item.thumbnail;
  
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
  const descMatch = item.description ? item.description.match(imgRegex) : null;
  if (descMatch) return descMatch[1];
  const contentMatch = item.content ? item.content.match(imgRegex) : null;
  if (contentMatch) return contentMatch[1];
  
  return null;
};

// --- TOOLKIT COMPONENT ---
const MaritimeTools = () => {
  const [activeTool, setActiveTool] = useState('seatime');
  
  // Sea Time State
  const [signOn, setSignOn] = useState('');
  const [signOff, setSignOff] = useState('');
  const [seaTimeResult, setSeaTimeResult] = useState(null);

  // ETA State
  const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');
  const [etaResult, setEtaResult] = useState(null);

  const calculateSeaTime = () => {
    if(!signOn || !signOff) return;
    const start = new Date(signOn);
    const end = new Date(signOff);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 
    
    const months = Math.floor(diffDays / 30);
    const days = diffDays % 30;
    
    setSeaTimeResult(`${months} Months, ${days} Days (Total: ${diffDays} days)`);
  };

  const calculateETA = () => {
    if(!distance || !speed) return;
    const dist = parseFloat(distance);
    const spd = parseFloat(speed);
    if(spd === 0) return;
    
    const totalHours = dist / spd;
    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const mins = Math.round((totalHours % 1) * 60);
    
    setEtaResult(`${days}d ${hours}h ${mins}m`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-in fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Calculator className="text-blue-600" /> Mariner's Toolkit
      </h2>
      
      <div className="flex gap-4 mb-6 border-b border-slate-100 pb-2">
        <button 
          onClick={() => setActiveTool('seatime')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTool === 'seatime' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          Sea Time Calc
        </button>
        <button 
          onClick={() => setActiveTool('eta')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTool === 'eta' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          Voyage ETA
        </button>
      </div>

      {activeTool === 'seatime' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Sign On Date</label>
              <input type="date" value={signOn} onChange={(e) => setSignOn(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Sign Off Date</label>
              <input type="date" value={signOff} onChange={(e) => setSignOff(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <button onClick={calculateSeaTime} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">Calculate Service</button>
          
          {seaTimeResult && (
            <div className="p-4 bg-green-50 text-green-800 rounded-lg border border-green-100 font-bold text-center mt-4">
              {seaTimeResult}
            </div>
          )}
        </div>
      )}

      {activeTool === 'eta' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Distance (NM)</label>
              <input type="number" placeholder="e.g. 1500" value={distance} onChange={(e) => setDistance(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Speed (Knots)</label>
              <input type="number" placeholder="e.g. 12.5" value={speed} onChange={(e) => setSpeed(e.target.value)} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <button onClick={calculateETA} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">Calculate ETA</button>
          
          {etaResult && (
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 font-bold text-center mt-4 flex flex-col">
              <span className="text-xs text-blue-400 uppercase">Estimated Time Enroute</span>
              <span className="text-2xl">{etaResult}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const NewsCard = ({ item, onToggleBookmark, isBookmarked }) => {
  const categoryConfig = CATEGORIES.find(c => c.id === item.sourceId) || CATEGORIES[0];
  const [imageSrc, setImageSrc] = useState(extractImage(item) || getMarineGuruBanner());

  useEffect(() => {
    setImageSrc(extractImage(item) || getMarineGuruBanner());
  }, [item]);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group hover:-translate-y-1 relative">
      <button 
        onClick={() => onToggleBookmark(item)}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${isBookmarked ? 'bg-blue-600 text-white' : 'bg-white/90 text-slate-400 hover:text-blue-600'}`}
        title={isBookmarked ? "Remove from saved" : "Save for later"}
      >
        <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
      </button>

      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img 
          src={imageSrc} 
          alt={item.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            if (imageSrc !== getMarineGuruBanner()) {
              setImageSrc(getMarineGuruBanner());
            }
          }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
           <span className={`text-[10px] font-bold ${categoryConfig.color} bg-white/95 px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 uppercase tracking-wider`}>
             <categoryConfig.icon size={11} />
            {categoryConfig.name}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 border border-white/10">
            <Clock size={12} />
            {timeAgo(item.pubDate)}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
          {item.title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">
          {cleanText(item.description)}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider truncate max-w-[140px] flex items-center gap-1.5">
             <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors"></div>
            {item.author || "Editorial Team"}
          </span>
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full"
          >
            Read <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Daily Brief Component
const DailyBrief = ({ items, sectionTitle }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
      if (speechRef.current) window.speechSynthesis.cancel();
    };
  }, []);

  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const month = currentDateTime.toLocaleString('default', { month: 'long' });
  const year = currentDateTime.getFullYear();
  const time = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateDisplay = `${day}- ${month} -${year} | ${time}`;

  const todayItems = items.filter(item => {
    const itemDate = new Date(item.pubDate);
    const now = new Date();
    // Allow for small clock skew (articles from 10 mins in future) and look back 24h
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    const tenMinutesFuture = new Date(now.getTime() + (10 * 60 * 1000));
    
    return itemDate >= twentyFourHoursAgo && itemDate <= tenMinutesFuture;
  });

  if (todayItems.length === 0) return null;

  const summaryPoints = todayItems.map(item => {
    const context = cleanText(item.description).split(' ').slice(0, 70).join(' ') + '...';
    return `🔹 ${item.title.toUpperCase()}\n   ${context}`; 
  }).join('\n\n');

  const speechText = `Here is your ${sectionTitle} briefing for ${day} ${month}. ` + 
    todayItems.slice(0, 5).map(item => `${item.title}.`).join(' Next. ');

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.onend = () => setIsSpeaking(false);
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const shareText = `*${sectionTitle} - 24-Hour Briefing*\n📅 ${dateDisplay}\n\n${summaryPoints}\n\n⚓ Visit MarineGuru for more details`;
  
  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  
  const copyToClipboard = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = shareText;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border border-blue-100 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
         {/* Simple Wave Graphic instead of Sun */}
         <svg width="200" height="100" viewBox="0 0 200 100" fill="none" className="text-blue-200">
           <path d="M0 50 C40 10 60 90 100 50 C140 10 160 90 200 50" stroke="currentColor" strokeWidth="4" fill="none"/>
           <path d="M0 70 C40 30 60 110 100 70 C140 30 160 110 200 70" stroke="currentColor" strokeWidth="4" fill="none"/>
         </svg>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="bg-amber-100 text-amber-600 p-1.5 rounded-lg"><Sun size={20} /></span>
            24-Hour Briefing
          </h3>
          <p className="text-sm text-slate-700 font-bold font-mono mt-1 ml-10 bg-white/50 px-2 py-1 rounded inline-block">{dateDisplay}</p>
          <div className="flex items-center gap-3 mt-2 ml-10">
             <p className="text-xs text-slate-500">{todayItems.length} updates</p>
             <button onClick={handleSpeak} className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full transition-colors ${isSpeaking ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}>{isSpeaking ? <StopCircle size={14} /> : <Volume2 size={14} />}{isSpeaking ? 'Stop Audio' : 'Listen'}</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
           <button onClick={shareToWhatsApp} className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs font-bold shadow-md active:scale-95 transition-transform"><MessageCircle size={14} /> WhatsApp</button>
           <button onClick={copyToClipboard} className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-transform text-white ${copied ? 'bg-slate-700' : 'bg-slate-500 hover:bg-slate-600'}`}>{copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}</button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto pr-2 relative z-10 custom-scrollbar">
        <ul className="space-y-4">
          {todayItems.map((item, idx) => (
             <li key={idx} className="bg-white/70 p-4 rounded-lg hover:bg-white transition-colors border border-blue-50/50 shadow-sm">
               <div className="flex items-start gap-3">
                 <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                 <div>
                   <span className="font-bold text-slate-900 block mb-2 leading-tight text-lg">{item.title}</span>
                   <span className="text-sm text-slate-600 leading-relaxed block text-justify">{cleanText(item.description).split(' ').slice(0, 70).join(' ')}...</span>
                 </div>
               </div>
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Carousel Component
const NewsCarousel = ({ items, sectionTitle, onToggleBookmark, savedArticles }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  if (items.length === 0) return null;

  return (
    <div className="relative mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-slate-500 font-medium">Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, items.length)} of {items.length} articles</div>
        <div className="flex gap-2">
          <button onClick={prevPage} disabled={totalPages <= 1} className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-50 transition-colors shadow-sm"><ChevronLeft size={20} /></button>
          <button onClick={nextPage} disabled={totalPages <= 1} className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-50 transition-colors shadow-sm"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
        {currentItems.map((item, index) => (
          <NewsCard 
            key={`${item.guid || item.link || index}`} 
            item={item} 
            onToggleBookmark={onToggleBookmark}
            isBookmarked={savedArticles.some(saved => saved.link === item.link)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: Math.min(totalPages, 10) }).map((_, idx) => (
            <button key={idx} onClick={() => setCurrentPage(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${currentPage === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200 hover:bg-slate-300'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon, colorClass }) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4 border-b border-slate-200 pb-4 mt-12 first:mt-0">
    <div>
      <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
        <span className={`p-2 rounded-lg ${colorClass} bg-opacity-10`}>
          <Icon size={24} className={colorClass.replace('bg-', 'text-')} />
        </span>
        {title}
      </h2>
      <p className="text-slate-500 mt-2 text-sm ml-1">{subtitle}</p>
    </div>
  </div>
);

const App = () => {
  const [allNews, setAllNews] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [view, setView] = useState('feed'); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('marineGuruSaved');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (article) => {
    let newSaved;
    if (savedArticles.some(item => item.link === article.link)) {
      newSaved = savedArticles.filter(item => item.link !== article.link);
    } else {
      newSaved = [...savedArticles, article];
    }
    setSavedArticles(newSaved);
    localStorage.setItem('marineGuruSaved', JSON.stringify(newSaved));
  };

  const analyzeTrending = (items) => {
    const keywords = ['IMO', 'Maersk', 'Red Sea', 'Houthi', 'Ammonia', 'Methanol', 'Piracy', 'Green', 'Tanker', 'Container', 'Offshore', 'Wind'];
    const counts = {};
    items.forEach(item => {
      keywords.forEach(key => {
        if (item.title.includes(key) || item.description.includes(key)) {
          counts[key] = (counts[key] || 0) + 1;
        }
      });
    });
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([key]) => key);
    setTrendingTopics(sorted);
  };

  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    try {
      const promises = CATEGORIES.map(async (category) => {
        try {
          // Append a unique cache-buster to the SOURCE URL to bypass RSS proxy caching
          const cacheBuster = new Date().getTime(); 
          const sourceUrl = category.url.includes('?') 
            ? `${category.url}&t=${cacheBuster}` 
            : `${category.url}?t=${cacheBuster}`;

          const response = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(sourceUrl)}`);
          const data = await response.json();
          if (data.status === 'ok') {
            const validItems = data.items.filter(item => {
              const itemDate = new Date(item.pubDate);
              return itemDate >= oneYearAgo;
            });
            return validItems.map(item => ({ ...item, sourceId: category.id, section: category.section }));
          }
          return [];
        } catch (e) { return []; }
      });

      const results = await Promise.all(promises);
      const mergedNews = results.flat();
      mergedNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      
      setAllNews(mergedNews);
      analyzeTrending(mergedNews);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Unable to fetch live news.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
    const intervalId = setInterval(fetchAllNews, 90000); 
    return () => clearInterval(intervalId);
  }, []);

  const sourceList = view === 'saved' ? savedArticles : allNews;
  
  const filteredNews = sourceList.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const shippingNews = filteredNews.filter(item => item.section === 'shipping');
  const incidentNews = filteredNews.filter(item => item.section === 'incident');
  const casestudyNews = filteredNews.filter(item => item.section === 'casestudy');
  const seafarerNews = filteredNews.filter(item => item.section === 'seafarer');

  return (
    <div className="bg-slate-50 font-sans text-slate-900 w-full min-h-screen pb-12 relative overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 text-blue-100 opacity-20">
           <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
        <div className="absolute top-10 right-[-50px] text-blue-900 opacity-[0.03] transform rotate-12">
           <Anchor size={600} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header / Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 sticky top-4 z-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                   <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
                   <span className="text-sm font-bold text-slate-700">Live Feed</span>
               </div>
               <div className="h-4 w-px bg-slate-200"></div>
               <button onClick={() => setView('feed')} className={`text-sm font-medium transition-colors ${view === 'feed' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>All News ({allNews.length})</button>
               <button onClick={() => setView('saved')} className={`flex items-center gap-1 text-sm font-medium transition-colors ${view === 'saved' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}><Bookmark size={14} /> Saved ({savedArticles.length})</button>
               <button onClick={() => setView('tools')} className={`flex items-center gap-1 text-sm font-medium transition-colors ${view === 'tools' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}><Calculator size={14} /> Toolkit</button>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
               <div className="relative flex-grow md:flex-grow-0">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Search news..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-full md:w-64 transition-all focus:outline-none" />
               </div>
               <button onClick={fetchAllNews} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors bg-white border border-slate-200"><RefreshCw size={20} className={loading ? "animate-spin" : ""} /></button>
            </div>
          </div>
          
          {trendingTopics.length > 0 && view === 'feed' && (
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><TrendingUp size={12} /> Trending:</span>
              {trendingTopics.map(topic => (
                <button key={topic} onClick={() => setSearchTerm(topic)} className="px-2 py-1 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-md text-xs font-medium border border-slate-200 transition-colors flex items-center gap-1"><Hash size={10} /> {topic}</button>
              ))}
            </div>
          )}
        </div>

        {view === 'tools' ? (
          <MaritimeTools />
        ) : (
          <>
            {loading && allNews.length === 0 ? (
              <div className="text-center py-20">
                 <RefreshCw className="animate-spin mx-auto text-blue-500 mb-4" size={48} />
                 <p className="text-slate-500">Fetching latest maritime updates...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20 bg-white rounded-xl border border-red-100 shadow-sm">
                <ExternalLink className="text-red-500 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900">Connection Issue</h3>
                <p className="text-slate-500 max-w-md mx-auto mt-2 mb-6">{error}</p>
                <button onClick={fetchAllNews} className="px-6 py-2 bg-blue-600 text-white rounded-full">Retry</button>
              </div>
            ) : (
              <>
                {view === 'saved' && filteredNews.length === 0 ? (
                  <div className="text-center py-20">
                    <Bookmark className="mx-auto text-slate-300 mb-4" size={48} />
                    <h3 className="text-lg font-semibold text-slate-900">No saved articles</h3>
                    <p className="text-slate-500">Bookmark articles from the feed to read them here later.</p>
                    <button onClick={() => setView('feed')} className="mt-4 text-blue-600 font-medium hover:underline">Go to Feed</button>
                  </div>
                ) : (
                  <>
                    {(shippingNews.length > 0) && (
                      <div className="mb-10">
                        <SectionHeader title={view === 'saved' ? "Saved Shipping News" : "Global Shipping News"} subtitle="Latest updates on trade, logistics, and maritime industry" icon={Globe} colorClass="text-blue-600 bg-blue-600" />
                        {view === 'feed' && <DailyBrief items={shippingNews} sectionTitle="Global Shipping" />}
                        <NewsCarousel items={shippingNews} sectionTitle="Global Shipping" onToggleBookmark={toggleBookmark} savedArticles={savedArticles} />
                      </div>
                    )}

                    {(incidentNews.length > 0) && (
                      <div className="mb-10">
                        <SectionHeader title={view === 'saved' ? "Saved Incidents" : "Incidents & Case Studies"} subtitle="Casualties, accidents, and P&I Club lessons learned" icon={AlertTriangle} colorClass="text-orange-600 bg-orange-600" />
                        {view === 'feed' && <DailyBrief items={incidentNews} sectionTitle="Incidents" />}
                        <NewsCarousel items={incidentNews} sectionTitle="Incidents" onToggleBookmark={toggleBookmark} savedArticles={savedArticles} />
                      </div>
                    )}

                    {(casestudyNews.length > 0) && (
                      <div className="mb-10">
                        <SectionHeader title={view === 'saved' ? "Saved Case Studies" : "Case Studies & Investigations"} subtitle="Deep dive analysis, lessons learned, and safety reports" icon={BookOpen} colorClass="text-teal-600 bg-teal-600" />
                        {view === 'feed' && <DailyBrief items={casestudyNews} sectionTitle="Case Studies" />}
                        <NewsCarousel items={casestudyNews} sectionTitle="Case Studies" onToggleBookmark={toggleBookmark} savedArticles={savedArticles} />
                      </div>
                    )}

                    {(seafarerNews.length > 0) && (
                      <div className="mb-10">
                        <SectionHeader title={view === 'saved' ? "Saved Seafarer News" : "Seafarers & Crew"} subtitle="Welfare, rights, and union news for maritime professionals" icon={Users} colorClass="text-emerald-600 bg-emerald-600" />
                        {view === 'feed' && <DailyBrief items={seafarerNews} sectionTitle="Seafarers" />}
                        <NewsCarousel items={seafarerNews} sectionTitle="Seafarers" onToggleBookmark={toggleBookmark} savedArticles={savedArticles} />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
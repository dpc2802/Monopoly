import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SearchX } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Monopoly Recruitment",
};

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-32 pb-20">
        <div className="w-20 h-20 bg-[#FAFAFA] rounded-full flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
          <SearchX size={32} className="text-brand-teal" />
        </div>
        
        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-black text-navy tracking-tight mb-6">Page not found.</h1>
        
        <p className="text-gray-500 max-w-[400px] mb-10 leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="px-8 py-4 bg-navy text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-teal transition-all shadow-[0_10px_20px_rgba(11,37,69,0.15)] hover:shadow-lg hover:-translate-y-1"
        >
          Return Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}

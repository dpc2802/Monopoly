import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0C1117] text-white/50">

      {/* ── MAIN GRID ── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-12 border-b border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Follow Us */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 block">
              <Image
                src="/assets/img/logo-cropped.png"
                alt="Monopoly Recruitment"
                width={130}
                height={45}
                className="object-contain brightness-0 invert opacity-90"
                unoptimized
              />
            </Link>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Follow Us</h5>
            <div className="flex gap-3">
              <Link href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-teal hover:text-brand-teal transition-all duration-300">
                <LinkedinIcon />
              </Link>
              <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-teal hover:text-brand-teal transition-all duration-300">
                <InstagramIcon />
              </Link>
              <Link href="#" aria-label="Twitter/X" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-teal hover:text-brand-teal transition-all duration-300">
                <TwitterIcon />
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Information</h5>
            <ul className="space-y-4 text-sm">
              {[
                { label: "Welcome", href: "#welcome" },
                { label: "Why Choose Us", href: "#why-choose-us" },
                { label: "Why Partner With Us", href: "#why-partner" },
                { label: "UK Recruitment Specialists", href: "#uk-specialists" },
                { label: "How It Works", href: "#how-it-works" },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-brand-teal transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact Us</h5>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3 group">
                <Mail size={14} className="text-brand-teal shrink-0" />
                <span className="group-hover:text-brand-teal transition-colors duration-200 break-all">
                  info@monopolyrecruitment.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-teal shrink-0 mt-1" />
                <span className="leading-relaxed">
                  London, United Kingdom<br />Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-6">About Us</h5>
            <p className="text-sm leading-relaxed">
              Monopoly Recruitment specialises in connecting ambitious bilingual professionals with vital roles in UK businesses, redefining earning potential across borders.
            </p>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/20">
        <p>© {new Date().getFullYear()} Monopoly Recruitment. All rights reserved.</p>
        <p className="uppercase tracking-[0.25em] text-brand-teal/40 font-bold">TALENT. OPPORTUNITY. SUCCESS.</p>
      </div>

    </footer>
  );
}

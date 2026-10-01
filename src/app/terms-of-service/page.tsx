import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Info } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Monopoly Recruitment",
  description: "Terms and conditions of using Monopoly Recruitment services.",
};

export default function TermsOfService() {
  return (
    <main className="relative bg-[#F8F9FA] min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="pt-40 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)] mix-blend-overlay"></div>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-teal/30">
            <FileText size={32} className="text-brand-teal" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-wide">Terms of Service</h1>
          <p className="text-brand-teal font-bold tracking-widest uppercase text-sm">Effective Date: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row gap-12">
          
          {/* Quick Summary Sidebar */}
          <aside className="w-full md:w-1/3 shrink-0">
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Info size={20} className="text-brand-teal" />
                <h3 className="font-bold text-navy uppercase tracking-widest text-xs">At a Glance</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li className="flex gap-3"><span className="text-brand-teal">✓</span> We are an intermediary connecting you to UK roles.</li>
                <li className="flex gap-3"><span className="text-brand-teal">✓</span> You must provide accurate and truthful CV information.</li>
                <li className="flex gap-3"><span className="text-brand-teal">✓</span> Unlawful or malicious use of this site is strictly prohibited.</li>
                <li className="flex gap-3"><span className="text-brand-teal">✓</span> By using this site, you agree to these legal conditions.</li>
              </ul>
            </div>
          </aside>

          {/* Main Legal Document */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-navy prose-h2:text-2xl prose-h2:uppercase prose-h2:tracking-wide prose-h2:mt-10 prose-h2:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline">
              
              <h2 className="!mt-0">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and 
                <strong> Monopoly Recruitment</strong> ("we," "us" or "our"), concerning your access to and use of our website and recruitment services. 
                By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>

              <h2>2. Our Services</h2>
              <p>
                Monopoly Recruitment acts as an intermediary, connecting bilingual professionals in Colombia with remote job opportunities in the United Kingdom. 
                We do not guarantee employment, nor do we guarantee the duration or terms of any employment obtained through our introductions.
              </p>

              <h2>3. Candidate Responsibilities</h2>
              <p>By using our services, you represent and warrant that:</p>
              <ul>
                <li>All registration and profile information you submit will be true, accurate, current, and complete.</li>
                <li>You have the legal capacity to enter into employment agreements.</li>
                <li>You will not use the site for any illegal or unauthorized purpose.</li>
              </ul>

              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the site for any purpose other than that for which we make the site available. 
                The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>

              <h2>5. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
              </p>

              <h2>6. Limitations of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our recruitment services.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br/>
                <strong>Email:</strong> <a href="mailto:monopolyrecruitment.talent@gmail.com">monopolyrecruitment.talent@gmail.com</a>
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

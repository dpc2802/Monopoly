import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMapBackground from "@/components/WorldMapBackground";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Monopoly Recruitment",
  description: "Terms and conditions of using Monopoly Recruitment services.",
};

export default function TermsOfService() {
  return (
    <main className="relative bg-[#F8F9FA] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Background Map */}
      <div className="fixed inset-0 z-0">
        <WorldMapBackground />
      </div>

      <div className="flex-1 relative z-10 pt-32 pb-24 px-6 flex justify-center">
        <div className="w-full max-w-[900px] bg-white/90 backdrop-blur-md rounded-[3rem] shadow-[0_30px_60px_rgba(11,37,69,0.08)] border border-white p-8 md:p-16 lg:p-20">
          
          <div className="flex flex-col items-center text-center border-b border-gray-100 pb-10 mb-10">
            <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <FileText size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-wide mb-4">Terms of Service</h1>
            <p className="text-brand-teal font-bold tracking-widest uppercase text-xs">Effective Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>

          <div className="prose prose-gray max-w-none prose-headings:font-black prose-headings:text-navy prose-h2:text-xl prose-h2:uppercase prose-h2:tracking-wider prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline">
            
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

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}

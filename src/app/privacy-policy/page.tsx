import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMapBackground from "@/components/WorldMapBackground";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Monopoly Recruitment",
  description: "Privacy policy and data protection guidelines for Monopoly Recruitment.",
};

export default function PrivacyPolicy() {
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
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-wide mb-4">Privacy Policy</h1>
            <p className="text-brand-teal font-bold tracking-widest uppercase text-xs">Effective Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>

          <div className="prose prose-gray max-w-none prose-headings:font-black prose-headings:text-navy prose-h2:text-xl prose-h2:uppercase prose-h2:tracking-wider prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline">
            
            <h2 className="!mt-0">1. Introduction</h2>
            <p>
              At <strong>Monopoly Recruitment</strong> ("we", "our", or "us"), we are committed to protecting and respecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and recruitment services, 
              in compliance with the UK General Data Protection Regulation (UK GDPR) and applicable Colombian Data Protection Laws (Ley 1581 de 2012).
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul>
              <li><strong>Identity Data:</strong> First name, last name, title.</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers.</li>
              <li><strong>Professional Data:</strong> CVs, employment history, qualifications, and other information you provide when applying for roles.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website (via cookies and analytics).</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Match you with suitable remote job opportunities in the UK.</li>
              <li>Communicate with you regarding your application and our recruitment processes.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>

            <h2>4. Data Sharing and Transfers</h2>
            <p>
              As an agency connecting Colombian talent with UK enterprises, your data may be shared with prospective employers based in the United Kingdom. 
              We ensure that all data transfers are conducted securely and in accordance with international data protection standards. 
              We do not sell your personal data to third parties.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. 
              Access to your personal data is limited to those employees, agents, and clients who have a business need to know.
            </p>

            <h2>6. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data (the "right to be forgotten").</li>
              <li>Object to processing of your personal data.</li>
            </ul>
            <p>If you wish to exercise any of these rights, please contact us.</p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at: <br/>
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Monopoly Recruitment",
  description: "Privacy policy and data protection guidelines for Monopoly Recruitment.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Strict, elegant header */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-24 border-b border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-6">Legal Compliance</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy tracking-tight mb-8">Privacy Policy.</h1>
          <p className="text-sm text-gray-500 font-medium">Last Updated — {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </div>

      {/* Document Body */}
      <div className="flex-1 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Index */}
          <div className="w-full md:w-1/4 shrink-0 hidden md:block">
            <div className="sticky top-32">
              <h3 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Contents</h3>
              <ul className="space-y-5 text-sm text-gray-500 font-medium">
                <li><a href="#introduction" className="hover:text-brand-teal transition-colors">1. Introduction</a></li>
                <li><a href="#information" className="hover:text-brand-teal transition-colors">2. Information We Collect</a></li>
                <li><a href="#usage" className="hover:text-brand-teal transition-colors">3. How We Use Your Data</a></li>
                <li><a href="#sharing" className="hover:text-brand-teal transition-colors">4. Data Sharing & Transfers</a></li>
                <li><a href="#security" className="hover:text-brand-teal transition-colors">5. Security & Legal Rights</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-3/4 max-w-[800px]">
            <div className="prose prose-lg prose-gray max-w-none 
              prose-headings:font-bold prose-headings:text-navy prose-headings:tracking-tight 
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[15px]
              prose-li:text-gray-600 prose-li:text-[15px] prose-ul:mb-8
              prose-a:text-brand-teal prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
              
              <h2 id="introduction" className="!mt-0">1. Introduction</h2>
              <p>
                At <strong>Monopoly Recruitment</strong> ("we", "our", or "us"), we are committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and recruitment services, 
                in compliance with the UK General Data Protection Regulation (UK GDPR) and applicable Colombian Data Protection Laws (Ley 1581 de 2012).
              </p>

              <h2 id="information">2. Information We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul>
                <li><strong>Identity Data:</strong> First name, last name, title.</li>
                <li><strong>Contact Data:</strong> Email address, telephone numbers.</li>
                <li><strong>Professional Data:</strong> CVs, employment history, qualifications, and other information you provide when applying for roles.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website (via cookies and analytics).</li>
              </ul>

              <h2 id="usage">3. How We Use Your Information</h2>
              <p>We use your personal data to:</p>
              <ul>
                <li>Match you with suitable remote job opportunities in the UK.</li>
                <li>Communicate with you regarding your application and our recruitment processes.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Comply with our legal and regulatory obligations.</li>
              </ul>

              <h2 id="sharing">4. Data Sharing and Transfers</h2>
              <p>
                As an agency connecting Colombian talent with UK enterprises, your data may be shared with prospective employers based in the United Kingdom. 
                We ensure that all data transfers are conducted securely and in accordance with international data protection standards. 
                We do not sell your personal data to third parties.
              </p>

              <h2 id="security">5. Data Security & Legal Rights</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. 
                Access to your personal data is limited to those employees, agents, and clients who have a business need to know.
              </p>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data (the "right to be forgotten").</li>
                <li>Object to processing of your personal data.</li>
              </ul>

              <h2 id="contact">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at: <br/>
                <strong>Email:</strong> <a href="mailto:monopolyrecruitment.talent@gmail.com">monopolyrecruitment.talent@gmail.com</a>
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

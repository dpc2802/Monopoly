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
                <li><a href="#overview" className="hover:text-brand-teal transition-colors">1. Overview</a></li>
                <li><a href="#information" className="hover:text-brand-teal transition-colors">2. Information We Collect</a></li>
                <li><a href="#purpose" className="hover:text-brand-teal transition-colors">3. Purpose & Legal Basis</a></li>
                <li><a href="#transfers" className="hover:text-brand-teal transition-colors">4. International Transfers</a></li>
                <li><a href="#retention" className="hover:text-brand-teal transition-colors">5. Data Retention</a></li>
                <li><a href="#rights" className="hover:text-brand-teal transition-colors">6. Your Rights</a></li>
                <li><a href="#security" className="hover:text-brand-teal transition-colors">7. Security & Confidentiality</a></li>
                <li><a href="#updates" className="hover:text-brand-teal transition-colors">8. Updates to This Policy</a></li>
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
              
              <h2 id="overview" className="!mt-0">1. Overview</h2>
              <p>
                <strong>Monopoly Recruitment</strong> ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, store, and share your personal data when you use our website, submit your CV, or interact with our recruitment services.
              </p>
              <p>
                We operate in compliance with the UK General Data Protection Regulation (UK GDPR), the UK Data Protection Act 2018 (DPA 2018), regulated by the Information Commissioner's Office (ICO), and Ley 1581 de 2012 (Superintendencia de Industria y Comercio - SIC) in Colombia.
              </p>

              <h2 id="information">2. Information We Collect</h2>
              <p>We collect personal data that you voluntarily provide to us during recruitment processes, including:</p>
              <ul>
                <li><strong>Contact Information:</strong> Full name, email address, phone number, location, and country of residence.</li>
                <li><strong>Professional & Academic Details:</strong> Curriculum Vitae (CV/Resume), work experience, education, language proficiency, skill sets, and portfolio links (e.g., LinkedIn, GitHub).</li>
                <li><strong>Communication History:</strong> Messages sent via our website forms or direct email correspondence.</li>
              </ul>
              <p>
                <em>Note:</em> We do not intentionally collect sensitive data (e.g., health status, political opinions, religious beliefs) unless explicitly required for specific legal or compliance reasons.
              </p>

              <h2 id="purpose">3. Purpose & Legal Basis for Processing</h2>
              <p>We process your personal data for the following lawful purposes under UK GDPR (Article 6) and Colombian Law:</p>
              <ul>
                <li><strong>Recruitment & Candidate Evaluation:</strong> To assess your qualifications, match you with remote or international job vacancies, and present your profile to potential hiring companies in the UK and internationally (Legitimate Interest & Consent).</li>
                <li><strong>Communication:</strong> To contact you regarding application updates, interview schedules, or new job opportunities.</li>
                <li><strong>Legal & Regulatory Compliance:</strong> To fulfill our statutory and legal obligations in the UK and Colombia.</li>
              </ul>

              <h2 id="transfers">4. International Data Transfers</h2>
              <p>
                By submitting your information to Monopoly Recruitment, you acknowledge and explicitly agree that your personal data may be transferred, stored, and processed across international borders (specifically between Colombia, the United Kingdom, and third-party client jurisdictions) for hiring and evaluation purposes. All transfers are conducted under appropriate security safeguards and strict confidentiality agreements.
              </p>

              <h2 id="retention">5. Data Retention</h2>
              <p>
                We retain your CV and personal details in our talent database for a maximum period of 24 months from your last interaction with us, after which your data will be securely deleted or anonymized, unless you request earlier deletion or grant us permission to keep it longer for future roles.
              </p>

              <h2 id="rights">6. Your Rights</h2>
              <p>Under UK GDPR and Ley 1581 de 2012, you have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request the complete deletion of your CV and personal records from our databases.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing or international transfer at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact our Data Protection Lead at: <a href="mailto:monopolyrecruitment.talent@gmail.com">monopolyrecruitment.talent@gmail.com</a>.
              </p>

              <h2 id="security">7. Security & Confidentiality</h2>
              <p>
                We implement appropriate technical and organizational measures (including SSL encryption, restricted access, and secure cloud storage) to protect your personal data against unauthorized access, loss, or disclosure.
              </p>

              <h2 id="updates">8. Updates to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy as regulatory requirements evolve. Any changes will be posted directly on this page with an updated revision date.
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

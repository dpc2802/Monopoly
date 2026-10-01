import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Monopoly Recruitment",
  description: "Privacy policy and data protection guidelines for Monopoly Recruitment.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-[#F8F9FA] min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none prose-headings:text-navy prose-a:text-brand-teal">
            
            <h2>1. Introduction</h2>
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
              <strong>Email:</strong> monopolyrecruitment.talent@gmail.com
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

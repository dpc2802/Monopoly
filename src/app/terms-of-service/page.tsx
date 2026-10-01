import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Monopoly Recruitment",
  description: "Terms and conditions of using Monopoly Recruitment services.",
};

export default function TermsOfService() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Strict, elegant header */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-24 border-b border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-6">Legal Compliance</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy tracking-tight mb-8">Terms of Service.</h1>
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
                <li><a href="#agreement" className="hover:text-brand-teal transition-colors">1. Agreement to Terms</a></li>
                <li><a href="#services" className="hover:text-brand-teal transition-colors">2. Our Services</a></li>
                <li><a href="#responsibilities" className="hover:text-brand-teal transition-colors">3. Candidate Responsibilities</a></li>
                <li><a href="#prohibited" className="hover:text-brand-teal transition-colors">4. Prohibited Activities</a></li>
                <li><a href="#intellectual" className="hover:text-brand-teal transition-colors">5. Intellectual Property</a></li>
                <li><a href="#liability" className="hover:text-brand-teal transition-colors">6. Limitations of Liability</a></li>
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
              
              <h2 id="agreement" className="!mt-0">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and 
                <strong> Monopoly Recruitment</strong> ("we," "us" or "our"), concerning your access to and use of our website and recruitment services. 
                By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>

              <h2 id="services">2. Our Services</h2>
              <p>
                Monopoly Recruitment acts as an intermediary, connecting bilingual professionals in Colombia with remote job opportunities in the United Kingdom. 
                We do not guarantee employment, nor do we guarantee the duration or terms of any employment obtained through our introductions.
              </p>

              <h2 id="responsibilities">3. Candidate Responsibilities</h2>
              <p>By using our services, you represent and warrant that:</p>
              <ul>
                <li>All registration and profile information you submit will be true, accurate, current, and complete.</li>
                <li>You have the legal capacity to enter into employment agreements.</li>
                <li>You will not use the site for any illegal or unauthorized purpose.</li>
              </ul>

              <h2 id="prohibited">4. Prohibited Activities</h2>
              <p>
                You may not access or use the site for any purpose other than that for which we make the site available. 
                The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>

              <h2 id="intellectual">5. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
              </p>

              <h2 id="liability">6. Limitations of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our recruitment services.
              </p>

              <h2 id="contact">7. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br/>
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Monopoly Recruitment",
  description: "Terms and conditions of using Monopoly Recruitment services.",
};

export default function TermsOfService() {
  return (
    <main className="relative bg-[#F8F9FA] min-h-screen">
      <Navbar />
      
      {/* Header Banner */}
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none prose-headings:text-navy prose-a:text-brand-teal">
            
            <h2>1. Agreement to Terms</h2>
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
              <strong>Email:</strong> monopolyrecruitment.talent@gmail.com
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

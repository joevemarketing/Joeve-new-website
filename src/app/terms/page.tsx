import Link from "next/link";

export const metadata = {
  title: "Terms of Service | JOeve Smart Solutions",
  description: "The legal terms governing your use of JOeve Smart Solutions' website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-24 pb-16 bg-joeve-blue-deep">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-10">Effective date: 10 December 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the JOeve Smart Solutions
            website, products, and services (collectively, the &quot;Services&quot;). By accessing or using the Services,
            you agree to be bound by these Terms.
          </p>

          <h2 className="text-white font-bold text-xl">1. Who we are</h2>
          <p>
            JOeve Smart Solutions (&quot;JOeve&quot;, &quot;we&quot;, &quot;us&quot;) operates in Penang, Malaysia. We build AI-powered web
            applications, social content automation, and generative video solutions for brands.
          </p>

          <h2 className="text-white font-bold text-xl">2. Use of Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old, or have consent from a parent/guardian.</li>
            <li>Do not misuse the Services, interfere with their operation, or access them using non-public methods.</li>
            <li>You may need an account to access administrative areas; keep your credentials secure.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">3. Accounts & Authentication</h2>
          <p>
            Admin authentication is powered by Supabase. You are responsible for the security of your account and
            any activity under it. Notify us immediately of unauthorized access.
          </p>

          <h2 className="text-white font-bold text-xl">4. Content & Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unless otherwise stated, all site content, designs, and code are owned by JOeve.</li>
            <li>Client-provided materials remain the property of the client; you grant us a limited license to use them to deliver Services.</li>
            <li>You may not copy, sell, or distribute any part of the Services without permission.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">5. Orders, Fees, and Payment</h2>
          <p>
            Quotes, invoices, and payment terms will be agreed in writing. Unless otherwise specified, all fees are
            non-refundable once work has commenced. Late payments may pause delivery.
          </p>

          <h2 className="text-white font-bold text-xl">6. Third-Party Services</h2>
          <p>
            We may integrate third-party platforms (e.g., Supabase for data/auth). Their use is subject to their
            respective terms. We are not responsible for issues caused by third parties beyond our control.
          </p>

          <h2 className="text-white font-bold text-xl">7. Warranties & Disclaimers</h2>
          <p>
            The Services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We disclaim all warranties to the
            maximum extent permitted by law, including merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-white font-bold text-xl">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, JOeve is not liable for indirect, incidental, special, consequential,
            or exemplary damages, or loss of profits, arising from your use of the Services.
          </p>

          <h2 className="text-white font-bold text-xl">9. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless JOeve from claims, damages, losses, and expenses arising from
            your use of the Services or violation of these Terms.
          </p>

          <h2 className="text-white font-bold text-xl">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Malaysia. Venue for disputes shall be the courts of Penang,
            Malaysia.
          </p>

          <h2 className="text-white font-bold text-xl">11. Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use after changes constitutes acceptance. We will
            post the latest version on this page with the effective date.
          </p>

          <h2 className="text-white font-bold text-xl">12. Contact</h2>
          <p>
            For questions, contact us at <Link href="mailto:info@joevesmartsolutions.com" className="text-cyan-300">info@joevesmartsolutions.com</Link>
            or phone <Link href="tel:+60165572800" className="text-cyan-300">+6016 557 2800</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

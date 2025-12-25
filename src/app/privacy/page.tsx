import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | JOeve Smart Solutions",
  description: "How JOeve Smart Solutions collects, uses, and safeguards your personal data (Malaysia PDPA).",
};

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-16 bg-joeve-blue-deep">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-10">Effective date: 10 December 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Privacy Policy explains how JOeve Smart Solutions (&quot;JOeve&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and
            safeguards personal data in accordance with the Personal Data Protection Act 2010 (Malaysia PDPA).
          </p>

          <h2 className="text-white font-bold text-xl">1. What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details: name, email, phone (e.g., when you submit quotation or contact forms).</li>
            <li>Account data: for admin users, email and password hashes managed by Supabase.</li>
            <li>Usage data: device information, pages visited, and interactions required to run the site.</li>
            <li>Content you provide: project briefs, assets, and feedback for service delivery.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">2. How we use your data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to enquiries and provide quotations.</li>
            <li>Deliver and improve our services (web apps, social content, video production).</li>
            <li>Authenticate admin access and protect the site from abuse.</li>
            <li>Comply with legal obligations and enforce our Terms.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">3. Legal bases</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent: when you submit forms or opt in to communications.</li>
            <li>Contract: when we provide paid services or fulfil agreed deliverables.</li>
            <li>Legitimate interests: secure operation, fraud prevention, and service improvement.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">4. Cookies & analytics</h2>
          <p>
            We use essential cookies necessary to operate the site. We do not currently run third-party marketing
            trackers. If we introduce analytics, we will update this Policy and provide necessary controls.
          </p>

          <h2 className="text-white font-bold text-xl">5. Sharing & processors</h2>
          <p>
            We use trusted service providers to host and operate parts of the Services, including Supabase (hosting/auth).
            Providers only process data under our instructions and are bound by confidentiality and security obligations.
            We do not sell your personal data.
          </p>

          <h2 className="text-white font-bold text-xl">6. Data retention</h2>
          <p>
            We retain personal data for as long as necessary to fulfil the purposes outlined above, comply with
            legal requirements, and resolve disputes. You may request deletion where applicable.
          </p>

          <h2 className="text-white font-bold text-xl">7. Security</h2>
          <p>
            We implement technical and organizational measures to protect personal data against unauthorized access,
            alteration, and disclosure. No method of transmission is 100% secure; we strive to use industry best practices.
          </p>

          <h2 className="text-white font-bold text-xl">8. International transfers</h2>
          <p>
            If data is transferred outside Malaysia for processing by our providers, we ensure appropriate safeguards
            consistent with PDPA requirements.
          </p>

          <h2 className="text-white font-bold text-xl">9. Your rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and correction of your personal data.</li>
            <li>Withdrawal of consent where processing is based on consent.</li>
            <li>Objection to certain processing and request deletion, subject to legal constraints.</li>
          </ul>

          <h2 className="text-white font-bold text-xl">10. Children</h2>
          <p>
            Our Services are not directed to children under 13. If we learn we collected data from a child, we will
            take steps to delete it.
          </p>

          <h2 className="text-white font-bold text-xl">11. Updates</h2>
          <p>
            We may update this Policy from time to time. The latest version will be posted here with the effective date.
          </p>

          <h2 className="text-white font-bold text-xl">12. Contact</h2>
          <p>
            Contact us at <Link href="mailto:info@joevesmartsolutions.com" className="text-cyan-300">info@joevesmartsolutions.com</Link>
            or phone <Link href="tel:+60165572800" className="text-cyan-300">+6016 557 2800</Link>. For postal enquiries, Penang, Malaysia.
          </p>

          <p className="text-sm text-gray-500">See also our <Link href="/terms" className="text-cyan-300">Terms of Service</Link>.</p>
        </div>
      </div>
    </section>
  );
}

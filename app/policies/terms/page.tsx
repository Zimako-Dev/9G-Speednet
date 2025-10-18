import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

const termsSections = [
  {
    title: '1. Agreement to Terms',
    content: [
      'These Terms of Service (“Terms”) govern your access to and use of 9G Speednet connectivity services, websites, and support channels.',
      'By activating or using our services, you agree to comply with these Terms and any referenced policies, including our Acceptable Use and Privacy policies.'
    ]
  },
  {
    title: '2. Service Eligibility & Accounts',
    content: [
      'You must be at least 18 years old or have legal capacity in your jurisdiction to enter into this agreement.',
      'Account information must be accurate and kept up to date. You are responsible for maintaining the confidentiality of your login credentials.'
    ]
  },
  {
    title: '3. Network Usage & Acceptable Use',
    content: [
      'Use the service in a lawful manner and comply with our Acceptable Use Policy. Activities such as spamming, malware distribution, or unlawful content are prohibited.',
      'We may suspend or terminate service if network abuse, security risks, or legal violations are detected.'
    ]
  },
  {
    title: '4. Service Availability & Performance',
    content: [
      'We strive to deliver consistent connectivity with advertised speeds; however, actual performance may vary based on network congestion, location, or device limitations.',
      'Scheduled maintenance or unforeseen outages may temporarily interrupt service. We will provide reasonable notice of planned maintenance and aim to resolve disruptions promptly.'
    ]
  },
  {
    title: '5. Billing & Payment',
    content: [
      'Service fees, billing cycles, and payment methods are outlined during onboarding. You agree to pay all charges on time to keep service active.',
      'Late or failed payments may result in suspension or termination of the service. Reconnection fees may apply after delinquency.'
    ]
  },
  {
    title: '6. Equipment & Installation',
    content: [
      'Customer-premises equipment (CPE) supplied by 9G Speednet remains our property unless otherwise stated. You are responsible for reasonable care and return of this equipment.',
      'Any self-installed or third-party equipment must be compatible and compliant with our network standards.'
    ]
  },
  {
    title: '7. Termination',
    content: [
      'You may cancel the service by providing written notice according to your plan’s minimum term or cancellation requirements.',
      'We reserve the right to terminate the service for breach of these Terms, unlawful use, or non-payment.'
    ]
  },
  {
    title: '8. Liability & Indemnification',
    content: [
      'To the extent permitted by law, 9G Speednet is not liable for indirect, incidental, or consequential damages arising from service use or interruptions.',
      'You agree to indemnify 9G Speednet against claims resulting from your misuse of the service or violation of these Terms.'
    ]
  },
  {
    title: '9. Updates to Terms',
    content: [
      'We may update these Terms to reflect changes in services, regulations, or business operations. We will notify you of material changes via email or our website.',
      'Continued use of the service after updates constitutes acceptance of the revised Terms.'
    ]
  },
  {
    title: '10. Contact Information',
    content: [
      'Questions about these Terms can be directed to',
      'legal@9gspeed.co.za',
      'or our customer support line at (+27) 73 489 8331.'
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-6">
          <Link
            href="/policies"
            className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors duration-300"
          >
            <span className="mr-2">&larr;</span>
            Back to Policies
          </Link>
        </div>

        <div className="mb-10">
          <p className="text-sm text-primary-400 uppercase tracking-wide mb-2">Policies</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            These Terms outline the commitments between you and 9G Speednet when you subscribe to our internet
            services. Please read them carefully to understand your responsibilities, our obligations, and how to
            resolve any questions or concerns.
          </p>
          <div className="mt-4 text-xs text-gray-400">
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="space-y-8">
          {termsSections.map((section) => (
            <section key={section.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {section.content.map((paragraph, index) => (
                  <li key={`${section.title}-${index}`}>
                    {section.title === '10. Contact Information' && index === 1 ? (
                      <a
                        href="mailto:legal@9gspeed.co.za"
                        className="text-primary-400 hover:text-primary-300 underline"
                      >
                        {paragraph}
                      </a>
                    ) : (
                      paragraph
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>
            Looking for other documents? Visit our{' '}
            <Link href="/policies" className="text-primary-400 hover:text-primary-300 underline">
              policies overview
            </Link>{' '}
            to access compliance resources and service guidelines.
          </p>
        </div>
      </div>
    </main>
  );
}

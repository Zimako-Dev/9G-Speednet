import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

const policySections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect personal details such as your name, contact information, and service address when you sign up for our services.',
      'Technical usage data (including device identifiers, connection metrics, and network diagnostics) helps us maintain service quality and troubleshoot issues.',
      'Billing and payment information is processed securely through trusted payment partners and retained only for compliance and accounting purposes.'
    ]
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'Deliver, maintain, and improve our connectivity services and customer support.',
      'Notify you about network updates, planned maintenance, and service enhancements.',
      'Comply with regulatory obligations, prevent fraud, and enforce acceptable use policies.'
    ]
  },
  {
    title: '3. Data Sharing & Disclosure',
    content: [
      'We do not sell personal information. Data is shared only with vetted suppliers who support service delivery, billing, or security.',
      'We may disclose information when required to comply with legal obligations or to protect the rights and safety of our customers and network.'
    ]
  },
  {
    title: '4. Data Security & Retention',
    content: [
      'Security measures such as encryption, access controls, and continuous monitoring help safeguard your data.',
      'Information is retained only for as long as needed to provide services, comply with legal requirements, or resolve disputes.'
    ]
  },
  {
    title: '5. Your Rights & Choices',
    content: [
      'Request access to the data we hold about you, or ask us to correct or update your information.',
      'Withdraw consent for marketing communications at any time using the unsubscribe links provided.',
      'Request deletion of personal data, subject to any legal or contractual obligations that require retention.'
    ]
  },
  {
    title: '6. Contact Us',
    content: [
      'For privacy-related questions or requests, contact our data protection team at',
      'privacy@9gspeed.co.za',
      'or call customer support on (+27) 73 489 8331.'
    ]
  }
];

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Your trust drives everything we do. This policy explains how 9G Speednet collects, uses,
            and protects your personal information when you interact with our network services,
            websites, and support teams.
          </p>
          <div className="mt-4 text-xs text-gray-400">
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="space-y-8">
          {policySections.map((section) => (
            <section key={section.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {section.content.map((paragraph, index) => (
                  <li key={`${section.title}-${index}`}>
                    {section.title === '6. Contact Us' && index === 1 ? (
                      <a
                        href="mailto:privacy@9gspeed.co.za"
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
            Need a different document? Visit our{' '}
            <Link href="/policies" className="text-primary-400 hover:text-primary-300 underline">
              policies overview
            </Link>{' '}
            to explore more legal and compliance resources.
          </p>
        </div>
      </div>
    </main>
  );
}

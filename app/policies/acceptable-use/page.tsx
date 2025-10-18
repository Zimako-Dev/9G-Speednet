import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

type PolicyPoint = {
  title: string;
  items: string[];
};

const sections: PolicyPoint[] = [
  {
    title: '1. Responsible Use of Services',
    items: [
      'Use 9G Speednet services only for lawful purposes and in accordance with all applicable regulations.',
      'Do not engage in activities that could harm, disrupt, or degrade network performance for other customers.'
    ]
  },
  {
    title: '2. Prohibited Activities',
    items: [
      'Distribution of malware, phishing schemes, or any malicious code is strictly forbidden.',
      'Do not engage in unsolicited bulk messaging, denial-of-service attacks, or any action intended to overwhelm our infrastructure.',
      'Avoid hosting, transmitting, or sharing content that is offensive, defamatory, or violates copyright or privacy laws.'
    ]
  },
  {
    title: '3. Network Security',
    items: [
      'Protect your devices with appropriate security measures, including firewalls, antivirus software, and strong passwords.',
      'Report suspected vulnerabilities, data breaches, or unauthorized access to 9G Speednet immediately.'
    ]
  },
  {
    title: '4. Fair Usage',
    items: [
      'Respect the fair usage thresholds defined in your plan. Excessive consumption that negatively impacts other users may result in traffic shaping or temporary restrictions.',
      'Commercial or high-volume usage requires an enterprise agreement with tailored bandwidth allocations.'
    ]
  },
  {
    title: '5. Enforcement',
    items: [
      'Failure to comply with this Acceptable Use Policy may lead to warnings, service suspension, or termination.',
      'Severe breaches may be reported to law enforcement or regulatory authorities as required.'
    ]
  },
  {
    title: '6. Questions',
    items: [
      'For clarification on acceptable use, contact our compliance desk at',
      'compliance@9gspeed.co.za',
      'or call (+27) 73 489 8331.'
    ]
  }
];

export default function AcceptableUsePolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Acceptable Use Policy</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            This policy defines acceptable and prohibited behaviours when accessing 9G Speednet services. Adhering to
            these guidelines protects our customers and preserves a high-quality network environment.
          </p>
          <div className="mt-4 text-xs text-gray-400">Last updated: {lastUpdated}</div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                {section.items.map((text, index) => (
                  <li key={`${section.title}-${index}`}>
                    {section.title === '6. Questions' && index === 1 ? (
                      <a
                        href="mailto:compliance@9gspeed.co.za"
                        className="text-primary-400 hover:text-primary-300 underline"
                      >
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>
            Need related documents? Explore our{' '}
            <Link href="/policies" className="text-primary-400 hover:text-primary-300 underline">
              policies overview
            </Link>{' '}
            for additional compliance resources.
          </p>
        </div>
      </div>
    </main>
  );
}

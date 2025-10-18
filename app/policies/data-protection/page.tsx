import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

type DataPrinciple = {
  title: string;
  description: string;
  bullets?: string[];
};

const principles: DataPrinciple[] = [
  {
    title: '1. Lawful & Transparent Processing',
    description:
      'We collect personal information only when necessary to deliver our services, fulfil contractual obligations, or comply with legal requirements. Customers are informed about the purpose of data collection at the point of capture.',
    bullets: [
      'Service contracts, onboarding forms, and customer portals clearly describe the data fields we require and why.'
    ]
  },
  {
    title: '2. Data Minimisation & Accuracy',
    description:
      'We limit the personal data we process to what is relevant and adequate. Information is reviewed periodically and updated based on customer feedback or regulatory guidance.'
  },
  {
    title: '3. Security Safeguards',
    description:
      'Administrative, technical, and physical controls protect customer data against loss, misuse, or unauthorised access.',
    bullets: [
      'Encryption is applied to sensitive records in transit and at rest.',
      'Role-based access ensures only authorised personnel can view or modify customer information.'
    ]
  },
  {
    title: '4. Retention & Deletion',
    description:
      'Data is retained only for as long as needed to provide services, meet legal obligations, or resolve disputes. Once retention periods expire, records are securely deleted or anonymised.'
  },
  {
    title: '5. Customer Rights',
    description:
      'Customers may exercise their privacy rights at any time, including access, rectification, objection, or deletion requests.',
    bullets: [
      'Requests can be submitted through the customer portal or by contacting our privacy team.',
      'We respond to verified requests within required regulatory timelines.'
    ]
  },
  {
    title: '6. Cross-Border Transfers',
    description:
      'When data is processed outside South Africa, we ensure equivalent protection through contractual safeguards and vetted service providers.'
  },
  {
    title: '7. Incident Response',
    description:
      'Our security and compliance teams follow a documented incident response plan to investigate, contain, and report any suspected data breaches.',
    bullets: [
      'Customers will be notified without undue delay if their data is affected by a notifiable incident.'
    ]
  },
  {
    title: '8. Contact & Queries',
    description:
      'If you have questions about data protection at 9G Speednet, reach out to our privacy office at',
    bullets: [
      'privacy@9gspeed.co.za',
      'or call (+27) 73 489 8331.'
    ]
  }
];

export default function DataProtectionPolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Protection Policy</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            This policy summarises how 9G Speednet protects personal information across its services, ensuring compliance
            with applicable data protection regulations and industry best practices.
          </p>
          <div className="mt-4 text-xs text-gray-400">Last updated: {lastUpdated}</div>
        </div>

        <div className="space-y-8">
          {principles.map((principle: DataPrinciple) => (
            <section key={principle.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{principle.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">{principle.description}</p>
              {principle.bullets && (
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                  {principle.bullets.map((bullet: string, index: number) => (
                    <li key={`${principle.title}-${index}`}>
                      {principle.title === '8. Contact & Queries' && index === 0 ? (
                        <a
                          href="mailto:privacy@9gspeed.co.za"
                          className="text-primary-400 hover:text-primary-300 underline"
                        >
                          {bullet}
                        </a>
                      ) : (
                        bullet
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>
            Explore additional commitments and legal resources via our{' '}
            <Link href="/policies" className="text-primary-400 hover:text-primary-300 underline">
              policies overview
            </Link>{' '}page.
          </p>
        </div>
      </div>
    </main>
  );
}

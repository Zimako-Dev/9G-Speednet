import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

type ServiceLevelCommitment = {
  title: string;
  description: string;
  bullets?: string[];
};

const commitments: ServiceLevelCommitment[] = [
  {
    title: '1. Network Availability',
    description:
      '9G Speednet targets 99.5% monthly uptime for core network services. We continuously monitor network health and deploy redundant infrastructure to maintain reliable connectivity.',
    bullets: [
      'Scheduled maintenance will be communicated at least 24 hours in advance via email or service notifications.',
      'Unplanned outages are addressed immediately with progress updates issued through our status page and support channels.'
    ]
  },
  {
    title: '2. Installation & Activation',
    description:
      'Standard fibre or wireless installations are completed within 7-10 business days after order confirmation, subject to site readiness and third-party access.',
    bullets: [
      'Complex deployments may require additional engineering surveys. We will keep you informed throughout the process.'
    ]
  },
  {
    title: '3. Performance Targets',
    description:
      'Speed plans are provided on a best-effort basis. We benchmark throughput, latency, and packet loss to ensure performance aligns with plan specifications.',
    bullets: [
      'Peak-time contention ratios are monitored to maintain a consistent user experience.',
      'If performance falls below expected levels, customers can log a support ticket for investigation and remediation.'
    ]
  },
  {
    title: '4. Support Response & Resolution',
    description:
      'Our support team operates Monday to Sunday, 07:00–21:00 SAST. Priority incidents (P1) receive an initial response within 30 minutes and targeted resolution within 4 hours.',
    bullets: [
      'High (P2) incidents: response within 1 hour, resolution within 12 hours.',
      'Medium (P3) incidents: response within 4 hours, resolution within 48 hours.',
      'Low (P4) requests: response within 1 business day, resolution based on mutual agreement.'
    ]
  },
  {
    title: '5. Service Credits',
    description:
      'If monthly uptime falls below our commitment, eligible customers may request service credits proportional to the downtime experienced.',
    bullets: [
      'Credit requests must be submitted within 10 business days of the incident, including ticket references and impact details.'
    ]
  },
  {
    title: '6. Feedback & Escalation',
    description:
      'We encourage feedback to improve our service delivery. Escalations can be directed to the service management team at',
    bullets: [
      'service@9gspeed.co.za',
      'or call (+27) 73 489 8331 for urgent matters.'
    ]
  }
];

export default function ServiceLevelAgreementPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Level Agreement</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Our Service Level Agreement (SLA) outlines the performance standards, response times, and service credits
            you can expect when partnering with 9G Speednet. It complements our core terms to ensure transparency and
            accountability.
          </p>
          <div className="mt-4 text-xs text-gray-400">Last updated: {lastUpdated}</div>
        </div>

        <div className="space-y-8">
          {commitments.map((item: ServiceLevelCommitment) => (
            <section key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{item.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">{item.description}</p>
              {item.bullets && (
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                  {item.bullets.map((bullet: string, index: number) => (
                    <li key={`${item.title}-${index}`}>
                      {item.title === '6. Feedback & Escalation' && index === 0 ? (
                        <a
                          href="mailto:service@9gspeed.co.za"
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
            Review additional commitments on our{' '}
            <Link href="/policies" className="text-primary-400 hover:text-primary-300 underline">
              policies overview
            </Link>{' '}
            page for comprehensive legal and compliance information.
          </p>
        </div>
      </div>
    </main>
  );
}

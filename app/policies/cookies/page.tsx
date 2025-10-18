import Link from 'next/link';

const lastUpdated = 'October 18, 2025';

type CookieCard = {
  heading: string;
  text: string;
};

type CookieTextSection = {
  title: string;
  content: string[];
  type?: 'text';
};

type CookieCardSection = {
  title: string;
  cards: CookieCard[];
  type: 'cards';
};

type CookieSection = CookieTextSection | CookieCardSection;

const cookieSections: CookieSection[] = [
  {
    title: '1. What Are Cookies?',
    content: [
      'Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, deliver essential functionality, and improve your browsing experience.',
      'We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period or until deleted).'
    ]
  },
  {
    title: '2. Types of Cookies We Use',
    type: 'cards',
    cards: [
      {
        heading: 'Strictly Necessary Cookies',
        text: 'Required for core site functionality such as secure login, cart management, and page navigation. These cookies cannot be disabled through browser settings without impacting site operation.'
      },
      {
        heading: 'Performance & Analytics Cookies',
        text: 'Gather anonymous data about how visitors use our website (e.g., most-viewed pages, error tracking) so we can improve content and usability.'
      },
      {
        heading: 'Functional Cookies',
        text: 'Remember your preferences like language, location, or previously viewed plans to personalize your experience.'
      },
      {
        heading: 'Marketing Cookies',
        text: 'Used to deliver relevant promotions and measure the effectiveness of campaigns. These may be set by us or by trusted advertising partners.'
      }
    ]
  },
  {
    title: '3. Third-Party Cookies',
    content: [
      'We collaborate with analytics, advertising, and social media partners who may set cookies that track interactions with their services. These partners have their own privacy policies and cookie practices.',
      'Examples include analytics platforms, payment providers, and embedded social media content.'
    ]
  },
  {
    title: '4. Managing Your Cookie Preferences',
    content: [
      'You can modify cookie settings via our on-site cookie banner or by adjusting your browser controls to block or delete cookies. Please note that disabling essential cookies may impair website functionality.',
      'Most browsers include options to clear cookies, block third-party cookies, or receive alerts before cookies are stored. Refer to your browser’s help documentation for detailed instructions.'
    ]
  },
  {
    title: '5. Changes to This Cookie Policy',
    content: [
      'We may update this Cookie Policy to reflect changes in technology, regulation, or our services. Any updates will be posted on this page with an updated revision date.',
      'We encourage you to review this policy periodically to stay informed about our use of cookies.'
    ]
  },
  {
    title: '6. Contact Us',
    content: [
      'If you have questions about this Cookie Policy or how cookies are used, contact us at',
      'privacy@9gspeed.co.za',
      'or call customer support on (+27) 73 489 8331.'
    ]
  }
];

function renderSectionContent(section: CookieSection) {
  if (section.type === 'cards') {
    return (
      <ul className="space-y-3">
        {section.cards.map((item: CookieCard) => (
          <li key={item.heading} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-1">{item.heading}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
      {section.content.map((paragraph: string, index: number) => (
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
  );
}

export default function CookiePolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            This Cookie Policy explains how 9G Speednet uses cookies and similar tracking technologies to deliver,
            optimize, and personalize your browsing experience across our digital services.
          </p>
          <div className="mt-4 text-xs text-gray-400">
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="space-y-8">
          {cookieSections.map((section: CookieSection) => (
            <section key={section.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              {renderSectionContent(section)}
            </section>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>
            Looking for other documents? Visit our{' '}
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

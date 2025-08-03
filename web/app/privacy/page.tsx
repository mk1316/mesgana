export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <a 
            href="/" 
            className="inline-block text-orange-600 hover:text-orange-700 mb-4 font-medium transition-colors"
          >
            ← Back to Mesgana
          </a>
          <h1 className="text-4xl font-bold text-orange-600 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Last updated:</strong> July 2025
          </p>
        </header>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mesgana ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Ethiopian Hymnal web application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">Account Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li><strong>Email Address:</strong> Used for authentication and account management</li>
              <li><strong>Display Name:</strong> Your chosen name for the application</li>
              <li><strong>User Role:</strong> Admin or regular user permissions</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">Usage Data</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may collect anonymous usage data to improve our service:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Pages visited and features used</li>
              <li>Search queries (anonymized)</li>
              <li>Error reports and performance data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">How We Use Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Provide and maintain the hymn management service</li>
              <li>Authenticate users and manage permissions</li>
              <li>Allow admins to create, edit, and approve hymns</li>
              <li>Enable users to browse and search hymns</li>
              <li>Improve the application based on usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Data Storage and Security</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-600">
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>All data is stored securely in our Supabase database</li>
                <li>User passwords are hashed and never stored in plain text</li>
                <li>Database access is protected with Row Level Security (RLS)</li>
                <li>HTTPS encryption protects all data transmission</li>
                <li>Regular security audits and updates are performed</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Data Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>When required by law or legal process</li>
              <li>To protect our rights and safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Access your personal data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account</li>
              <li>Export your data</li>
              <li>Opt out of certain data collection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Contact Us</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:support@mesgana.com" 
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  support@mesgana.com
                </a>
              </p>
            </div>
          </section>

          <hr className="my-8 border-gray-200 dark:border-gray-600" />
          
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This Privacy Policy is effective as of the date listed above and applies to all users of the Mesgana web application.
          </p>
        </div>
      </div>
      
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>&copy; 2025 Mesgana. All rights reserved.</p>
      </footer>
    </div>
  );
} 
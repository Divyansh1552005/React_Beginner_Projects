import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-200 text-lg">
            Your privacy matters. We're committed to protecting your anonymity.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <div className="space-y-8 text-gray-300">
            <div>
              <p className="text-sm text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                BlogSpace is designed for anonymous sharing. We collect minimal information to ensure your privacy:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Content you voluntarily share in blog posts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Basic usage analytics (page views, general location)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Technical data (IP address, browser type) for security purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Information</h2>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Display your anonymous blog content to other users
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Improve our service and user experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Prevent abuse and maintain platform security
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Comply with legal obligations when required
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Anonymity Protection</h2>
              <p>
                Your privacy matters. We provide anonymous publishing options that allow you to share your 
                thoughts and stories without revealing your identity, ensuring a safe space for honest 
                expression and authentic storytelling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your information. We may share data only when legally required 
                or to protect our users and platform from harm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Request deletion of your posts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Access information we have about you
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Opt out of analytics tracking
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
              <p>
                We use industry-standard security measures to protect your data. However, no internet 
                transmission is 100% secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Get In Touch</h2>
              <p className="mb-4">
                Have questions about this privacy policy? We'd love to hear from you.
              </p>
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <p className="text-center">
                  <span className="text-gray-300">Email us at: </span>
                  <a href="mailto:officialdslc1552005@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium">
                    officialdslc1552005@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BlogSpace. All rights reserved. Made with ❤️ for writers and readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
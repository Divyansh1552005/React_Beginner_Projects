import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-blue-200 text-lg">
            Empowering writers and readers to share knowledge that matters.
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
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By using BlogSpace, you agree to these terms. If you don't agree, please don't use our service. 
                We believe that everyone has information worth telling, and these terms help us maintain a safe 
                and respectful community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Description</h2>
              <p>
                BlogSpace is a platform for anonymous blog posting and information sharing. Our mission is to 
                provide a platform where writers can express themselves freely, readers can discover meaningful 
                content, and communities can form around shared interests and experiences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Post illegal, harmful, or offensive content
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Share personal information of others without consent
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Spam or abuse the platform
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Attempt to hack or disrupt our services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Violate any applicable laws or regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Content Policy</h2>
              <p className="mb-4">
                While we support anonymous sharing and believe in the power of knowledge sharing, all content 
                must be legal and respectful. We reserve the right to remove content that:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Violates laws or regulations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Promotes violence or hatred
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Contains explicit or inappropriate material
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Infringes on intellectual property rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Sharing Information</h2>
              <p>
                We believe in the power of knowledge sharing. Our platform makes it easy for everyone to 
                share their insights, experiences, and expertise with a global community, fostering learning 
                and growth for all.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
              <p>
                We strive to maintain service availability but cannot guarantee uninterrupted access. 
                We may modify or discontinue features with reasonable notice to better serve our community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                BlogSpace is provided "as is" without warranties. We are not liable for any damages 
                resulting from your use of the service or content posted by other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p>
                We may update these terms occasionally to better serve our community. Continued use of the 
                service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Get In Touch</h2>
              <p className="mb-4">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you.
              </p>
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <p className="text-center">
                  <span className="text-gray-300">Contact us at: </span>
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

export default TermsOfService;
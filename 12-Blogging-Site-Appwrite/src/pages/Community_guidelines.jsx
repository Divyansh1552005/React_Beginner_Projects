import React from 'react';
import { FaShieldAlt, FaUsers, FaHeart, FaCommentDots, FaFlag, FaAward } from 'react-icons/fa';

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <FaShieldAlt className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Community Guidelines
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Welcome to BlogSpace! These guidelines help us maintain a respectful, inclusive, and engaging community for all content creators and readers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Core Values */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FaHeart className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <FaUsers className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Respect</h3>
                <p className="text-gray-400 text-sm">Treat every community member with dignity and kindness, regardless of background or beliefs.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <FaCommentDots className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Authenticity</h3>
                <p className="text-gray-400 text-sm">Share original content and honest opinions. Be genuine in your interactions and contributions.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <FaAward className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-400 text-sm">Strive for excellence in your content and engage thoughtfully with others' work.</p>
              </div>
            </div>
          </section>

          {/* Community Rules */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Community Rules</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">✅ What We Encourage</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Share original, high-quality content that adds value to the community</li>
                  <li>• Engage constructively with comments and discussions</li>
                  <li>• Support fellow creators through likes, shares, and meaningful feedback</li>
                  <li>• Ask questions and seek help when needed</li>
                  <li>• Credit sources and give proper attribution when sharing others' work</li>
                  <li>• Use appropriate tags and categories for better discoverability</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">❌ What We Don't Allow</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Harassment, bullying, or personal attacks of any kind</li>
                  <li>• Spam, excessive self-promotion, or irrelevant content</li>
                  <li>• Plagiarism or copyright infringement</li>
                  <li>• Hate speech, discrimination, or offensive language</li>
                  <li>• Sharing of private information without consent</li>
                  <li>• Adult content, violence, or illegal activities</li>
                  <li>• Fake accounts or impersonation of others</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Guidelines */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Content Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Blog Posts</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Write clear, engaging titles</li>
                  <li>• Use proper formatting and structure</li>
                  <li>• Include relevant images with proper attribution</li>
                  <li>• Add appropriate tags and categories</li>
                  <li>• Proofread before publishing</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Comments</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Be constructive and respectful</li>
                  <li>• Add value to the discussion</li>
                  <li>• Avoid off-topic conversations</li>
                  <li>• Report inappropriate content</li>
                  <li>• Use proper language and tone</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reporting and Enforcement */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FaFlag className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Reporting & Enforcement</h2>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">How to Report</h3>
              <p className="text-gray-400 mb-4">
                If you encounter content or behavior that violates our guidelines, please report it immediately by emailing us at:
              </p>
              <div className="text-center mb-6">
                <a 
                  href="mailto:officialdslc1552005@gmail.com" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  officialdslc1552005@gmail.com
                </a>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4">Our Response</h3>
              <p className="text-gray-400">
                We take all reports seriously and will investigate promptly. Depending on the severity of the violation, actions may include content removal, warnings, temporary suspension, or permanent account termination.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: August 2025 • These guidelines may be updated periodically to reflect community needs and platform changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
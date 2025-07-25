import React from 'react';
import { Key, Lock, Fingerprint } from 'lucide-react';

export default function PasswordStrengthLayout() {
  const features = [
    {
      icon: Key,
      title: "Long",
      description: "The longer a password, the more secure it is. A strong password should be at least 10 characters long."
    },
    {
      icon: Lock,
      title: "Complex", 
      description: "Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names."
    },
    {
      icon: Fingerprint,
      title: "Unique",
      description: "A strong password should be unique to each account to reduce vulnerability in the event of a hack."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            What makes a password strong?
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <IconComponent className="w-8 h-8 text-blue-400" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Tips Section */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pro Tips for Password Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Use a password manager to generate and store complex passwords</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Enable two-factor authentication when available</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Avoid using personal information in passwords</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Update passwords regularly, especially for important accounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
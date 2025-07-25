import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function PasswordGeneratorFAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this Password Generator safe to use?",
      answer: "Yes, password generators like this one are safe to use. The passwords are generated locally in your browser using cryptographically secure random number generation. No passwords are stored or transmitted to any servers, ensuring your security and privacy."
    },
    {
      question: "Why should I use a password generator?",
      answer: "Password generators create truly random, complex passwords that are impossible for humans to guess or remember. They eliminate common password mistakes like using personal information, dictionary words, or predictable patterns. This significantly improves your account security."
    },
    {
      question: "Do I need a unique password for every account?",
      answer: "Absolutely! Using unique passwords for each account is crucial for security. If one account gets compromised, having unique passwords prevents hackers from accessing your other accounts. This practice, combined with a password manager, provides the best protection."
    },
    {
      question: "What are the top 10 worst passwords?",
      answer: "The worst passwords include: '123456', 'password', '123456789', 'guest', 'qwerty', '12345678', '111111', '12345', 'col123456', and '123123'. These are easily guessed and should never be used for any account."
    },
    {
      question: "What is the best password generator?",
      answer: "The best password generators are those that create truly random passwords, offer customization options, and don't store your passwords. Built-in browser generators and reputable password managers like Bitwarden, 1Password, or Dashlane are excellent choices."
    },
    {
      question: "What are the requirements for a strong password?",
      answer: "A strong password should be at least 12-16 characters long, include uppercase and lowercase letters, numbers, and special characters. It should avoid dictionary words, personal information, and common patterns. Each password should be unique to its account."
    },
    {
      question: "How do I get a random password?",
      answer: "You can generate random passwords using online password generators, built-in browser tools, or password manager applications. Simply specify your desired length and character types, then let the tool create a cryptographically secure random password for you."
    },
    {
      question: "Can password generators be hacked?",
      answer: "Client-side password generators (like this one) that generate passwords in your browser are very secure since no data is transmitted. However, always ensure you're using reputable tools and avoid online generators that might store your passwords on their servers."
    },
    {
      question: "Is there a secure way to store passwords?",
      answer: "Yes! Password managers are the most secure way to store passwords. They encrypt your passwords with a master password and can generate strong passwords automatically. Popular options include Bitwarden, 1Password, Dashlane, and LastPass."
    },
    {
      question: "What makes a password safe?",
      answer: "A safe password is long (12+ characters), complex (mixed character types), unique to each account, and doesn't contain personal information. It should be stored securely in a password manager and protected with two-factor authentication when possible."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Password generator FAQs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Questions about this random password generator? Answers below!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/20"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-6 h-6 text-blue-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need More Security Tips?
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Remember that a strong password is just the first step. Enable two-factor authentication, 
              keep your software updated, and use a reputable password manager for the best security practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
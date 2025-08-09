import React from 'react'
import { Container } from '../Components'
import { Link } from 'react-router-dom'

function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Passionate about connecting writers and readers through technology.",
      avatar: "AJ",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      bio: "Designing intuitive experiences for content creators worldwide.",
      avatar: "SC",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      bio: "Building robust platforms that scale with our growing community.",
      avatar: "MR",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Emily Davis",
      role: "Community Manager",
      bio: "Fostering meaningful connections between writers and readers.",
      avatar: "ED",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly evolve our platform to meet the changing needs of content creators."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive environment where every voice matters and every story counts."
    },
    {
      icon: "🎯",
      title: "Quality",
      description: "Committed to providing the best tools and experience for writing and reading."
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Making quality content creation and consumption available to everyone, everywhere."
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-20'>
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90'></div>
        <div className='relative'>
          <Container>
            <div className='text-center'>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                About{' '}
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
                  BlogSpace
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed'>
                Empowering writers and readers to share stories that matter, one post at a time.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20'>
        <Container>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Our Mission</h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                At BlogSpace, we believe that everyone has a story worth telling. Our mission is to provide a platform 
                where writers can express themselves freely, readers can discover meaningful content, and communities 
                can form around shared interests and experiences.
              </p>
            </div>
            
            <div className='bg-white rounded-3xl p-8 md:p-12 shadow-xl'>
              <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Story</h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Founded in 2024, BlogSpace was born from a simple idea: make it easier for people to share 
                    their thoughts and connect through writing. What started as a small project has grown into 
                    a thriving community of writers and readers from around the world.
                  </p>
                  <p className='text-gray-600 leading-relaxed'>
                    Today, we're proud to host thousands of stories, facilitate meaningful discussions, and 
                    provide a space where creativity and authenticity are celebrated.
                  </p>
                </div>
                <div className='bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 text-center'>
                  <div className='text-6xl mb-4'>📚</div>
                  <div className='text-3xl font-bold text-indigo-600 mb-2'>1000+</div>
                  <div className='text-gray-700'>Stories Shared</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-white'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Values</h2>
            <p className='text-lg text-gray-600'>
              The principles that guide everything we do at BlogSpace
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='text-center group'>
                <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2'>
                  <div className='text-4xl mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>{value.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Meet Our Team</h2>
            <p className='text-lg text-gray-600'>
              The passionate people behind BlogSpace
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center'>
                <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>{member.name}</h3>
                <p className='text-indigo-600 font-medium mb-3'>{member.role}</p>
                <p className='text-gray-600 text-sm leading-relaxed'>{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
        <Container>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Get In Touch</h2>
            <p className='text-xl text-indigo-100 mb-8 max-w-2xl mx-auto'>
              Have questions, suggestions, or just want to say hello? We'd love to hear from you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a 
                href="mailto:hello@blogspace.com" 
                className='px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Email Us
              </a>
              <Link
                to="/signup"
                className='px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300'
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About

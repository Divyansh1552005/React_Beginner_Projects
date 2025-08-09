import React from 'react'
import { Container } from '../Components'
import { Link } from 'react-router-dom'

function About() {
  const teamMembers = [
    {
      name: "Divyansh Sharma",
      role: "Developer & Owner",
      bio: "Passionate full-stack developer creating innovative platforms for content creators and building meaningful digital experiences.",
      avatar: "DS",
      gradient: "from-blue-600 to-blue-800"
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
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 py-20'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90'></div>
        <div className='relative'>
          <Container>
            <div className='text-center'>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                About{' '}
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
                  BlogSpace
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
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
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Our Mission</h2>
              <p className='text-lg text-gray-300 leading-relaxed'>
                At BlogSpace, we believe that everyone has a story worth telling. Our mission is to provide a platform 
                where writers can express themselves freely, readers can discover meaningful content, and communities 
                can form around shared interests and experiences.
              </p>
            </div>
            
            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl'>
              <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-4'>Our Story</h3>
                  <p className='text-gray-300 mb-6 leading-relaxed'>
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
                  <div className='text-3xl font-bold text-blue-400 mb-2'>1000+</div>
                  <div className='text-gray-300'>Stories Shared</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-gray-800/30'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Our Values</h2>
            <p className='text-lg text-gray-300'>
              The principles that guide everything we do at BlogSpace
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='text-center group'>
                <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-lg hover:bg-gray-800/70 transition-all duration-300 transform group-hover:-translate-y-2'>
                  <div className='text-4xl mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-semibold text-white mb-3'>{value.title}</h3>
                  <p className='text-gray-300 leading-relaxed'>{value.description}</p>
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
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Meet Our Team</h2>
            <p className='text-lg text-gray-300'>
              The passionate developer behind BlogSpace
            </p>
          </div>
          
          <div className='flex justify-center'>
            <div className='max-w-sm w-full'>
              {teamMembers.map((member, index) => (
                <div key={index} className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2 text-center'>
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6`}>
                    {member.avatar}
                  </div>
                  <h3 className='text-2xl font-semibold text-white mb-2'>{member.name}</h3>
                  <p className='text-blue-400 font-medium mb-4'>{member.role}</p>
                  <p className='text-gray-300 leading-relaxed'>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white'>
        <Container>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Get In Touch</h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Have questions, suggestions, or just want to say hello? We'd love to hear from you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a 
                href="mailto:hello@blogspace.com" 
                className='px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Email Us
              </a>
              <Link
                to="/signup"
                className='px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300'
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

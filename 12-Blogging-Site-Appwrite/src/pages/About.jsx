import React from 'react'
import { Container } from '../Components'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpeg'

function About() {
  const teamMembers = [
    {
      name: "Divyansh Sharma",
      role: "Developer & Owner",
      bio: "Software engineering student who's coding for fun and creating things which people can use in daily life. Passionate about building meaningful digital experiences that make a difference.",
      avatar: "DS",
      gradient: "from-blue-600 to-blue-800",
      social: {
        email: "officialdslc1552005@gmail.com",
        github: "https://github.com/Divyansh1552005",
        linkedin: "https://www.linkedin.com/in/divyansh-sharma-b05897286/",
        portfolio: "https://divyanshsharma.site/",
        instagram: "https://instagram.com/divyanshsharma1552005"
      }
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
                Empowering writers and readers to share knowledge that matter, one post at a time.
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
                At BlogSpace, we believe that everyone has information worth telling. Our mission is to provide a platform 
                where writers can express themselves freely, readers can discover meaningful content, and communities 
                can form around shared interests and experiences.
              </p>
            </div>
            
            {/* Core Features */}
            <div className='grid md:grid-cols-2 gap-8 mt-12'>
              <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-lg hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2'>
                <div className='text-center'>
                  <div className='text-5xl mb-4'>🌐</div>
                  <h3 className='text-2xl font-bold text-white mb-4'>Sharing Information</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    We believe in the power of knowledge sharing. Our platform makes it easy for everyone to 
                    share their insights, experiences, and expertise with a global community, fostering learning 
                    and growth for all.
                  </p>
                </div>
              </div>
              
              <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-lg hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2'>
                <div className='text-center'>
                  <div className='text-5xl mb-4'>🎭</div>
                  <h3 className='text-2xl font-bold text-white mb-4'>Anonymity Protection</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Your privacy matters. We provide anonymous publishing options that allow you to share your 
                    thoughts and stories without revealing your identity, ensuring a safe space for honest 
                    expression and authentic storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Separator Line */}
      <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>

      {/* Team Section */}
      <section className='py-20'>
        <Container>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Meet Our Developer</h2>
            <p className='text-lg text-gray-300'>
              The passionate developer behind BlogSpace
            </p>
          </div>
          
          <div className='flex justify-center'>
            <div className='max-w-lg w-full'>
              {teamMembers.map((member, index) => (
                <div key={index} className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center group'>
                  <div className='w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-blue-400/50 transition-all duration-300'>
                    <img
                      src={profileImage}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='text-2xl font-semibold text-white mb-2'>{member.name}</h3>
                  <p className='text-blue-400 font-medium mb-4'>{member.role}</p>
                  <p className='text-gray-300 leading-relaxed mb-6'>{member.bio}</p>
                  
                  {/* Social Media Icons */}
                  <div className='flex justify-center space-x-4'>
                    <a
                      href={`mailto:${member.social.email}`}
                      className='group relative p-2 bg-gray-700/50 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110'
                      title='Email'
                    >
                      <svg className='w-5 h-5 text-gray-300 group-hover:text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                      </svg>
                    </a>

                    <a
                      href={member.social.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative p-2 bg-gray-700/50 rounded-full hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 transform hover:scale-110'
                      title='GitHub'
                    >
                      <svg className='w-5 h-5 text-gray-300 group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                      </svg>
                    </a>
                    
                    
                    
                    <a
                      href={member.social.portfolio}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative p-2 bg-gray-700/50 rounded-full hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 transform hover:scale-110'
                      title='Portfolio'
                    >
                      <svg className='w-5 h-5 text-gray-300 group-hover:text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z' clipRule='evenodd'></path>
                      </svg>
                    </a>

                    <a
                      href={member.social.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative p-2 bg-gray-700/50 rounded-full hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 transform hover:scale-110'
                      title='LinkedIn'
                    >
                      <svg className='w-5 h-5 text-gray-300 group-hover:text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' clipRule='evenodd'></path>
                      </svg>
                    </a>
                    
                    
                    <a
                      href={member.social.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative p-2 bg-gray-700/50 rounded-full hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110'
                      title='Instagram'
                    >
                      <svg className='w-5 h-5 text-gray-300 group-hover:text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                      </svg>
                    </a>
                    
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Separator Line */}
      <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>

      {/* Contact Section */}
      <section className='py-20'>
        <Container>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>Get In Touch</h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Have questions, suggestions, or just want to say hello? We'd love to hear from you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a 
                href="mailto:officialdslc1552005@gmail.com" 
                className='px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Email Us
              </a>
              <Link
                to="/signup"
                className='px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300'
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

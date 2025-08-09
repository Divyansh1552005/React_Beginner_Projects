import React from 'react'
import { Container } from '../Components'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpeg'

function About() {
  const teamMembers = [
    {
      name: "Divyansh Sharma",
      role: "Developer & Owner",
      bio: "Passionate full-stack developer creating innovative platforms for content creators and building meaningful digital experiences.",
      avatar: "DS",
      gradient: "from-blue-600 to-blue-800",
      social: {
        email: "officialdslc1552005@gmail.com",
        linkedin: "https://www.linkedin.com/in/divyansh-sharma-b05897286/",
        portfolio: "https://divyanshsharma.site/",
        instagram: "https://instagram.com/divyanshsharma1552005"
      }
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
            
            {/* <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl'>
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
            </div> */}
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
                  <div className='w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-500/30'>
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
                href="mailto:officialdslc1552005@gmail.com" 
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Generic change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // Contact information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-primary-600" />,
      title: 'Location',
      content: '7584+GF, Philip Nel Park, Pretoria,\nGauteng, 0029\nSouth Africa',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhone className="h-6 w-6 text-primary-600" />,
      title: 'Phone Number',
      content: '+27 67 679 1066',
      link: 'tel:+27676791066',
      linkText: 'Call Now'
    },
    {
      icon: <FaEnvelope className="h-6 w-6 text-primary-600" />,
      title: 'Email Address',
      content: 'aniamankechi@gmail.com',
      link: 'mailto:aniamankechi@gmail.com',
      linkText: 'Send Email'
    },
    {
      icon: <FaClock className="h-6 w-6 text-primary-600" />,
      title: 'Availability',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
      link: '/book',
      linkText: 'Book Appointment'
    }
  ];

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="h-5 w-5" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram className="h-5 w-5" />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-50 mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-100 max-w-3xl mx-auto">
              Feel free to reach out to me with any questions, requests, or feedback. I’m always happy to connect, collaborate, or discuss biokinetics!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-8">Contact Nkechi</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Have questions about my services or want to schedule an appointment? Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="bg-primary-50 p-3 rounded-full mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line mb-2">{item.content}</p>
                      <a 
                        href={item.link} 
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-lg inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkText}
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 p-3 rounded-full transition-colors"
                      aria-label={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Formspree) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">Send Us a Message</h2>
              <form action={import.meta.env.VITE_FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-bold bg-primary-700 hover:bg-primary-800 text-white rounded-lg shadow transition-colors duration-200">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=7584%2BGF,+Philip+Nel+Park,+Pretoria,+0029&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

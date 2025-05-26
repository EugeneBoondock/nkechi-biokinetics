import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setFormStatus({ submitted: true, error: '' });
    } catch (error) {
      setFormStatus({ submitted: false, error: 'An error occurred. Please try again.' });
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-primary-600" />,
      title: 'Our Location',
      content: '123 Health Street, Sandton\nGauteng, 2196\nSouth Africa',
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
      title: 'Working Hours',
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Get in touch with us for any questions about our services or to schedule an appointment.
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
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to schedule an appointment? Fill out the form or contact us directly using the information below.
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line mb-2">{item.content}</p>
                      <a 
                        href={item.link} 
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
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
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
                  <button
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+27 67 679 1066"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment">Book an Appointment</option>
                        <option value="Services">Services Information</option>
                        <option value="Billing">Billing Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                        placeholder="Your message"
                        rows={5}
                        required
                      ></textarea>
                    </div>

                    {formStatus.error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">{formStatus.error}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.927318559017!2d28.0573583150285!3d-26.14470058347131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1d6c6f3f3d%3A0x1e9c4b8b8b8b8b8b8!2sSandton%2C%20Johannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

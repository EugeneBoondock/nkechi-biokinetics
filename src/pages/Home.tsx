import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUserMd, FaHeartbeat, FaRunning, FaClipboardCheck } from 'react-icons/fa';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Thabo M.',
    role: 'Patient',
    content: 'Nkechi helped me recover from a sports injury that had been bothering me for months. Her expertise and personalized approach made all the difference!',
    rating: 5
  },
  {
    id: 2,
    name: 'Lerato K.',
    role: 'Patient',
    content: 'The team at Nkechi Biokinetics is exceptional. They created a custom program that helped me manage my chronic pain and improve my mobility.',
    rating: 5
  },
  {
    id: 3,
    name: 'David L.',
    role: 'Athlete',
    content: 'As a competitive runner, I needed specialized care for performance enhancement. The results have been outstanding!',
    rating: 5
  }
];

// Services data
const services = [
  {
    id: 1,
    icon: <FaUserMd className="h-8 w-8 text-primary-600" />,
    title: 'Personalized Assessments',
    description: 'Comprehensive evaluations to understand your unique needs and create a tailored treatment plan.'
  },
  {
    id: 2,
    icon: <FaHeartbeat className="h-8 w-8 text-primary-600" />,
    title: 'Rehabilitation',
    description: 'Specialized programs to help you recover from injuries, surgeries, or chronic conditions.'
  },
  {
    id: 3,
    icon: <FaRunning className="h-8 w-8 text-primary-600" />,
    title: 'Performance Enhancement',
    description: 'Optimize your physical performance, whether you\'re an athlete or fitness enthusiast.'
  },
  {
    id: 4,
    icon: <FaClipboardCheck className="h-8 w-8 text-primary-600" />,
    title: 'Wellness Programs',
    description: 'Holistic approaches to improve your overall health, mobility, and quality of life.'
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/30">
          <div className="absolute inset-0 bg-[url('/images/nkechi2.png')] bg-cover md:bg-[center_top_-550px] bg-center mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-50">
              Your Journey to Better Health Starts Here
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At Nkechi Biokinetics, we provide expert care and personalized treatment plans to help you achieve optimal health, recover from injuries, and enhance your physical performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/book" 
                className="btn btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Book an Appointment
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Expert Care for Your Body's Needs</h2>
              <p className="text-gray-600 text-lg">
                Our team of qualified biokinetics practitioners is dedicated to helping you achieve optimal health and performance through evidence-based treatments and personalized care programs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Comprehensive assessments and treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">State-of-the-art facilities and equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Experienced and certified practitioners</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn More About Us
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/nkechi1.jpg" 
                alt="Biokinetics session" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <img 
                src="/images/nkechi3.jpg" 
                alt="Treatment session" 
                className="absolute -bottom-8 -right-8 w-2/3 rounded-lg shadow-2xl border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="/images/nkechi4.jpg" 
                  alt="Nkechi Biokinetics Practitioner" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Biokinetics session" 
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg w-48">
                  <div className="text-4xl font-bold">4+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary-600 font-semibold mb-2 inline-block">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Biokinetics Care in Gauteng</h2>
              <p className="text-gray-600 mb-6">
                At Nkechi Biokinetics, we are dedicated to improving your quality of life through evidence-based exercise interventions. Our practice is built on a foundation of professional excellence, compassion, and personalized care.
              </p>
              <p className="text-gray-600 mb-8">
                Our registered biokineticist, Nkechi, brings years of experience in rehabilitation, chronic disease management, and performance enhancement. We work closely with each patient to develop customized treatment plans that address their specific needs and goals.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn more about us
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Biokinetics Care</h2>
            <p className="text-gray-600">
              We offer a wide range of services designed to help you achieve your health and fitness goals, whether you're recovering from an injury or looking to enhance your physical performance.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={item}
              >
                <div className="h-16 w-16 flex items-center justify-center bg-primary-50 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View all services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about their experiences at Nkechi Biokinetics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey to Better Health?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards improved health, mobility, and quality of life. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-medium inline-flex items-center justify-center"
              >
                Book an Appointment
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg font-medium inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

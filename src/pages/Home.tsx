import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUserMd, FaHeartbeat, FaRunning, FaClipboardCheck } from 'react-icons/fa';


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
        {/* LinkedIn button in hero, bottom right on desktop, bottom center on mobile */}
        <a
          href="https://www.linkedin.com/in/nkechinyeremo/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 right-8 md:right-12 z-30 inline-flex items-center gap-2 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium shadow transition-colors duration-200 text-base md:bottom-12 md:right-16 hidden md:inline-flex"
          style={{ minWidth: '140px' }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.1-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.848-1.566 3.046 0 3.609 2.006 3.609 4.617v4.716z"/></svg>
          <span>LinkedIn</span>
        </a>
        {/* Mobile: LinkedIn button bottom center */}
        <a
          href="https://www.linkedin.com/in/nkechinyeremo/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium shadow transition-colors duration-200 text-sm md:hidden"
          style={{ minWidth: '120px' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.1-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.848-1.566 3.046 0 3.609 2.006 3.609 4.617v4.716z"/></svg>
          <span>LinkedIn</span>
        </a>
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
              Welcome to Nkechi’s Biokinetics Portfolio
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              I’m Nkechinyeremo Nompumelelo Aniamah, a passionate 4th year Biokinetics student at Tshwane University of Technology (TUT), graduating in 2025. Explore my journey, skills, and dedication to helping others achieve their best physical health.
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
                Services
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
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-gray-600 text-lg">
                As a dedicated student and aspiring biokineticist, I combine academic knowledge with hands-on experience to provide evidence-based practices and compassionate care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Comprehensive academic and practical training in biokinetics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Experience with a variety of rehabilitation and performance techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Committed to continuous learning and professional growth</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn More About Me
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
              <span className="text-primary-600 font-semibold mb-2 inline-block">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aspiring Biokineticist in Gauteng</h2>
              <p className="text-gray-600 mb-6">
                As a 4th-year Biokinetics student at Tshwane University of Technology (TUT), I am passionate about empowering others through movement science. My journey includes hands-on practicals at the TUT Biokinetics Lab (working with university athletes).
              </p>
              <p className="text-gray-600 mb-8">
                These experiences have shaped my holistic approach to health, focusing on personalized care, injury prevention, and performance enhancement for individuals from all walks of life.
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
            <span className="text-primary-600 font-semibold">MY SKILLS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Biokinetics Skills & Experience</h2>
            <p className="text-gray-600">
              My training covers injury rehabilitation, performance optimization, chronic disease management, and wellness coaching. I love working with both athletes and everyday individuals to help them move and feel better.
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
              View my services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Work Together to Achieve Your Goals!</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              If you’re looking for a passionate, hands-on biokinetics student to help with your health, performance, or recovery, let’s connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-medium inline-flex items-center justify-center"
              >
                Book a Session
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg font-medium inline-flex items-center justify-center"
              >
                Contact Me
              </Link>
              <a href="https://www.linkedin.com/in/nkechinyeremo/" target="_blank" rel="noopener noreferrer" className="btn bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-medium inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.1-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.848-1.566 3.046 0 3.609 2.006 3.609 4.617v4.716z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

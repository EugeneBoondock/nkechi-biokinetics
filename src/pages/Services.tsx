import { motion } from 'framer-motion';
import { FaUserMd, FaRunning, FaHeartbeat, FaClipboardCheck, FaBone, FaUserInjured, FaChild, FaProcedures, FaUserTie, FaWheelchair } from 'react-icons/fa';

const Services = () => {
  // Main services data
  const mainServices = [
    {
      id: 1,
      icon: <FaUserMd className="h-8 w-8 text-primary-600" />,
      title: 'Comprehensive Assessments',
      description: 'Thorough evaluations including posture analysis, movement screening, and functional testing to create personalized treatment plans tailored to your unique needs.',
      details: [
        'Detailed postural assessment',
        'Movement pattern analysis',
        'Functional capacity evaluation',
        'Muscle strength and length testing',
        'Joint range of motion assessment'
      ]
    },
    {
      id: 2,
      icon: <FaHeartbeat className="h-8 w-8 text-primary-600" />,
      title: 'Injury Rehabilitation',
      description: 'Specialized exercise programs designed to help you recover from sports injuries, accidents, or post-surgical rehabilitation with evidence-based approaches.',
      details: [
        'Post-surgical rehabilitation',
        'Sports injury recovery',
        'Work-related injury management',
        'Chronic pain management',
        'Return-to-sport programs'
      ]
    },
    {
      id: 3,
      icon: <FaRunning className="h-8 w-8 text-primary-600" />,
      title: 'Performance Enhancement',
      description: 'Optimize your athletic performance with sport-specific training programs designed to improve strength, power, agility, and endurance.',
      details: [
        'Sport-specific conditioning',
        'Biomechanical analysis',
        'Speed and agility training',
        'Strength and power development',
        'Endurance optimization'
      ]
    },
    {
      id: 4,
      icon: <FaClipboardCheck className="h-8 w-8 text-primary-600" />,
      title: 'Chronic Disease Management',
      description: 'Structured exercise interventions for managing conditions like diabetes, hypertension, arthritis, and cardiovascular diseases to improve quality of life.',
      details: [
        'Cardiac rehabilitation',
        'Diabetes management',
        'Arthritis management',
        'Pulmonary rehabilitation',
        'Metabolic syndrome management'
      ]
    },
    {
      id: 5,
      icon: <FaBone className="h-8 w-8 text-primary-600" />,
      title: 'Orthopedic Rehabilitation',
      description: 'Targeted programs for post-fracture recovery, joint replacements, and musculoskeletal conditions to restore function and mobility.',
      details: [
        'Post-fracture rehabilitation',
        'Joint replacement recovery',
        'Spinal rehabilitation',
        'Tendon and ligament injuries',
        'Postural correction programs'
      ]
    },
    {
      id: 6,
      icon: <FaUserInjured className="h-8 w-8 text-primary-600" />,
      title: 'Neurological Rehabilitation',
      description: 'Specialized interventions for neurological conditions such as stroke, Parkinson\'s disease, multiple sclerosis, and spinal cord injuries.',
      details: [
        'Stroke rehabilitation',
        'Parkinson\'s management',
        'Multiple sclerosis programs',
        'Spinal cord injury rehab',
        'Balance and coordination training'
      ]
    }
  ];

  // Specialized programs
  const specializedPrograms = [
    {
      id: 1,
      title: 'Senior Wellness',
      icon: <FaWheelchair className="h-6 w-6" />,
      description: 'Programs designed to maintain independence, improve balance, and enhance quality of life for older adults.'
    },
    {
      id: 2,
      title: 'Pediatric Care',
      icon: <FaChild className="h-6 w-6" />,
      description: 'Specialized interventions for children with developmental delays or movement disorders.'
    },
    {
      id: 3,
      title: 'Pre & Post Natal',
      icon: <FaProcedures className="h-6 w-6" />,
      description: 'Safe and effective exercise programs for expectant and new mothers.'
    },
    {
      id: 4,
      title: 'Corporate Wellness',
      icon: <FaUserTie className="h-6 w-6" />,
      description: 'Workplace programs to improve employee health, reduce injuries, and enhance productivity.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Biokinetics Skills & Offerings
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg text-primary-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my skills, training, and practical experience as a biokinetics student
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mt-2 mb-4">My Biokinetics Skills</h2>
            <p className="text-gray-600">
              As a 4th-year student at Tshwane University of Technology, I have developed a strong foundation in the following areas of biokinetics through coursework, clinical placements, and hands-on projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="p-8">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mt-6">
                    <h4 className="font-semibold text-gray-800">My Skills & Training:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <button className="text-primary-600 font-semibold transition-colors flex items-center bg-white/80 px-4 py-2 rounded-lg">
                    <span className="text-primary-600 font-semibold">MY SKILLS & TRAINING</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Specialized Programs</h2>
            <p className="text-gray-600">
              As a 4th-year Biokinetics student at Tshwane University of Technology, my training includes practical experience at the TUT Biokinetics Lab (university athletes). I focus on evidence-based exercise, rehabilitation, and performance optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedPrograms.map((program, index) => (
              <motion.div 
                key={program.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/nkechi5.jpg" 
                  alt="My approach" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">My Approach to Biokinetics</h2>
              <p className="text-gray-600 mb-6">
                I believe in a client-centered approach that addresses the root cause of each challenge, not just the symptoms. My evidence-based methodology and hands-on practicals ensure you receive effective, individualized support—whether you’re an athlete, staff member, or anyone seeking better movement.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Personalized Assessment',
                    description: 'Comprehensive evaluation to understand your unique needs and goals.'
                  },
                  {
                    title: 'Customized Treatment Plan',
                    description: 'Tailored exercise programs designed specifically for your condition and objectives.'
                  },
                  {
                    title: 'Progressive Rehabilitation',
                    description: 'Structured progression of exercises to ensure steady improvement and prevent re-injury.'
                  },
                  {
                    title: 'Education & Empowerment',
                    description: 'Providing you with the knowledge and tools to take control of your health and well-being.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 rounded-full p-1.5 mt-0.5 mr-4 flex-shrink-0">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Ready to Move Better, Feel Better?</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Let’s work together to achieve your movement, health, or performance goals—book a session or connect with me today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book" 
              className="inline-flex items-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-bold bg-primary-700 hover:bg-primary-800 text-white rounded-lg shadow transition-colors duration-200"
            >
              Book a Session
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-bold border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

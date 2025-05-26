import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Nkechinyeremo Aniamah',
      role: 'Lead Biokineticist',
      bio: 'With extensive experience in biokinetics, Dr. Aniamah specializes in sports rehabilitation and chronic disease management.',
      image: '/images/nkechi3.jpg'
    }
  ];

  // Stats data
  const stats = [
    { id: 1, value: '4+', label: 'Years Experience', icon: <FaUserMd className="h-8 w-8" /> },
    { id: 2, value: '2000+', label: 'Patients Treated', icon: <FaHeartbeat className="h-8 w-8" /> },
    { id: 3, value: '98%', label: 'Success Rate', icon: <GiMedicines className="h-8 w-8" /> },
    { id: 4, value: '15+', label: 'Specialists', icon: <FaUsers className="h-8 w-8" /> }
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
            About Nkechi Biokinetics
          </motion.h1>
          <motion.p 
            className="text-xl text-primary-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering your health journey through expert biokinetics care in Gauteng
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our clinic" 
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg w-48">
                  <div className="text-4xl font-bold">2025</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2025 by Dr. Nkechi Aniamah, Nkechi Biokinetics began as a small practice with a big vision: to provide exceptional biokinetics care that transforms lives. What started as a single-room clinic has grown into one of Gauteng's leading biokinetics centers, serving thousands of patients across the region.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been shaped by our commitment to excellence, innovation in treatment approaches, and the success stories of our patients. We believe in a holistic approach to health and wellness, addressing not just the physical but also the emotional and psychological aspects of rehabilitation and performance enhancement.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold our founding principles while embracing the latest advancements in biokinetics to provide our patients with the highest standard of care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower individuals to achieve optimal health and physical function through evidence-based biokinetics interventions, personalized care, and education.
              </p>
              <p className="text-gray-600">
                We are committed to providing accessible, high-quality care that addresses the unique needs of each patient, helping them overcome physical challenges and enhance their quality of life.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaGraduationCap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the leading biokinetics practice in Gauteng, recognized for excellence in rehabilitation, performance enhancement, and innovative treatment approaches.
              </p>
              <p className="text-gray-600">
                We envision a community where everyone has access to the care they need to live active, healthy, and fulfilling lives, free from physical limitations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at Nkechi Biokinetics and shape the way we care for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We are committed to the highest standards of professional practice and continuous improvement.'
              },
              {
                title: 'Compassion',
                description: 'We treat every patient with empathy, respect, and understanding.'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our interactions and decisions.'
              },
              {
                title: 'Innovation',
                description: 'We embrace new research and technologies to provide cutting-edge care.'
              },
              {
                title: 'Collaboration',
                description: 'We work together with patients and healthcare professionals to achieve the best outcomes.'
              },
              {
                title: 'Empowerment',
                description: 'We educate and support our patients to take an active role in their health journey.'
              },
              {
                title: 'Inclusivity',
                description: 'We provide accessible, culturally sensitive care to all members of our community.'
              },
              {
                title: 'Accountability',
                description: 'We take responsibility for our actions and their impact on our patients and community.'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-bold text-lg text-primary-700 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600">
              Our team of dedicated professionals brings together expertise, compassion, and a shared commitment to your health and well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-600 p-4 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

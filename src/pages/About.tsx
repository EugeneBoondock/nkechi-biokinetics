import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const About = () => {

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-2xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Nkechinyeremo Nompumelelo Aniamah
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl text-primary-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering others through movement and science — my journey in Biokinetics at Tshwane University of Technology
          </motion.p>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/Nkechi_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-bold bg-primary-700 hover:bg-primary-800 text-white rounded-lg shadow transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
            Download My CV
          </a>
        </div>
      </section>

      {/* My Story */}
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
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
              <p className="text-gray-600 mb-6">
                My journey in Biokinetics began at Tshwane University of Technology, where I am currently a 4th-year student, graduating in 2025. From my first lecture, I was inspired by the power of movement science to change lives. Over the years, I have developed a deep passion for helping others recover, improve, and thrive through evidence-based exercise and rehabilitation.
              </p>
              <p className="text-gray-600 mb-6">
                My approach is holistic, focusing not just on the body, but on the mind and spirit. I believe in empowering each person to take charge of their health journey, and I am committed to continuous learning and growth in my field.
              </p>
              <p className="text-gray-600">
                As I prepare to graduate in 2025, I am excited to bring my knowledge, compassion, and energy to the world as a biokineticist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Mission & Vision */}
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
              <h3 className="text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower individuals to achieve their best physical health through evidence-based exercise, movement, and education, while growing as a compassionate and knowledgeable biokineticist.
              </p>
              <p className="text-gray-600">
                I am dedicated to providing accessible, high-quality support and guidance to everyone I work with, helping them overcome challenges and achieve their goals.
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
              <h3 className="text-2xl font-bold mb-4">My Vision</h3>
              <p className="text-gray-600 mb-4">
                To become a leader in biokinetics, inspiring others through my dedication, expertise, and commitment to lifelong learning.
              </p>
              <p className="text-gray-600">
                I envision a world where everyone has the knowledge and support to live active, healthy, and fulfilling lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Core Values</h2>
            <p className="text-gray-600">
              These values guide my studies, my practice, and my approach to helping others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'I am committed to the highest standards of professional practice and continuous self-improvement.'
              },
              {
                title: 'Compassion',
                description: 'I treat every person with empathy, respect, and understanding.'
              },
              {
                title: 'Integrity',
                description: 'I maintain the highest ethical standards in all my interactions and decisions.'
              },
              {
                title: 'Innovation',
                description: 'I embrace new research and technologies to provide the best possible support.'
              },
              {
                title: 'Collaboration',
                description: 'I believe in collaboration with peers, mentors, and clients to achieve the best outcomes.'
              },
              {
                title: 'Empowerment',
                description: 'I educate and support others to take an active role in their health journey.'
              },
              {
                title: 'Inclusivity',
                description: 'I strive to provide accessible, culturally sensitive support to all.'
              },
              {
                title: 'Accountability',
                description: 'I take responsibility for my actions and their impact on others.'
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Journey & Experience</h2>
            <p className="text-gray-600">
              I am a 4th-year Biokinetics student at Tshwane University of Technology, graduating in 2025. My academic journey has been enriched by hands-on practicals at the TUT Biokinetics Lab (working with university athletes) helping others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-64 overflow-hidden">
      <img 
        src="/images/biokineticist.png" 
        alt="Nkechi Aniamah" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">Nkechinyeremo Nompumelelo Aniamah</h3>
      <p className="text-primary-600 font-medium mb-3">Biokinetics Student, Tshwane University of Technology</p>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2 text-primary-700">Professional Practicals</h4>
        <p className="text-gray-600 text-sm mb-5">My academic journey has been enriched by hands-on practical experience in real-world health and sports environments:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-primary-50 border border-primary-100 p-5 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="bg-primary-100 text-primary-700 rounded-full p-2 mr-3">
                {/* BMW icon */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21v-4a2 2 0 012-2h3V9a2 2 0 012-2h2a2 2 0 012 2v6h3a2 2 0 012 2v4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="font-bold text-primary-800 text-base"></span>
            </div>
            <p className="text-gray-700 text-sm">Conducted </p>
          </div>
          <div className="rounded-xl bg-primary-50 border border-primary-100 p-5 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="bg-primary-100 text-primary-700 rounded-full p-2 mr-3">
                {/* Running icon */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16V21M13 16l-2-3m2 3l2-3m-2-3a2 2 0 100-4 2 2 0 000 4zm0 0v1m0 0c-3.866 0-7 1.343-7 3v2a2 2 0 002 2h10a2 2 0 002-2v-2c0-1.657-3.134-3-7-3z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="font-bold text-primary-800 text-base">TUT Biokinetics Lab</span>
            </div>
            <p className="text-gray-700 text-sm">Worked with university athletes, assisting with injury prevention, rehabilitation, and performance optimization.</p>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-6">These experiences have deepened my understanding of biokinetics in real-world settings and fueled my commitment to making a positive impact through movement science.</p>
    </div>
  </motion.div>
</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
  { id: 1, value: '4', label: 'Years of Study', icon: <FaGraduationCap className="h-8 w-8" /> },
  { id: 2, value: '100+', label: 'Athletes & Staff Helped', icon: <FaHeartbeat className="h-8 w-8" /> },
  { id: 3, value: '400+', label: 'Practical Hours', icon: <GiMedicines className="h-8 w-8" /> },
  { id: 4, value: '2025', label: 'Graduation Year', icon: <FaUserMd className="h-8 w-8" /> }
].map((stat, index) => (
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

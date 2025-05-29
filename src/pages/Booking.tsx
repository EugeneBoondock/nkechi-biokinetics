import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react'; // Removed useEffect
import { motion } from 'framer-motion'; // Removed AnimatePresence
import { 
  FaCalendarAlt, 
  FaUserMd,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaInfoCircle,
  FaCheckCircle, // Added FaCheckCircle
  FaMapMarkerAlt // Added FaMapMarkerAlt
} from 'react-icons/fa';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  notes?: string;
  selectedService: Service | null;
}

interface Service {
  id: string;
  name: string;
  icon: ReactElement; // Changed from JSX.Element to ReactElement
  description: string;
  duration: number; // Duration in minutes
  price: number; // Price in local currency
}

interface Step {
  id: number;
  title: string;
  icon: ReactElement;
}

// Service definitions
const services: Service[] = [
  {
    id: 'biokinetics',
    name: 'Biokinetics',
    icon: <FaUserMd />,
    description: 'Personal biokinetics consultations and exercise therapy with Nkechi, a 4th-year Biokinetics student at TUT',
    duration: 60,
    price: 500
  },
  {
    id: 'injury-rehab',
    name: 'Injury Rehabilitation',
    icon: <FaUserMd />,
    description: 'Guided injury rehabilitation and recovery sessions, based on my academic and practical training.',
    duration: 60,
    price: 550
  },
  {
    id: 'chronic-pain',
    name: 'Chronic Pain Management',
    icon: <FaUserMd />,
    description: 'Comprehensive treatment plans for managing chronic pain conditions.',
    duration: 45,
    price: 480
  },
  {
    id: 'consultation',
    name: 'Consultation',
    icon: <FaCalendarAlt />,
    description: 'Initial consultation and assessment to understand your needs and create a personalized treatment plan.',
    duration: 30,
    price: 300
  },
  {
    id: 'sports-performance',
    name: 'Sports Performance',
    icon: <FaUserMd />,
    description: 'Enhance your athletic performance with tailored exercise programs.',
    duration: 75,
    price: 600
  },
  {
    id: 'post-surgical',
    name: 'Post-Surgical Rehab',
    icon: <FaUserMd />,
    description: 'Guided rehabilitation programs to restore function after surgery.',
    duration: 60,
    price: 520
  },
  {
    id: 'senior-wellness',
    name: 'Senior Wellness',
    icon: <FaUserMd />,
    description: 'Specialized programs to maintain mobility, strength, and independence.',
    duration: 45,
    price: 450
  }
];

// Time slots for appointments
const timeSlots: string[] = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const heroImages = [
  '/images/nkechi2.png',
  '/images/nkechi3.jpg',
  '/images/nkechi4.jpg',
  '/images/nkechi5.jpg'
];

const Booking: React.FC = () => {
  // Define the steps with icons, matching the Step interface
  const steps: Step[] = [
    { 
      id: 1, 
      title: 'Date & Time',
      icon: <FaCalendarAlt className="text-lg" />
    },
    { 
      id: 2, 
      title: 'Select Service',
      icon: <FaUserMd className="text-lg" />
    },
    { 
      id: 3, 
      title: 'Your Details',
      icon: <FaUser className="text-lg" />
    },
    { 
      id: 4, 
      title: 'Confirmation',
      icon: <FaInfoCircle className="text-lg" />
    }
  ];
  // State management
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for hero carousel
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    selectedService: null,
  });

  // Auto-advance hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  
    return () => clearInterval(timer);
  }, [heroImages.length]);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service: Service) => {
    setFormData(prev => ({
      ...prev,
      service: service.id,
      selectedService: service
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setStep(4); // Confirmation step
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (): ReactElement | null => {
    switch (step) {
      case 1: 
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Select Date & Time</h3>
            <div className="md:flex md:space-x-6 space-y-6 md:space-y-0">
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Choose Date:</h4>
                <Calendar
                  onChange={handleDateSelect}
                  minDate={new Date()} 
                  className="w-full bg-white rounded-lg shadow-md p-2"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Choose Time:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`p-3 text-center rounded-lg border transition-colors ${selectedTime === time 
                          ? 'border-primary-500 bg-primary-50 text-primary-700 ring-2 ring-primary-500'
                          : 'border-gray-300 bg-white text-gray-800 hover:border-primary-400 hover:bg-primary-50/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => { if (selectedDate && selectedTime) setStep(2); }} 
                disabled={!selectedDate || !selectedTime}
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Select Service
              </button>
            </div>
          </div>
        );
      case 2: 
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Select a Service</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map(serviceItem => (
                <div
                  key={serviceItem.id}
                  onClick={() => handleServiceSelect(serviceItem)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out 
                    ${formData.selectedService?.id === serviceItem.id 
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500 shadow-lg'
                      : 'border-gray-300 hover:border-primary-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-primary-600 mr-3 text-2xl">{serviceItem.icon}</span>
                    <h4 className="text-lg font-semibold text-gray-800">{serviceItem.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{serviceItem.description}</p>
                  <p className="text-sm text-gray-500">Duration: {serviceItem.duration} mins</p>
                  <p className="text-sm font-semibold text-gray-700">Price: R{serviceItem.price}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)} 
                type="button"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                onClick={() => { if (formData.selectedService) setStep(3); }} 
                disabled={!formData.selectedService}
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Your Details
              </button>
            </div>
          </div>
        );
      case 3: 
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Your Details</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)} // Back to Service Selection
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          </form>
        );
      case 4: // Confirmation/Success
        if (isSuccess) {
          return (
            <div className="text-center py-8">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">Appointment Request Received!</h2>
              <p className="mt-2 text-gray-600">
                Thank you, {formData.name}! We've received your request for{' '}
                <span className="font-medium">{formData.selectedService?.name}</span> on {' '}
                <span className="font-medium">
                  {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  {' at '} {selectedTime}
                </span>.
              </p>
              <p className="mt-4 text-gray-600">
                We will contact you at <span className="font-medium">{formData.email}</span> or <span className="font-medium">{formData.phone}</span> shortly to confirm the details.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => { 
                    setStep(1); 
                    setSelectedDate(null); 
                    setSelectedTime(null); 
                    setFormData({name: '', email: '', phone: '', service: '', message: '', notes: '', selectedService: null}); 
                    setIsSuccess(false); 
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Make Another Booking
                </button>
              </div>
            </div>
          );
        } else {
          // This case should ideally not be reached if step 4 is only for success.
          // Or, it could be a review step before submitting.
          // For simplicity, let's assume direct submission from step 3.
          return <div>Preparing your booking summary...</div>;
        }
      default:
        return null;
    }
  };

  return (
    <>
      <main>
        <section className="bg-gray-50 min-h-screen py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Empty space to push content down from navbar */}
            <div className="h-16"></div>
            
            {/* Hero Image Carousel */}
            <div className="mb-12 relative rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <div className="relative h-64 md:h-96 overflow-hidden">
                {heroImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={image} 
                      alt={`Biokinetics service ${index + 1}`} 
                      className={`w-full h-full object-cover ${index === 0 || index === 3 ? 'object-center' : 'object-center'}`}
                      style={index === 0 || index === 3 ? { objectPosition: 'center -180px' } : {}}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    
                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                        Expert Biokinetic Care
                      </h2>
                      <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
                        Personalized treatment plans for your unique needs
                      </p>
                    </div>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    onClick={prevImage}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 hover:text-gray-900 focus:outline-none transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 hover:text-gray-900 focus:outline-none transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {heroImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex md:flex-col"
            >
              {/* Progress Bar */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  {steps.map((s, index) => (
                    <div key={s.id} className="flex items-center w-full">
                      <div
                        className={`flex flex-col items-center ${
                          step >= s.id ? 'text-primary-600' : 'text-gray-400'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            step >= s.id
                              ? 'bg-primary-600 border-primary-600 text-white'
                              : 'border-gray-300 bg-gray-100'
                          }`}
                        >
                          {s.icon}
                        </div>
                        <p
                          className={`mt-2 text-xs font-semibold ${
                            step >= s.id ? 'text-primary-600' : 'text-gray-500'
                          }`}
                        >
                          {s.title}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step > s.id + 0.5 ? 'bg-primary-500' : 'bg-gray-300'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div> {/* Closing progress bar container */}
              
              {/* Stepper Navigation */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between w-full">
                  {/* Content for stepper navigation if needed */}
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
                {renderStepContent()}
              </div>
              
            </motion.div> {/* Closing the motion.div */}
          </div> {/* Closing the container div */}
        </section>

        {/* Contact Info with Image */}
        {step !== 4 && (
          <section className="relative py-16 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5" style={{
                backgroundImage: `url('/images/nkechi_logo.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scale(1.2)'
              }}></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Assistance?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  I am here to help you with any questions or to schedule an appointment over the phone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPhone className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+27 67 679 1066</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEnvelope className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">aniamankechi@gmail.com</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaMapMarkerAlt className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">7584+GF, Philip Nel Park, Pretoria,<br />Gauteng, 0029<br />South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Booking;

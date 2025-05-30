import React, { useState } from 'react';
import type { ReactElement } from 'react';
import { FaUserMd, FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaInfoCircle, FaUser } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Removed: import type { Step } from 'framer-motion';
type Step = {
  id: number;
  title: string;
  icon: React.ReactNode;
};



interface Service {
  id: string;
  name: string;
  icon: ReactElement; 
  description: string;
  duration: number; 

}

const services: Service[] = [
  {
    id: 'biokinetics',
    name: 'Biokinetics',
    icon: <FaUserMd />,
    description: 'Personal biokinetics consultations and exercise therapy with Nkechi, a 4th-year Biokinetics student at TUT',
    duration: 60,
  },
  {
    id: 'injury-rehab',
    name: 'Injury Rehabilitation',
    icon: <FaUserMd />,
    description: 'Guided injury rehabilitation and recovery sessions, based on my academic and practical training.',
    duration: 60,
  },
  {
    id: 'chronic-pain',
    name: 'Chronic Pain Management',
    icon: <FaUserMd />,
    description: 'Comprehensive treatment plans for managing chronic pain conditions.',
    duration: 45,
  },
  {
    id: 'consultation',
    name: 'Consultation',
    icon: <FaCalendarAlt />,
    description: 'Initial consultation and assessment to understand your needs and create a personalized treatment plan.',
    duration: 30,
  },
  {
    id: 'sports-performance',
    name: 'Sports Performance',
    icon: <FaUserMd />,
    description: 'Enhance your athletic performance with tailored exercise programs.',
    duration: 75,
  },
  {
    id: 'post-surgical',
    name: 'Post-Surgical Rehab',
    icon: <FaUserMd />,
    description: 'Guided rehabilitation programs to restore function after surgery.',
    duration: 60,
  },
  {
    id: 'senior-wellness',
    name: 'Senior Wellness',
    icon: <FaUserMd />,
    description: 'Specialized programs to maintain mobility, strength, and independence.',
    duration: 45,
  }
];

const timeSlots: string[] = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  selectedService: Service | null;
  date: string;
  time: string;
  message: string;
}

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
  const heroImages = [
    '/images/nkechi1.jpg',
    '/images/nkechi2.png',
    '/images/nkechi3.jpg',
    '/images/nkechi4.jpg'
  ];

  // Stepper UI function
  const renderStepper = () => (
    <div className="flex items-center justify-center mb-10">
      {steps.map((stepObj, idx) => (
        <div key={stepObj.id} className="flex items-center">
          <div className={`flex flex-col items-center transition-colors duration-300 ${step === stepObj.id ? 'text-primary-600 font-semibold' : 'text-gray-400'}`}>
            <span className={`rounded-full p-2 border-2 ${step === stepObj.id ? 'border-primary-600 bg-primary-50' : 'border-gray-300 bg-white'}`}>{stepObj.icon}</span>
            <span className="text-xs mt-2 text-center w-20">{stepObj.title}</span>
          </div>
          {idx !== steps.length - 1 && (
            <span className="mx-2 h-1 w-8 bg-gray-200 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    notes: '',
    selectedService: null,
    date: '',
    time: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const prevImage = () => {
    setCurrentImageIndex((prev: number) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev: number) => (prev === heroImages.length - 1 ? 0 : prev + 1));
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
    setError(null);

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setIsSuccess(true);
      // Scroll to the success banner for accessibility
      setTimeout(() => {
        const el = document.getElementById('booking-success-banner');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    const currentService = services.find(s => s.id === formData.service);

    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Step 1: Select a Service</h3>
            <p className="text-gray-600 mb-4">Please choose the service you'd like to book:</p>
            <div className="space-y-3 mb-6">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className={`w-full text-left p-4 border rounded-lg transition-colors ${
                    formData.service === service.id 
                      ? 'bg-primary-100 border-primary-500 ring-2 ring-primary-500' 
                      : 'bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900">{service.name}</div>
                  <div className="text-sm text-gray-500">{service.description}</div>
                  <div className="text-sm text-gray-700 mt-1">Duration: {service.duration} mins</div>
                </button>
              ))}
            </div>
            {formData.service && (
                <button
                    onClick={() => setStep(2)}
                    className="w-full mt-4 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    Next: Select Date & Time
                </button>
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Step 2: Select Date & Time</h3>
            <p className="text-gray-600 mb-4">Choose your preferred date and time slot:</p>
            {/* React Calendar and time slot UI will be implemented here. */}
            <div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
<Calendar
  value={selectedDate}
  onChange={(value: Date | [Date | null, Date | null] | null) => {
    // Handle both single date and date range (tuple)
    const date = Array.isArray(value) ? value && value[0] : value;
    if (date instanceof Date) {
      setSelectedDate(date);
      setFormData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }));
    } else {
      setSelectedDate(null);
      setFormData(prev => ({ ...prev, date: '' }));
    }
    setSelectedTime(null); // Reset time when date changes
    setFormData(prev => ({ ...prev, time: '' }));
  }}
  minDate={new Date()}
  className="mx-auto rounded-lg shadow border"
/>
</div>
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Slot</label>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
    {timeSlots.map(slot => (
      <button
        key={slot}
        type="button"
        className={`px-3 py-2 rounded border text-sm font-medium transition-colors ${selectedTime === slot ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-primary-50'}`}
        onClick={() => {
          setSelectedTime(slot);
          setFormData(prev => ({ ...prev, time: slot }));
        }}
      >
        {slot}
      </button>
    ))}
  </div>
</div>
<div className="flex justify-between pt-4">
  <button
    type="button"
    onClick={() => setStep(1)}
    className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    Back
  </button>
  <button
    type="button"
    onClick={() => {
      if (selectedDate && selectedTime) {
        setFormData(prev => ({ ...prev, date: selectedDate.toISOString().split('T')[0], time: selectedTime }));
        setStep(3);
      }
    }}
    className={`px-6 py-3 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${selectedDate && selectedTime ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
    disabled={!selectedDate || !selectedTime}
  >
    Next: Confirm Details
  </button>
</div>
          </div>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Step 3: Confirm Your Details</h3>
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="text-lg font-medium text-gray-700 mb-2">Booking Summary:</h4>
              {currentService ? (
                <>
                  <p className="text-gray-600"><strong>Service:</strong> {currentService.name}</p>
                </>
              ) : <p className="text-gray-600">Service not selected.</p>}
              {selectedDate ? (
                <p className="text-gray-600"><strong>Date:</strong> {selectedDate.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              ) : <p className="text-gray-600">Date not selected.</p>}
              {selectedTime ? (
                <p className="text-gray-600"><strong>Time:</strong> {selectedTime}</p>
              ) : <p className="text-gray-600">Time not selected.</p>}
            </div>

            {error && (
              <div className="mb-4 p-3 rounded bg-red-100 border border-red-400 text-red-700 text-center">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" />
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
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>

            <div className="flex justify-between pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </div>
          </form>
        );
      case 4:
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
              <FaCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for booking with Nkechi Biokinetics. Your appointment has been confirmed for{' '}
              <span className="font-medium text-gray-700">
                {selectedDate?.toLocaleDateString('en-ZA', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                at {selectedTime}
              </span>
              .
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to{' '}
              <span className="font-medium text-gray-700">{formData.email}</span>. Please check your inbox for details.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: '', email: '', phone: '', service: '', notes: '', selectedService: null, date: '', time: '', message: '' });
                  setIsSuccess(false);
                }}
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        );
      default:
        console.warn(`Unknown step: ${step}`);
        return <div className="text-red-500 p-4 text-center">Error: Unknown step encountered. Please try refreshing.</div>;
    }
  };

  return (
    <React.Fragment>
      {/* Main Booking Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Decorative background elements if desired */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {step !== 4 && (
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Expert Biokinetic Care
              </h2>
              <p className="text-lg text-gray-600">
                Book your appointment in a few easy steps.
              </p>
            </div>
          )}

          {/* Image Carousel - only shown if not on success step */}
          {step !== 4 && heroImages.length > 0 && (
            <div className="max-w-3xl mx-auto mb-12 rounded-lg shadow-2xl overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Nkechi Biokinetics ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      objectPosition: (index === 0 || index === 3) ? 'center -100px' : 'center',
                    }}
                  />
                ))}
                {heroImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {heroImages.map((_, index) => (
                        <button
                          key={`dot-${index}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-primary-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Booking Steps or Success Message */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
            {/* Success banner for successful submission (not on step 4) */}
            {isSuccess && step !== 4 && (
              <div id="booking-success-banner" className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 shadow">
                <FaCheckCircle className="w-6 h-6 text-green-600" />
                <span>Booking successful! Please review your confirmation below.</span>
              </div>
            )}
            {renderStepper()}
            {renderStepContent()}
          </div>
        </div>
      </section>

      {/* "Need Assistance?" Section - always shown */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Need Assistance?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <FaEnvelope className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 hover:text-primary-600 transition-colors">
                  <a href="mailto:aniamankechi@gmail.com">aniamankechi@gmail.com</a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <FaMapMarkerAlt className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">7584+GF, Philip Nel Park, Pretoria,<br />Gauteng, 0029, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Booking;

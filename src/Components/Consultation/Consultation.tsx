import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faClock, 
  faCheckCircle, 
  faMobile, 
  faLaptop, 
  faCloud, 
  faRobot, 
  faUser, 
  faPhone, 
  faEnvelope, 
  faComment,
  faChevronLeft,
  faChevronRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './consultation.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

// Interfaces
interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

// Constants
const SERVICES: Service[] = [
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android platforms.',
    icon: <FontAwesomeIcon icon={faMobile} />
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Responsive websites and web applications for modern businesses.',
    icon: <FontAwesomeIcon icon={faLaptop} />
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    description: 'Scalable cloud solutions and infrastructure management.',
    icon: <FontAwesomeIcon icon={faCloud} />
  },
  {
    id: 'ai-ml',
    name: 'AI & ML',
    description: 'Artificial intelligence and machine learning solutions.',
    icon: <FontAwesomeIcon icon={faRobot} />
  }
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Consultation = () => {
  // States
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step tracking
  const [currentStep, setCurrentStep] = useState(1);

  // Effects
  useEffect(() => {
    generateCalendarDays();
  }, [currentDate]);

  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots();
    }
  }, [selectedDate]);

  // Functions
  const generateCalendarDays = () => {
    const days: Date[] = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    const startingDayOfWeek = firstDay.getDay();
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    
    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }
    
    // Add current month's days
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add next month's days to complete the grid (6 rows x 7 days)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    setCalendarDays(days);
  };

  const generateTimeSlots = () => {
    // Generate time slots from 9:00 AM to 5:00 PM with 30-minute intervals
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      // Add full hour slot
      slots.push({
        id: `${hour}:00`,
        time: `${hour}:00`,
        available: Math.random() > 0.3 // Random availability for demo
      });
      
      // Add half hour slot
      slots.push({
        id: `${hour}:30`,
        time: `${hour}:30`,
        available: Math.random() > 0.3 // Random availability for demo
      });
    }
    
    setTimeSlots(slots);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handleDateClick = (date: Date) => {
    // Cannot select Sundays
    if (date.getDay() === 0) return;
    
    // Cannot select past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return;
    
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setCurrentStep(2);
  };

  const handleTimeSlotClick = (slot: TimeSlot) => {
    if (!slot.available) return;
    
    setSelectedTimeSlot(slot);
    setCurrentStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Format the date and time for API
      const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
      const [hours, minutes] = selectedTimeSlot ? selectedTimeSlot.time.split(':') : ['0', '0'];
      
      // API payload
      const payload = {
        service: selectedService?.name,
        date: formattedDate,
        time: selectedTimeSlot?.time,
        duration: 30, // 30 minutes
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        organizer: {
          name: "ib mughal",
          email: "devib011@gmail.com"
        }
      };
      
      // Make API call
      const response = await fetch('https://api.whispercrm.io/add/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      
      // Reset form and show success message
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your consultation request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetConsultation = () => {
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setFormErrors({});
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  // Render functions
  const renderServiceSelection = () => {
    return (
      <div className={`consultation-step ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
        <div className="step-header">
          <h2>
            <span className="step-number">1</span>
            Select Service
          </h2>
          {currentStep > 1 && (
            <button 
              className="change-selection" 
              onClick={() => setCurrentStep(1)}
            >
              Change
            </button>
          )}
        </div>
        
        {currentStep === 1 ? (
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => {
                  setSelectedService(service);
                  setCurrentStep(2);
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="selected-service">
            <FontAwesomeIcon icon={faCheckCircle} className="selection-icon" />
            <div>
              <strong>{selectedService?.name}</strong>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCalendar = () => {
    if (currentStep < 2) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return (
      <div className={`consultation-step ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
        <div className="step-header">
          <h2>
            <span className="step-number">2</span>
            Select Date & Time
          </h2>
          {currentStep > 2 && (
            <button 
              className="change-selection" 
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          )}
        </div>
        
        {currentStep === 2 ? (
          <>
            <div className="calendar-container">
              <div className="calendar-header">
                <button className="month-nav" onClick={handlePrevMonth}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h3>
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button className="month-nav" onClick={handleNextMonth}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              
              <div className="calendar-weekdays">
                {WEEKDAYS.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              
              <div className="calendar-days">
                {calendarDays.map((date, index) => {
                  const isSameMonth = date.getMonth() === currentDate.getMonth();
                  const isToday = date.toDateString() === today.toDateString();
                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  const isSunday = date.getDay() === 0;
                  const isPastDate = date < today;
                  const isDisabled = isSunday || isPastDate;
                  
                  return (
                    <div
                      key={index}
                      className={`calendar-day
                        ${!isSameMonth ? 'other-month' : ''}
                        ${isToday ? 'today' : ''}
                        ${isSelected ? 'selected' : ''}
                        ${isDisabled ? 'disabled' : ''}
                      `}
                      onClick={() => !isDisabled && handleDateClick(date)}
                    >
                      {date.getDate()}
                    </div>
                  );
                })}
              </div>
              
              <div className="calendar-legend">
                <div className="legend-item">
                  <div className="legend-color today"></div>
                  <span>Today</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color selected"></div>
                  <span>Selected</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color disabled"></div>
                  <span>Unavailable</span>
                </div>
              </div>
            </div>
            
            {selectedDate && (
              <div className="time-slots-container">
                <h3>Available Time Slots for {selectedDate.toLocaleDateString()}</h3>
                <div className="time-slots-grid">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`time-slot ${!slot.available ? 'unavailable' : ''} ${selectedTimeSlot?.id === slot.id ? 'selected' : ''}`}
                      onClick={() => handleTimeSlotClick(slot)}
                    >
                      <FontAwesomeIcon icon={faClock} className="time-icon" />
                      <span>{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="selected-date">
            <FontAwesomeIcon icon={faCalendarAlt} className="selection-icon" />
            <div>
              <strong>
                {selectedDate?.toLocaleDateString()} at {selectedTimeSlot?.time}
              </strong>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderContactForm = () => {
    if (currentStep < 3) return null;
    
    return (
      <div className={`consultation-step ${currentStep === 3 ? 'active' : ''}`}>
        <div className="step-header">
          <h2>
            <span className="step-number">3</span>
            Complete Your Details
          </h2>
        </div>
        
        <div className="consultation-form-container">
          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="form-input-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="form-input-container">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="form-input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>
            </div>
            
            <div className="form-group">
              <div className="form-icon">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div className="form-input-container">
                <textarea
                  name="message"
                  placeholder="Tell us about your project or requirements"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>
            </div>
            
            <div className="consultation-summary">
              <h3>Consultation Summary</h3>
              <div className="summary-item">
                <strong>Service:</strong> 
                <span>
                  <FontAwesomeIcon icon={selectedService?.id === 'mobile-app' ? faMobile : 
                                          selectedService?.id === 'web-dev' ? faLaptop : 
                                          selectedService?.id === 'cloud' ? faCloud : faRobot} className="detail-icon" />
                  {selectedService?.name}
                </span>
              </div>
              <div className="summary-item">
                <strong>Date:</strong> 
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
                  {selectedDate?.toLocaleDateString()}
                </span>
              </div>
              <div className="summary-item">
                <strong>Time:</strong> 
                <span>
                  <FontAwesomeIcon icon={faClock} className="detail-icon" />
                  {selectedTimeSlot?.time}
                </span>
              </div>
              <div className="summary-item">
                <strong>Duration:</strong> 
                <span>30 minutes</span>
              </div>
            </div>
            
            <button
              type="submit"
              className="consultation-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Consultation'}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderSuccessMessage = () => {
    if (!isSubmitted) return null;
    
    return (
      <div className="consultation-success">
        <div className="success-icon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <h2>Consultation Scheduled!</h2>
        <p>
          Your consultation has been successfully scheduled. We've sent a confirmation to your email.
        </p>
        
        <div className="success-details">
          <div className="success-item">
            <strong>Service:</strong> 
            <span>
              <FontAwesomeIcon icon={selectedService?.id === 'mobile-app' ? faMobile : 
                                      selectedService?.id === 'web-dev' ? faLaptop : 
                                      selectedService?.id === 'cloud' ? faCloud : faRobot} className="detail-icon" />
              {selectedService?.name}
            </span>
          </div>
          <div className="success-item">
            <strong>Date:</strong> 
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
              {selectedDate?.toLocaleDateString()}
            </span>
          </div>
          <div className="success-item">
            <strong>Time:</strong> 
            <span>
              <FontAwesomeIcon icon={faClock} className="detail-icon" />
              {selectedTimeSlot?.time}
            </span>
          </div>
          <div className="success-item">
            <strong>Duration:</strong> 
            <span>30 minutes</span>
          </div>
        </div>
        
        <p className="success-note">
          Your consultant will be in touch prior to the scheduled time with further details.
        </p>
        
        <button
          className="schedule-another-btn"
          onClick={resetConsultation}
        >
          Schedule Another Consultation
        </button>
      </div>
    );
  };

  return (
    <div className="consultation-page">
      <Navbar />
      
      <div className="consultation-hero">
        <div className="consultation-shape consultation-shape-1"></div>
        <div className="consultation-shape consultation-shape-2"></div>
        <div className="consultation-hero-content">
          <h1>Schedule a Consultation</h1>
          <p className="consultation-tagline">
            Book a free 30-minute consultation with our experts
          </p>
          <div className="consultation-divider"></div>
        </div>
      </div>
      
      <div className="consultation-main">
        <div className="container">
          {!isSubmitted ? (
            <div className="consultation-steps-container">
              {renderServiceSelection()}
              {renderCalendar()}
              {renderContactForm()}
            </div>
          ) : (
            renderSuccessMessage()
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Consultation;

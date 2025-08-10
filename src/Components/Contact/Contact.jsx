import { useState } from 'react';
import { Loader2, ArrowRight, X } from 'lucide-react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

// Main App component containing the entire contact form
export default function App() {
  return (
    <div data-aos="fade-up" className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col items-center justify-center p-4 sm:p-8 font-['Inter']">
      
      {/* Full screen heading + paragraph */}
      <div className="w-full max-w-full px-6 sm:px-12 mb-12">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 text-center">
          Let's talk about your next <br />
          <span className="text-neutral-500">project. We're here to help.</span>
        </h1>
        <p className="text-neutral-600 text-xl sm:text-2xl max-w-none text-center">
          Deliver personalized experiences to your customers <br />
          with AI-powered recommendation engines and <br />
          dynamic content generation.
        </p>
      </div>

      {/* Then the grid with image and form */}
      <div className="overflow-hidden max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left side with the image only on large screens */}
          <div className="hidden lg:block w-full h-140 bg-neutral-300 mt-15 rounded-2xl overflow-hidden">
            <img
              src="https://i.ibb.co.com/SDYBXJyf/man.png"
              alt="Man smiling"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side with the contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// Reusable component for the Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setToast({ show: true, message: 'Form submitted successfully!', type: 'success' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        message: '',
      });
      setTimeout(() => setToast({ ...toast, show: false }), 4000);
    }, 2000);
  };
  
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (name) => {
    setFocusedField(name);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="p-8 sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputGroup
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus('firstName')}
            onBlur={handleBlur}
            isFocused={focusedField === 'firstName'}
          />
          <InputGroup
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus('lastName')}
            onBlur={handleBlur}
            isFocused={focusedField === 'lastName'}
          />
        </div>

        <InputGroup
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
          isFocused={focusedField === 'email'}
        />

        <div className="grid grid-cols-3 gap-6">
          <div className="relative col-span-1">
            <select
              name="countryCode"
              className="w-full bg-neutral-200 text-neutral-600 px-4 py-3 rounded-xl focus:outline-none"
            >
              <option>+1</option>
              <option>+44</option>
              <option>+91</option>
            </select>
          </div>
          <div className="relative col-span-2">
            <InputGroup
              name="phone"
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              isFocused={focusedField === 'phone'}
            />
          </div>
        </div>

        <InputGroup
          name="jobTitle"
          label="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          onFocus={() => handleFocus('jobTitle')}
          onBlur={handleBlur}
          isFocused={focusedField === 'jobTitle'}
        />

        <div className="relative">
          <label
            className={`absolute left-4 transition-all duration-200 ease-in-out text-neutral-600 ${
              formData.message || focusedField === 'message'
                ? 'top-2 text-xs'
                : 'top-1/2 -translate-y-1/2'
            }`}
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            rows="4"
            className={`w-full p-4 pt-6 rounded-xl bg-neutral-200 text-neutral-900 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 ${
              focusedField === 'message'
                ? 'shadow-lg shadow-emerald-400/30'
                : ''
            }`}
          />
        </div>
        
       <button
  type="submit"
  disabled={loading}
  className="w-full flex items-center justify-center gap-2 bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:bg-neutral-400 disabled:cursor-not-allowed"
>
  {loading ? (
    <>
      <Loader2 className="animate-spin" />
      <span>Submitting...</span>
    </>
  ) : (
    <>
      <span>Submit</span>
      <BsArrowUpRightCircleFill size={20} />
    </>
  )}
</button>
      </form>
      
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-4 rounded-xl text-white shadow-lg transition-all duration-300 ${
          toast.show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } ${toast.type === 'success' ? 'bg-teal-500' : 'bg-red-500'}`}
      >
        <span>{toast.message}</span>
        <button
          onClick={() => setToast({ ...toast, show: false })}
          className="ml-4 text-white"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

// Reusable component for a single input group with floating label and animations
const InputGroup = ({ name, label, value, onChange, onFocus, onBlur, isFocused, type = 'text' }) => {
  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 ease-in-out text-neutral-600 ${
          value || isFocused
            ? 'top-2 text-xs'
            : 'top-1/2 -translate-y-1/2'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full p-4 pt-6 rounded-xl bg-neutral-200 text-neutral-900 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 ${
          isFocused
            ? 'shadow-lg shadow-emerald-400/30'
            : ''
        }`}
      />
    </div>
  );
};

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TypeWriter from '@/components/TypeWriter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    type: null as 'success' | 'error' | null,
    message: ''
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }
    
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-8 gradient-text text-center">Contact Us</h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Let's discuss how we can help with your next project
        </p>
      </motion.div>

      <div className="max-w-lg mx-auto feature-card hover:-translate-y-1 transition-all duration-150">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#323232] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-[#2a2d2e] text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#323232] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-[#2a2d2e] text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-[#323232] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-[#2a2d2e] text-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-150 disabled:bg-gray-600 font-semibold"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`mt-4 p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-900/50 text-green-300 border border-green-700' 
                : 'bg-red-900/50 text-red-300 border border-red-700'
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <TypeWriter 
          text="We look forward to hearing from you!"
          speed={75}
          className="text-gray-300 text-lg"
        />
      </motion.div>
    </div>
  );
}

import React, { useState } from 'react';

const NewsletterSubscribe = () => {
 const [email, setEmail] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send the email to your newsletter service
    console.log(`Subscribed: ${email}`);
    setEmail(''); // Clear the input field
 };

 return (
    <div className="bg-white text-gray-800 p-24 rounded-lg shadow-lg flex flex-col justify-center items-center font-anta">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Stay updated with the latest news, tips, and resources for developers.</p>
      <form onSubmit={handleSubmit} className="flex w-2/5">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="px-8 py-2 bg-gray-800 text-white rounded-r-lg border-2 border-gray-300 hover:bg-gray-700 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
 );
};

export default NewsletterSubscribe;

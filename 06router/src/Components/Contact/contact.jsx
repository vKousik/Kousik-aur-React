import React from 'react';

export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
            <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden p-8 transform transition-all duration-500 hover:scale-105">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Description */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-4xl font-bold text-grey-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-700">contact@example.com</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-700">+1 (123) 456-7890</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-700">123 Main St, City, Country</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-2 p-3 w-full border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-2 p-3 w-full border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="mt-2 p-3 w-full border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
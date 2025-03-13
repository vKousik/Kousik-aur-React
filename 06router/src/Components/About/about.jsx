import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen pt-32 px-6 lg:px-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">About Us</h1>
        <p className="text-lg leading-relaxed mb-12">
          We are dedicated to delivering innovative solutions that empower businesses and individuals. Our mission is to
          provide high-quality services that drive progress and create value for our clients worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 border rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">To shape the future through innovative technology and exceptional user experiences.</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">To provide cutting-edge solutions that inspire and enhance everyday life.</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600">Innovation, Integrity, and Customer-Centric Excellence.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Our Partners</h2>
          <div className="flex justify-center gap-12">
            <div className="h-16 w-16 hover:scale-110 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-full h-full" />
            </div>
            <div className="h-16 w-16 hover:scale-110 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" className="w-full h-full" />
            </div>
            <div className="h-16 w-16 hover:scale-110 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

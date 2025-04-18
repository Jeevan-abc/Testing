import React from 'react'

const page = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyLanding</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Build Better, Faster, Together</h2>
          <p className="mb-8 text-lg">A modern solution to streamline your workflow and grow your business.</p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Awesome Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Fast Performance</h4>
              <p>Experience lightning-fast load times and top-notch performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-2">Secure by Default</h4>
              <p>Your data is safe with built-in security best practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-semibold mb-2">Easy Integration</h4>
              <p>Connect easily with your favorite tools and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} MyLanding. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default page
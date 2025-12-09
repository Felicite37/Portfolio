// components/ContactSection.tsx
"use client";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's discuss</p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-yellow-500/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-lg font-medium text-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg">Email</div>
                <div className="text-gray-300">feliciteniyo24@gmail.com</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg">Phone number</div>
                <div className="text-gray-300">0784834324</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg">Available</div>
                <div className="text-gray-300">For New Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

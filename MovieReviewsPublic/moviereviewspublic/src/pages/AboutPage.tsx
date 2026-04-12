export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        About Fresh Picks
      </h1>
      <p className="text-gray-500 text-lg mb-10 max-w-2xl">
        We bring together trusted critic perspectives to help you decide what to
        watch next.
      </p>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-navy mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Fresh Picks was created to be a reliable, easy-to-use platform where
          movie enthusiasts can discover new films and read professional critic
          reviews. We believe that thoughtful, honest criticism helps audiences
          make better choices and deepens their appreciation of cinema.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-navy mb-3">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
              1
            </div>
            <h3 className="font-semibold text-navy mb-1">Discover</h3>
            <p className="text-gray-500 text-sm">
              Browse featured and recently added movies across all genres.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-orange text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
              2
            </div>
            <h3 className="font-semibold text-navy mb-1">Read Reviews</h3>
            <p className="text-gray-500 text-sm">
              Check out what verified critics have to say about each film.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg mb-3">
              3
            </div>
            <h3 className="font-semibold text-navy mb-1">Decide</h3>
            <p className="text-gray-500 text-sm">
              Pick a film with confidence, backed by scores and reviews you
              trust.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold text-navy mb-3">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have a question or suggestion? Drop us a line.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
        >
          <input
            type="text"
            placeholder="Name"
            className="border border-light-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-light-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <textarea
            placeholder="Your message..."
            rows={4}
            className="sm:col-span-2 border border-light-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal resize-none"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-teal hover:bg-teal/90 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

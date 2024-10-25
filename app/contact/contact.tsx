import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Feel free to reach out to us for any inquiries or collaborations.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default ContactUs;

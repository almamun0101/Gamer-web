import React from "react";

const Contact = () => {
  return (
    <div className=" text-black min-h-screen">
      

      <main className="container mx-auto py-10 px-4">
        <section className=" p-6 rounded-lg ">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">Have any questions? Reach out to us for support on game downloads and purchases.</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Our Contact Details</h3>
            <p>Email: <a href="mailto:support@gamerzone.com" className="text-blue-400">support@gamerzone.com</a></p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Gaming Street, GameCity, USA</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
          <form action="submit_contact.php" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">Name:</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-600 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Email:</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-600 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">Message:</label>
              <textarea id="message" name="message" rows="5" required className="w-full p-2 border border-gray-600 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </section>
      </main>

    </div>
  );
};

export default Contact;

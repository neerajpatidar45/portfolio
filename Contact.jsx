import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields!");
      return;
    }
    //console.log("Form submitted:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-10 flex flex-col items-center bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className="mb-10 text-center">
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaPhone /> +91 8640085730
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaEnvelope /> np3618530@gamil.com
        </p>

        <div className="flex gap-6 mt-4 justify-center text-2xl">
          <a href="https://github.com/neerajpatidar45" target="_blank" rel="noreferrer" className="hover:text-gray-700">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-patidar-773989291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 shadow-lg rounded-lg"
      >
        <input
          type="text" name="name" placeholder="Your Name" value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email" name="email" placeholder="Your Email" value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <textarea
          name="message" placeholder="Your Message" rows="4" value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
};

export default Contact;

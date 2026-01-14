import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.subject || !formData.message) {
      alert('All fields are required');
      return;
    }

    console.log(formData);

    setFormData({
      name: '',
      subject: '',
      message: '',
    });

    alert('Message sent!');
  };

  return (
    <div className="my-8 flex flex-col items-center justify-center px-4 py-10 md:my-20">
      <h2 className="font-tooltip text-neutral-8 mb-10 text-center text-4xl font-medium">
        Contact Me
      </h2>
      <div className="w-full max-w-md rounded-xl bg-black/5 p-6 shadow-md dark:bg-white/5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              placeholder="Name here"
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange(e)}
              placeholder="Regarding collaboration"
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              placeholder="Write your message here..."
              rows={4}
              className="border-neutral-6/50 placeholder:text-neutral-6/60 text-neutral-6 focus:ring-neutral-6 w-full resize-none rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-neutral-8 font-tooltip w-full rounded-md py-2 text-sm font-semibold text-white transition focus:outline-none dark:text-black"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Map your form data to the template variables
    const templateParams = {
      full_name: formData.from_name, // matches your template
      from_name: formData.from_name,
      reply_to: formData.reply_to,
      subject: formData.subject,
      message: formData.message,
      title: 'Contact Me', // static value
      name: 'Portfolio', // static value
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Message sent!');
      setFormData({
        from_name: '',
        reply_to: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <div className="my-8 flex flex-col items-center justify-center px-4 py-10 md:my-10">
      <h2 className="font-tooltip text-neutral-8 mb-10 text-center text-4xl font-medium">
        Contact Me
      </h2>

      <div className="w-full max-w-md rounded-xl bg-black/5 p-6 shadow-md dark:bg-white/5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Name here"
              required
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Regarding collaboration"
              required
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              required
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

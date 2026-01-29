import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { toast } from 'sonner';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Contact Zod Schema
const contactSchema = z.object({
  from_name: z.string().min(3, 'Name must be at least 3 characters'),
  reply_to: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* --------- Validate using Zod --------- */
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};

      const flattened = result.error.flatten().fieldErrors;

      (Object.keys(flattened) as (keyof ContactFormData)[]).forEach((key) => {
        const message = flattened[key]?.[0];
        if (message) {
          fieldErrors[key] = message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    // Log validated data after success
    // console.log("Validated data:", result.data);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          subject: formData.subject,
          message: formData.message,
        }
      );

      toast.success('Message sent successfully!');

      setFormData({
        from_name: '',
        reply_to: '',
        subject: '',
        message: '',
      });
      setErrors({});
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

      <div className="ring-neutral-8/20 w-full max-w-md rounded-xl bg-neutral-50 p-6 shadow-md ring-1 dark:bg-white/5">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm">Your Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Name here"
              required
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
            {errors.from_name && <p className="mt-1 text-xs text-red-500">{errors.from_name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm">Your Email</label>
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
            {errors.reply_to && <p className="mt-1 text-xs text-red-500">{errors.reply_to}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="text-neutral-6 mb-1.5 block text-sm">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border-neutral-6/50 placeholder:text-neutral-6/60 focus:ring-neutral-6 text-neutral-6 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus:outline-none resize-none"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-neutral-8 font-tooltip w-full rounded-md py-2 text-sm font-medium text-white transition focus:outline-none dark:text-black"> Send a Message </button>
        </form>
      </div>
    </div>
  );
}

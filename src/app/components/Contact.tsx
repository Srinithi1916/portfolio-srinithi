import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Code,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL ?? "srinithisrinithi09@gmail.com";
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

type SubmitStatus = "idle" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        "",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const sendMessageWithEmailJs = async () => {
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      throw new Error(
        "EmailJS is not configured. Add the VITE_EMAILJS_* values in .env and restart the app."
      );
    }

    const response = await fetch(emailJsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contactEmail,
        },
      }),
    });

    const responseText = (await response.text()).trim();

    if (!response.ok) {
      throw new Error(
        responseText || `EmailJS request failed with status ${response.status}.`
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFeedbackMessage("");

    try {
      await sendMessageWithEmailJs();
      setSubmitStatus("success");
      setFeedbackMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => {
        setSubmitStatus("idle");
        setFeedbackMessage("");
      }, 5000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      console.error("Email send failed:", error);
      setSubmitStatus("error");
      setFeedbackMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: contactEmail,
      link: `mailto:${contactEmail}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7904049837",
      link: "tel:+917904049837",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Coimbatore, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/srinithi-t-a",
      color: "hover:text-blue-400",
    },
    {
      icon: Code,
      label: "LeetCode",
      link: "https://leetcode.com/u/srinithisrinithi09/",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6">
            Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6">Contact Information</h3>
              <p className="text-gray-400 text-lg mb-8">
                Feel free to reach out to me for any opportunities,
                collaborations, or just to say hello!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <info.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.title}</p>
                    <p className="text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
            >
              <h4 className="text-2xl mb-4">Available for Work</h4>
              <p className="opacity-90 mb-6">
                Currently open to full-time opportunities and interesting
                projects in full-stack development, DevOps, and AI.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-700/50"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  placeholder="Project Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-white placeholder-gray-500"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>

              <button
                type="button"
                onClick={openMailClient}
                className="w-full text-sm text-blue-300 hover:text-blue-200 transition-colors"
              >
                Open email app instead
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 text-sm text-green-500 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  {feedbackMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 text-sm text-red-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle size={16} />
                    <span>{feedbackMessage}</span>
                  </div>
                  <p className="text-red-300">
                    If the EmailJS message keeps failing, use the direct email
                    option above while we verify the EmailJS dashboard settings.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-gray-500 border-t border-gray-800 pt-8"
        >
          <p>
            &copy; 2025 Srinithi T A. All rights reserved. Built with React and
            Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Modal = ({ isOpen, onClose, title, message, type }) => {
  if (!isOpen) return null;

  const getEmoji = () => {
    switch (type) {
      case "success":
        return "🎉";
      case "error":
        return "😔";
      case "warning":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="bg-tertiary p-8 rounded-2xl shadow-xl max-w-md w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className={`${getBgColor()} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-4xl">{getEmoji()}</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 mb-6">{message}</p>
            <button
              onClick={onClose}
              className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "",
  });

  // Input validation
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (form.name.length > 50) {
      newErrors.name = "Name must not exceed 50 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (form.message.length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input sanitization
  const sanitizeInput = (input) => {
    return input
      .replace(/[<>]/g, "") // Remove < and > characters
      .replace(/javascript:/gi, "") // Remove javascript: protocol
      .replace(/on\w+=/gi, "") // Remove event handlers
      .trim();
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: sanitizeInput(value),
    });
  };

  // Cooldown timer
  useEffect(() => {
    let timer;
    if (cooldown && cooldownTime > 0) {
      timer = setInterval(() => {
        setCooldownTime((prev) => prev - 1);
      }, 1000);
    } else if (cooldownTime === 0) {
      setCooldown(false);
    }
    return () => clearInterval(timer);
  }, [cooldown, cooldownTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check cooldown
    if (cooldown) {
      setModal({
        isOpen: true,
        title: "Please Wait",
        message: `Please wait ${cooldownTime} seconds before trying again`,
        type: "warning",
      });
      return;
    }

    // Form validation
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setAttempts((prev) => prev + 1);

    try {
      await emailjs.send(
        "service_yxiocj3",
        "template_lz26pse",
        {
          from_name: form.name,
          to_name: "Alfeus Martinus",
          from_email: form.email,
          to_email: "feusmartinus@gmail.com",
          message: form.message,
        },
        "p2JaddLvc2mJyJx1f"
      );

      setLoading(false);
      setModal({
        isOpen: true,
        title: "Message Sent!",
        message: "Thank you. I will get back to you as soon as possible.",
        type: "success",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      setLoading(false);
      
      // Rate limiting implementation
      if (attempts >= 3) {
        setCooldown(true);
        setCooldownTime(300); // 5 minutes cooldown
        setModal({
          isOpen: true,
          title: "Too Many Attempts",
          message: "Please wait 5 minutes before trying again",
          type: "error",
        });
      } else {
        setModal({
          isOpen: true,
          title: "Oops!",
          message: "Sorry, something went wrong. Please try again.",
          type: "error",
        });
      }
    }
  };

  return (
    <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <h3 className={styles.sectionHeadText}>Contact Me📭</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4 select-none">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder=""
            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
              errors.name ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4 select-none">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder=""
            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4 select-none">
            Message
          </span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder=""
            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none ${
              errors.message ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={loading || cooldown}
          className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary select-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 ${
            (loading || cooldown) ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-100 hover:text-black"
          }`}
        >
          {loading ? "Sending..." : cooldown ? `Wait ${cooldownTime}s` : "Send"}
        </button>
      </form>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

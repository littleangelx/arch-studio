"use client";

import { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    validateForm();
    if (isFormValid) {
      alert(
        "Form submitted successfully. We will get back to you as soon as possible"
      );
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setIsFormValid(false);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="relative flex flex-col xl:w-full">
      <div className="">
        <input
          type="text"
          value={name}
          className="w-full h-11 border-b border-b-dark-blue px-8 mt-10 xl:mt-0 placeholder:text-light-grey placeholder:text-xl placeholder:font-bold"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-sm text-red">{errors.name}</p>}
      </div>

      <div className="">
        <input
          type="email"
          value={email}
          className="w-full h-11 border-b border-b-dark-blue px-8 mt-10 placeholder:text-light-grey placeholder:text-xl placeholder:font-bold"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-sm text-red">{errors.email}</p>}
      </div>

      <textarea
        value={message}
        className="w-full h-32 border-b border-b-dark-blue px-8 pb-0 mt-10 placeholder:text-light-grey placeholder:text-xl placeholder:font-bold resize-none mb-0"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />

      <img
        src="/assets/arrow-button.png"
        className="w-20 h-20 self-end m-0 p-0"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ContactForm;

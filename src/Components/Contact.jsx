/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ipyj85c",
        "template_pzaln2s",

        {
          from_name: form.name,
          to_name: "Archit Kulshrestha",
          from_email: form.email,
          to_email: "archit499kul@gmail.com",
          message: form.message,
        },
        "s9ONT6lFbL_3bS2Vl"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(" Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <section className=" flex xl:flex-row flex-col-reverse gap-10 overflow-hidden sm:w-[60%]">
        <div className="flex-[0.75] bg-background-900/70 backdrop-blur-md py-4 p-2 sm:p-6 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h1 className={styles.sectionHeadText}>Contact.</h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-secondary-600 py-3 px-8 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Contact, "Contact");

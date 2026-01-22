import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // Tracks 'success' or 'error'
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null); // Clear previous status messages

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Success logic
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      
      // Hide error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="ຕິດຕໍ່ສອບຖາມ – ຫາພວກເຮົາ"
          sub="💬 ມີຄຳຖາມ ຫຼື ແນວຄວາມຄິດບໍ? ມາລົມກັນໄດ້ເລີຍ! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 relative">
              
              {/* --- STATUS NOTIFICATIONS --- */}
              {status === "success" && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce z-10">
                  ✅ ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ!
                </div>
              )}
              
              {status === "error" && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  ❌ ເກີດຂໍ້ຜິດພາດ! ກະລຸນາລອງໃໝ່.
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white font-medium">ຊື່ຂອງທ່ານ</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="ຂຽນຊື່ຂອງທ່ານ"
                    required
                    className="input-field" // Assuming you have an input-field class in your CSS
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white font-medium">ອີເມວຂອງທ່ານ</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ຂຽນອີເມວຂອງທ່ານ"
                    required
                    className="input-field"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white font-medium">ຂໍ້ຄວາມຂອງທ່ານ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="ພວກເຮົາສາມາດຊ່ວຍທ່ານຫຍັງໄດ້ບໍ?"
                    rows="5"
                    required
                    className="input-field resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={loading} className="outline-none border-none">
                  <div className="cta-button group transition-all duration-300">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "ກຳລັງສົ່ງ..." : status === "success" ? "ສົ່ງແລ້ວ!" : "ສົ່ງຂໍ້ຄວາມ"}
                    </p>
                    <div className="arrow-wrapper">
                      <img 
                        src="/images/arrow-down.svg" 
                        alt="arrow" 
                        className={loading ? "animate-pulse" : ""}
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model / Experience Sidebar */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
"use client";
import { motion } from "framer-motion";
import ClientMessageForm from "../../client-message-form";
import Container from "../../container";
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex scroll-mt-[120px] flex-col items-center justify-center overflow-hidden bg-slate-50 py-24 pt-32 lg:scroll-mt-[160px] lg:pt-40"
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-transparent via-[#124D9B] to-transparent opacity-20" />
      <Container className="flex flex-col items-center">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-5xl font-black uppercase tracking-tighter text-blue-700 lg:text-6xl">
              Contact Us
            </h2>
            <p className="mx-auto max-w-lg text-lg text-slate-500">
              Have questions about Pangasinan&apos;s heritage sites? Message us
              and we&apos;ll get back to you shortly.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_30px_60px_-15px_rgba(18,77,155,0.1)] md:p-14"
        >
          <ClientMessageForm />
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
